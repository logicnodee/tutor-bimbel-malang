import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle } from 'lucide-react';
import heroImg from '../assets/benner/benner.webp';

export default function Hero() {
    return (
        <section
            className="relative pt-20 pb-10 md:pt-28 md:pb-12 overflow-hidden min-h-[calc(100vh-80px)] flex items-center bg-cover bg-[position:85%_center] md:bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${heroImg})` }}
        >
            {/* Dark gradient overlay for text readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/80 md:via-slate-900/80 to-slate-900/40 md:to-slate-900/30 z-0"></div>

            <div className="container mx-auto px-6 md:px-12 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-3xl"
                >
                    <h1 className="text-3xl md:text-4xl lg:text-6xl font-extrabold text-white leading-tight mb-4 md:mb-6 tracking-tight">
                        Raih Prestasi Terbaik Bersama <span className="text-emerald-400">Tutor Bimbel Malang</span>.
                    </h1>

                    <p className="text-base md:text-lg text-slate-200 mb-6 md:mb-8 max-w-xl leading-relaxed">
                        Tingkatkan nilai akademis dan persiapkan diri menghadapi ujian dengan pendampingan belajar yang intensif dan interaktif bersama tutor berpengalaman.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 mb-8 md:mb-12">
                        <a
                            href="#pricing"
                            className="inline-flex justify-center items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white px-6 py-3 md:px-8 md:py-3.5 rounded-full font-bold shadow-lg shadow-emerald-500/20 transition-all hover:translate-y-[-2px] hover:shadow-xl text-sm md:text-base border border-emerald-500"
                        >
                            Lihat Paket Kelas
                            <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
                        </a>
                        <a
                            href="#benefits"
                            className="inline-flex justify-center items-center gap-2 bg-white/10 backdrop-blur-md text-white border border-white/30 hover:bg-white/20 px-6 py-3 md:px-8 md:py-3.5 rounded-full font-bold transition-all shadow-sm text-sm md:text-base"
                        >
                            Pelajari Lebih Lanjut
                        </a>
                    </div>

                    <div className="flex flex-wrap items-center gap-3 md:gap-5 text-sm text-slate-200 font-medium">
                        <div className="flex items-center gap-2 bg-slate-900/40 px-4 py-2 rounded-full border border-white/10 backdrop-blur-sm">
                            <CheckCircle className="w-4 h-4 text-emerald-400" />
                            Tutor Berpengalaman
                        </div>
                        <div className="flex items-center gap-2 bg-slate-900/40 px-4 py-2 rounded-full border border-white/10 backdrop-blur-sm">
                            <CheckCircle className="w-4 h-4 text-emerald-400" />
                            Terbukti Meningkatkan Nilai
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

// Inline missing icon since it is a small generic import for layout
function Award(props) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
            <circle cx="12" cy="8" r="6" />
            <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
        </svg>
    );
}
