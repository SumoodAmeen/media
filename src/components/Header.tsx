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
        <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200/50 shadow-sm">
            <div className="container mx-auto px-4 py-4">
                <nav className="flex items-center justify-between">
                    <button onClick={() => scrollToSection('home')} className="flex items-center gap-2 hover:opacity-80 transition-opacity">
                        <Film className="w-8 h-8 text-teal-600" />
                        <span className="text-xl font-bold text-gray-900">GOGIL ZENVOGUE OPC</span>
                    </button>

                    {/* Desktop Navigation */}
                    <ul className="hidden md:flex items-center gap-8">
                        <li>
                            <button onClick={() => scrollToSection('home')} className="text-gray-600 hover:text-teal-600 transition-colors font-medium">
                                Home
                            </button>
                        </li>
                        <li>
                            <button onClick={() => scrollToSection('services')} className="text-gray-600 hover:text-teal-600 transition-colors font-medium">
                                Services
                            </button>
                        </li>
                        <li>
                            <button onClick={() => scrollToSection('portfolio')} className="text-gray-600 hover:text-teal-600 transition-colors font-medium">
                                Portfolio
                            </button>
                        </li>
                        <li>
                            <button onClick={() => scrollToSection('about')} className="text-gray-600 hover:text-teal-600 transition-colors font-medium">
                                About
                            </button>
                        </li>
                        <li>
                            <button
                                onClick={() => scrollToSection('contact')}
                                className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-2 rounded-full transition-colors font-medium"
                            >
                                Contact Us
                            </button>
                        </li>
                    </ul>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-gray-900"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </nav>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <div className="md:hidden mt-4 pb-4 border-t border-gray-100 pt-4">
                        <ul className="flex flex-col gap-4">
                            <li>
                                <button onClick={() => scrollToSection('home')} className="text-gray-600 hover:text-teal-600 transition-colors w-full text-left">
                                    Home
                                </button>
                            </li>
                            <li>
                                <button onClick={() => scrollToSection('services')} className="text-gray-600 hover:text-teal-600 transition-colors w-full text-left">
                                    Services
                                </button>
                            </li>
                            <li>
                                <button onClick={() => scrollToSection('portfolio')} className="text-gray-600 hover:text-teal-600 transition-colors w-full text-left">
                                    Portfolio
                                </button>
                            </li>
                            <li>
                                <button onClick={() => scrollToSection('about')} className="text-gray-600 hover:text-teal-600 transition-colors w-full text-left">
                                    About
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={() => scrollToSection('contact')}
                                    className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-2 rounded-full transition-colors w-full text-center"
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