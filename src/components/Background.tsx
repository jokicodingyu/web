
import { motion } from 'framer-motion';

const Background = () => {
    return (
        <div className="fixed inset-0 min-h-screen w-full overflow-hidden -z-20 pointer-events-none">
            {/* Top Left Purple Glow */}
            <motion.div
                animate={{
                    x: [0, 50, -50, 0],
                    y: [0, -50, 50, 0],
                    scale: [1, 1.2, 0.9, 1]
                }}
                transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-purple-600/30 rounded-full blur-[120px] mix-blend-screen"
            />
            {/* Bottom Right Blue Glow */}
            <motion.div
                animate={{
                    x: [0, -70, 30, 0],
                    y: [0, 50, -30, 0],
                    scale: [1, 1.1, 0.8, 1]
                }}
                transition={{
                    duration: 18,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 2
                }}
                className="absolute bottom-[-10%] right-[-10%] w-[700px] h-[700px] bg-blue-600/20 rounded-full blur-[120px] mix-blend-screen"
            />
            {/* Center subtle glow */}
            <motion.div
                animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.3, 0.5, 0.3]
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-indigo-500/10 rounded-full blur-[100px]"
            />
        </div>
    );
};

export default Background;
