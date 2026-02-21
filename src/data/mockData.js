import imgSD from '../assets/paket/sosialiasi kesehatan di sekolah.webp';
import imgSMP from '../assets/paket/pengenalan obat swamedikasi.webp';
import imgSMA from '../assets/paket/machung.webp';

// Mentor images
import imgHilda from '../assets/mentor/apt hilda srivaliana I, M.Farm.png';
import imgAmirah from '../assets/mentor/amirah aisahaisah (mahasiswa s1 informasi).png';
import imgDiaz from '../assets/mentor/diaz rahmi (mahasiswa s1 informasi).png';
import imgHelen from '../assets/mentor/helen ika (mahasiswa s1 informasi).png';
export const pricingPackages = [
    {
        id: "sosialisasi",
        name: "Sosialisasi Kesehatan",
        price: "199.000",
        description: "Edukasi penting mengenai cara tepat mendapatkan, menggunakan, menyimpan, dan membuang obat.",
        image: imgSD,
        features: [],
        isBestSeller: false,
        buttonText: "Daftar Sosialisasi",
    },
    {
        id: "swamedikasi",
        name: "Webinar Swamedikasi",
        price: "299.000",
        description: "Panduan pengobatan mandiri yang aman dan cerdas bersama para praktisi apotek berpengalaman.",
        image: imgSMP,
        features: [],
        isBestSeller: true,
        buttonText: "Daftar Webinar",
    },
    {
        id: "batch-v",
        name: "Pendaftaran Batch V",
        price: "499.000",
        description: "Program penerimaan profesi apoteker unggul Batch V Gelombang 1 untuk tahun ajaran baru.",
        image: imgSMA,
        features: [],
        isBestSeller: false,
        buttonText: "Daftar Batch V",
    },
];

export const platformFeatures = [
    {
        id: 1,
        title: "Tutor Akademik Ahli",
        description: "Dibimbing langsung oleh para tutor lulusan PTN ternama yang berpengalaman di bidangnya.",
        icon: "Award"
    },
    {
        id: 2,
        title: "Metode Belajar Teruji",
        description: "Sistem pendampingan efisien menggunakan konsep fun-learning dan problem-solving yang mudah dipahami.",
        icon: "Video"
    },
    {
        id: 3,
        title: "Grup Diskusi Belajar",
        description: "Diskusikan PR dan tugas sekolah di luar jam sesi privat pada grup diskusi khusus siswa.",
        icon: "Users"
    },
    {
        id: 4,
        title: "Modul & Soal Terupdate",
        description: "Kurikulum selalu disesuaikan dengan Kurikulum Merdeka dan standar soal ujian nasional terbaru.",
        icon: "BookOpen"
    }
];

export const mentors = [
    {
        id: 1,
        name: "apt. Hilda Srivaliana I, M.Farm.",
        role: "",
        university: "",
        image: imgHilda,
    },
    {
        id: 2,
        name: "Amirah Aisahaisah",
        role: "Mahasiswa S1 Informasi",
        university: "",
        image: imgAmirah,
    },
    {
        id: 3,
        name: "Diaz Rahmi",
        role: "Mahasiswa S1 Informasi",
        university: "",
        image: imgDiaz,
    },
    {
        id: 4,
        name: "Helen Ika",
        role: "Mahasiswa S1 Informasi",
        university: "",
        image: imgHelen,
    }
];
