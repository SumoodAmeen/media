import { useState } from 'react';
import { Menu, X, Film } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

export function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    const scrollToSection = (id: string) => {
        setIsMenuOpen(false);
        if (location.pathname !== '/') {
            navigate('/');
            // Small timeout to allow navigation to complete before scrolling
            setTimeout(() => {
                const element = document.getElementById(id);
                element?.scrollIntoView({ behavior: 'smooth' });
            }, 100);
        } else {
            const element = document.getElementById(id);
            element?.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-sm border-b border-white/10">
            <div className="container mx-auto px-4 py-4">
                <nav className="flex items-center justify-between">
                    <button onClick={() => scrollToSection('home')} className="flex items-center gap-2 hover:opacity-80 transition-opacity">
                        <Film className="w-8 h-8 text-yellow-500" />
                        <span className="text-xl">GOGIL ZENVOGUE OPC</span>
                    </button>

                    {/* Desktop Navigation */}
                    <ul className="hidden md:flex items-center gap-8">
                        <li>
                            <button onClick={() => scrollToSection('home')} className="hover:text-yellow-500 transition-colors">
                                Home
                            </button>
                        </li>
                        <li>
                            <button onClick={() => scrollToSection('services')} className="hover:text-yellow-500 transition-colors">
                                Services
                            </button>
                        </li>
                        <li>
                            <button onClick={() => scrollToSection('portfolio')} className="hover:text-yellow-500 transition-colors">
                                Portfolio
                            </button>
                        </li>
                        <li>
                            <button onClick={() => scrollToSection('about')} className="hover:text-yellow-500 transition-colors">
                                About
                            </button>
                        </li>
                        <li>
                            <button
                                onClick={() => scrollToSection('contact')}
                                className="bg-yellow-500 hover:bg-yellow-600 text-black px-6 py-2 rounded-full transition-colors"
                            >
                                Contact Us
                            </button>
                        </li>
                    </ul>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </nav>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <div className="md:hidden mt-4 pb-4">
                        <ul className="flex flex-col gap-4">
                            <li>
                                <button onClick={() => scrollToSection('home')} className="hover:text-yellow-500 transition-colors">
                                    Home
                                </button>
                            </li>
                            <li>
                                <button onClick={() => scrollToSection('services')} className="hover:text-yellow-500 transition-colors">
                                    Services
                                </button>
                            </li>
                            <li>
                                <button onClick={() => scrollToSection('portfolio')} className="hover:text-yellow-500 transition-colors">
                                    Portfolio
                                </button>
                            </li>
                            <li>
                                <button onClick={() => scrollToSection('about')} className="hover:text-yellow-500 transition-colors">
                                    About
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={() => scrollToSection('contact')}
                                    className="bg-yellow-500 hover:bg-yellow-600 text-black px-6 py-2 rounded-full transition-colors text-left"
                                >
                                    Contact Us
                                </button>
                            </li>
                        </ul>
                    </div>
                )}
            </div>
        </header>
    );
}