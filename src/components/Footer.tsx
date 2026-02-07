import { Film, Facebook, Instagram, Twitter, Youtube } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Footer() {
    return (
        <footer className="bg-gradient-to-b from-black to-gray-950 border-t border-white/10">
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                    {/* Brand */}
                    <div>
                        <div className="flex items-center gap-2 mb-4">
                            <Film className="w-8 h-8 text-yellow-500" />
                            <span className="text-xl">Gogil Zenvogue OPC</span>
                        </div>
                        <p className="text-gray-400 mb-4">
                            Crafting compelling stories that inspire and entertain audiences across India and beyond.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="hover:text-yellow-500 transition-colors">
                                <Facebook className="w-5 h-5" />
                            </a>
                            <a href="#" className="hover:text-yellow-500 transition-colors">
                                <Instagram className="w-5 h-5" />
                            </a>
                            <a href="#" className="hover:text-yellow-500 transition-colors">
                                <Twitter className="w-5 h-5" />
                            </a>
                            <a href="#" className="hover:text-yellow-500 transition-colors">
                                <Youtube className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    {/* Policies */}
                    <div>
                        <h4 className="mb-4">Policies</h4>
                        <ul className="space-y-2 text-gray-400">
                            <li><Link to="/privacy-policy" className="hover:text-yellow-500 transition-colors">Privacy Policy</Link></li>
                            <li><Link to="/terms-and-conditions" className="hover:text-yellow-500 transition-colors">Terms & Conditions</Link></li>
                            <li><Link to="/cancellation-policy" className="hover:text-yellow-500 transition-colors">Cancellation Policy</Link></li>
                            <li><Link to="/refund-policy" className="hover:text-yellow-500 transition-colors">Refund Policy</Link></li>
                            <li><Link to="/delivery-policy" className="hover:text-yellow-500 transition-colors">Delivery / Service Policy</Link></li>
                            <li><Link to="/grievance-policy" className="hover:text-yellow-500 transition-colors">Grievance / Support Policy</Link></li>
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h4 className="mb-4">Company</h4>
                        <ul className="space-y-2 text-gray-400">
                            <li><a href="#" className="hover:text-yellow-500 transition-colors">About Us</a></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="mb-4">Contact</h4>
                        <ul className="space-y-2 text-gray-400">
                            <li>GOGIL ZENVOGUE OPC PRIVATE LIMITED</li>
                            <li>47/230 E, 2nd Floor, Ariyattil Building,</li>
                            <li>Near Arkkakadavu Bridge, Vennala (PO),</li>
                            <li>Ernakulam, Kerala, India – 682028</li>
                            <li>zenvogueproductions@gmail.com</li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 text-center text-gray-400">
                    <p>&copy; 2026 GOGIL ZENVOGUE OPC PRIVATE LIMITED All Rights Reserved</p>
                </div>
            </div>
        </footer>
    );
}