
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';

const faqs = [
    {
        question: 'Apakah source code projectnya akan diberikan?',
        answer: 'Tentu saja! Kami memberikan Full Source Code untuk setiap project yang Anda pesan. Anda bebas mempelajarinya, memodifikasinya, atau menggunakannya untuk keperluan presentasi sidang.'
    },
    {
        question: 'Berapa lama waktu pengerjaannya?',
        answer: 'Waktu pengerjaan bervariasi tergantung kompleksitas project. Untuk tugas ringan biasanya 1-3 hari, sedangkan untuk Skripsi/TA dan aplikasi kompleks bisa memakan waktu 1-4 minggu. Kami selalu berusaha menyesuaikan dengan deadline Anda.'
    },
    {
        question: 'Apakah ada garansi jika ada error?',
        answer: 'Ya, kami memberikan garansi perbaikan bug dan error secara GRATIS selama masa garansi (biasanya 1 minggu hingga 1 bulan tergantung paket). Kami juga siap membantu jika Anda mengalami kesulitan saat menjalankan aplikasi.'
    },
    {
        question: 'Apakah bisa revisi jika fitur kurang sesuai?',
        answer: 'Pasti! Kami menyediakan sesi revisi sesuai dengan paket yang Anda ambil. Revisi minor (perubahan kecil) biasanya unlimited selama masa pengerjaan, sedangkan revisi major (perubahan alur/fitur besar) akan didiskusikan lebih lanjut.'
    },
    {
        question: 'Bagaimana sistem pembayarannya?',
        answer: 'Sistem pembayaran kami fleksibel. Biasanya kami menerapkan sistem DP (Down Payment) sebesar 50% di awal untuk tanda jadi, dan pelunasan dilakukan setelah project selesai dan didemokan kepada Anda.'
    },
    {
        question: 'Apakah privasi saya aman?',
        answer: 'Sangat aman! Kami menjamin kerahasiaan identitas dan data project Anda. Kami tidak akan mempublikasikan project Anda tanpa izin tertulis dari Anda.'
    }
];

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section id="faq" className="py-20 px-6 bg-[#0f172a]/30">
            <div className="container mx-auto max-w-4xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">
                        Pertanyaan <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-primary">Umum</span>
                    </h2>
                    <p className="text-gray-400">
                        Hal-hal yang sering ditanyakan oleh teman-teman mahasiswa.
                    </p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={`border border-white/5 rounded-2xl overflow-hidden transition-all duration-300 ${activeIndex === index ? 'bg-white/5 border-accent/30 shadow-lg shadow-accent/10' : 'bg-transparent hover:bg-white/5'}`}
                        >
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                            >
                                <span className="flex items-center gap-4 font-bold text-lg text-white">
                                    <HelpCircle className={`w-6 h-6 flex-shrink-0 transition-colors ${activeIndex === index ? 'text-accent' : 'text-gray-500'}`} />
                                    {faq.question}
                                </span>
                                <ChevronDown
                                    className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${activeIndex === index ? 'rotate-180 text-accent' : ''}`}
                                />
                            </button>

                            <AnimatePresence>
                                {activeIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                                    >
                                        <div className="px-6 pb-6 pl-16 text-gray-300 leading-relaxed">
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
