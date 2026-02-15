import { Mail, MapPin, Phone, Instagram, Twitter, Github } from 'lucide-react';

const Footer = () => {
    return (
        <footer id="kontak" className="bg-dark-darker pt-10 pb-6 border-t border-white/5">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-4 gap-8 mb-8">
                    <div className="col-span-2">
                        <div className="text-3xl font-bold mb-4 font-inter tracking-tight">
                            <span className="text-cyan-300 drop-shadow-[0_0_10px_rgba(103,232,249,0.3)]">Joki</span>
                            <span className="text-fuchsia-400 drop-shadow-[0_0_10px_rgba(232,121,249,0.3)]">Coding</span>
                            <span className="text-purple-600 drop-shadow-[0_0_10px_rgba(147,51,234,0.3)]">Yu</span>
                        </div>
                        <p className="text-gray-400 max-w-sm mb-6 text-sm">
                            Partner terbaik mahasiswa IT. Fokus pada deadline kamu, biar kami yang urus kodingan dan teknisnya.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-accent hover:text-white transition-all">
                                <Instagram size={16} />
                            </a>
                            <a href="#" className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-accent hover:text-white transition-all">
                                <Twitter size={16} />
                            </a>
                            <a href="#" className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-accent hover:text-white transition-all">
                                <Github size={16} />
                            </a>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-base font-bold mb-4">Layanan</h4>
                        <ul className="space-y-2 text-gray-400 text-sm">
                            <li><a href="#" className="hover:text-accent transition-colors">Web Development</a></li>
                            <li><a href="#" className="hover:text-accent transition-colors">Mobile Apps</a></li>
                            <li><a href="#" className="hover:text-accent transition-colors">Data Science</a></li>
                            <li><a href="#" className="hover:text-accent transition-colors">IoT Projects</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-base font-bold mb-4">Kontak</h4>
                        <ul className="space-y-2 text-gray-400 text-sm">
                            <li className="flex items-center gap-2">
                                <Phone size={16} className="text-accent" />
                                <span>+62 895-3091-2249</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <Mail size={16} className="text-accent" />
                                <span>jokicodingyu@gmail.com</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <MapPin size={16} className="text-accent" />
                                <span>Surabaya, Indonesia</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="pt-6 border-t border-white/5 text-center text-gray-500 text-xs">
                    &copy; {new Date().getFullYear()} JokiCoding.Yu. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
