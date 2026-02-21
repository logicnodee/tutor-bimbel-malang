import { motion } from 'framer-motion';
import { platformFeatures } from '../data/mockData';
import { Award, Video, Users, BookOpen } from 'lucide-react';

const iconMap = {
    Award: Award,
    Video: Video,
    Users: Users,
    BookOpen: BookOpen,
};

export default function Features() {
    return (
        <section id="benefits" className="py-24 bg-white relative">
            <div className="container mx-auto px-6 md:px-12">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-navy-900 mb-4 tracking-tight">
                        Mengapa Memilih Tutor Bimbel <span className="text-emerald-600">Malang</span>?
                    </h2>
                    <p className="text-slate-600 text-lg">
                        Kami menyediakan ekosistem belajar komprehensif yang telah terbukti membantu ribuan siswa meraih sekolah dan universitas impian mereka.
                    </p>
                </div>

                <div className="grid grid-cols-4 gap-2 md:gap-8">
                    {platformFeatures.map((feature, idx) => {
                        const IconComponent = iconMap[feature.icon];
                        return (
                            <motion.div
                                key={feature.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                                className="bg-slate-50 rounded-xl md:rounded-2xl p-2 md:p-8 hover:bg-emerald-50 hover:shadow-xl hover:shadow-emerald-500/10 transition-all group border border-slate-100 flex flex-col md:block items-center"
                            >
                                <div className="w-8 h-8 md:w-14 md:h-14 flex-shrink-0 bg-emerald-100 rounded-lg md:rounded-xl flex items-center justify-center text-emerald-600 mb-2 md:mb-6 group-hover:scale-110 group-hover:bg-emerald-600 group-hover:text-white transition-all shadow-sm">
                                    {IconComponent && <IconComponent className="w-4 h-4 md:w-7 md:h-7" />}
                                </div>
                                <div className="text-center md:text-left">
                                    <h3 className="text-[10px] md:text-xl font-bold text-navy-900 mb-1 md:mb-3 group-hover:text-emerald-700 transition-colors leading-tight">
                                        {feature.title}
                                    </h3>
                                    <p className="text-slate-600 leading-tight md:leading-relaxed text-[7px] md:text-sm break-words">
                                        {feature.description}
                                    </p>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
