const SUPABASE_URL =
    "https://ulblkclijgehpzaotjgk.supabase.co";

const SUPABASE_ANON_KEY =
    "sb_publishable_1OOom5mLxQpyBfa4NrMFPA_6I9x12Xq";

const supabaseClient = window.supabase.createClient(
    SUPABASE_URL,
    SUPABASE_ANON_KEY
);

/* TES KONEKSI SUPABASE */

async function testSupabaseConnection() {
    const { data, error } = await supabaseClient
        .from("outlet")
        .select("*");

    if (error) {
        console.error(
            "Supabase gagal terhubung:",
            error
        );

        return;
    }

    console.log(
        "Supabase berhasil terhubung:",
        data
    );
}

testSupabaseConnection();

/* =====================================================
   DATA LAUNDRY
===================================================== */

let laundryData = [
    {
        id: 1,
        laundryId: "L001",
        name: "Orange Laundry Premium Cabang Banjarsari",
        address: "Jl. Banjarsari Raya Tembalang No.48, Kecamatan Tembalang, Kota Semarang",
        latitude: -7.0578445,
        longitude: 110.4401918,
        service: "Self-service",
        hours: "08.00 - 20.00",
        payment: "QRIS - Transfer",
        phone: "0858-8888-9926",
        area: "Tembalang",
        status: "Buka",
        facilities: "Ruang tunggu, AC",
        price: "Belum tersedia"
    },
    {
        id: 2,
        laundryId: "L002",
        name: "Jifi Wash",
        address: "Jl. Galang Sewu Raya No.15, Tembalang, Kota Semarang",
        latitude: -7.053414695,
        longitude: 110.4357375,
        service: "Gabungan",
        hours: "07.00 - 21.00",
        payment: "QRIS",
        phone: "0877-6800-2020",
        area: "Tembalang",
        status: "Buka",
        facilities: "Ruang tunggu, AC",
        price: "Belum tersedia"
    },
    {
        id: 3,
        laundryId: "L003",
        name: "Daily Wash Laundromat Tembalang",
        address: "WCVP+MVG, Tembalang, Kota Semarang",
        latitude: -7.0522357,
        longitude: 110.4375335,
        service: "Gabungan",
        hours: "08.30 - 20.00",
        payment: "QRIS - Tunai",
        phone: "0812-1842-6969",
        area: "Tembalang",
        status: "Buka",
        facilities: "Ruang tunggu, kipas",
        price: "Belum tersedia"
    },
    {
        id: 4,
        laundryId: "L004",
        name: "Laundry Tembalang",
        address: "Jl. Bulusan IV, Bulusan, Kecamatan Tembalang, Kota Semarang",
        latitude: -7.059438974,
        longitude: 110.4470226,
        service: "Dilayani petugas",
        hours: "09.00 - 18.00",
        payment: "QRIS - Tunai",
        phone: "0851-8750-7018",
        area: "Bulusan",
        status: "Buka",
        facilities: "Ruang tunggu",
        price: "Belum tersedia"
    },
    {
        id: 5,
        laundryId: "L005",
        name: "Bara Laundry",
        address: "Jl. KH. Sirojudin No.16, Tembalang, Kota Semarang",
        latitude: -7.056485944,
        longitude: 110.435847,
        service: "Gabungan",
        hours: "08.00 - 21.00",
        payment: "QRIS - Tunai",
        phone: "0877-6690-9075",
        area: "Tembalang",
        status: "Buka",
        facilities: "Ruang tunggu, air dispenser",
        price: "Belum tersedia"
    },
    {
        id: 6,
        laundryId: "L006",
        name: "Tembalang Temcy Self Service Laundry",
        address: "Haven Residence, Jl. Jatimulyo No.10, Tembalang, Kota Semarang",
        latitude: -7.06,
        longitude: 110.43,
        service: "Self-service",
        hours: "07.00 - 02.00",
        payment: "QRIS - Tunai",
        phone: "Belum tersedia",
        area: "Tembalang",
        status: "Buka",
        facilities: "Ruang tunggu, AC, WiFi, stop kontak",
        price: "Belum tersedia"
    },
    {
        id: 7,
        laundryId: "L007",
        name: "Smart Laundry UNDIP",
        address: "Jl. KH. Sirojudin, Tembalang, Kota Semarang",
        latitude: -7.0791468,
        longitude: 110.4519344,
        service: "Self-service",
        hours: "24 jam",
        payment: "QRIS - Tunai",
        phone: "0811-1182-0088",
        area: "Tembalang",
        status: "Buka",
        facilities: "Ruang tunggu, kipas, air dispenser, WiFi",
        price: "Belum tersedia"
    },
    {
        id: 8,
        laundryId: "L008",
        name: "Orange Laundry Cabang Sirojudin",
        address: "Jl. Jatimulyo No.1, Tembalang, Kota Semarang",
        latitude: -7.06,
        longitude: 110.44,
        service: "Self-service",
        hours: "08.00 - 21.00",
        payment: "QRIS - Tunai",
        phone: "0857-4166-6659",
        area: "Tembalang",
        status: "Buka",
        facilities: "Ruang tunggu",
        price: "Belum tersedia"
    },
    {
        id: 9,
        laundryId: "L009",
        name: "Inori Laundry",
        address: "Jl. Jatimulyo No.1A, Tembalang, Kota Semarang",
        latitude: -7.0602,
        longitude: 110.4404,
        service: "Self-service",
        hours: "07.00 - 21.00",
        payment: "QRIS - Tunai",
        phone: "0812-2729-7050",
        area: "Tembalang",
        status: "Buka",
        facilities: "Ruang tunggu, kipas",
        price: "Belum tersedia"
    },
    {
        id: 10,
        laundryId: "L010",
        name: "YUNS Laundry",
        address: "Jl. Banjarsari No.41, Tembalang, Kota Semarang",
        latitude: -7.058306862,
        longitude: 110.4397303,
        service: "Self-service",
        hours: "24 jam",
        payment: "QRIS - Tunai",
        phone: "0813-8985-758",
        area: "Tembalang",
        status: "Buka",
        facilities: "Ruang tunggu, AC, WiFi, musala",
        price: "Belum tersedia"
    },
    {
        id: 11,
        laundryId: "L011",
        name: "Zenn Laundry Self Service Semarang",
        address: "Jl. Kedungmundu No.511, Kedungmundu, Kota Semarang",
        latitude: -7.021873586,
        longitude: 110.4586123,
        service: "Self-service",
        hours: "06.00 - 23.00",
        payment: "QRIS",
        phone: "0851-5877-1256",
        area: "Kedungmundu",
        status: "Buka",
        facilities: "Belum tersedia",
        price: "Belum tersedia"
    }
];

async function loadLaundryDataFromSupabase() {
    const { data, error } = await supabaseClient
        .from("outlet")
        .select("*")
        .order("outlet_id", {
            ascending: true
        });

    if (error) {
        console.error(
            "Gagal mengambil data outlet:",
            error
        );

        return;
    }

    if (!data || data.length === 0) {
        console.warn(
            "Data outlet Supabase masih kosong."
        );

        return;
    }

    laundryData = data.map(
        (outlet, index) => ({
            id: index + 1,

            laundryId:
                outlet.outlet_id,

            ownerId:
                outlet.pemilik_id,

            name:
                outlet.nama_outlet,

            address:
                outlet.alamat,

            latitude:
                Number(outlet.latitude),

            longitude:
                Number(outlet.longitude),

            service:
                outlet.jenis_layanan ||
                "Belum tersedia",

            hours:
                outlet.jam_operasional ||
                "Belum tersedia",

            payment:
                outlet.metode_pembayaran ||
                "Belum tersedia",

            phone:
                outlet.no_telepon ||
                "Belum tersedia",

            area:
                outlet.kelurahan ||
                "Belum tersedia",

            status:
                outlet.status_buka ||
                "Tidak diketahui",

            facilities:
                outlet.fasilitas_lain ||
                "Belum tersedia",

            price:
                outlet.harga_mulai
                    ? "Rp " +
                      Number(
                          outlet.harga_mulai
                      ).toLocaleString("id-ID")
                    : "Belum tersedia"
        })
    );

    console.log(
        `${laundryData.length} outlet dimuat dari Supabase`
    );
}

/* =====================================================
   DATA DUMMY PESANAN PEMILIK
===================================================== */

const ownerOrders = [
    {
        id: "TW-001",
        customer: "Budi Santoso",
        phone: "0812-3456-7890",
        service: "Cuci + Setrika",
        weight: 4.5,
        total: 67500,
        receivedAt: "18 Sep 2026, 08.15",
        durationMinutes: 90,
        status: "Diproses",
        payment: "Lunas"
    },
    {
        id: "TW-002",
        customer: "Siti Aulia",
        phone: "0857-1122-3344",
        service: "Cuci Kering",
        weight: 3,
        total: 36000,
        receivedAt: "18 Sep 2026, 08.40",
        durationMinutes: 60,
        status: "Menunggu",
        payment: "Belum lunas"
    },
    {
        id: "TW-003",
        customer: "Raka Pratama",
        phone: "0813-9087-2211",
        service: "Self-service",
        weight: 6,
        total: 30000,
        receivedAt: "18 Sep 2026, 09.05",
        durationMinutes: 45,
        status: "Diproses",
        payment: "Lunas"
    },
    {
        id: "TW-004",
        customer: "Nabila Putri",
        phone: "0822-7788-9900",
        service: "Cuci + Setrika",
        weight: 5,
        total: 75000,
        receivedAt: "18 Sep 2026, 09.20",
        durationMinutes: 120,
        status: "Selesai",
        payment: "Lunas"
    },
    {
        id: "TW-005",
        customer: "Dimas Saputra",
        phone: "0819-5544-3322",
        service: "Cuci Sepatu",
        weight: 1,
        total: 35000,
        receivedAt: "18 Sep 2026, 10.10",
        durationMinutes: 180,
        status: "Siap diambil",
        payment: "Belum lunas"
    },
    {
        id: "TW-006",
        customer: "Ayu Maharani",
        phone: "0838-2211-6677",
        service: "Cuci Kering",
        weight: 2.5,
        total: 30000,
        receivedAt: "18 Sep 2026, 11.00",
        durationMinutes: 60,
        status: "Dibatalkan",
        payment: "Dikembalikan"
    }
];


/* =====================================================
   DATA DUMMY MESIN
===================================================== */

const defaultOwnerMachines = [
    {
        id: "MC-01",
        name: "Mesin Cuci 1",
        type: "Mesin Cuci",
        capacity: "10 kg",
        status: "Aktif",
        remainingMinutes: 23,
        customer: "Raka Pratama",
        lastMaintenance: "10 Sep 2026",
        nextMaintenance: "10 Okt 2026"
    },
    {
        id: "MC-02",
        name: "Mesin Cuci 2",
        type: "Mesin Cuci",
        capacity: "10 kg",
        status: "Aktif",
        remainingMinutes: 41,
        customer: "Budi Santoso",
        lastMaintenance: "8 Sep 2026",
        nextMaintenance: "8 Okt 2026"
    },
    {
        id: "MC-03",
        name: "Mesin Cuci 3",
        type: "Mesin Cuci",
        capacity: "12 kg",
        status: "Tersedia",
        remainingMinutes: 0,
        customer: "",
        lastMaintenance: "12 Sep 2026",
        nextMaintenance: "12 Okt 2026"
    },
    {
        id: "MC-04",
        name: "Mesin Cuci 4",
        type: "Mesin Cuci",
        capacity: "12 kg",
        status: "Tidak aktif",
        remainingMinutes: 0,
        customer: "",
        lastMaintenance: "2 Sep 2026",
        nextMaintenance: "2 Okt 2026"
    },
    {
        id: "PG-01",
        name: "Mesin Pengering 1",
        type: "Pengering",
        capacity: "10 kg",
        status: "Tersedia",
        remainingMinutes: 0,
        customer: "",
        lastMaintenance: "11 Sep 2026",
        nextMaintenance: "11 Okt 2026"
    },
    {
        id: "PG-02",
        name: "Mesin Pengering 2",
        type: "Pengering",
        capacity: "10 kg",
        status: "Perbaikan",
        remainingMinutes: 0,
        customer: "",
        lastMaintenance: "17 Sep 2026",
        nextMaintenance: "Belum ditentukan"
    }
];


const ownerEquipment = [
    {
        id: "PR-01",
        name: "Mesin Cuci",
        type: "Mesin",
        quantity: 7,
        condition: "Baik"
    },
    {
        id: "PR-02",
        name: "Pengering",
        type: "Pengering",
        quantity: 7,
        condition: "Baik"
    },
    {
        id: "PR-03",
        name: "Timbangan Digital",
        type: "Timbangan",
        quantity: 2,
        condition: "Baik"
    },
    {
        id: "PR-04",
        name: "Keranjang Laundry",
        type: "Perlengkapan",
        quantity: 12,
        condition: "Baik"
    }
];


let ownerMachines;

try {
    ownerMachines =
        JSON.parse(
            localStorage.getItem("temwashMachines")
        ) || defaultOwnerMachines.map(
            (machine) => ({ ...machine })
        );
} catch (error) {
    ownerMachines = defaultOwnerMachines.map(
        (machine) => ({ ...machine })
    );
}


function saveMachineData() {
    localStorage.setItem(
        "temwashMachines",
        JSON.stringify(ownerMachines)
    );
}

/* =====================================================
   VARIABEL APLIKASI
===================================================== */

const app = document.getElementById("app");

const mapCenter = {
    latitude: -7.056,
    longitude: 110.442
};

let map = null;
let markers = [];
let radiusCircle = null;
let userMarker = null;
let selectedLaundryId = null;
let selectedLoginRole = "customer";
let orderCountdownInterval = null;


/* =====================================================
   FUNGSI DATA
===================================================== */

function isValidCoordinate(laundry) {
    return (
        typeof laundry.latitude === "number" &&
        typeof laundry.longitude === "number" &&
        Number.isFinite(laundry.latitude) &&
        Number.isFinite(laundry.longitude)
    );
}


function calculateDistance(lat1, lon1, lat2, lon2) {
    const earthRadius = 6371;

    const latitudeDifference =
        (lat2 - lat1) * Math.PI / 180;

    const longitudeDifference =
        (lon2 - lon1) * Math.PI / 180;

    const formula =
        Math.sin(latitudeDifference / 2) ** 2 +
        Math.cos(lat1 * Math.PI / 180) *
        Math.cos(lat2 * Math.PI / 180) *
        Math.sin(longitudeDifference / 2) ** 2;

    return (
        earthRadius *
        2 *
        Math.atan2(
            Math.sqrt(formula),
            Math.sqrt(1 - formula)
        )
    );
}


function updateDistances(latitude, longitude) {
    laundryData.forEach((laundry) => {
        if (isValidCoordinate(laundry)) {
            laundry.distance = calculateDistance(
                latitude,
                longitude,
                laundry.latitude,
                laundry.longitude
            );
        } else {
            laundry.distance = null;
        }
    });
}


updateDistances(
    mapCenter.latitude,
    mapCenter.longitude
);


function formatDistance(distance) {
    if (distance === null || distance === undefined) {
        return "Koordinat belum tersedia";
    }

    return distance
        .toFixed(1)
        .replace(".", ",") + " km";
}


function getOpenLaundryCount() {
    return laundryData.filter(
        (laundry) => laundry.status === "Buka"
    ).length;
}


function getClosedLaundryCount() {
    return laundryData.filter(
        (laundry) => laundry.status === "Tutup"
    ).length;
}


function getUnknownLaundryCount() {
    return laundryData.filter(
        (laundry) =>
            laundry.status !== "Buka" &&
            laundry.status !== "Tutup"
    ).length;
}

function formatRupiah(value) {
    return new Intl.NumberFormat(
        "id-ID",
        {
            style: "currency",
            currency: "IDR",
            maximumFractionDigits: 0
        }
    ).format(value);
}


function getOwnerStatusClass(status) {
    const statusClasses = {
        "Menunggu": "waiting",
        "Diproses": "processing",
        "Selesai": "available",
        "Siap diambil": "available",
        "Dibatalkan": "repair",
        "Aktif": "processing",
        "Tersedia": "available",
        "Tidak aktif": "inactive",
        "Perbaikan": "repair",
        "Lunas": "available",
        "Belum lunas": "waiting",
        "Dikembalikan": "inactive",
        "Baik": "available",
        "Perlu pemeriksaan": "waiting"
    };

    return statusClasses[status] || "inactive";
}


function createOwnerStatusBadge(status) {
    return `
        <span class="owner-status-badge ${getOwnerStatusClass(status)}">
            ${status}
        </span>
    `;
}

/* =====================================================
   COUNTDOWN PESANAN REAL-TIME
===================================================== */

function saveOrderTimers() {
    const timerData = {};

    ownerOrders.forEach((order) => {
        if (order.endTime) {
            timerData[order.id] = order.endTime;
        }
    });

    localStorage.setItem(
        "temwashOrderTimers",
        JSON.stringify(timerData)
    );
}


function loadOrderTimers() {
    let savedTimers = {};

    try {
        savedTimers =
            JSON.parse(
                localStorage.getItem(
                    "temwashOrderTimers"
                )
            ) || {};
    } catch (error) {
        savedTimers = {};
    }

    ownerOrders.forEach((order) => {
        if (savedTimers[order.id]) {
            order.endTime =
                Number(savedTimers[order.id]);

            return;
        }

        if (order.status === "Diproses") {
            order.endTime =
                Date.now() +
                order.durationMinutes *
                    60 *
                    1000;
        }
    });

    saveOrderTimers();
}


function formatOrderCountdown(order) {
    if (order.status === "Menunggu") {
        return "Belum dimulai";
    }

    if (order.status === "Selesai") {
        return "Selesai";
    }

    if (order.status === "Siap diambil") {
        return "Siap diambil";
    }

    if (order.status === "Dibatalkan") {
        return "Dibatalkan";
    }

    if (
        order.status !== "Diproses" ||
        !order.endTime
    ) {
        return "-";
    }

    const remainingMilliseconds =
        order.endTime - Date.now();

    if (remainingMilliseconds <= 0) {
        return "Waktu habis";
    }

    const totalSeconds = Math.floor(
        remainingMilliseconds / 1000
    );

    const hours = Math.floor(
        totalSeconds / 3600
    );

    const minutes = Math.floor(
        (totalSeconds % 3600) / 60
    );

    const seconds =
        totalSeconds % 60;

    const hourText =
        String(hours).padStart(2, "0");

    const minuteText =
        String(minutes).padStart(2, "0");

    const secondText =
        String(seconds).padStart(2, "0");

    return (
        hourText +
        ":" +
        minuteText +
        ":" +
        secondText
    );
}


function updateOrderCountdowns() {
    let statusChanged = false;

    ownerOrders.forEach((order) => {
        if (
            order.status === "Diproses" &&
            order.endTime &&
            order.endTime <= Date.now()
        ) {
            order.status = "Selesai";
            order.endTime = null;
            statusChanged = true;
        }
    });

    if (statusChanged) {
        saveOrderTimers();

        if (
            window.location.hash ===
            "#orders"
        ) {
            showOrdersPage();
            showToast(
                "Pesanan selesai secara otomatis"
            );
        }

        return;
    }

    document
        .querySelectorAll(
            "[data-order-countdown]"
        )
        .forEach((element) => {
            const order =
                ownerOrders.find(
                    (item) =>
                        item.id ===
                        element.dataset.orderCountdown
                );

            if (order) {
                element.textContent =
                    formatOrderCountdown(order);
            }
        });
}


function startOrderCountdown() {
    if (orderCountdownInterval) {
        clearInterval(
            orderCountdownInterval
        );
    }

    updateOrderCountdowns();

    orderCountdownInterval =
        setInterval(
            updateOrderCountdowns,
            1000
        );
}


function stopOrderCountdown() {
    if (orderCountdownInterval) {
        clearInterval(
            orderCountdownInterval
        );

        orderCountdownInterval = null;
    }
}


loadOrderTimers();

/* =====================================================
   KOMPONEN
===================================================== */

function createBrand() {
    return `
        <div class="brand">
            <div class="brand-logo">
                <svg
                    viewBox="0 0 64 64"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                >
                    <!-- Badan mesin cuci -->
                    <rect
                        x="11"
                        y="7"
                        width="42"
                        height="50"
                        rx="7"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="4"
                    />

                    <!-- Panel bagian atas -->
                    <line
                        x1="12"
                        y1="20"
                        x2="52"
                        y2="20"
                        stroke="currentColor"
                        stroke-width="4"
                    />

                    <!-- Tombol mesin -->
                    <circle
                        cx="20"
                        cy="14"
                        r="2.5"
                        fill="currentColor"
                    />

                    <circle
                        cx="28"
                        cy="14"
                        r="2.5"
                        fill="currentColor"
                    />

                    <!-- Pintu mesin cuci -->
                    <circle
                        cx="32"
                        cy="38"
                        r="13"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="4"
                    />

                    <!-- Air di dalam mesin -->
                    <path
                        d="M21 39
                           C25 34, 29 43, 34 38
                           C39 33, 42 40, 43 40
                           C42 47, 37 51, 32 51
                           C26 51, 22 46, 21 39Z"
                        fill="currentColor"
                        opacity="0.75"
                    />
                </svg>
            </div>

            <div>
                <div class="brand-title">
                    TemWash<span> GIS</span>
                </div>

                <div class="brand-description">
                    Monitoring Self Laundry Kecamatan Tembalang
                </div>
            </div>
        </div>
    `;
}


function createStatusBadge(status) {
    let statusClass = "unknown";

    if (status === "Buka") {
        statusClass = "open";
    } else if (status === "Tutup") {
        statusClass = "closed";
    }

    return `
        <span class="status-badge ${statusClass}">
            ${status}
        </span>
    `;
}


function showToast(message) {
    const toast = document.getElementById("toast");

    if (!toast) {
        return;
    }

    toast.textContent = message;
    toast.classList.add("show");

    setTimeout(() => {
        toast.classList.remove("show");
    }, 2500);
}


function createHeader(activePage) {
    return `
        <header class="public-header">
            ${createBrand()}

            <div class="header-search">
                <span>⌕</span>

                <input
                    type="text"
                    id="globalSearch"
                    placeholder="Cari nama atau lokasi laundry"
                >
            </div>

            <nav class="top-navigation">
                <button
                    data-route="map"
                    class="${activePage === "map" ? "active" : ""}"
                >
                    Peta
                </button>

                <button
                    data-route="list"
                    class="${activePage === "list" ? "active" : ""}"
                >
                    Data Laundry
                </button>

                <button
                    data-route="about"
                    class="${activePage === "about" ? "active" : ""}"
                >
                    Tentang
                </button>
            </nav>

            <button
                class="secondary-button"
                data-action="my-location"
            >
                ◎ Lokasi Saya
            </button>
        </header>
    `;
}


function createSidebar(activePage) {
    return `
        <aside class="left-navigation">
            <button
                type="button"
                class="left-navigation-button ${
                    activePage === "map" ? "active" : ""
                }"
                data-route="map"
            >
                <span>◈</span>
                <span>Peta</span>
            </button>

            <button
                type="button"
                class="left-navigation-button ${
                    activePage === "list" ? "active" : ""
                }"
                data-route="list"
            >
                <span>☷</span>
                <span>Daftar</span>
            </button>

            <button
                type="button"
                class="left-navigation-button"
                data-route="login"
            >
                <span>♙</span>
                <span>Pemilik</span>
            </button>
        </aside>
    `;
}


function createPublicLayout(activePage, content) {
    return `
        ${createHeader(activePage)}

        <div class="public-layout">
            ${createSidebar(activePage)}

            <main class="public-content">
                ${content}
            </main>
        </div>
    `;
}


/* =====================================================
   HALAMAN PETA
===================================================== */

function createSummaryItems() {
    return `
        <div class="map-summary">
            <div class="summary-item">
                <div class="summary-icon">◉</div>

                <div>
                    <strong class="summary-value">
                        ${laundryData.length}
                    </strong>

                    <span class="summary-label">
                        Laundry
                    </span>
                </div>
            </div>

            <div class="summary-item green">
                <div class="summary-icon">●</div>

                <div>
                    <strong class="summary-value">
                        ${getOpenLaundryCount()}
                    </strong>

                    <span class="summary-label">
                        Buka
                    </span>
                </div>
            </div>

            <div class="summary-item orange">
                <div class="summary-icon">●</div>

                <div>
                    <strong class="summary-value">
                        ${getUnknownLaundryCount()}
                    </strong>

                    <span class="summary-label">
                        Tidak diketahui
                    </span>
                </div>
            </div>

            <div class="summary-item red">
                <div class="summary-icon">●</div>

                <div>
                    <strong class="summary-value">
                        ${getClosedLaundryCount()}
                    </strong>

                    <span class="summary-label">
                        Tutup
                    </span>
                </div>
            </div>
        </div>
    `;
}


function getSortedLaundry(data = laundryData) {
    return [...data].sort((first, second) => {
        if (first.distance === null) {
            return 1;
        }

        if (second.distance === null) {
            return -1;
        }

        return first.distance - second.distance;
    });
}


function createNearestCards(data = laundryData) {
    return getSortedLaundry(data)
        .map((laundry, index) => {
            return `
                <article
                    class="nearest-card ${
                        index === 0 ? "selected" : ""
                    }"
                >
                    <div class="nearest-card-header">
                        <div>
                            <h3 class="nearest-card-name">
                                ${laundry.name}
                            </h3>

                            <div style="margin-top: 7px;">
                                ${createStatusBadge(laundry.status)}
                            </div>
                        </div>

                        <span class="nearest-card-distance">
                            ${formatDistance(laundry.distance)}
                        </span>
                    </div>

                    <div class="nearest-card-information">
                        <p>⌖ ${laundry.address}</p>
                        <p>◇ ${laundry.service}</p>
                        <p>◷ ${laundry.hours}</p>
                        <p>▣ ${laundry.payment}</p>
                    </div>

                    <div class="nearest-card-actions">
                        <button
                            class="outline-button"
                            data-detail="${laundry.id}"
                        >
                            Detail
                        </button>

                        <button
                            class="route-button"
                            data-route-laundry="${laundry.id}"
                            ${!isValidCoordinate(laundry) ? "disabled" : ""}
                        >
                            Rute
                        </button>
                    </div>
                </article>
            `;
        })
        .join("");
}


function showMapPage() {
    const content = `
        <section class="map-page">
            <div class="map-main">
                ${createSummaryItems()}

                <form
                    class="map-filter-bar"
                    id="mapFilterForm"
                >
                    <select id="radiusFilter">
                        <option value="1">Radius 1 km</option>
                        <option value="2">Radius 2 km</option>
                        <option value="3">Radius 3 km</option>
                        <option value="5" selected>Radius 5 km</option>
                        <option value="10">Radius 10 km</option>
                    </select>

                    <select id="serviceFilter">
                        <option value="Semua">
                            Semua layanan
                        </option>

                        <option value="Self-service">
                            Self-service
                        </option>

                        <option value="Gabungan">
                            Gabungan
                        </option>

                        <option value="Dilayani petugas">
                            Dilayani petugas
                        </option>
                    </select>

                    <select id="statusFilter">
                        <option value="Semua">
                            Semua status
                        </option>

                        <option value="Buka">
                            Buka sekarang
                        </option>

                        <option value="Tutup">
                            Tutup
                        </option>
                    </select>

                    <select id="areaFilter">
                        <option value="Semua">
                            Semua kelurahan
                        </option>

                        ${
                            [...new Set(
                                laundryData.map(
                                    (laundry) => laundry.area
                                )
                            )]
                                .map(
                                    (area) =>
                                        `<option value="${area}">${area}</option>`
                                )
                                .join("")
                        }
                    </select>

                    <button class="primary-button" type="submit">
                        Terapkan Filter
                    </button>
                </form>

                <div class="map-wrapper">
                    <div id="map"></div>
                </div>

                <div class="map-legend">
                    <div class="legend-item">
                        <span class="legend-dot green"></span>
                        Buka
                    </div>

                    <div class="legend-item">
                        <span class="legend-dot orange"></span>
                        Tidak diketahui
                    </div>

                    <div class="legend-item">
                        <span class="legend-dot red"></span>
                        Tutup
                    </div>

                    <div class="legend-item">
                        <span class="legend-radius"></span>
                        Radius pencarian
                    </div>
                </div>
            </div>

            <aside class="nearest-panel">
                <h2>Self Laundry Terdekat</h2>

                <p class="nearest-panel-subtitle">
                    <span id="nearestResultCount">
                        ${laundryData.length}
                    </span>
                    lokasi ditemukan
                </p>

                <div class="nearest-list" id="nearestList">
                    ${createNearestCards()}
                </div>
            </aside>
        </section>
    `;

    app.innerHTML = createPublicLayout(
        "map",
        content
    );

    setTimeout(initializeMap, 0);
    bindMapFilter();
    bindGlobalSearch();
}


function getMarkerClass(status) {
    if (status === "Buka") {
        return "open";
    }

    if (status === "Tutup") {
        return "closed";
    }

    return "unknown";
}


function createMarkerIcon(status) {
    return L.divIcon({
        className: "",
        iconSize: [36, 45],
        iconAnchor: [18, 42],
        popupAnchor: [0, -40],
        html: `
            <div class="custom-marker ${getMarkerClass(status)}">
                <span>◉</span>
            </div>
        `
    });
}


function initializeMap() {
    if (typeof L === "undefined") {
        document.getElementById("map").innerHTML = `
            <p style="padding: 40px;">
                Peta gagal dimuat. Pastikan internet aktif
                dan website dijalankan menggunakan Live Server.
            </p>
        `;

        return;
    }

    map = L.map("map").setView(
        [
            mapCenter.latitude,
            mapCenter.longitude
        ],
        14
    );

    L.tileLayer(
        "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
        {
            maxZoom: 19,
            attribution: "&copy; OpenStreetMap contributors"
        }
    ).addTo(map);

    displayMarkers(laundryData);
    drawRadiusCircle(5);

    setTimeout(() => {
        map.invalidateSize();
    }, 250);
}


function createPopupContent(laundry) {
    return `
        <div class="popup-content">
            <h3>${laundry.name}</h3>

            <p>
                <strong>Status:</strong>
                ${laundry.status}
            </p>

            <p>
                <strong>Alamat:</strong>
                ${laundry.address}
            </p>

            <p>
                <strong>Layanan:</strong>
                ${laundry.service}
            </p>

            <p>
                <strong>Jam:</strong>
                ${laundry.hours}
            </p>

            <div class="popup-actions">
                <button
                    class="outline-button"
                    onclick="showLaundryDetail(${laundry.id})"
                >
                    Detail
                </button>

                ${
                    isValidCoordinate(laundry)
                        ? `
                            <a
                                class="route-button"
                                href="${createRouteUrl(laundry)}"
                                target="_blank"
                            >
                                Rute
                            </a>
                        `
                        : ""
                }
            </div>
        </div>
    `;
}


function displayMarkers(data) {
    if (!map) {
        return;
    }

    markers.forEach((marker) => {
        marker.remove();
    });

    markers = [];

    data.forEach((laundry) => {
        if (!isValidCoordinate(laundry)) {
            return;
        }

        const marker = L.marker(
            [
                laundry.latitude,
                laundry.longitude
            ],
            {
                icon: createMarkerIcon(
                    laundry.status
                )
            }
        );

        marker.addTo(map);
        marker.bindPopup(
            createPopupContent(laundry)
        );

        markers.push(marker);
    });
}


function drawRadiusCircle(radiusKm) {
    if (!map) {
        return;
    }

    if (radiusCircle) {
        radiusCircle.remove();
    }

    radiusCircle = L.circle(
        [
            mapCenter.latitude,
            mapCenter.longitude
        ],
        {
            radius: radiusKm * 1000,
            color: "#079b9d",
            fillColor: "#079b9d",
            fillOpacity: 0.08,
            weight: 2,
            dashArray: "7 7"
        }
    ).addTo(map);
}


function applyMapFilter() {
    const radius = Number(
        document.getElementById(
            "radiusFilter"
        ).value
    );

    const service =
        document.getElementById(
            "serviceFilter"
        ).value;

    const status =
        document.getElementById(
            "statusFilter"
        ).value;

    const area =
        document.getElementById(
            "areaFilter"
        ).value;

    const filteredData =
        laundryData.filter((laundry) => {
            const radiusMatch =
                laundry.distance === null ||
                laundry.distance <= radius;

            const serviceMatch =
                service === "Semua" ||
                laundry.service === service;

            const statusMatch =
                status === "Semua" ||
                laundry.status === status;

            const areaMatch =
                area === "Semua" ||
                laundry.area === area;

            return (
                radiusMatch &&
                serviceMatch &&
                statusMatch &&
                areaMatch
            );
        });

    displayMarkers(filteredData);
    drawRadiusCircle(radius);

    document.getElementById(
        "nearestList"
    ).innerHTML =
        createNearestCards(filteredData);

    document.getElementById(
        "nearestResultCount"
    ).textContent = filteredData.length;

    showToast(
        filteredData.length +
        " laundry sesuai filter"
    );
}


function bindMapFilter() {
    const filterForm =
        document.getElementById(
            "mapFilterForm"
        );

    filterForm.addEventListener(
        "submit",
        (event) => {
            event.preventDefault();
            applyMapFilter();
        }
    );
}


/* =====================================================
   PENCARIAN
===================================================== */

function bindGlobalSearch() {
    const searchInput =
        document.getElementById(
            "globalSearch"
        );

    if (!searchInput) {
        return;
    }

    searchInput.addEventListener(
        "input",
        (event) => {
            const keyword =
                event.target.value
                    .trim()
                    .toLowerCase();

            const filteredData =
                laundryData.filter((laundry) => {
                    const content = `
                        ${laundry.name}
                        ${laundry.address}
                        ${laundry.area}
                        ${laundry.service}
                    `.toLowerCase();

                    return content.includes(keyword);
                });

            if (map) {
                displayMarkers(filteredData);

                const nearestList =
                    document.getElementById(
                        "nearestList"
                    );

                if (nearestList) {
                    nearestList.innerHTML =
                        createNearestCards(
                            filteredData
                        );
                }

                const resultCount =
                    document.getElementById(
                        "nearestResultCount"
                    );

                if (resultCount) {
                    resultCount.textContent =
                        filteredData.length;
                }
            }
        }
    );
}


/* =====================================================
   LOKASI PENGGUNA
===================================================== */

function findUserLocation() {
    if (!navigator.geolocation) {
        showToast(
            "Browser tidak mendukung lokasi pengguna"
        );

        return;
    }

    showToast(
        "Sedang mencari lokasi kamu"
    );

    navigator.geolocation.getCurrentPosition(
        (position) => {
            const latitude =
                position.coords.latitude;

            const longitude =
                position.coords.longitude;

            updateDistances(
                latitude,
                longitude
            );

            mapCenter.latitude = latitude;
            mapCenter.longitude = longitude;

            if (
                window.location.hash !==
                "#map"
            ) {
                navigateTo("map");
                return;
            }

            if (!map) {
                return;
            }

            if (userMarker) {
                userMarker.remove();
            }

            userMarker = L.marker(
                [latitude, longitude],
                {
                    icon: L.divIcon({
                        className: "",
                        iconSize: [24, 24],
                        iconAnchor: [12, 12],
                        html:
                            '<div class="user-location-marker"></div>'
                    })
                }
            ).addTo(map);

            userMarker.bindPopup(
                "Lokasi kamu"
            );

            map.setView(
                [latitude, longitude],
                15
            );

            applyMapFilter();

            showToast(
                "Lokasi berhasil ditemukan"
            );
        },
        () => {
            showToast(
                "Izin lokasi ditolak atau lokasi tidak ditemukan"
            );
        },
        {
            enableHighAccuracy: true,
            timeout: 10000
        }
    );
}


/* =====================================================
   DETAIL DAN RUTE
===================================================== */

function createRouteUrl(laundry) {
    return (
        "https://www.google.com/maps/dir/?api=1" +
        "&destination=" +
        laundry.latitude +
        "," +
        laundry.longitude
    );
}


function openLaundryRoute(id) {
    const laundry =
        laundryData.find(
            (item) => item.id === id
        );

    if (
        !laundry ||
        !isValidCoordinate(laundry)
    ) {
        showToast(
            "Koordinat laundry belum tersedia"
        );

        return;
    }

    window.open(
        createRouteUrl(laundry),
        "_blank"
    );
}


function showLaundryDetail(id) {
    const laundry =
        laundryData.find(
            (item) => item.id === id
        );

    if (!laundry) {
        return;
    }

    selectedLaundryId = id;

    const detailElement =
        document.createElement("div");

    detailElement.className =
        "detail-overlay";

    detailElement.id =
        "laundryDetailOverlay";

    detailElement.innerHTML = `
        <article class="detail-dialog">
            <div class="detail-dialog-header">
                <div>
                    <h2>${laundry.name}</h2>
                    ${createStatusBadge(laundry.status)}
                </div>

                <button
                    class="close-dialog"
                    data-action="close-detail"
                >
                    ×
                </button>
            </div>

            <div class="detail-grid">
    <div class="detail-label">
        ID Laundry
    </div>

    <div>${laundry.laundryId}</div>

    <!-- Informasi lainnya tetap ada -->

    <div class="detail-label">
        Jarak
    </div>

    <div>
        ${formatDistance(
            laundry.distance
        )}
    </div>

    <div class="detail-machine-full-width">
        ${createPublicMachineAvailability(
            laundry
        )}
    </div>
</div>

<div style="display:flex; gap:10px;">
    <button
        class="route-button"
        data-route-laundry="${laundry.id}"
    >
        Buka rute
    </button>

    <button
        class="secondary-button"
        data-action="close-detail"
    >
        Tutup
    </button>
</div>
        </article>
    `;

    document.body.appendChild(
        detailElement
    );
}


function closeLaundryDetail() {
    const detail =
        document.getElementById(
            "laundryDetailOverlay"
        );

    if (detail) {
        detail.remove();
    }

    selectedLaundryId = null;
}


/* =====================================================
   HALAMAN DAFTAR
===================================================== */

function createTableRows(data) {
    if (data.length === 0) {
        return `
            <tr>
                <td colspan="9">
                    Data laundry tidak ditemukan.
                </td>
            </tr>
        `;
    }

    return data
        .map((laundry, index) => {
            return `
                <tr>
                    <td>${index + 1}</td>
                    <td>${laundry.laundryId}</td>

                    <td>
                        <strong>
                            ${laundry.name}
                        </strong>
                    </td>

                    <td>${laundry.area}</td>
                    <td>${laundry.service}</td>

                    <td>
                        ${createStatusBadge(
                            laundry.status
                        )}
                    </td>

                    <td>${laundry.hours}</td>

                    <td>
                        ${formatDistance(
                            laundry.distance
                        )}
                    </td>

                    <td>
                        <button
                            class="table-action"
                            data-detail="${laundry.id}"
                        >
                            Detail
                        </button>
                    </td>
                </tr>
            `;
        })
        .join("");
}


function showListPage() {
    const content = `
        <section class="standard-page">
            <div class="page-heading">
                <div>
                    <h1>Data Laundry</h1>

                    <p>
                        Daftar laundry di Kecamatan Tembalang
                    </p>
                </div>

                <button
                    class="primary-button"
                    data-action="export"
                >
                    Ekspor CSV
                </button>
            </div>

            <section class="page-statistics">
                <article class="card page-stat-card">
                    <strong>
                        ${laundryData.length}
                    </strong>
                    <span>Total laundry</span>
                </article>

                <article class="card page-stat-card">
                    <strong>
                        ${getOpenLaundryCount()}
                    </strong>
                    <span>Sedang buka</span>
                </article>

                <article class="card page-stat-card">
                    <strong>
                        ${
                            new Set(
                                laundryData.map(
                                    (laundry) =>
                                        laundry.area
                                )
                            ).size
                        }
                    </strong>
                    <span>Kelurahan</span>
                </article>

                <article class="card page-stat-card">
                    <strong>
                        ${
                            laundryData.filter(
                                isValidCoordinate
                            ).length
                        }
                    </strong>
                    <span>Koordinat tersedia</span>
                </article>
            </section>

            <div class="table-toolbar">
                <input
                    type="text"
                    id="tableSearch"
                    placeholder="Cari laundry..."
                >

                <select id="tableServiceFilter">
                    <option value="Semua">
                        Semua layanan
                    </option>
                    <option value="Self-service">
                        Self-service
                    </option>
                    <option value="Gabungan">
                        Gabungan
                    </option>
                    <option value="Dilayani petugas">
                        Dilayani petugas
                    </option>
                </select>
            </div>

            <article class="card table-card">
                <table>
                    <thead>
                        <tr>
                            <th>No.</th>
                            <th>ID</th>
                            <th>Nama Laundry</th>
                            <th>Kelurahan</th>
                            <th>Layanan</th>
                            <th>Status</th>
                            <th>Jam</th>
                            <th>Jarak</th>
                            <th>Aksi</th>
                        </tr>
                    </thead>

                    <tbody id="laundryTableBody">
                        ${createTableRows(
                            laundryData
                        )}
                    </tbody>
                </table>
            </article>
        </section>
    `;

    app.innerHTML = createPublicLayout(
        "list",
        content
    );

    bindGlobalSearch();
    bindTableFilter();
}


function bindTableFilter() {
    const search =
        document.getElementById(
            "tableSearch"
        );

    const serviceFilter =
        document.getElementById(
            "tableServiceFilter"
        );

    function updateTable() {
        const keyword =
            search.value
                .trim()
                .toLowerCase();

        const service =
            serviceFilter.value;

        const result =
            laundryData.filter(
                (laundry) => {
                    const keywordMatch = `
                        ${laundry.name}
                        ${laundry.address}
                        ${laundry.area}
                    `
                        .toLowerCase()
                        .includes(keyword);

                    const serviceMatch =
                        service === "Semua" ||
                        laundry.service ===
                            service;

                    return (
                        keywordMatch &&
                        serviceMatch
                    );
                }
            );

        document.getElementById(
            "laundryTableBody"
        ).innerHTML =
            createTableRows(result);
    }

    search.addEventListener(
        "input",
        updateTable
    );

    serviceFilter.addEventListener(
        "change",
        updateTable
    );
}


/* =====================================================
   LAPORAN DAN TENTANG
===================================================== */

function showAboutPage() {
    const content = `
        <section class="standard-page">
            <div class="page-heading">
                <div>
                    <h1>Tentang TemWash GIS</h1>

                    <p>
                        WebGIS monitoring dan pencarian
                        laundry di Kecamatan Tembalang
                    </p>
                </div>
            </div>

            <article class="card analysis-card">
                <h2>TemWash GIS</h2>

                <p>
                    TemWash GIS membantu pengguna
                    menemukan lokasi laundry, melihat
                    layanan, jam operasional, fasilitas,
                    metode pembayaran, dan rute menuju
                    laundry.
                </p>

                <p>
                    Pemilik laundry dapat masuk melalui
                    Portal Pemilik untuk memantau
                    operasional outlet.
                </p>

                <button
                    class="primary-button"
                    data-route="login"
                >
                    Masuk sebagai pemilik
                </button>
            </article>
        </section>
    `;

    app.innerHTML = createPublicLayout(
        "about",
        content
    );

    bindGlobalSearch();
}


/* =====================================================
   LOGIN DAN DASHBOARD PEMILIK
===================================================== */

/* =====================================================
   HALAMAN AWAL TEMWASH
===================================================== */

function showLandingPage() {
    app.innerHTML = `
        <main class="temwash-landing">
            <header class="landing-header">
                ${createBrand()}

                <button
                    type="button"
                    class="landing-home-button active"
                    onclick="navigateTo('landing')"
                >
                    Beranda
                </button>
            </header>

            <section class="landing-hero">
                <div class="landing-overlay"></div>

                <div class="landing-content">
                    <span class="landing-eyebrow">
                        WEBGIS LAUNDRY TEMBALANG
                    </span>

                    <h1>
                        Satu putaran,<br>
                        semua kebutuhan
                        <span>laundry terpantau.</span>
                    </h1>

                    <p class="landing-description">
                        Temukan laundry terdekat atau kelola
                        outlet dalam satu pengalaman yang praktis.
                    </p>

                    <div class="landing-access-grid">
                        <button
                            type="button"
                            class="access-card customer-access"
                            onclick="openRoleLogin('customer')"
                        >
                            <span class="access-icon customer-icon">
                                <svg
                                    viewBox="0 0 64 64"
                                    aria-hidden="true"
                                >
                                    <circle
                                        cx="25"
                                        cy="19"
                                        r="10"
                                        fill="currentColor"
                                    />

                                    <path
                                        d="M7 49C7 36 14 29 25 29C36 29 43 36 43 49Z"
                                        fill="currentColor"
                                    />

                                    <path
                                        d="M48 27C40 27 34 33 34 41C34 51 48 61 48 61C48 61 62 51 62 41C62 33 56 27 48 27Z"
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-width="4"
                                    />

                                    <circle
                                        cx="48"
                                        cy="41"
                                        r="4"
                                        fill="currentColor"
                                    />
                                </svg>
                            </span>

                            <span class="access-copy">
                                <small>Masuk sebagai</small>
                                <strong>Pelanggan</strong>

                                <span>
                                    Cari laundry, cek mesin,
                                    dan buka rute.
                                </span>
                            </span>

                            <span class="access-arrow">
                                →
                            </span>
                        </button>

                        <button
                            type="button"
                            class="access-card owner-access"
                            onclick="openRoleLogin('owner')"
                        >
                            <span class="access-icon owner-icon">
                                <svg
                                    viewBox="0 0 64 64"
                                    aria-hidden="true"
                                >
                                    <path
                                        d="M10 25H54L49 12H15Z"
                                        fill="currentColor"
                                    />

                                    <path
                                        d="M13 27V53H51V27"
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-width="4"
                                    />

                                    <path
                                        d="M22 53V38H34V53"
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-width="4"
                                    />

                                    <rect
                                        x="39"
                                        y="34"
                                        width="5"
                                        height="12"
                                        rx="2"
                                        fill="currentColor"
                                    />

                                    <rect
                                        x="47"
                                        y="29"
                                        width="5"
                                        height="17"
                                        rx="2"
                                        fill="currentColor"
                                    />

                                    <rect
                                        x="55"
                                        y="23"
                                        width="5"
                                        height="23"
                                        rx="2"
                                        fill="currentColor"
                                    />
                                </svg>
                            </span>

                            <span class="access-copy">
                                <small>Masuk sebagai</small>
                                <strong>Pemilik</strong>

                                <span>
                                    Kelola pesanan, mesin,
                                    dan outlet.
                                </span>
                            </span>

                            <span class="access-arrow">
                                →
                            </span>
                        </button>
                    </div>

                    <button
                        type="button"
                        class="landing-guest-button"
                        onclick="loginAsGuest()"
                    >
                        Lanjutkan tanpa login
                    </button>
                </div>
            </section>
        </main>
    `;
}


function openRoleLogin(role) {
    selectedLoginRole = role;

    /*
     * Pelanggan langsung masuk ke halaman peta
     * tanpa mengisi formulir login.
     */
    if (role === "customer") {
        sessionStorage.setItem(
            "temwashRole",
            "customer"
        );

        navigateTo("map");
        return;
    }

    /*
     * Pemilik tetap diarahkan ke formulir login.
     */
    if (role === "owner") {
        navigateTo("login");
    }
}

function showLoginPage() {
    const isOwner =
        selectedLoginRole === "owner";

    app.innerHTML = `
        <main class="login-page">
            <section class="login-visual">
                ${createBrand()}

                <div class="login-eyebrow">
                    TEMWASH GIS
                </div>

                <h1>
                    ${
                        isOwner
                            ? `
                                Laundry tetap terpantau,
                                bahkan saat kamu tidak
                                di tempat.
                            `
                            : `
                                Temukan laundry terdekat
                                dengan lebih mudah.
                            `
                    }
                </h1>

                <p>
                    ${
                        isOwner
                            ? `
                                Pantau pesanan, antrean,
                                mesin, dan aktivitas outlet
                                dari satu dashboard.
                            `
                            : `
                                Cari lokasi laundry, lihat
                                ketersediaan mesin, dan
                                temukan rute tercepat.
                            `
                    }
                </p>

                <article class="login-preview">
                    ${
                        isOwner
                            ? `
                                <strong>
                                    Orange Laundry Premium
                                </strong>

                                <div class="login-preview-statistics">
                                    <div>
                                        <strong>
                                            ${
                                                ownerMachines.filter(
                                                    (machine) =>
                                                        machine.status ===
                                                        "Aktif"
                                                ).length
                                            }
                                        </strong>
                                        <span>Mesin aktif</span>
                                    </div>

                                    <div>
                                        <strong>
                                            ${
                                                ownerOrders.filter(
                                                    (order) =>
                                                        order.status ===
                                                        "Menunggu"
                                                ).length
                                            }
                                        </strong>
                                        <span>Antrean</span>
                                    </div>

                                    <div>
                                        <strong>
                                            ${ownerOrders.length}
                                        </strong>
                                        <span>Pesanan</span>
                                    </div>
                                </div>
                            `
                            : `
                                <strong>
                                    Cari Laundry Terdekat
                                </strong>

                                <p>
                                    Lihat lokasi, layanan,
                                    jam operasional, rute,
                                    dan status mesin laundry.
                                </p>
                            `
                    }
                </article>
            </section>

            <section class="login-form-side">
                <div class="login-form">
                    <div class="login-role-tabs">
                        <button
                            type="button"
                            class="login-role-button ${
                                !isOwner ? "active" : ""
                            }"
                            onclick="selectLoginRole('customer')"
                        >
                            Pelanggan
                        </button>

                        <button
                            type="button"
                            class="login-role-button ${
                                isOwner ? "active" : ""
                            }"
                            onclick="selectLoginRole('owner')"
                        >
                            Pemilik Laundry
                        </button>
                    </div>

                    <span class="status-badge ${
                        isOwner ? "unknown" : "open"
                    }">
                        ${
                            isOwner
                                ? "Portal pemilik laundry"
                                : "Portal pelanggan"
                        }
                    </span>

                    <h2>
                        ${
                            isOwner
                                ? "Login Pemilik"
                                : "Login Pelanggan"
                        }
                    </h2>

                    <p>
                        ${
                            isOwner
                                ? `
                                    Masuk untuk mengelola
                                    outlet laundry milikmu.
                                `
                                : `
                                    Masuk untuk mencari dan
                                    memantau laundry pilihanmu.
                                `
                        }
                    </p>

                    <form id="roleLoginForm">
                        <div class="form-field">
                            <label>
                                ${
                                    isOwner
                                        ? "Email pemilik"
                                        : "Email pelanggan"
                                }
                            </label>

                            <input
                                id="loginEmail"
                                type="email"
                                value="${
                                    isOwner
                                        ? "andi@temwash.id"
                                        : "pelanggan@temwash.id"
                                }"
                                required
                            >
                        </div>

                        <div class="form-field">
                            <label>Kata sandi</label>

                            <input
                                id="loginPassword"
                                type="password"
                                value="${
                                    isOwner
                                        ? ""
                                        : "pelanggan123"
                                }"
                                required
                            >
                        </div>

                        <button
                            type="button"
                            class="text-button"
                            onclick="toggleLoginPassword()"
                        >
                            Lihat kata sandi
                        </button>

                        <button
                            type="submit"
                            class="primary-button login-submit-button"
                        >
                            ${
                                isOwner
                                    ? "Masuk ke dashboard"
                                    : "Masuk ke WebGIS"
                            }
                        </button>
                    </form>

                    ${
                        !isOwner
                            ? `
                                <div class="login-divider">
                                    <span>atau</span>
                                </div>

                                <button
                                    type="button"
                                    class="secondary-button guest-button"
                                    onclick="loginAsGuest()"
                                >
                                    Lanjutkan sebagai tamu
                                </button>
                            `
                            : ""
                    }
                </div>
            </section>
        </main>
    `;

    document
        .getElementById("roleLoginForm")
        .addEventListener(
            "submit",
            handleRoleLogin
        );
}

function selectLoginRole(role) {
    selectedLoginRole = role;
    showLoginPage();
}


function toggleLoginPassword() {
    const passwordInput =
        document.getElementById(
            "loginPassword"
        );

    if (!passwordInput) {
        return;
    }

    passwordInput.type =
        passwordInput.type === "password"
            ? "text"
            : "password";
}


function handleRoleLogin(event) {
async function handleRoleLogin(event) {
    event.preventDefault();

    const email =
        document
            .getElementById("loginEmail")
            .value
            .trim();

    const password =
        document
            .getElementById("loginPassword")
            .value;

    /*
     * LOGIN PEMILIK MELALUI SUPABASE
     */
    if (selectedLoginRole === "owner") {
        const submitButton =
            event.currentTarget.querySelector(
                'button[type="submit"]'
            );

        submitButton.disabled = true;
        submitButton.textContent =
            "Sedang masuk...";

        const { data, error } =
            await supabaseClient.auth
                .signInWithPassword({
                    email,
                    password
                });

        if (error) {
            console.error(
                "Login Supabase gagal:",
                error
            );

            showToast(
                "Email atau kata sandi pemilik salah"
            );

            submitButton.disabled = false;
            submitButton.textContent =
                "Masuk ke dashboard";

            return;
        }

        /*
         * Memastikan akun terdaftar
         * sebagai pemilik laundry.
         */
        const {
            data: ownerData,
            error: ownerError
        } = await supabaseClient
            .from("pemilik")
            .select(
                "pemilik_id, nama_pemilik, email"
            )
            .eq(
                "auth_user_id",
                data.user.id
            )
            .single();

        if (ownerError || !ownerData) {
            console.error(
                "Profil pemilik tidak ditemukan:",
                ownerError
            );

            await supabaseClient.auth.signOut();

            showToast(
                "Akun ini bukan pemilik laundry"
            );

            submitButton.disabled = false;
            submitButton.textContent =
                "Masuk ke dashboard";

            return;
        }

        sessionStorage.setItem(
            "temwashRole",
            "owner"
        );

        sessionStorage.setItem(
            "temwashOwnerId",
            ownerData.pemilik_id
        );

        sessionStorage.setItem(
            "temwashOwnerName",
            ownerData.nama_pemilik
        );

        showToast(
            `Selamat datang, ${ownerData.nama_pemilik}`
        );

        navigateTo("owner");
        return;
    }

    /*
     * LOGIN PELANGGAN MASIH SIMULASI
     */
    if (
        email !== "pelanggan@temwash.id" ||
        password !== "pelanggan123"
    ) {
        showToast(
            "Email atau kata sandi pelanggan salah"
        );

        return;
    }

    sessionStorage.setItem(
        "temwashRole",
        "customer"
    );

    navigateTo("map");
}


function loginAsGuest() {
    sessionStorage.setItem(
        "temwashRole",
        "guest"
    );

    navigateTo("map");
}


function logoutTemWash() {
    async function logoutTemWash() {
    await supabaseClient.auth.signOut();

    sessionStorage.removeItem(
        "temwashRole"
    );

    sessionStorage.removeItem(
        "temwashOwnerId"
    );

    sessionStorage.removeItem(
        "temwashOwnerName"
    );

    selectedLoginRole = "customer";
    navigateTo("login");
}

function createOwnerSidebar(activeMenu) {
    const menuItems = [
        ["owner", "⌂", "Dashboard"],
        ["orders", "▤", "Pesanan"],
        ["machines", "⚙", "Mesin & Peralatan"],
        ["finance", "▥", "Keuangan"],
        ["profile", "▣", "Profil Outlet"]
    ];

    return `
        <aside class="owner-sidebar">
            ${createBrand()}

            <nav class="owner-navigation">
                ${
                    menuItems
                        .map(
                            ([route, icon, label]) => `
                                <button
                                    class="owner-navigation-button ${
                                        activeMenu === route
                                            ? "active"
                                            : ""
                                    }"
                                    data-route="${route}"
                                >
                                    <span>${icon}</span>
                                    <span>${label}</span>
                                </button>
                            `
                        )
                        .join("")
                }
            </nav>

            <button
                class="owner-navigation-button owner-logout"
                data-route="logoutTemWash()"
            >
                <span>↪</span>
                <span>Keluar</span>
            </button>
        </aside>
    `;
}


function createOwnerHeader(title) {
    return `
        <header class="owner-header">
            <div>
                <h1>${title}</h1>
                <p>Kelola operasional outlet Anda</p>
            </div>

            <div class="owner-profile">
                <div class="owner-avatar">A</div>

                <div>
                    <strong>Andi</strong><br>
                    <small>Pemilik Outlet</small>
                </div>
            </div>
        </header>
    `;
}


function showOwnerDashboard() {
    app.innerHTML = `
        <div class="owner-layout">
            ${createOwnerSidebar("owner")}

            <section class="owner-content">
                ${createOwnerHeader(
                    "Selamat pagi, Andi"
                )}

                <main class="owner-main">
                    <section class="card owner-outlet">
                        <div>
                            <h2>
                                Orange Laundry Premium
                            </h2>

                            <p>
                                Jl. Banjarsari Raya,
                                Tembalang
                            </p>
                        </div>

                        ${createStatusBadge("Buka")}
                    </section>

                    <section class="owner-kpi-grid">
                        <article class="card owner-kpi">
                            <span>Pesanan hari ini</span>
                            <strong>28</strong>
                        </article>

                        <article class="card owner-kpi">
                            <span>Mesin aktif</span>
                            <strong>4 / 6</strong>
                        </article>

                        <article class="card owner-kpi">
                            <span>Antrean berjalan</span>
                            <strong>6</strong>
                        </article>

                        <article class="card owner-kpi">
                            <span>Pendapatan hari ini</span>
                            <strong>Rp594.000</strong>
                        </article>
                    </section>

                    <section class="owner-dashboard-grid">
                        <article class="card owner-panel">
                            <div class="panel-heading">
                                <h2>Pesanan terbaru</h2>
                            </div>

                            <div style="overflow-x:auto;">
                                <table>
                                    <thead>
                                        <tr>
                                            <th>No.</th>
                                            <th>Pelanggan</th>
                                            <th>Layanan</th>
                                            <th>Status</th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        <tr>
                                            <td>TW-001</td>
                                            <td>Budi</td>
                                            <td>Cuci + Setrika</td>
                                            <td>
                                                <span class="status-badge unknown">
                                                    Diproses
                                                </span>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td>TW-002</td>
                                            <td>Siti</td>
                                            <td>Cuci saja</td>
                                            <td>
                                                <span class="status-badge open">
                                                    Selesai
                                                </span>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </article>

                        <article class="card owner-panel">
                            <div class="panel-heading">
                                <h2>Status mesin</h2>
                            </div>

                            <div class="machine-grid">
                                <div class="machine-card">
                                    <strong>Mesin Cuci 1</strong>
                                    <p>Sedang aktif</p>
                                    <small>Sisa 23 menit</small>
                                </div>

                                <div class="machine-card">
                                    <strong>Mesin Cuci 2</strong>
                                    <p>Sedang aktif</p>
                                    <small>Sisa 41 menit</small>
                                </div>

                                <div class="machine-card repair">
                                    <strong>Pengering 2</strong>
                                    <p>Dalam perbaikan</p>
                                    <small>Tidak tersedia</small>
                                </div>
                            </div>
                        </article>
                    </section>
                </main>
            </section>
        </div>
    `;
}

/* =====================================================
   HALAMAN PESANAN PEMILIK
===================================================== */

function createOwnerOrderRows(data) {
    if (data.length === 0) {
        return `
            <tr>
                <td colspan="10" class="owner-empty-state">
                    Pesanan tidak ditemukan.
                </td>
            </tr>
        `;
    }

    return data
        .map((order) => {
            return `
                <tr>
                    <td>
                        <strong>${order.id}</strong>
                    </td>

                    <td>
                        <strong>${order.customer}</strong>
                        <small class="table-secondary-text">
                            ${order.phone}
                        </small>
                    </td>

                    <td>${order.service}</td>
                    <td>${order.weight} kg</td>
                    <td>${formatRupiah(order.total)}</td>
                    <td>${order.receivedAt}</td>
                    <td>
                        <span
                            class="order-countdown"
                            data-order-countdown="${order.id}"
                        >
                            ${formatOrderCountdown(order)}
                        </span>
                    </td>

                    <td>
                        ${createOwnerStatusBadge(order.payment)}
                    </td>

                    <td>
                        ${createOwnerStatusBadge(order.status)}
                    </td>

                    <td>
                        <button
                            class="table-action"
                            onclick="showOwnerOrderDetail('${order.id}')"
                        >
                            Detail
                        </button>

                        <button
                            class="small-primary-button"
                            onclick="openOrderStatusEditor('${order.id}')"
                        >
                            Ubah
                        </button>
                    </td>
                </tr>
            `;
        })
        .join("");
}


function showOrdersPage() {
    const waitingCount = ownerOrders.filter(
        (order) => order.status === "Menunggu"
    ).length;

    const processingCount = ownerOrders.filter(
        (order) => order.status === "Diproses"
    ).length;

    const finishedCount = ownerOrders.filter(
        (order) =>
            order.status === "Selesai" ||
            order.status === "Siap diambil"
    ).length;

    app.innerHTML = `
        <div class="owner-layout">
            ${createOwnerSidebar("orders")}

            <section class="owner-content">
                ${createOwnerHeader("Pesanan")}

                <main class="owner-main">
                    <div class="owner-section-heading">
                        <div>
                            <h2>Daftar Pesanan</h2>

                            <p>
                                Pantau dan perbarui proses
                                pesanan pelanggan
                            </p>
                        </div>
                    </div>

                    <section class="order-stat-grid">
                        <article class="card owner-summary-card">
                            <span>Total pesanan</span>
                            <strong>${ownerOrders.length}</strong>
                        </article>

                        <article class="card owner-summary-card waiting-card">
                            <span>Menunggu</span>
                            <strong>${waitingCount}</strong>
                        </article>

                        <article class="card owner-summary-card processing-card">
                            <span>Sedang diproses</span>
                            <strong>${processingCount}</strong>
                        </article>

                        <article class="card owner-summary-card available-card">
                            <span>Selesai/siap diambil</span>
                            <strong>${finishedCount}</strong>
                        </article>
                    </section>

                    <section class="card owner-data-section">
                        <div class="order-toolbar">
                            <input
                                type="search"
                                id="ownerOrderSearch"
                                placeholder="Cari nomor atau pelanggan..."
                            >

                            <select id="ownerOrderStatus">
                                <option value="Semua">
                                    Semua status
                                </option>
                                <option value="Menunggu">
                                    Menunggu
                                </option>
                                <option value="Diproses">
                                    Diproses
                                </option>
                                <option value="Selesai">
                                    Selesai
                                </option>
                                <option value="Siap diambil">
                                    Siap diambil
                                </option>
                                <option value="Dibatalkan">
                                    Dibatalkan
                                </option>
                            </select>
                        </div>

                        <div class="owner-table-wrapper">
                            <table>
                                <thead>
                                    <tr>
                                        <th>Nomor</th>
                                        <th>Pelanggan</th>
                                        <th>Layanan</th>
                                        <th>Berat</th>
                                        <th>Total</th>
                                        <th>Masuk</th>
                                        <th>Estimasi</th>
                                        <th>Pembayaran</th>
                                        <th>Status</th>
                                        <th>Aksi</th>
                                    </tr>
                                </thead>

                                <tbody id="ownerOrderTable">
                                    ${createOwnerOrderRows(ownerOrders)}
                                </tbody>
                            </table>
                        </div>
                    </section>
                </main>
            </section>
        </div>
    `;

    bindOwnerOrderFilter();
    startOrderCountdown();
}


function bindOwnerOrderFilter() {
    const searchInput =
        document.getElementById("ownerOrderSearch");

    const statusInput =
        document.getElementById("ownerOrderStatus");

    function updateOrders() {
        const keyword =
            searchInput.value.trim().toLowerCase();

        const selectedStatus =
            statusInput.value;

        const result = ownerOrders.filter((order) => {
            const keywordMatch = `
                ${order.id}
                ${order.customer}
                ${order.phone}
                ${order.service}
            `
                .toLowerCase()
                .includes(keyword);

            const statusMatch =
                selectedStatus === "Semua" ||
                order.status === selectedStatus;

            return keywordMatch && statusMatch;
        });

        document.getElementById(
            "ownerOrderTable"
        ).innerHTML = createOwnerOrderRows(result);
    }

    searchInput.addEventListener("input", updateOrders);
    statusInput.addEventListener("change", updateOrders);
}


function showOwnerOrderDetail(orderId) {
    const order = ownerOrders.find(
        (item) => item.id === orderId
    );

    if (!order) {
        return;
    }

    const overlay = document.createElement("div");

    overlay.className = "detail-overlay";
    overlay.id = "ownerSimulationModal";

    overlay.innerHTML = `
        <article class="detail-dialog owner-modal">
            <div class="detail-dialog-header">
                <div>
                    <h2>Detail Pesanan ${order.id}</h2>
                    ${createOwnerStatusBadge(order.status)}
                </div>

                <button
                    class="close-dialog"
                    onclick="closeOwnerSimulationModal()"
                >
                    ×
                </button>
            </div>

            <div class="detail-grid">
                <div class="detail-label">Pelanggan</div>
                <div>${order.customer}</div>

                <div class="detail-label">Nomor telepon</div>
                <div>${order.phone}</div>

                <div class="detail-label">Layanan</div>
                <div>${order.service}</div>

                <div class="detail-label">Berat</div>
                <div>${order.weight} kg</div>

                <div class="detail-label">Total biaya</div>
                <div>${formatRupiah(order.total)}</div>

                <div class="detail-label">Waktu masuk</div>
                <div>${order.receivedAt}</div>

                <div class="detail-label">Estimasi selesai</div>
                <div>${order.estimatedFinish}</div>

                <div class="detail-label">Pembayaran</div>
                <div>${createOwnerStatusBadge(order.payment)}</div>

                <div class="detail-label">Status pesanan</div>
                <div>${createOwnerStatusBadge(order.status)}</div>
            </div>

            <button
                class="secondary-button"
                onclick="closeOwnerSimulationModal()"
            >
                Tutup
            </button>
        </article>
    `;

    document.body.appendChild(overlay);
}


function openOrderStatusEditor(orderId) {
    const order = ownerOrders.find(
        (item) => item.id === orderId
    );

    if (!order) {
        return;
    }

    const overlay = document.createElement("div");

    overlay.className = "detail-overlay";
    overlay.id = "ownerSimulationModal";

    overlay.innerHTML = `
        <article class="detail-dialog owner-modal small-modal">
            <div class="detail-dialog-header">
                <div>
                    <h2>Ubah Status Pesanan</h2>
                    <p>${order.id} — ${order.customer}</p>
                </div>

                <button
                    class="close-dialog"
                    onclick="closeOwnerSimulationModal()"
                >
                    ×
                </button>
            </div>

            <div class="form-field">
                <label>Status pesanan</label>

                <select id="editedOrderStatus">
                    ${[
                        "Menunggu",
                        "Diproses",
                        "Selesai",
                        "Siap diambil",
                        "Dibatalkan"
                    ]
                        .map((status) => {
                            return `
                                <option
                                    value="${status}"
                                    ${
                                        order.status === status
                                            ? "selected"
                                            : ""
                                    }
                                >
                                    ${status}
                                </option>
                            `;
                        })
                        .join("")}
                </select>
            </div>

            <div class="modal-button-row">
                <button
                    class="primary-button"
                    onclick="saveOrderStatus('${order.id}')"
                >
                    Simpan perubahan
                </button>

                <button
                    class="secondary-button"
                    onclick="closeOwnerSimulationModal()"
                >
                    Batal
                </button>
            </div>
        </article>
    `;

    document.body.appendChild(overlay);
}


function saveOrderStatus(orderId) {
    const order =
        ownerOrders.find(
            (item) => item.id === orderId
        );

    const statusInput =
        document.getElementById(
            "editedOrderStatus"
        );

    if (!order || !statusInput) {
        return;
    }

    const previousStatus =
        order.status;

    order.status =
        statusInput.value;

    /*
     * Timer otomatis dimulai ketika status
     * diubah menjadi Diproses.
     */
    if (
        order.status === "Diproses" &&
        previousStatus !== "Diproses"
    ) {
        order.endTime =
            Date.now() +
            order.durationMinutes *
                60 *
                1000;
    }

    /*
     * Timer dihentikan jika pesanan tidak
     * lagi diproses.
     */
    if (
        order.status !== "Diproses"
    ) {
        order.endTime = null;
    }

    saveOrderTimers();
    closeOwnerSimulationModal();
    showOrdersPage();

    showToast(
        order.status === "Diproses"
            ? "Pesanan diproses dan timer dimulai"
            : "Status pesanan berhasil diperbarui"
    );
}


function closeOwnerSimulationModal() {
    const modal =
        document.getElementById("ownerSimulationModal");

    if (modal) {
        modal.remove();
    }
}

/* =====================================================
   HALAMAN MESIN DAN PERALATAN PEMILIK
===================================================== */

function createMachineCards(data) {
    if (data.length === 0) {
        return `
            <div class="owner-empty-state">
                Mesin tidak ditemukan.
            </div>
        `;
    }

    return data
        .map((machine) => {
            const progress =
                machine.status === "Aktif"
                    ? Math.min(
                        100,
                        (
                            machine.remainingMinutes /
                            60
                        ) * 100
                    )
                    : 0;

            return `
                <article class="card machine-status-card">
                    <div class="machine-card-heading">
                        <div>
                            <span class="machine-code">
                                ${machine.id}
                            </span>

                            <h3>${machine.name}</h3>
                        </div>

                        ${createOwnerStatusBadge(
                            machine.status
                        )}
                    </div>

                    <div class="machine-information">
                        <p>
                            <span>Jenis</span>
                            <strong>${machine.type}</strong>
                        </p>

                        <p>
                            <span>Kapasitas</span>
                            <strong>${machine.capacity}</strong>
                        </p>

                        ${
                            machine.status === "Aktif"
                                ? `
                                    <div class="active-machine-information">
                                        <p>
                                            <span>Pelanggan</span>

                                            <strong>
                                                ${
                                                    machine.customer ||
                                                    "-"
                                                }
                                            </strong>
                                        </p>

                                        <p>
                                            <span>Sisa waktu</span>

                                            <strong>
                                                ${
                                                    machine.remainingMinutes
                                                }
                                                menit
                                            </strong>
                                        </p>

                                        <div class="machine-progress">
                                            <div
                                                style="width:${progress}%"
                                            ></div>
                                        </div>
                                    </div>
                                `
                                : ""
                        }

                        <p>
                            <span>Perawatan terakhir</span>

                            <strong>
                                ${machine.lastMaintenance}
                            </strong>
                        </p>

                        <p>
                            <span>Perawatan berikutnya</span>

                            <strong>
                                ${machine.nextMaintenance}
                            </strong>
                        </p>
                    </div>

                    <button
                        class="outline-button machine-edit-button"
                        onclick="openMachineStatusEditor('${machine.id}')"
                    >
                        Ubah status
                    </button>
                </article>
            `;
        })
        .join("");
}


function createEquipmentRows() {
    return ownerEquipment
        .map((equipment) => {
            return `
                <tr>
                    <td>${equipment.id}</td>

                    <td>
                        <strong>
                            ${equipment.name}
                        </strong>
                    </td>

                    <td>${equipment.type}</td>
                    <td>${equipment.quantity}</td>

                    <td>
                        ${createOwnerStatusBadge(
                            equipment.condition
                        )}
                    </td>
                </tr>
            `;
        })
        .join("");
}


function showMachinesPage() {
    const activeCount =
        ownerMachines.filter(
            (machine) =>
                machine.status === "Aktif"
        ).length;

    const availableCount =
        ownerMachines.filter(
            (machine) =>
                machine.status === "Tersedia"
        ).length;

    const problemCount =
        ownerMachines.filter(
            (machine) =>
                machine.status === "Perbaikan" ||
                machine.status === "Tidak aktif"
        ).length;

    app.innerHTML = `
        <div class="owner-layout">
            ${createOwnerSidebar("machines")}

            <section class="owner-content">
                ${createOwnerHeader(
                    "Mesin & Peralatan"
                )}

                <main class="owner-main">
                    <div class="owner-section-heading">
                        <div>
                            <h2>Status Mesin</h2>

                            <p>
                                Pantau ketersediaan dan
                                kondisi mesin secara langsung
                            </p>
                        </div>
                    </div>

                    <section class="machine-stat-grid">
                        <article class="card owner-summary-card">
                            <span>Total mesin</span>

                            <strong>
                                ${ownerMachines.length}
                            </strong>
                        </article>

                        <article class="card owner-summary-card processing-card">
                            <span>Sedang aktif</span>

                            <strong>
                                ${activeCount}
                            </strong>
                        </article>

                        <article class="card owner-summary-card available-card">
                            <span>Tersedia</span>

                            <strong>
                                ${availableCount}
                            </strong>
                        </article>

                        <article class="card owner-summary-card repair-card">
                            <span>Bermasalah</span>

                            <strong>
                                ${problemCount}
                            </strong>
                        </article>
                    </section>

                    <section class="machine-filter-toolbar">
                        <select id="machineTypeFilter">
                            <option value="Semua">
                                Semua jenis
                            </option>

                            <option value="Mesin Cuci">
                                Mesin Cuci
                            </option>

                            <option value="Pengering">
                                Pengering
                            </option>
                        </select>

                        <select id="machineStatusFilter">
                            <option value="Semua">
                                Semua status
                            </option>

                            <option value="Tersedia">
                                Tersedia
                            </option>

                            <option value="Aktif">
                                Aktif
                            </option>

                            <option value="Tidak aktif">
                                Tidak aktif
                            </option>

                            <option value="Perbaikan">
                                Perbaikan
                            </option>
                        </select>
                    </section>

                    <section
                        class="machine-card-grid"
                        id="ownerMachineGrid"
                    >
                        ${createMachineCards(
                            ownerMachines
                        )}
                    </section>

                    <section class="card owner-data-section equipment-section">
                        <div class="owner-section-heading">
                            <div>
                                <h2>Daftar Peralatan</h2>

                                <p>
                                    Kondisi perlengkapan
                                    operasional outlet
                                </p>
                            </div>
                        </div>

                        <div class="owner-table-wrapper">
                            <table>
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Nama peralatan</th>
                                        <th>Jenis</th>
                                        <th>Jumlah</th>
                                        <th>Kondisi</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    ${createEquipmentRows()}
                                </tbody>
                            </table>
                        </div>
                    </section>
                </main>
            </section>
        </div>
    `;

    bindMachineFilters();
}


function bindMachineFilters() {
    const typeFilter =
        document.getElementById(
            "machineTypeFilter"
        );

    const statusFilter =
        document.getElementById(
            "machineStatusFilter"
        );

    function updateMachineCards() {
        const selectedType =
            typeFilter.value;

        const selectedStatus =
            statusFilter.value;

        const result =
            ownerMachines.filter(
                (machine) => {
                    const typeMatch =
                        selectedType === "Semua" ||
                        machine.type ===
                            selectedType;

                    const statusMatch =
                        selectedStatus === "Semua" ||
                        machine.status ===
                            selectedStatus;

                    return (
                        typeMatch &&
                        statusMatch
                    );
                }
            );

        document.getElementById(
            "ownerMachineGrid"
        ).innerHTML =
            createMachineCards(result);
    }

    typeFilter.addEventListener(
        "change",
        updateMachineCards
    );

    statusFilter.addEventListener(
        "change",
        updateMachineCards
    );
}


function openMachineStatusEditor(machineId) {
    const machine =
        ownerMachines.find(
            (item) => item.id === machineId
        );

    if (!machine) {
        return;
    }

    const overlay =
        document.createElement("div");

    overlay.className =
        "detail-overlay";

    overlay.id =
        "ownerSimulationModal";

    overlay.innerHTML = `
        <article class="detail-dialog owner-modal small-modal">
            <div class="detail-dialog-header">
                <div>
                    <h2>Ubah Status Mesin</h2>
                    <p>${machine.name}</p>
                </div>

                <button
                    class="close-dialog"
                    onclick="closeOwnerSimulationModal()"
                >
                    ×
                </button>
            </div>

            <div class="form-field">
                <label>Status mesin</label>

                <select
                    id="editedMachineStatus"
                    onchange="toggleMachineActiveFields()"
                >
                    ${[
                        "Tersedia",
                        "Aktif",
                        "Tidak aktif",
                        "Perbaikan"
                    ]
                        .map((status) => {
                            return `
                                <option
                                    value="${status}"
                                    ${
                                        machine.status ===
                                        status
                                            ? "selected"
                                            : ""
                                    }
                                >
                                    ${status}
                                </option>
                            `;
                        })
                        .join("")}
                </select>
            </div>

            <div
                id="machineActiveFields"
                class="${
                    machine.status === "Aktif"
                        ? ""
                        : "hidden-field"
                }"
            >
                <div class="form-field">
                    <label>
                        Nama pelanggan
                    </label>

                    <input
                        type="text"
                        id="editedMachineCustomer"
                        value="${machine.customer || ""}"
                        placeholder="Nama pengguna mesin"
                    >
                </div>

                <div class="form-field">
                    <label>
                        Sisa waktu (menit)
                    </label>

                    <input
                        type="number"
                        id="editedMachineDuration"
                        min="1"
                        max="180"
                        value="${
                            machine.remainingMinutes ||
                            30
                        }"
                    >
                </div>
            </div>

            <div class="modal-button-row">
                <button
                    class="primary-button"
                    onclick="saveMachineStatus('${machine.id}')"
                >
                    Simpan perubahan
                </button>

                <button
                    class="secondary-button"
                    onclick="closeOwnerSimulationModal()"
                >
                    Batal
                </button>
            </div>
        </article>
    `;

    document.body.appendChild(
        overlay
    );
}


function toggleMachineActiveFields() {
    const status =
        document.getElementById(
            "editedMachineStatus"
        ).value;

    const fields =
        document.getElementById(
            "machineActiveFields"
        );

    fields.classList.toggle(
        "hidden-field",
        status !== "Aktif"
    );
}


function saveMachineStatus(machineId) {
    const machine =
        ownerMachines.find(
            (item) => item.id === machineId
        );

    const statusInput =
        document.getElementById(
            "editedMachineStatus"
        );

    if (!machine || !statusInput) {
        return;
    }

    machine.status =
        statusInput.value;

    if (machine.status === "Aktif") {
        const customerInput =
            document.getElementById(
                "editedMachineCustomer"
            );

        const durationInput =
            document.getElementById(
                "editedMachineDuration"
            );

        machine.customer =
            customerInput.value.trim() ||
            "Pelanggan umum";

        machine.remainingMinutes =
            Number(durationInput.value) ||
            30;
    } else {
        machine.customer = "";
        machine.remainingMinutes = 0;
    }

    saveMachineData();
    closeOwnerSimulationModal();
    showMachinesPage();

    showToast(
        "Status mesin berhasil diperbarui"
    );
}

/* =====================================================
   INFORMASI MESIN UNTUK USER / TAMU
===================================================== */

function getMachineAvailability() {
    const washingMachines =
        ownerMachines.filter(
            (machine) =>
                machine.type === "Mesin Cuci"
        );

    const dryers =
        ownerMachines.filter(
            (machine) =>
                machine.type === "Pengering"
        );

    return {
        availableWashers:
            washingMachines.filter(
                (machine) =>
                    machine.status === "Tersedia"
            ).length,

        activeWashers:
            washingMachines.filter(
                (machine) =>
                    machine.status === "Aktif"
            ).length,

        unavailableWashers:
            washingMachines.filter(
                (machine) =>
                    machine.status === "Perbaikan" ||
                    machine.status === "Tidak aktif"
            ).length,

        availableDryers:
            dryers.filter(
                (machine) =>
                    machine.status === "Tersedia"
            ).length,

        activeDryers:
            dryers.filter(
                (machine) =>
                    machine.status === "Aktif"
            ).length,

        unavailableDryers:
            dryers.filter(
                (machine) =>
                    machine.status === "Perbaikan" ||
                    machine.status === "Tidak aktif"
            ).length,

        queue:
            ownerOrders.filter(
                (order) =>
                    order.status === "Menunggu"
            ).length
    };
}


function createPublicMachineAvailability(laundry) {
    /*
     * Data mesin pemilik pada simulasi ini
     * terhubung ke laundry ID 1.
     */
    if (laundry.id !== 1) {
        return `
            <section class="public-machine-section unavailable-data">
                <div class="public-machine-title">
                    <h3>Ketersediaan Mesin</h3>
                </div>

                <p>
                    Informasi mesin belum tersedia untuk
                    laundry ini.
                </p>
            </section>
        `;
    }

    const availability =
        getMachineAvailability();

    const totalAvailable =
        availability.availableWashers +
        availability.availableDryers;

    const availabilityText =
        totalAvailable > 0
            ? "Mesin tersedia"
            : "Semua mesin penuh";

    return `
        <section class="public-machine-section">
            <div class="public-machine-title">
                <div>
                    <h3>Ketersediaan Mesin</h3>

                    <p>
                        Informasi diperbarui baru saja
                    </p>
                </div>

                <span
                    class="owner-status-badge ${
                        totalAvailable > 0
                            ? "available"
                            : "waiting"
                    }"
                >
                    ${availabilityText}
                </span>
            </div>

            <div class="public-machine-grid">
                <article class="public-machine-item">
                    <span>
                        Mesin cuci tersedia
                    </span>

                    <strong>
                        ${availability.availableWashers}
                    </strong>
                </article>

                <article class="public-machine-item">
                    <span>
                        Mesin cuci digunakan
                    </span>

                    <strong>
                        ${availability.activeWashers}
                    </strong>
                </article>

                <article class="public-machine-item">
                    <span>
                        Pengering tersedia
                    </span>

                    <strong>
                        ${availability.availableDryers}
                    </strong>
                </article>

                <article class="public-machine-item">
                    <span>Antrean</span>

                    <strong>
                        ${availability.queue} orang
                    </strong>
                </article>
            </div>

            <div class="public-machine-status-list">
                ${ownerMachines
                    .map((machine) => {
                        return `
                            <div class="public-machine-row">
                                <div>
                                    <strong>
                                        ${machine.name}
                                    </strong>

                                    <small>
                                        ${machine.capacity}
                                    </small>
                                </div>

                                <div>
                                    ${createOwnerStatusBadge(
                                        machine.status
                                    )}

                                    ${
                                        machine.status === "Aktif"
                                            ? `
                                                <small>
                                                    Sisa
                                                    ${machine.remainingMinutes}
                                                    menit
                                                </small>
                                            `
                                            : ""
                                    }
                                </div>
                            </div>
                        `;
                    })
                    .join("")}
            </div>

            <p class="machine-disclaimer">
                Status ini merupakan simulasi dan dapat
                berubah sewaktu-waktu.
            </p>
        </section>
    `;
}

function showOwnerPlaceholder(routeName) {
    const titles = {
        orders: "Pesanan",
        machines: "Mesin & Peralatan",
        finance: "Keuangan",
        profile: "Profil Outlet"
    };

    const title =
        titles[routeName] ||
        "Dashboard";

    app.innerHTML = `
        <div class="owner-layout">
            ${createOwnerSidebar(routeName)}

            <section class="owner-content">
                ${createOwnerHeader(title)}

                <main class="owner-main">
                    <article class="card owner-panel">
                        <h2>${title}</h2>

                        <p>
                            Halaman ${title} sudah dapat
                            dibuka. Data dinamis dapat
                            ditambahkan setelah database
                            dibuat.
                        </p>
                    </article>
                </main>
            </section>
        </div>
    `;
}


/* =====================================================
   EKSPOR DATA
===================================================== */

function exportData() {
    const headers = [
        "ID",
        "Nama Laundry",
        "Alamat",
        "Latitude",
        "Longitude",
        "Layanan",
        "Jam",
        "Pembayaran",
        "Telepon",
        "Kelurahan",
        "Status",
        "Fasilitas"
    ];

    const rows = laundryData.map(
        (laundry) => [
            laundry.laundryId,
            laundry.name,
            laundry.address,
            laundry.latitude ?? "",
            laundry.longitude ?? "",
            laundry.service,
            laundry.hours,
            laundry.payment,
            laundry.phone,
            laundry.area,
            laundry.status,
            laundry.facilities
        ]
    );

    const csvContent = [
        headers,
        ...rows
    ]
        .map((row) =>
            row
                .map(
                    (value) =>
                        `"${String(value).replaceAll(
                            '"',
                            '""'
                        )}"`
                )
                .join(";")
        )
        .join("\n");

    const file = new Blob(
        [csvContent],
        {
            type: "text/csv;charset=utf-8"
        }
    );

    const link =
        document.createElement("a");

    link.href =
        URL.createObjectURL(file);

    link.download =
        "data-temwash.csv";

    link.click();

    URL.revokeObjectURL(link.href);

    showToast(
        "Data berhasil diekspor"
    );
}


/* =====================================================
   EVENT UTAMA
===================================================== */

document.addEventListener(
    "click",
    (event) => {
        const routeButton =
            event.target.closest(
                "[data-route]"
            );

        if (routeButton) {
            navigateTo(
                routeButton.dataset.route
            );

            return;
        }

        const detailButton =
            event.target.closest(
                "[data-detail]"
            );

        if (detailButton) {
            showLaundryDetail(
                Number(
                    detailButton.dataset.detail
                )
            );

            return;
        }

        const routeLaundryButton =
            event.target.closest(
                "[data-route-laundry]"
            );

        if (routeLaundryButton) {
            openLaundryRoute(
                Number(
                    routeLaundryButton.dataset
                        .routeLaundry
                )
            );

            return;
        }

        const actionButton =
            event.target.closest(
                "[data-action]"
            );

        if (!actionButton) {
            return;
        }

        const action =
            actionButton.dataset.action;

        if (action === "my-location") {
            findUserLocation();
        }

        if (action === "close-detail") {
            closeLaundryDetail();
        }

        if (action === "export") {
            exportData();
        }

        if (action === "show-password") {
            const passwordInput =
                document.getElementById(
                    "ownerPassword"
                );

            if (passwordInput) {
                passwordInput.type =
                    passwordInput.type ===
                    "password"
                        ? "text"
                        : "password";
            }
        }
    }
);


/* =====================================================
   NAVIGASI HALAMAN
===================================================== */

function removeMap() {
    if (map) {
        map.remove();
        map = null;
    }

    markers = [];
    radiusCircle = null;
    userMarker = null;
}


function navigateTo(routeName) {
    if (
        window.location.hash !==
        "#" + routeName
    ) {
        window.location.hash =
            routeName;
    } else {
        renderRoute(routeName);
    }
}


function renderRoute(routeName) {
    removeMap();
    closeLaundryDetail();
    stopOrderCountdown();

    const currentRole =
        sessionStorage.getItem(
            "temwashRole"
        );

    const ownerRoutes = [
        "owner",
        "orders",
        "machines",
        "finance",
        "profile"
    ];

    if (routeName === "landing") {
        showLandingPage();
        return;
    }

    /*
     * Mencegah pelanggan atau tamu masuk
     * ke halaman khusus pemilik.
     */
    if (
        ownerRoutes.includes(routeName) &&
        currentRole !== "owner"
    ) {
        selectedLoginRole = "owner";

        if (
            window.location.hash !==
            "#login"
        ) {
            window.location.hash =
                "login";
        } else {
            showLoginPage();
        }

        return;
    }

    if (routeName === "login") {
        showLoginPage();
        return;
    }

    if (routeName === "map") {
        showMapPage();
        return;
    }

    if (routeName === "list") {
        showListPage();
        return;
    }

    if (routeName === "about") {
        showAboutPage();
        return;
    }

    if (routeName === "owner") {
        showOwnerDashboard();
        return;
    }

    if (routeName === "orders") {
        showOrdersPage();
        return;
    }

    if (routeName === "machines") {
        showMachinesPage();
        return;
    }

    if (
        ["finance", "profile"].includes(
            routeName
        )
    ) {
        showOwnerPlaceholder(routeName);
        return;
    }

    navigateTo("landing");
}


window.showLaundryDetail =
    showLaundryDetail;


window.addEventListener(
    "hashchange",
    () => {
        const routeName =
            window.location.hash
                .replace("#", "");

        renderRoute(
            routeName || "landing"
        );
    }
);


const initialRoute =
    window.location.hash
        .replace("#", "") ||
    "landing";

async function initializeApp() {
    await loadLaundryDataFromSupabase();

    renderRoute(initialRoute);
}

initializeApp();