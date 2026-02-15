
import { motion } from 'framer-motion';
import { Check, Code2, Terminal, Database, Cpu, Globe, Braces, Laptop, Settings, Zap, Layers } from 'lucide-react';

const FloatingIcon = ({ Icon, className, delay, size = 48 }: { Icon: any, className: string, delay: number, size?: number }) => (
    <motion.div
        initial={{ y: 0, opacity: 0 }}
        animate={{
            y: [-15, 15, -15],
            opacity: [0.15, 0.4, 0.15],
            rotate: [0, 8, -8, 0]
        }}
        transition={{
            duration: 6,
            delay: delay,
            repeat: Infinity,
            ease: "easeInOut"
        }}
        className={`absolute hidden md:block text-cyan-400/25 drop-shadow-[0_0_10px_rgba(34,211,238,0.1)] ${className}`}
    >
        <Icon size={size} />
    </motion.div>
);

const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center pt-32 pb-20 px-6" id="home">
            {/* Floating Tech Elements Desktop */}
            <FloatingIcon Icon={Code2} className="top-[15%] left-[10%]" delay={0} />
            <FloatingIcon Icon={Terminal} className="top-[12%] right-[15%]" delay={1.5} />
            <FloatingIcon Icon={Database} className="bottom-[15%] left-[8%]" delay={3} />
            <FloatingIcon Icon={Cpu} className="bottom-[20%] right-[10%]" delay={0.5} />
            <FloatingIcon Icon={Braces} className="top-[45%] right-[5%]" delay={2} />
            <FloatingIcon Icon={Globe} className="top-[35%] left-[5%]" delay={4} />
            <FloatingIcon Icon={Laptop} className="bottom-[35%] left-[20%]" delay={2.5} size={40} />
            <FloatingIcon Icon={Settings} className="top-[55%] right-[12%]" delay={1} size={36} />
            <FloatingIcon Icon={Zap} className="bottom-[10%] right-[25%]" delay={4.5} size={32} />
            <FloatingIcon Icon={Layers} className="top-[8%] left-[25%]" delay={2} size={32} />

            {/* Floating Tech Elements Mobile */}
            <motion.div
                animate={{ y: [-8, 8, -8], rotate: [0, 15, 0], opacity: [0.2, 0.4, 0.2] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute top-[15%] left-[10%] md:hidden text-purple-500/30"
            >
                <Code2 size={24} />
            </motion.div>
            <motion.div
                animate={{ y: [8, -8, 8], rotate: [0, -15, 0], opacity: [0.2, 0.4, 0.2] }}
                transition={{ duration: 5, repeat: Infinity, delay: 1 }}
                className="absolute bottom-[25%] right-[10%] md:hidden text-cyan-500/30"
            >
                <Terminal size={24} />
            </motion.div>
            <motion.div
                animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.3, 0.1] }}
                transition={{ duration: 6, repeat: Infinity, delay: 2 }}
                className="absolute top-[40%] right-[5%] md:hidden text-fuchsia-500/20"
            >
                <Braces size={20} />
            </motion.div>
            <div className="container mx-auto text-center max-w-5xl z-10 px-4 md:px-0">
                {/* Main Title */}
                <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tight mb-8 md:mb-10 font-inter">
                    <span className="text-cyan-300 drop-shadow-[0_0_15px_rgba(103,232,249,0.3)] block sm:inline">Joki</span>
                    <span className="text-fuchsia-400 drop-shadow-[0_0_15px_rgba(232,121,249,0.3)] block sm:inline">Coding</span>
                    <span className="text-purple-600 drop-shadow-[0_0_15px_rgba(147,51,234,0.3)] block sm:inline">Yu</span>
                </h1>

                {/* Subtitle */}
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-12 text-white text-shadow-lg">
                    Joki Coding & IT Murah dan Terpercaya
                </h2>

                {/* Description */}
                <p className="text-gray-300 text-lg md:text-xl leading-[1.8] max-w-3xl mx-auto mb-16 text-center">
                    Fokus pada targetmu, biar tim kami yang handle semua tugas coding, IoT, laporan,
                    desain, maupun tugas non-teknis.
                </p>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
                    <a href="https://wa.me/6289530912249?text=Halo%20kak%2C%20saya%20mau%20order%20joki%20coding"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-8 py-3.5 rounded-full bg-gradient-to-r from-fuchsia-500 to-cyan-400 text-white font-bold text-lg hover:opacity-90 transition-opacity shadow-[0_0_20px_rgba(232,121,249,0.4)]">
                        Pesan via WhatsApp
                    </a>
                    <a href="#portfolio"
                        className="px-8 py-3.5 rounded-full bg-white/5 border border-white/20 text-white font-medium text-lg hover:bg-white/10 transition-colors backdrop-blur-sm">
                        Lihat Portfolio
                    </a>
                </div>

                {/* Trust Indicators */}
                <div className="flex flex-wrap justify-center gap-6 md:gap-12 text-sm md:text-base text-gray-300 font-medium">
                    <div className="flex items-center gap-2">
                        <Check className="w-5 h-5 text-cyan-400" strokeWidth={3} />
                        <span>&gt;150 project selesai</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Check className="w-5 h-5 text-cyan-400" strokeWidth={3} />
                        <span>Harga mulai 25rb</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Check className="w-5 h-5 text-cyan-400" strokeWidth={3} />
                        <span>Response &lt; 10 menit</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
