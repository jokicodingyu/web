import { Code, Layout, Smartphone, Database, Server, Cpu } from 'lucide-react';

const services = [
    {
        icon: <Code className="w-8 h-8 text-accent" />,
        title: 'Web Development',
        description: 'Website responsive, modern, dan SEO friendly dengan teknologi terbaru (React, Next.js, Laravel).'
    },
    {
        icon: <Smartphone className="w-8 h-8 text-accent" />,
        title: 'Mobile App',
        description: 'Aplikasi Android & iOS native atau hybrid (Flutter/React Native) yang performa tinggi.'
    },
    {
        icon: <Database className="w-8 h-8 text-accent" />,
        title: 'Data Science & AI',
        description: 'Analisis data, machine learning, dan visualisasi data untuk kebutuhan skripsi atau bisnis.'
    },
    {
        icon: <Server className="w-8 h-8 text-accent" />,
        title: 'Backend & API',
        description: 'REST API yang aman dan scalable, database optimization, dan cloud deployment.'
    },
    {
        icon: <Layout className="w-8 h-8 text-accent" />,
        title: 'UI/UX Design',
        description: 'Desain antarmuka yang menarik, user-friendly, dan modern (Figma/Adobe XD).'
    },
    {
        icon: <Cpu className="w-8 h-8 text-accent" />,
        title: 'IoT (Internet of Things)',
        description: 'Perancangan sistem IoT, integrasi sensor, monitoring data realtime, dan otomasi perangkat keras.'
    }
];

const Services = () => {
    return (
        <section id="layanan" className="py-20 px-6 relative">
            <div className="container mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">
                        Layanan <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-primary">Unggulan</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Kami menyediakan solusi teknologi lengkap untuk membantu tugas dan project kamu selesai dengan hasil terbaik.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div key={index} className="glass-card p-8 hover:bg-white/10 transition-all duration-300 group hover:-translate-y-2">
                            <div className="mb-6 p-4 rounded-2xl bg-white/5 w-fit group-hover:bg-primary/20 transition-colors">
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                            <p className="text-gray-400 leading-relaxed">
                                {service.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
