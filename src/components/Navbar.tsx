


import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import logoJcy from '../assets/logo-jcy.png';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'Layanan', href: '#layanan' },
        { name: 'Portfolio', href: '#portfolio' },
        { name: 'Testimoni', href: '#testimoni' },
        { name: 'Kontak', href: '#kontak' },
    ];

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-[#1e1b4b]/80 backdrop-blur-md border-b border-white/5">
            <div className="container mx-auto px-6 py-4 flex items-center justify-between">
                {/* Logo */}
                <div className="flex items-center">
                    <img src={logoJcy} alt="JokiCodingYu Logo" className="h-8 w-auto object-contain" />
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center space-x-8 text-gray-300 text-sm font-medium">
                    {navLinks.map((link) => (
                        <a key={link.name} href={link.href} className="hover:text-white transition-colors">
                            {link.name}
                        </a>
                    ))}
                </div>

                {/* CTA Button Desktop */}
                <a href="https://wa.me/6289530912249?text=Halo%20kak%2C%20saya%20mau%20order%20joki%20coding"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hidden md:flex bg-white/5 hover:bg-white/10 text-white px-6 py-2.5 rounded-full border border-white/10 transition-all font-medium text-sm backdrop-blur-sm">
                    Chat WhatsApp
                </a>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-white p-2"
                    onClick={toggleMenu}
                    aria-label="Toggle menu"
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            {isOpen && (
                <div className="md:hidden absolute top-full left-0 right-0 bg-[#1e1b4b] border-b border-white/10 p-6 flex flex-col space-y-4 shadow-xl">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-gray-300 hover:text-white text-lg font-medium py-2 border-b border-white/5 last:border-0"
                            onClick={() => setIsOpen(false)}
                        >
                            {link.name}
                        </a>
                    ))}
                    <a href="https://wa.me/6289530912249?text=Halo%20kak%2C%20saya%20mau%20order%20joki%20coding"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full mt-4 bg-gradient-to-r from-fuchsia-500 to-cyan-400 text-white px-6 py-3 rounded-xl font-bold block text-center">
                        Chat WhatsApp
                    </a>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
