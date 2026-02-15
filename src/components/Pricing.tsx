import { Check } from 'lucide-react';

const pricing = [
    {
        name: 'Tugas Ringan',
        price: 'Start 25k',
        description: 'Cocok untuk tugas harian atau fix bug kecil',
        features: ['Pengerjaan Cepat', 'Source Code', 'Revisi Minor', 'Konsultasi Gratis']
    },
    {
        name: 'Tugas Menengah',
        price: 'Start 100k',
        description: 'Untuk project akhir semester atau aplikasi sederhana',
        features: ['Full Stack Dev', 'Database Design', 'Laporan/Dokumentasi', 'Deploy ke Hosting', 'Revisi Major']
    },
    {
        name: 'Skripsi / TA',
        price: 'Custom',
        description: 'Full support dari judul sampai sidang',
        features: ['Analisis & Perancangan', 'Full Application', 'Bimbingan Intensif', 'Revisi Unlimited', 'Garansi Lulus']
    }
];

const Pricing = () => {
    return (
        <section id="pricing" className="py-20 px-6 bg-dark-lighter/20">
            <div className="container mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">
                        Harga <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-primary">Mahasiswa</span>
                    </h2>
                    <p className="text-gray-400">
                        Kualitas profesional dengan harga yang pas di kantong mahasiswa.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {pricing.map((tier, index) => (
                        <div key={index} className={`glass-card p-8 relative flex flex-col h-full ${index === 1 ? 'border-accent shadow-lg shadow-accent/20' : ''}`}>
                            {index === 1 && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-white px-4 py-1 rounded-full text-sm font-medium">
                                    Most Popular
                                </div>
                            )}
                            <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
                            <div className="text-3xl font-bold text-accent mb-4">{tier.price}</div>
                            <p className="text-gray-400 mb-8 text-sm">{tier.description}</p>

                            <ul className="space-y-4 mb-8 flex-grow">
                                {tier.features.map((feature, i) => (
                                    <li key={i} className="flex items-center gap-3 text-gray-300 text-sm">
                                        <Check className="w-4 h-4 text-accent" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            <a
                                href={`https://wa.me/6289530912249?text=${encodeURIComponent(`Halo kak, saya tertarik dengan paket *${tier.name}*. Boleh konsultasi dulu?`)}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-auto block text-center w-full py-3 rounded-xl font-medium transition-all bg-white/10 text-white hover:bg-accent hover:shadow-lg hover:shadow-accent/20 hover:-translate-y-1"
                            >
                                Pilih Paket
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Pricing;
