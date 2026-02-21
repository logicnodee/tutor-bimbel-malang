import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { BookOpen } from 'lucide-react';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className={`fixed w-full top-0 z-50 transition-all duration-300 ${scrolled ? 'glassmorphism shadow-md py-3' : 'bg-transparent py-5'
                }`}
        >
            <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
                <a href="#" className="flex items-center gap-2 group">
                    <BookOpen className={`w-8 h-8 group-hover:rotate-12 transition-all ${scrolled ? 'text-emerald-600' : 'text-emerald-400'}`} />
                    <span className={`text-xl font-bold tracking-tight transition-colors ${scrolled ? 'text-slate-800' : 'text-white'}`}>
                        Tutor Bimbel <span className={scrolled ? 'text-emerald-600' : 'text-emerald-400'}>Malang</span>
                    </span>
                </a>

                <div className={`hidden md:flex gap-8 items-center font-medium transition-colors ${scrolled ? 'text-slate-600' : 'text-slate-200'}`}>
                    <a href="#benefits" className={`${scrolled ? 'hover:text-emerald-600' : 'hover:text-emerald-400'} transition-colors`}>Benefits</a>
                    <a href="#pricing" className={`${scrolled ? 'hover:text-emerald-600' : 'hover:text-emerald-400'} transition-colors`}>Pricing</a>
                </div>
            </div>
        </motion.nav>
    );
}
