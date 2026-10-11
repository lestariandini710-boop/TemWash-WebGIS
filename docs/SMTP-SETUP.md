# SMTP sendiri untuk email Supabase Auth

Dokumen ini menjelaskan mengapa alur "lupa kata sandi" bisa berhenti dengan pesan
"Permintaan email terlalu sering", dan apa yang perlu dipasang supaya tidak
terjadi lagi.

## Sebabnya: batas kirim tingkat project, bukan batas kirim ulang

Supabase membatasi **jumlah email yang dikirim Supabase Auth** per project:
**2 email per jam** dengan pengirim bawaan (built-in email provider). Batas ini
berlaku untuk **semua** endpoint yang mengirim email — konfirmasi pendaftaran,
atur ulang kata sandi, tautan ajaib, perubahan email. Batas ini bisa dinaikkan
hanya kalau project memakai SMTP sendiri atau Send Email hook.

Bukti dari project ini (11 Oktober 2026):

```
POST /auth/v1/recover  {"email":"andi@temwash.id"}
HTTP 429  {"code":429,"error_code":"over_email_send_rate_limit",
           "msg":"email rate limit exceeded"}
```

Pesan "email rate limit exceeded" adalah penanda batas **project**. Kalau yang
kena adalah batas **per alamat**, pesan server menyebut angka tunggu
("...you can only request this after X seconds"). Jadi ini bukan sekadar terlalu
sering menekan tombol untuk alamat yang sama.

Batas resmi Supabase Auth yang relevan:

| Operasi | Dibatasi oleh | Bawaan |
|---|---|---|
| Email dikirim Supabase Auth | Project | **2 email/jam** (pengirim bawaan) — bisa diatur bila memakai SMTP sendiri |
| Permintaan atur ulang kata sandi (`/auth/v1/recover`) | Per pengguna | 60 detik sebelum permintaan baru untuk akun yang sama |
| Permintaan konfirmasi pendaftaran (`/auth/v1/signup`) | Per pengguna | 60 detik |
| Pendaftaran/masuk, verifikasi, token | Alamat IP | 30 permintaan / 5 menit (150 untuk token) |

Konsekuensi praktis: dua kali pengujian alur email dalam satu jam sudah menghabiskan
kuota seluruh project. Karena itu pengujian manual berurutan (daftar → konfirmasi →
atur ulang) pasti berhenti di langkah berikutnya.

## Yang perlu dipasang: SMTP penyedia

Server ownmap.id **tidak bisa** mengirim email langsung ke internet (port 25
tertutup, wajar untuk VPS), jadi pengiriman wajib lewat penyedia relay.

Rekomendasi: **Resend** (3.000 email/bulan, 100/hari, gratis). Alternatif:
**Brevo** (300/hari) dan **SendGrid** (100/hari). Ketiganya punya SMTP.

### Langkah A — daftar dan tambahkan domain pengirim

1. Buat akun di penyedia, lalu **Domains → Add Domain**.
2. Pakai subdomain khusus, misal `send.ownmap.id`, bukan `ownmap.id` polos. Tujuannya
   memisahkan reputasi pengiriman otomatis dari domain utama yang dipakai untuk
   surel manusia. (Resend akan meminta pengaturan ini secara otomatis.)
3. Dashboard penyedia menampilkan 2–3 catatan DNS yang harus dipasang. Nilainya
   harus disalin **persis** (terutama DKIM yang panjang).

### Langkah B — pasang catatan DNS di Hetzner

Nameserver `ownmap.id` ada di Hetzner (`hydrogen.ns.hetzner.com`,
`oxygen.ns.hetzner.com`, `helium.ns.hetzner.de`), jadi catatan ditambahkan di
sana (dns.hetzner.com → zona `ownmap.id` → Add Record). Saat ini domain itu
belum punya SPF, DKIM, MX, maupun DMARC sama sekali.

Bentuk catatan yang diminta Resend untuk `send.ownmap.id`:

| Jenis | Nama | Isi |
|---|---|---|
| MX | `send` | `feedback-smtp.<wilayah>.amazonses.com` prioritas 10 |
| TXT | `send` | `v=spf1 include:amazonses.com ~all` |
| TXT | `resend._domainkey.send` | `p=MIGfMA0GCSqGSIb3…` (dari dashboard) |

Wilayah mengikuti yang tertulis di dashboard (`us-east-1` atau `eu-west-1`).
Setelah disimpan, tunggu beberapa menit sampai penyedia menandai domainnya
**Verified**. Kalau gagal, cek nilai DKIM satu huruf pun berpengaruh.

### Langkah C — buat kunci API

Dashboard penyedia → API Keys → buat kunci dengan izin kirim saja (Sending
access). Simpan baik-baik; ini dipakai sebagai **kata sandi SMTP**, bukan sebagai
alamat pengguna.

### Langkah D — isikan di Supabase

Authentication → **Emails → SMTP Settings** → aktifkan **Enable Custom SMTP**:

| Kolom | Nilai untuk Resend |
|---|---|
| Host | `smtp.resend.com` |
| Port | `587` |
| Username | `resend` |
| Password | kunci API dari Langkah C |
| Sender email | `noreply@send.ownmap.id` |
| Sender name | `TemWash GIS` |

Untuk Brevo: host `smtp-relay.brevo.com`, pengguna = alamat login Brevo,
sandi = SMTP key. Untuk SendGrid: host `smtp.sendgrid.net`, pengguna `apikey`,
sandi = API key.

### Langkah E — naikkan batas kirim

Setelah SMTP sendiri aktif, batas 2 email/jam tidak berlaku lagi dan bisa diatur:
Authentication → **Rate Limits** → batas "emails sent per hour". Untuk kelas 30
mahasiswa, 30–50 per jam cukup. Jangan dibiarkan terbuka lebar tanpa alasan.

### Langkah F — uji

Tiga pemeriksaan, dari yang paling murah:

```bash
# 1. catatan DNS sudah terbaca?
python3 ~/osig10/smtp_test.py dns send.ownmap.id

# 2. pengirimannya benar-benar jalan? (butuh kredensial di ~/osig10/.smtp-key, izin 600)
python3 ~/osig10/smtp_test.py kirim alamat-tujuan@example.com

# 3. Supabase sudah memakai SMTP itu?
python3 ~/osig10/check_auth_email.py --to alamat-terdaftar@domain
```

Pemeriksaan 3 harus menjawab **200** (permintaan diterima). Kalau masih menjawab
429 dengan "email rate limit exceeded", berarti SMTP sendiri belum aktif di
Supabase, atau batas kirimnya belum dinaikkan.

Di aplikasi: minta tautan atur ulang dari halaman pelanggan, lalu pastikan
emailnya datang dari `TemWash GIS` (bukan `Supabase Auth`).

## Catatan

- Skrip bantu di atas (`smtp_test.py`, `check_auth_email.py`) berada di server
  deployment (folder `~/osig10/`), bukan di dalam repo ini, karena membaca berkas
  aplikasi di server. Pemeriksaan yang sama bisa dilakukan manual dari mana saja:
  catatan DNS lewat `dig`, uji SMTP lewat klien surel, dan uji Supabase lewat
  permintaan `POST /auth/v1/recover` dengan kunci publik.
- Berkas kredensial `~/osig10/.smtp-key` harus berizin 600 dan tidak boleh masuk
  git. Isinya: `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS`, `PENGIRIM`.
- Pengujian otomatis aplikasi (`verify_customer_auth.js`) sengaja memakai alamat
  yang **tidak terdaftar** untuk uji permintaan tautan, sehingga tidak memakai
  jatah email project ini. Pengujian pendaftaran sungguhan dipisah dan hanya
  jalan bila `ALLOW_SIGNUP_TEST=1`.
- Selama SMTP sendiri belum dipasang, alur email masih bisa diuji tetapi harus
  berjarak: maksimal 2 email per jam untuk seluruh project.
