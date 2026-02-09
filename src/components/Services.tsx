
import { useEffect, useRef } from 'react';

const services = [
    {
        icon: 'https://uxwing.com/wp-content/themes/uxwing/download/video-photography-multimedia/movie-videos-icon.png',
        title: 'Film & OTT Post-Production',
        description: 'We provide comprehensive post-production services for feature films, short films, and OTT content. Our services include editing, color grading, sound design, and visual effects to bring your story to life.'
    },
    {
        icon: "https://uxwing.com/wp-content/themes/uxwing/download/video-photography-multimedia/edit-video-clip-outline-icon.png",
        title: 'Video Editing & Color Grading',
        description: 'We offer professional video editing and color grading services for all types of video content. Our team of experienced editors and colorists will bring your vision to life with high-quality results.'
    },
    {
        icon: 'https://uxwing.com/wp-content/themes/uxwing/download/controller-and-music/analyze-sound-wave-icon.png',
        title: 'Sound Design & Re-Recording',
        description: 'We provide professional sound design and re-recording services for films, TV shows, and other video content. Our team of experienced sound designers and re-recording mixers will bring your vision to life with high-quality results.'
    },
    {
        icon: 'https://uxwing.com/wp-content/themes/uxwing/download/household-and-furniture/bulb-icon.png',
        title: 'Creative & Technical Consulting',
        description: 'We provide professional creative and technical consulting services for films, TV shows, and other video content. Our team of experienced creative and technical consultants will bring your vision to life with high-quality results.'
    },
    {
        icon: 'https://img.icons8.com/?size=96&id=99935&format=png',
        title: 'Visual Effects (VFX)',
        description: 'We provide professional visual effects services for films, TV shows, and other video content. Our team of experienced VFX artists will bring your vision to life with high-quality results.'
    },
    {
        icon: 'https://uxwing.com/wp-content/themes/uxwing/download/video-photography-multimedia/video-roll-icon.png',
        title: 'AI-Based Post-Production Solutions',
        description: 'We provide professional AI-based post-production solutions for films, TV shows, and other video content. Our team of experienced AI specialists will bring your vision to life with high-quality results.'
    },
    {
        icon: 'https://uxwing.com/wp-content/themes/uxwing/download/video-photography-multimedia/movie-media-player-icon.png',
        title: 'Documentary & Digital Content Post-Production',
        description: 'We provide professional documentary and digital content post-production services for films, TV shows, and other video content. Our team of experienced documentary and digital content specialists will bring your vision to life with high-quality results.'
    }
];

export function Services() {
    const observerRef = useRef<IntersectionObserver | null>(null);

    useEffect(() => {
        observerRef.current = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const target = entry.target as HTMLElement;
                    target.classList.add('opacity-100', 'translate-y-0', 'rotate-0');
                    target.classList.remove('opacity-0', 'translate-y-10', 'rotate-2');

                    // Stop observing for scroll animation
                    observerRef.current?.unobserve(target);

                    // Trigger vibration after entrance transition (delay + duration)
                    const index = parseInt(target.dataset.index || '0');
                    const delay = index * 100; // Match transitionDelay
                    const duration = 700; // Match transition duration

                    setTimeout(() => {
                        target.classList.add('animate-vibrate');
                    }, delay + duration);
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '50px'
        });

        const cards = document.querySelectorAll('.service-card');
        cards.forEach((card) => observerRef.current?.observe(card));

        return () => {
            if (observerRef.current) {
                observerRef.current.disconnect();
            }
        };
    }, []);

    return (
        <section id="services" className="py-24 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl mb-4 font-bold text-gray-900">Our Services</h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Comprehensive media production solutions tailored to your needs
                    </p>
                </div>

                <div className="flex flex-wrap justify-center gap-8 mb-16">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            data-index={index}
                            className="service-card bg-white border border-gray-100 rounded-2xl p-8 hover:shadow-xl hover:border-teal-100 transition-all duration-700 ease-out group w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)] opacity-0 translate-y-10 rotate-2 shadow-sm"
                            style={{ transitionDelay: `${index * 100}ms` }}
                        >
                            <img
                                src={service.icon}
                                alt={service.title}
                                className="w-12 h-12 mb-4 group-hover:scale-110 transition-transform"
                                // Teal filter: brightness(0) saturate(100%) invert(43%) sepia(93%) saturate(1352%) hue-rotate(149deg) brightness(91%) contrast(100%)
                                style={{ filter: 'brightness(0) saturate(100%) invert(43%) sepia(93%) saturate(1352%) hue-rotate(149deg) brightness(91%) contrast(100%)' }}
                            />
                            <h3 className="text-2xl mb-3 font-semibold text-gray-900 group-hover:text-teal-600 transition-colors">{service.title}</h3>
                            <p className="text-gray-600 leading-relaxed">{service.description}</p>
                        </div>
                    ))}
                </div>

                <div className="bg-white border border-gray-100 rounded-2xl p-8 md:p-12 max-w-4xl mx-auto shadow-lg shadow-teal-500/5">
                    <h3 className="text-2xl md:text-3xl font-semibold mb-6 text-teal-600 text-center">Payment Nature</h3>
                    <div className="grid md:grid-cols-3 gap-6 mb-8 text-center">
                        <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                            <h4 className="font-semibold text-lg mb-2 text-gray-900">Advance Booking</h4>
                            <p className="text-sm text-gray-600">Secure your slot with an advance payment</p>
                        </div>
                        <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                            <h4 className="font-semibold text-lg mb-2 text-gray-900">Milestone-Based</h4>
                            <p className="text-sm text-gray-600">Pay in stages as the project progresses</p>
                        </div>
                        <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                            <h4 className="font-semibold text-lg mb-2 text-gray-900">Full Service</h4>
                            <p className="text-sm text-gray-600">Complete payment for one-off services</p>
                        </div>
                    </div>
                    <p className="text-center text-gray-500 italic border-t border-gray-100 pt-6">
                        "All payments made through this website are strictly for professional creative services and post-production work."
                    </p>
                </div>
            </div>
        </section>
    );
}