
import { motion } from 'framer-motion';

const techStacks = [
    { name: 'React', color: '#61DAFB', icon: '⚛️' },
    { name: 'Vue.js', color: '#4FC08D', icon: '💚' },
    { name: 'Node.js', color: '#339933', icon: '🟢' },
    { name: 'Python', color: '#3776AB', icon: '🐍' },
    { name: 'Java', color: '#007396', icon: '☕' },
    { name: 'PHP', color: '#777BB4', icon: '🐘' },
    { name: 'Laravel', color: '#FF2D20', icon: '🔴' },
    { name: 'MySQL', color: '#4479A1', icon: '🐬' },
    { name: 'PostgreSQL', color: '#336791', icon: '🐘' },
    { name: 'MongoDB', color: '#47A248', icon: '🍃' },
    { name: 'Firebase', color: '#FFCA28', icon: '🔥' },
    { name: 'Flutter', color: '#02569B', icon: '💙' },
    { name: 'Docker', color: '#2496ED', icon: '🐳' },
    { name: 'AWS', color: '#FF9900', icon: '☁️' },
    { name: 'Git', color: '#F05032', icon: '🐙' },
    { name: 'TypeScript', color: '#3178C6', icon: '📘' },
    { name: 'Tailwind', color: '#06B6D4', icon: '🌊' },
    { name: 'Bootstrap', color: '#7952B3', icon: '🅱️' },
];

const TechStack = () => {
    const doubledTechStacks = [...techStacks, ...techStacks];

    return (
        <section className="py-10 bg-[#0f172a]/50 border-y border-white/5 overflow-hidden">
            <div className="flex overflow-hidden">
                <motion.div
                    className="flex gap-16 px-8 min-w-max"
                    animate={{
                        x: ['0%', '-50%']
                    }}
                    transition={{
                        duration: 30,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                >
                    {doubledTechStacks.map((tech, index) => (
                        <div key={index} className="flex items-center gap-3 group">
                            <span className="text-3xl filter grayscale group-hover:grayscale-0 transition-all duration-300">
                                {tech.icon}
                            </span>
                            <span className="text-xl font-bold text-gray-400 group-hover:text-white transition-colors">
                                {tech.name}
                            </span>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default TechStack;
