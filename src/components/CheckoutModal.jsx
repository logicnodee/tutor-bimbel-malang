import { motion, AnimatePresence } from 'framer-motion';
import { X, CreditCard, ShieldCheck } from 'lucide-react';
import { useState } from 'react';

export default function CheckoutModal({ isOpen, onClose, selectedPackage }) {
    const [formState, setFormState] = useState({ name: '', email: '', wa: '' });

    if (!isOpen || !selectedPackage) return null;

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Pendaftaran berhasil untuk ${formState.name} - Paket ${selectedPackage.name}`);
        onClose();
    };

    return (
        <AnimatePresence>
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                {/* Backdrop */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                    className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
                />

                {/* Modal Content */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: 20 }}
                    className="relative bg-white rounded-2xl md:rounded-3xl shadow-2xl w-full max-w-4xl max-h-[92vh] overflow-y-auto overflow-x-hidden flex flex-col md:grid md:grid-cols-2"
                >
                    {/* Universal Close Button */}
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 md:top-6 md:right-6 p-2 rounded-full hover:bg-slate-200 bg-white/90 backdrop-blur-sm text-slate-500 transition-colors z-[60] shadow-sm"
                    >
                        <X className="w-5 h-5 md:w-6 md:h-6" />
                    </button>

                    {/* Left Side - Form */}
                    <div className="p-6 md:p-10 flex flex-col justify-center order-2 md:order-1">
                        <h2 className="text-xl md:text-2xl font-bold text-navy-900 mb-2 mt-4 md:mt-0 w-[85%] md:w-full">Checkout Pendaftaran</h2>
                        <p className="text-slate-500 mb-6 text-xs md:text-sm">Silakan lengkapi data diri Anda untuk melanjutkan pembayaran.</p>

                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label className="block text-sm font-semibold text-slate-700 mb-1" htmlFor="name">Nama Lengkap Siswa</label>
                                <input
                                    type="text"
                                    id="name"
                                    required
                                    value={formState.name}
                                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 transition-all bg-slate-50"
                                    placeholder="Misal: Budi Santoso"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-slate-700 mb-1" htmlFor="email">Email Aktif</label>
                                <input
                                    type="email"
                                    id="email"
                                    required
                                    value={formState.email}
                                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 transition-all bg-slate-50"
                                    placeholder="budi@example.com"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-slate-700 mb-1" htmlFor="wa">Nomor WhatsApp</label>
                                <input
                                    type="tel"
                                    id="wa"
                                    required
                                    value={formState.wa}
                                    onChange={(e) => setFormState({ ...formState, wa: e.target.value })}
                                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 transition-all bg-slate-50"
                                    placeholder="0812xxxxxx"
                                />
                            </div>

                            <div className="pt-4">
                                <button
                                    type="submit"
                                    className="w-full flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white py-4 rounded-xl font-bold text-lg transition-all shadow-lg shadow-emerald-500/30 hover:shadow-xl"
                                >
                                    <CreditCard className="w-5 h-5" />
                                    Proses Pembayaran
                                </button>
                            </div>

                            <div className="flex items-center justify-center gap-2 text-xs text-slate-400 mt-4">
                                <ShieldCheck className="w-4 h-4 text-emerald-500" />
                                <span>Transaksi Anda dijamin aman dan terenkripsi.</span>
                            </div>
                        </form>
                    </div>

                    {/* Right Side - Summary */}
                    <div className="bg-transparent md:bg-slate-50 px-5 pt-4 pb-8 md:p-10 md:border-l border-slate-200 flex flex-col justify-center relative lg:bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] lg:bg-opacity-20 z-10 order-1 md:order-2">
                        <div className="bg-white rounded-2xl md:rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.06)] md:shadow-xl border border-slate-100 overflow-hidden relative">
                            {/* Header / Thumbnail Area */}
                            <div className="relative w-full h-40 bg-slate-200">
                                {selectedPackage.image && (
                                    <img
                                        src={selectedPackage.image}
                                        alt={selectedPackage.name}
                                        className="w-full h-full object-cover opacity-90"
                                    />
                                )}
                                <div className="absolute inset-0 bg-gradient-to-t from-navy-900 to-transparent opacity-90" />
                                <div className="absolute bottom-4 left-6 right-6">
                                    <span className="text-emerald-400 font-bold tracking-widest text-[10px] uppercase block mb-1">
                                        Ringkasan Order
                                    </span>
                                    <h3 className="text-2xl font-extrabold text-white leading-tight">
                                        {selectedPackage.name}
                                    </h3>
                                </div>
                            </div>

                            <div className="p-6 md:p-8">
                                <p className="text-sm text-slate-500 leading-relaxed mb-6 line-clamp-3">
                                    {selectedPackage.description}
                                </p>

                                {/* Receipt Details */}
                                <div className="border-t-2 border-dashed border-slate-200 pt-6 space-y-3">
                                    <div className="flex justify-between items-center text-sm font-medium text-slate-500">
                                        <span>Harga Paket</span>
                                        <span>Rp {selectedPackage.price}</span>
                                    </div>
                                    <div className="flex justify-between items-center text-sm font-medium text-slate-500">
                                        <span>Diskon Promo</span>
                                        <span className="text-emerald-500 font-bold">- 60%</span>
                                    </div>
                                    <div className="flex justify-between items-center text-sm font-medium text-slate-500">
                                        <span>Pajak & Biaya Layanan</span>
                                        <span>Gratis</span>
                                    </div>
                                </div>

                                {/* Total */}
                                <div className="border-t-2 border-dashed border-slate-200 mt-6 pt-6">
                                    <div className="flex justify-between items-end">
                                        <span className="text-slate-500 text-sm font-bold uppercase tracking-wider mb-1">Total Tagihan</span>
                                        <div className="flex items-baseline text-emerald-600">
                                            <span className="text-lg font-bold mr-1">Rp</span>
                                            <span className="text-3xl lg:text-4xl font-extrabold tracking-tight">{selectedPackage.price}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </AnimatePresence>
    );
}
