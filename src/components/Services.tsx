

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
    return (
        <section id="services" className="py-24 bg-gradient-to-b from-black to-gray-900">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl mb-4">Our Services</h2>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        Comprehensive media production solutions tailored to your needs
                    </p>
                </div>

                <div className="flex flex-wrap justify-center gap-8 mb-16">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all hover:border-yellow-500/50 group w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)]"
                        >
                            <img
                                src={service.icon}
                                alt={service.title}
                                className="w-12 h-12 mb-4 group-hover:scale-110 transition-transform filter invert sepia saturate-100 hue-rotate-[90deg] brightness-100 contrast-100"
                                style={{ filter: 'brightness(0) saturate(100%) invert(83%) sepia(34%) saturate(735%) hue-rotate(359deg) brightness(102%) contrast(105%)' }} // Yellow-500 approximation
                            />
                            <h3 className="text-2xl mb-3">{service.title}</h3>
                            <p className="text-gray-400">{service.description}</p>
                        </div>
                    ))}
                </div>

                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-12 max-w-4xl mx-auto">
                    <h3 className="text-2xl md:text-3xl font-semibold mb-6 text-yellow-500 text-center">Payment Nature</h3>
                    <div className="grid md:grid-cols-3 gap-6 mb-8 text-center bg-transparent">
                        <div className="bg-black/20 p-4 rounded-xl">
                            <h4 className="font-medium text-lg mb-2">Advance Booking</h4>
                            <p className="text-sm text-gray-400">Secure your slot with an advance payment</p>
                        </div>
                        <div className="bg-black/20 p-4 rounded-xl">
                            <h4 className="font-medium text-lg mb-2">Milestone-Based</h4>
                            <p className="text-sm text-gray-400">Pay in stages as the project progresses</p>
                        </div>
                        <div className="bg-black/20 p-4 rounded-xl">
                            <h4 className="font-medium text-lg mb-2">Full Service</h4>
                            <p className="text-sm text-gray-400">Complete payment for one-off services</p>
                        </div>
                    </div>
                    <p className="text-center text-gray-300 italic border-t border-white/10 pt-6">
                        "All payments made through this website are strictly for professional creative services and post-production work."
                    </p>
                </div>
            </div>
        </section>
    );
}