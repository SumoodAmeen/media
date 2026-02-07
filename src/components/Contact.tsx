import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useState } from 'react';

export function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission
        console.log('Form submitted:', formData);
        alert('Thank you for your message! We will get back to you soon.');
        setFormData({ name: '', email: '', phone: '', service: '', message: '' });
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <section id="contact" className="py-24 bg-black">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl mb-4">Get In Touch</h2>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        Ready to bring your vision to life? Let's start a conversation
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                    {/* Contact Information */}
                    <div>
                        <h3 className="text-2xl mb-8">Contact Information</h3>
                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="bg-yellow-500 rounded-full p-3">
                                    <MapPin className="w-6 h-6 text-black" />
                                </div>
                                <div>
                                    <h4 className="mb-1">Our Location</h4>
                                    <p className="text-gray-400">GOGIL ZENVOGUE OPC PRIVATE LIMITED
                                        47/230 E, 2nd Floor, Ariyattil Building,
                                        Near Arkkakadavu Bridge, Vennala (PO),
                                        Ernakulam, Kerala, India – 682028</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="bg-yellow-500 rounded-full p-3">
                                    <Phone className="w-6 h-6 text-black" />
                                </div>
                                <div>
                                    <h4 className="mb-1">Phone</h4>
                                    <p className="text-gray-400">+91 9567084303</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="bg-yellow-500 rounded-full p-3">
                                    <Mail className="w-6 h-6 text-black" />
                                </div>
                                <div>
                                    <h4 className="mb-1">Email</h4>
                                    <p className="text-gray-400">zenvogueproductions@gmail.com</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block mb-2">Full Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-green-500 transition-colors"
                                    placeholder="John Doe"
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block mb-2">Email Address</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-yellow-500 transition-colors"
                                    placeholder="john@example.com"
                                />
                            </div>

                            <div>
                                <label htmlFor="phone" className="block mb-2">Phone Number</label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-green-500 transition-colors"
                                    placeholder="+91 9567084303"
                                />
                            </div>

                            <div>
                                <label htmlFor="service" className="block mb-2">Service Interested In</label>
                                <select
                                    id="service"
                                    name="service"
                                    value={formData.service}
                                    onChange={handleChange}
                                    required
                                    className="w-full bg-black border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-yellow-500 transition-colors"
                                >
                                    <option value="">Select a service</option>
                                    <option value="video-production">Film & OTT Post-Production</option>
                                    <option value="cinematography">Video Editing & Color Grading</option>
                                    <option value="post-production">Sound Design & Re-Recording</option>
                                    <option value="music-video">Visual Effects (VFX)</option>
                                    <option value="tv-film">AI-Based Post-Production Solutions</option>
                                    <option value="social-media">Documentary & Digital Content Post-Production</option>
                                    <option value="social-media">Creative & Technical Consulting</option>
                                </select>
                            </div>

                            <div>
                                <label htmlFor="message" className="block mb-2">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows={4}
                                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-yellow-500 transition-colors resize-none"
                                    placeholder="Tell us about your project..."
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-yellow-500 hover:bg-yellow-600 text-black px-6 py-4 rounded-lg transition-colors flex items-center justify-center gap-2"
                            >
                                <Send className="w-5 h-5" />
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}