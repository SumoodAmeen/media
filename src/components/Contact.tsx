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
        <section id="contact" className="py-24 bg-teal-500">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl mb-4 text-white font-bold">Get In Touch</h2>
                    <p className="text-xl text-gray-900 font-medium max-w-2xl mx-auto">
                        Ready to bring your vision to life? Let's start a conversation
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                    {/* Contact Information */}
                    <div>
                        <h3 className="text-2xl mb-8 text-white font-semibold">Contact Information</h3>
                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="bg-white rounded-full p-3 shadow-sm">
                                    <MapPin className="w-6 h-6 text-teal-600" />
                                </div>
                                <div>
                                    <h4 className="mb-1 text-white font-medium text-lg">Our Location</h4>
                                    <p className="text-gray-900 font-medium leading-relaxed">GOGIL ZENVOGUE OPC PRIVATE LIMITED<br />
                                        47/230 E, 2nd Floor, Ariyattil Building,<br />
                                        Near Arkkakadavu Bridge, Vennala (PO),<br />
                                        Ernakulam, Kerala, India – 682028</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="bg-white rounded-full p-3 shadow-sm">
                                    <Phone className="w-6 h-6 text-teal-600" />
                                </div>
                                <div>
                                    <h4 className="mb-1 text-white font-medium text-lg">Phone</h4>
                                    <p className="text-gray-900 font-medium">+91 9567084303</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="bg-white rounded-full p-3 shadow-sm">
                                    <Mail className="w-6 h-6 text-teal-600" />
                                </div>
                                <div>
                                    <h4 className="mb-1 text-white font-medium text-lg">Email</h4>
                                    <p className="text-gray-900 font-medium">zenvogueproductions@gmail.com</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-white rounded-2xl p-8 shadow-2xl">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block mb-2 text-gray-700 font-medium">Full Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-colors text-gray-900"
                                    placeholder="John Doe"
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block mb-2 text-gray-700 font-medium">Email Address</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-colors text-gray-900"
                                    placeholder="john@example.com"
                                />
                            </div>

                            <div>
                                <label htmlFor="phone" className="block mb-2 text-gray-700 font-medium">Phone Number</label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-colors text-gray-900"
                                    placeholder="+91 9567084303"
                                />
                            </div>

                            <div>
                                <label htmlFor="service" className="block mb-2 text-gray-700 font-medium">Service Interested In</label>
                                <select
                                    id="service"
                                    name="service"
                                    value={formData.service}
                                    onChange={handleChange}
                                    required
                                    className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-colors text-gray-900"
                                >
                                    <option value="">Select a service</option>
                                    <option value="video-production">Film & OTT Post-Production</option>
                                    <option value="cinematography">Video Editing & Color Grading</option>
                                    <option value="post-production">Sound Design & Re-Recording</option>
                                    <option value="music-video">Visual Effects (VFX)</option>
                                    <option value="tv-film">AI-Based Post-Production Solutions</option>
                                    <option value="social-media">Documentary & Digital Content Post-Production</option>
                                    <option value="consulting">Creative & Technical Consulting</option>
                                </select>
                            </div>

                            <div>
                                <label htmlFor="message" className="block mb-2 text-gray-700 font-medium">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows={4}
                                    className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-colors resize-none text-gray-900"
                                    placeholder="Tell us about your project..."
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-teal-600 hover:bg-teal-700 text-white px-6 py-4 rounded-lg transition-colors flex items-center justify-center gap-2 font-semibold shadow-lg hover:shadow-xl"
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