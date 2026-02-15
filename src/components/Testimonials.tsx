
import { Star, Quote } from 'lucide-react';
import { motion } from 'framer-motion';

const testimonials = [
    {
        name: 'Andi Pratama',
        role: 'Teknik Informatika - UB',
        content: 'Sangat membantu bangett! Deadline tinggal 2 hari tapi bisa selesai tepat waktu. Kodingannya rapi dan mudah dipahami pas sidang.',
        rating: 5,
        image: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&w=100&q=80'
    },
    {
        name: 'Siti Aminah',
        role: 'Sistem Informasi - UI',
        content: 'Harga bersahabat buat kantong mahasiswa. Revisi juga cepet tanggap. Recommended parah buat yang lagi pusing skripsi!',
        rating: 5,
        image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80'
    },
    {
        name: 'Rizky Fadillah',
        role: 'Teknik Komputer - ITS',
        content: 'Fiturnya sesuai request, malah ditambahin saran-saran yang bikin aplikasinya makin keren. Thanks kak udah bantuin!',
        rating: 5,
        image: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=100&q=80'
    },
    {
        name: 'Budi Santoso',
        role: 'Teknik Elektro - ITB',
        content: 'Projek IoT lancar jaya. Sensor-sensor kebaca semua, dan kodingannya rapi banget. Mantap!',
        rating: 5,
        image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80'
    },
    {
        name: 'Diana Putri',
        role: 'Teknologi Informasi - UGM',
        content: 'Awalnya ragu karena online, ternyata amanah banget. Adminnya ramah, dijelasin sampe ngerti. Sukses terus!',
        rating: 5,
        image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=100&q=80'
    },
    {
        name: 'Fajar Nugraha',
        role: 'Informatika - Telkom University',
        content: 'Website portofolio yang dibikin keren abis! Desainnya modern, animasinya smooth. Langsung dapet kerjaan abis lulus. Thanks!',
        rating: 5,
        image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=100&q=80'
    }
];

const Testimonials = () => {
    return (
        <section id="testimoni" className="py-20 px-6 relative overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute top-20 left-10 w-72 h-72 bg-purple-600/10 rounded-full blur-[100px] -z-10" />
            <div className="absolute bottom-20 right-10 w-72 h-72 bg-cyan-600/10 rounded-full blur-[100px] -z-10" />

            <div className="container mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">
                        Apa Kata <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-primary">Mereka?</span>
                    </h2>
                    <p className="text-gray-400">
                        Bukti nyata kepuasan teman-teman mahasiswa yang sudah lulus.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((item, index) => (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            key={index}
                            className="glass-card p-8 rounded-2xl border border-white/5 relative group hover:-translate-y-2 transition-transform duration-300"
                        >
                            <Quote className="absolute top-8 right-8 text-white/5 w-12 h-12 group-hover:text-accent/20 transition-colors" />

                            <div className="flex items-center gap-4 mb-6">
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="w-12 h-12 rounded-full object-cover border-2 border-accent"
                                />
                                <div>
                                    <h4 className="font-bold text-white">{item.name}</h4>
                                    <p className="text-xs text-gray-400">{item.role}</p>
                                </div>
                            </div>

                            <div className="flex gap-1 mb-4">
                                {[...Array(item.rating)].map((_, i) => (
                                    <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                                ))}
                            </div>

                            <p className="text-gray-300 leading-relaxed text-sm">
                                "{item.content}"
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
