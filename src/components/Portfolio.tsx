import { useState } from 'react';
import { ExternalLink, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const projects = [
    {
        title: 'E-Commerce Dashboard',
        category: 'Web Application',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
        tech: ['React', 'Tailwind', 'Node.js'],
        description: 'Dashboard admin lengkap untuk manajemen toko online. Dilengkapi dengan fitur tracking penjualan real-time, manajemen stok barang, laporan keuangan bulanan, dan integrasi payment gateway. Dibangun dengan performa tinggi dan desain responsif.'
    },
    {
        title: 'Smart Home IoT System',
        category: 'Internet of Things',
        image: 'https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?auto=format&fit=crop&w=800&q=80',
        tech: ['Arduino', 'Python', 'MQTT'],
        description: 'Sistem kendali rumah pintar berbasis IoT yang memungkinkan pengguna mengontrol lampu, AC, dan kunci pintu melalui aplikasi smartphone. Menggunakan protokol MQTT untuk komunikasi data yang cepat dan efisien, serta dilengkapi sistem keamanan deteksi gerak.'
    },
    {
        title: 'Mobile Banking App',
        category: 'Mobile Development',
        image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80',
        tech: ['Flutter', 'Firebase'],
        description: 'Aplikasi mobile banking dengan keamanan tingkat tinggi (biometrik login). Fitur unggulan meliputi transfer antar bank, pembayaran QRIS, top-up e-wallet, dan pencatatan pengeluaran otomatis. Desain UI/UX yang intuitif memudahkan pengguna segala usia.'
    },
    {
        title: 'AI Image Generator',
        category: 'Artificial Intelligence',
        image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80',
        tech: ['Python', 'PyTorch', 'React'],
        description: 'Aplikasi web yang menggunakan Generative Adversarial Networks (GANs) untuk membuat gambar fotorealistik dari deskripsi teks. Memungkinkan seniman dan desainer untuk menghasilkan konsep visual dengan cepat dan mudah.'
    },
    {
        title: 'SaaS Analytics Platform',
        category: 'SaaS Application',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
        tech: ['Vue.js', 'D3.js', 'AWS'],
        description: 'Platform analitik berbasis cloud untuk bisnis SaaS guna melacak MRR, churn, dan metrik keterlibatan pengguna dengan visualisasi interaktif. Memberikan wawasan mendalam untuk pengambilan keputusan bisnis yang lebih baik.'
    },
    {
        title: 'Blockchain Voting System',
        category: 'Web3 / Blockchain',
        image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=800&q=80',
        tech: ['Solidity', 'Ethereum', 'Web3.js'],
        description: 'Aplikasi pemungutan suara terdesentralisasi yang menjamin transparansi dan keamanan hasil pemilihan menggunakan smart contract Ethereum. Menghilangkan risiko manipulasi data dan memastikan setiap suara terhitung secara akurat.'
    }
];

const Portfolio = () => {
    const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

    return (
        <section id="portfolio" className="py-20 px-6 relative">
            <div className="container mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">
                        Project <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-primary">Terbaru</span>
                    </h2>
                    <p className="text-gray-400">
                        Beberapa hasil karya yang telah kami kerjakan.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            layoutId={`project-${index}`}
                            key={index}
                            onClick={() => setSelectedProject(project)}
                            className="group relative rounded-2xl overflow-hidden glass-card border-0 cursor-pointer"
                            whileHover={{ y: -10 }}
                        >
                            <div className="aspect-video overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-[#0f172a]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                                <span className="text-cyan-400 text-sm font-bold mb-1 uppercase tracking-wider">{project.category}</span>
                                <h3 className="text-xl font-bold mb-2 text-white">{project.title}</h3>
                                <p className="text-sm text-gray-300 line-clamp-2 mb-4">
                                    {project.description}
                                </p>
                                <div className="flex gap-2 mb-4 flex-wrap">
                                    {project.tech.map((t, i) => (
                                        <span key={i} className="text-xs px-2 py-1 rounded bg-white/20 backdrop-blur-md text-white border border-white/10">
                                            {t}
                                        </span>
                                    ))}
                                </div>
                                <span className="flex items-center gap-2 text-sm font-medium text-fuchsia-400">
                                    Lihat Detail <ExternalLink size={16} />
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            <AnimatePresence>
                {selectedProject && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedProject(null)}
                            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                        />
                        <motion.div
                            layoutId={`project-${projects.indexOf(selectedProject)}`}
                            className="relative w-full max-w-2xl bg-[#1e1b4b] rounded-2xl overflow-hidden shadow-2xl border border-white/10"
                        >
                            <button
                                onClick={() => setSelectedProject(null)}
                                className="absolute top-4 right-4 p-2 bg-black/50 rounded-full text-white hover:bg-black/70 transition-colors z-10"
                            >
                                <X size={20} />
                            </button>

                            <div className="h-64 sm:h-80 overflow-hidden">
                                <img
                                    src={selectedProject.image}
                                    alt={selectedProject.title}
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            <div className="p-8">
                                <span className="text-cyan-400 text-sm font-bold uppercase tracking-wider mb-2 block">
                                    {selectedProject.category}
                                </span>
                                <h3 className="text-3xl font-bold mb-4 text-white">{selectedProject.title}</h3>

                                <div className="flex gap-2 mb-6 flex-wrap">
                                    {selectedProject.tech.map((t, i) => (
                                        <span key={i} className="px-3 py-1 rounded-full bg-white/10 text-gray-300 text-sm border border-white/5">
                                            {t}
                                        </span>
                                    ))}
                                </div>

                                <p className="text-gray-300 leading-relaxed text-lg mb-8">
                                    {selectedProject.description}
                                </p>

                                <a
                                    href={`https://wa.me/6289530912249?text=${encodeURIComponent(`Halo kak, saya tertarik dengan project *${selectedProject.title}*. Boleh minta info lebih lanjut?`)}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full sm:w-auto px-8 py-3 bg-gradient-to-r from-fuchsia-600 to-purple-600 hover:from-fuchsia-500 hover:to-purple-500 text-white rounded-xl font-bold transition-all shadow-lg shadow-purple-900/20 inline-block text-center"
                                >
                                    Order Project Serupa
                                </a>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </section>

    );
};

export default Portfolio;
