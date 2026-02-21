import { motion } from 'framer-motion';
import { mentors } from '../data/mockData';
import { GraduationCap } from 'lucide-react';

export default function Mentors() {
    return (
        <section id="mentors" className="py-8 md:py-10 bg-white relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

            <div className="container mx-auto px-6 md:px-12 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-6 md:mb-8">
                    <span className="text-emerald-600 font-bold uppercase tracking-wider text-sm mb-3 block">Tim Pengajar Kami</span>
                    <h2 className="text-3xl md:text-4xl font-extrabold text-navy-900 mb-6 tracking-tight">
                        Belajar Bersama <span className="text-emerald-600">Terbaik</span>
                    </h2>
                    <p className="text-slate-600 text-lg">
                        Tutor kami adalah mahasiswa berprestasi dan alumni dari Perguruan Tinggi Negeri terbaik di Indonesia yang berdedikasi tinggi.
                    </p>
                </div>

                <div className="max-w-5xl mx-auto px-1 md:px-0">
                    <div className="grid grid-cols-4 gap-1.5 md:gap-6 mx-auto">
                        {mentors.map((mentor, idx) => (
                            <motion.div
                                key={mentor.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                                className={`bg-white rounded-xl md:rounded-3xl overflow-hidden shadow-lg border group hover:-translate-y-2 transition-transform duration-300 ${idx === 0 ? 'border-emerald-200 shadow-emerald-500/20' : 'border-slate-100'}`}
                            >
                                <div className="aspect-[4/5] overflow-hidden bg-slate-200 relative">
                                    <img
                                        src={mentor.image}
                                        alt={mentor.name}
                                        className="w-full h-full object-cover transition-all duration-700"
                                    />
                                    {/* Gradient overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-navy-900/40 to-transparent opacity-90 transition-opacity duration-300" />

                                    <div className="absolute bottom-0 left-0 w-full p-1.5 md:p-5 text-center flex flex-col items-center justify-end h-full">
                                        {idx === 0 && (
                                            <div className="mb-1 md:mb-2 inline-block px-1.5 md:px-3 py-0.5 md:py-1 bg-emerald-500 text-white text-[5px] md:text-[10px] font-bold rounded-full shadow-lg">
                                                HEAD TUTOR
                                            </div>
                                        )}
                                        <h3 className={`font-extrabold text-white leading-tight ${idx === 0 ? 'text-[8px] md:text-base mb-0.5 md:mb-1' : 'text-[7px] md:text-sm mb-0.5 md:mb-1'}`}>{mentor.name}</h3>

                                        {mentor.role && (
                                            <p className={`text-emerald-400 font-medium truncate w-full ${idx === 0 ? 'text-[6px] md:text-xs' : 'text-[5px] md:text-[10px]'}`}>{mentor.role}</p>
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
