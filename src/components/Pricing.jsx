import { useState, useEffect } from 'react';
import { Timer } from 'lucide-react';
import { pricingPackages } from '../data/mockData';

export default function Pricing({ onOpenCheckout }) {
    // Generate an initial random countdown sequence (e.g., 2 hours, 45 minutes)
    const [timeLeft, setTimeLeft] = useState(
        (2 * 3600) + (45 * 60) + 30 // 2h 45m 30s
    );

    useEffect(() => {
        const timerId = setInterval(() => {
            setTimeLeft(prev => (prev > 0 ? prev - 1 : 0));
        }, 1000);
        return () => clearInterval(timerId);
    }, []);

    const formatTime = (seconds, compact = false) => {
        const h = Math.floor(seconds / 3600);
        const m = Math.floor((seconds % 3600) / 60);
        const s = seconds % 60;
        if (compact) {
            return `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
        }
        return `${h.toString().padStart(2, '0')}j : ${m.toString().padStart(2, '0')}m : ${s.toString().padStart(2, '0')}d`;
    };

    // Helper to calculate a fake normal/original price
    const getOriginalPrice = (discountedPrice) => {
        const numPrice = parseInt(discountedPrice.replace('.', ''));
        // roughly a 60% discount scheme, make it look nice
        const originalPrice = Math.floor(numPrice * 2.5);
        // format back heavily (e.g., 199.000 -> 499.000 roughly)
        return originalPrice.toLocaleString('id-ID').replace(/,/g, '.');
    };

    return (
        <section id="pricing" className="py-12 md:py-24">


            <div className="mx-auto md:px-12">
                <div className="text-center max-w-3xl mx-auto mb-8 md:mb-20 px-4 md:px-0">
                    <span className="text-emerald-600 font-bold uppercase tracking-wider text-[10px] md:text-sm mb-2 md:mb-3 block">
                        Program Belajar
                    </span>
                    <h2 className="text-2xl md:text-5xl font-extrabold text-navy-900 mb-3 md:mb-6 tracking-tight">
                        Pilih Paket Bimbingan Bulan Ini
                    </h2>
                    <p className="text-slate-600 text-xs md:text-lg">
                        Dapatkan harga spesial sebelum waktu promo eksklusif ini habis secara otomatis!
                    </p>
                </div>

                <div className="flex md:grid md:grid-cols-3 gap-2 md:gap-8 max-w-6xl mx-auto items-stretch md:items-center overflow-x-auto pb-4 snap-x snap-mandatory px-3 md:px-0 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                    {pricingPackages.map((pkg, idx) => (
                        <div
                            key={pkg.id}
                            className={`relative bg-white rounded-xl md:rounded-3xl flex flex-col group transition-all duration-300 overflow-hidden w-[30vw] min-w-[30vw] max-w-[30vw] md:min-w-0 md:max-w-none md:w-auto snap-center shrink-0 ${pkg.isBestSeller
                                ? 'border-2 border-emerald-500 shadow-xl md:shadow-2xl shadow-emerald-500/20 md:-translate-y-2 z-20'
                                : 'border border-slate-200 shadow hover:shadow-lg z-10 md:hover:-translate-y-2'
                                }`}
                        >
                            {/* Best Seller Label */}
                            {pkg.isBestSeller && (
                                <div className="absolute top-0 right-0 bg-gradient-to-bl from-emerald-500 to-teal-400 text-white px-2 py-1 md:px-5 md:py-2 font-bold text-[7px] md:text-sm shadow-md z-30 rounded-bl-xl md:rounded-bl-2xl">
                                    BEST SELLER
                                </div>
                            )}

                            {pkg.image && (
                                <div className="w-full aspect-[4/3] md:aspect-[4/3] rounded-t-xl overflow-hidden bg-slate-100 border-b border-slate-100 relative">
                                    <img
                                        src={pkg.image}
                                        alt={pkg.name}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                </div>
                            )}

                            <div className="p-2 md:p-5 flex-grow flex flex-col items-center justify-center text-center">
                                <h3 className="text-[10px] md:text-xl font-bold text-navy-900 leading-tight mb-1 md:mb-3">
                                    {pkg.name}
                                </h3>

                                <p className="text-[8px] md:text-xs text-slate-500 leading-snug mb-2 md:mb-4 px-0.5 md:px-2 line-clamp-2 md:line-clamp-3">
                                    {pkg.description}
                                </p>

                                {/* Harga Coret (Strikethrough) */}
                                <div className="flex flex-col items-center mb-2 md:mb-4">
                                    <div className="flex items-center justify-center gap-1 md:gap-2 mb-0.5">
                                        <span className="text-[8px] md:text-sm text-slate-400 line-through decoration-rose-500 decoration-1 md:decoration-2 font-medium">
                                            Rp {getOriginalPrice(pkg.price)}
                                        </span>
                                        <span className="bg-rose-500 text-white font-black text-[6px] md:text-[10px] px-1 md:px-2 py-0.5 rounded-full shadow-sm animate-bounce">
                                            -60%
                                        </span>
                                    </div>
                                    <div className="flex items-baseline text-emerald-600">
                                        <span className="text-[8px] md:text-lg font-bold mr-0.5">Rp</span>
                                        <span className="text-sm md:text-4xl font-extrabold tracking-tight">{pkg.price}</span>
                                    </div>
                                </div>

                                {/* Countdown Jam */}
                                <div className="mb-2 md:mb-4 bg-rose-50 border border-rose-100 px-1 md:px-3 py-0.5 md:py-1.5 w-full rounded-md md:rounded-lg flex items-center justify-center gap-0.5 md:gap-1">
                                    <Timer className="hidden md:block w-4 h-4 animate-pulse text-rose-500" />
                                    <span className="text-rose-500 font-black font-mono text-[7px] md:text-sm">
                                        <span className="hidden md:inline">Berakhir </span>
                                        <span className="md:hidden">{formatTime(timeLeft, true)}</span>
                                        <span className="hidden md:inline">{formatTime(timeLeft)}</span>
                                    </span>
                                </div>

                                <button
                                    onClick={() => onOpenCheckout(pkg)}
                                    className="w-full py-1.5 md:py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-md md:rounded-lg text-[7px] md:text-[13px] border border-emerald-500 shadow shadow-emerald-500/20 transition-all hover:-translate-y-0.5 hover:shadow-emerald-500/40"
                                >
                                    Pilih & Checkout Paket
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
