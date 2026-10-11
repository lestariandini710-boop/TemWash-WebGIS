# Autentikasi pelanggan (Supabase Auth)

Dokumen ini menjelaskan alur masuk/daftar pelanggan yang baru, setelan yang perlu
dicek sekali di dashboard Supabase, dan cara mengujinya.

## Apa yang berubah

- Rute baru `#customer` berisi halaman autentikasi pelanggan dengan empat mode:
  masuk, daftar akun, lupa kata sandi, dan pasang kata sandi baru (setelah
  membuka tautan atur ulang dari email).
- Kartu **Pelanggan** di landing page sekarang membuka halaman itu. Sebelumnya
  kartu itu langsung melempar pengunjung ke peta tanpa akun. Tamu yang memang
  hanya ingin melihat peta tetap bisa lewat tombol **Lihat peta tanpa akun**.
- Setelah berhasil masuk, pelanggan diarahkan ke halaman peta (`#map`).
- Kartu **Pemilik** tidak berubah: tetap membuka formulir login pemilik.
- Akun pemilik tidak bisa masuk lewat pintu pelanggan, dan akun pelanggan tidak
  bisa membuka halaman pemilik (lihat bagian Catatan teknis).
- Header halaman publik menampilkan email pelanggan yang sedang masuk beserta
  tombol **Keluar**. Pengunjung anonim melihat tombol **Masuk / Daftar**.
- Tombol **Keluar** di sidebar pemilik sekarang benar-benar mengakhiri sesi
  Supabase. Sebelumnya atributnya salah tulis (`data-route="logoutTemWash()"`),
  sehingga hanya berpindah ke landing page tanpa keluar.
- Kredensial pelanggan bersama (`pelanggan@temwash.id` / `pelanggan123`) dihapus
  dari `app.js`. Setiap pelanggan kini memakai akunnya sendiri.

## Setelan yang perlu dicek sekali di dashboard Supabase

1. **Authentication → Providers → Email**: aktif. (Sudah dipakai untuk login
   pemilik.)
2. **Authentication → Providers → Email → Confirm email**: **aktifkan**.
   Di project ini statusnya sudah aktif per 11 Oktober 2026 — dikonfirmasi
   dengan uji pendaftaran nyata (pendaftaran menghasilkan pesan "cek email",
   bukan sesi langsung).
3. **Authentication → URL Configuration**:
   - **Site URL**: `https://ownmap.id/osig10/`
   - **Redirect URLs** (tambahkan semuanya):
     - `https://ownmap.id/osig10/`
     - `https://ownmap.id/osig10/index.html`
     - `http://localhost:8899/` (untuk menguji di laptop)
   Tanpa daftar ini, tautan konfirmasi dan tautan atur ulang kata sandi akan
   diarahkan ke alamat yang salah.
4. **Authentication → Emails**: template bawaan (Inggris) sudah berfungsi. Kalau
   ingin berbahasa Indonesia, sunting template "Confirm signup" dan
   "Reset password" — jangan ubah tautan `{{ .ConfirmationURL }}` di dalamnya.
5. **Pengiriman email**: project masih memakai pengirim bawaan Supabase dengan
   batas kirim **2 email per jam untuk seluruh project** (semua endpoint yang
   mengirim email berbagi kuota yang sama). Untuk pemakaian nyata, sambungkan
   SMTP sendiri di **Authentication → Emails → SMTP Settings**, lalu naikkan
   batasnya di **Authentication → Rate Limits**. Petunjuk lengkapnya ada di
   `docs/SMTP-SETUP.md`.
   Aplikasi sekarang membedakan dua jenis pembatasan itu: batas tingkat project
   dijelaskan sebagai "Batas pengiriman email aplikasi sudah tercapai… 2 email
   per jam untuk seluruh aplikasi", sedangkan batas per alamat menyebut angka
   tunggu dari server ("…bisa dilakukan setelah N detik").
6. **Authentication → Users**: hapus akun uji bila tidak diperlukan. Uji
   pendaftaran 11 Oktober 2026 membuat satu akun bernama
   `uji.temwash.<timestamp>@ownmap.id` (belum terkonfirmasi).
7. **Row Level Security tabel `pemilik`**: aplikasi membaca tabel ini setelah
   pengguna masuk, untuk memastikan akun itu benar pemilik. Pastikan policy-nya
   membolehkan pengguna terautentikasi membaca barisnya sendiri. Tabel `outlet`
   tetap dibaca bebas oleh anon seperti sekarang.
8. Tidak ada perubahan skema database. Data pelanggan cukup berada di
   `auth.users`; tidak perlu tabel baru.

## Alur yang perlu dicoba manual sekali (butuh kotak masuk email)

1. Buka `https://ownmap.id/osig10/` → kartu **Pelanggan** → **Belum punya akun?
   Daftar** → daftarkan email aktif dengan kata sandi minimal 6 karakter.
2. Buka email dari Supabase, klik tautan konfirmasi. Halaman kembali ke aplikasi,
   sesi terbentuk, dan pengguna diantar ke peta dengan pesan
   "Email terkonfirmasi. Selamat datang!".
3. Klik **Keluar** di header, lalu masuk lagi dengan email dan kata sandi tadi —
   harus sampai ke peta.
4. Dari halaman masuk, pilih **Lupa kata sandi?**, masukkan email, klik tautan
   yang dikirim, isi kata sandi baru di halaman **Pasang Kata Sandi Baru**, lalu
   masuk memakai kata sandi baru itu.
5. Coba buka `https://ownmap.id/osig10/#owner` saat belum masuk sebagai pemilik —
   harus dilempar ke formulir login pemilik, bukan dashboard.
6. Login pemilik seperti biasa (kartu **Pemilik**) — dashboard harus tetap
   berfungsi seperti sebelumnya.

## Catatan teknis

- `flowType` dipatok `"implicit"` pada `createClient` karena router aplikasi ini
  berbasis hash. Hasil tautan email (kunci `access_token` dan `type`, dengan
  `type=recovery` untuk atur ulang kata sandi) ditangkap di awal skrip — sebelum
  supabase-js membersihkan URL — lalu URL-nya diganti dengan rute bersih, supaya
  token tidak tertinggal di address bar maupun riwayat peramban.
- Halaman pemilik diverifikasi ulang ke Supabase setiap kali dibuka: sesi harus
  masih hidup **dan** akunnya harus ada di tabel `pemilik`. Jadi memalsukan
  `sessionStorage.temwashRole = "owner"` dari console browser tidak cukup untuk
  membuka dashboard.
- Bila koneksi ke Supabase sedang gagal, pemilik yang sudah masuk tidak dikunci
  keluar: verifikasi dilewati dan alasannya dicatat di console.
- Saat halaman dimuat ulang, peran dipulihkan dari sesi Supabase yang tersimpan
  (pemilik dicek ke tabel `pemilik`), sehingga dashboard tidak terlempar dan
  status pelanggan tidak hilang.
- Halaman pelanggan sengaja punya rute sendiri (`#customer`) supaya pintu pemilik
  (`#login`) dan pintu pelanggan tidak pernah tertukar.

## Pengujian otomatis

Tiga verifikator Chromium headless (ada di direktori deploy server):

```
node verify_osig10.js        # struktur halaman, data outlet, peta, daftar
node verify_login.js         # form login pemilik & masuk ke dashboard
node verify_customer_auth.js # alur pelanggan (lihat di bawah)
```

`verify_customer_auth.js` memeriksa 33 hal: kartu pelanggan mengarah ke halaman
masuk, tiga mode halaman, validasi klien (tidak memanggil server), permintaan
tautan atur ulang, pemetaan pesan batas email (kuota project versus batas per
alamat), sandi salah, akun pemilik ditolak di pintu pelanggan, tamu bisa membuka
peta, dashboard pemilik tidak bisa dibuka walau perannya dipalsukan, tautan email
tidak dibaca sebagai nama halaman, dan token tidak tertinggal di address bar. Uji
pendaftaran sungguhan (mengirim satu email) hanya jalan bila variabel
`ALLOW_SIGNUP_TEST=1` di-set. Permintaan tautan atur ulang pada uji ini memakai
alamat yang tidak terdaftar, sehingga tidak memakai jatah email project.
