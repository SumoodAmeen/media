import { Video, Camera, Edit, Music, Tv, Smartphone } from 'lucide-react';

const services = [
    {
        icon: Video,
        title: 'Film & OTT Post-Production',
        description: 'We provide comprehensive post-production services for feature films, short films, and OTT content. Our services include editing, color grading, sound design, and visual effects to bring your story to life.'
    },
    {
        icon: Camera,
        title: 'Video Editing & Color Grading',
        description: 'We offer professional video editing and color grading services for all types of video content. Our team of experienced editors and colorists will bring your vision to life with high-quality results.'
    },
    {
        icon: Edit,
        title: 'Sound Design & Re-Recording',
        description: 'We provide professional sound design and re-recording services for films, TV shows, and other video content. Our team of experienced sound designers and re-recording mixers will bring your vision to life with high-quality results.'
    },
    {
        icon: Music,
        title: 'Creative & Technical Consulting',
        description: 'We provide professional creative and technical consulting services for films, TV shows, and other video content. Our team of experienced creative and technical consultants will bring your vision to life with high-quality results.'
    },
    {
        icon: Tv,
        title: 'Visual Effects (VFX)',
        description: 'We provide professional visual effects services for films, TV shows, and other video content. Our team of experienced VFX artists will bring your vision to life with high-quality results.'
    },
    {
        icon: Smartphone,
        title: 'AI-Based Post-Production Solutions',
        description: 'We provide professional AI-based post-production solutions for films, TV shows, and other video content. Our team of experienced AI specialists will bring your vision to life with high-quality results.'
    },
    {
        icon: Smartphone,
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

                <div className="flex flex-wrap justify-center gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all hover:border-yellow-500/50 group w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)]"
                        >
                            <service.icon className="w-12 h-12 text-yellow-500 mb-4 group-hover:scale-110 transition-transform" />
                            <h3 className="text-2xl mb-3">{service.title}</h3>
                            <p className="text-gray-400">{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}