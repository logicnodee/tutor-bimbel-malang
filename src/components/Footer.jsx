import { BookOpen } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-navy-900 border-t border-navy-800 text-slate-300 py-12 md:py-16">
            <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-4 gap-12 text-sm">
                <div className="md:col-span-2">
                    <a href="#" className="flex items-center gap-2 mb-6 group">
                        <div className="bg-emerald-500/10 p-2 rounded-xl">
                            <BookOpen className="text-emerald-500 w-6 h-6 group-hover:rotate-12 transition-transform" />
                        </div>
                        <span className="text-xl font-bold text-white tracking-tight">
                            Tutor Bimbel <span className="text-emerald-500">Malang</span>
                        </span>
                    </a>
                    <p className="text-slate-400 mb-6 max-w-sm leading-relaxed">
                        Lembaga bimbingan belajar terpercaya di Malang. Raih prestasi akademis dan wujudkan mimpimu masuk ke sekolah dan perguruan tinggi favorit.
                    </p>
                    <p className="text-slate-500 text-xs">
                        © {new Date().getFullYear()} Tutor Bimbel Malang. All rights reserved.
                    </p>
                </div>

                <div>
                    <h4 className="text-white font-bold mb-6 text-base tracking-wide uppercase">Menu</h4>
                    <ul className="space-y-4">
                        <li><a href="#courses" className="hover:text-emerald-400 transition-colors">Semua Kelas</a></li>
                        <li><a href="#benefits" className="hover:text-emerald-400 transition-colors">Keuntungan</a></li>
                        <li><a href="#pricing" className="hover:text-emerald-400 transition-colors">Biaya Layanan</a></li>
                        <li><a href="#" className="hover:text-emerald-400 transition-colors">Tentang Kami</a></li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-white font-bold mb-6 text-base tracking-wide uppercase">Bantuan</h4>
                    <ul className="space-y-4">
                        <li><a href="#" className="hover:text-emerald-400 transition-colors">Syarat & Ketentuan</a></li>
                        <li><a href="#" className="hover:text-emerald-400 transition-colors">Kebijakan Privasi</a></li>
                        <li><a href="#" className="hover:text-emerald-400 transition-colors">FAQ</a></li>
                        <li><a href="#" className="hover:text-emerald-400 transition-colors">Hubungi Kami</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}
