

import { useEffect, useRef } from 'react';

export function About() {
    const observerRef = useRef<IntersectionObserver | null>(null);

    useEffect(() => {
        observerRef.current = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('opacity-100', 'blur-0', 'translate-y-0');
                    entry.target.classList.remove('opacity-30', 'blur-sm', 'translate-y-4');
                } else {
                    entry.target.classList.remove('opacity-100', 'blur-0', 'translate-y-0');
                    entry.target.classList.add('opacity-30', 'blur-sm', 'translate-y-4');
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });

        const textElements = document.querySelectorAll('.about-animate');
        textElements.forEach((el) => observerRef.current?.observe(el));

        return () => {
            if (observerRef.current) {
                observerRef.current.disconnect();
            }
        };
    }, []);

    return (
        <section id="about" className="py-24 bg-gradient-to-b from-gray-900 to-black">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-4xl md:text-5xl mb-6 about-animate opacity-30 blur-sm translate-y-4 transition-all duration-1000 ease-out">About Gogil Zenvogue OPC</h2>
                        <p className="text-xl text-gray-400 mb-6 about-animate opacity-30 blur-sm translate-y-4 transition-all duration-1000 ease-out delay-200">
                            GOGIL ZENVOGUE OPC PRIVATE LIMITED is a professional media and creative
                            services company based in Kerala, India. We specialize in motion picture, video, and television programme
                            post-production activities, delivering high-quality creative solutions for film, digital, and broadcast platforms.
                        </p>
                        <p className="text-lg text-gray-400 mb-8 about-animate opacity-30 blur-sm translate-y-4 transition-all duration-1000 ease-out delay-300">
                            Our services include editing, color grading, sound design, visual effects, AI-assisted post-production, creative consulting,
                            and digital content development.
                            We work with filmmakers, production houses, brands, and independent creators from India and international markets.
                        </p>
                        <p className="text-lg text-gray-400 mb-8 about-animate opacity-30 blur-sm translate-y-4 transition-all duration-1000 ease-out delay-500">
                            We are committed to ethical business practices, transparency in payments, and delivering industry-standard creative outputs aligned with global media standards.
                        </p>

                        <div className="mt-8 pt-6 border-t border-gray-800 about-animate opacity-30 blur-sm translate-y-4 transition-all duration-1000 ease-out delay-700">
                            <p className="text-gray-300 font-medium mb-2">Nature: Service-based Digital Commerce (Not Physical E-Commerce)</p>
                            <p className="text-gray-400 text-sm">
                                GOGIL ZENVOGUE OPC PRIVATE LIMITED operates as a service provider offering digital post-production and creative services. No physical goods are sold or shipped only selling digital / online contents all over world. Payments are collected for professional services, bookings, and milestones.
                            </p>
                        </div>
                    </div>

                    <div className="relative">
                        <div className="relative rounded-2xl overflow-hidden">
                            <img
                                src="https://images.unsplash.com/photo-1673767297196-ce9739933932?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWRlbyUyMHByb2R1Y3Rpb24lMjBzdHVkaW98ZW58MXx8fHwxNzY1NTAwNDExfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                                alt="Studio"
                                className="w-full h-[500px] object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                        </div>
                        <div className="absolute -bottom-6 -left-6 bg-yellow-500 text-black rounded-2xl p-6 max-w-xs">
                            <p className="text-sm">
                                "Excellence in storytelling through the lens of creativity"
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}