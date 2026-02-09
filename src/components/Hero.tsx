import { Play } from 'lucide-react';

export function Hero() {
    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        element?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Background Video */}
            <div className="absolute inset-0">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                >
                    <source src="https://cdn.coverr.co/videos/coverr-professional-cameraman-filming-4366/1080p.mp4" type="video/mp4" />
                    {/* Fallback image if video fails to load */}
                    <img
                        src="https://images.unsplash.com/photo-1691180273080-aacef51379d4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaWxtJTIwcHJvZHVjdGlvbiUyMGNhbWVyYXxlbnwxfHx8fDE3NjU1MTA3NzB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                        alt="Film Production"
                        className="w-full h-full object-cover"
                    />
                </video>
                <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 container mx-auto px-4 text-center">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-5xl md:text-7xl mb-6 opacity-0 animate-slide-in-left">
                        Crafting Stories That <span className="text-yellow-500">Inspire</span>
                    </h1>
                    <p className="text-xl md:text-2xl mb-8 text-gray-300 opacity-0 animate-slide-in-right delay-200">
                        Professional Media and Creative Services Company - From Concept to Screen
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center opacity-0 animate-slide-in-bottom delay-500">
                        <button
                            onClick={() => scrollToSection('portfolio')}
                            className="bg-yellow-500 hover:bg-yellow-600 text-black px-8 py-4 rounded-full transition-colors flex items-center justify-center gap-2"
                        >
                            <Play className="w-5 h-5" />
                            View Our Work
                        </button>
                        <button
                            onClick={() => scrollToSection('services')}
                            className="border border-white/30 hover:border-yellow-500 hover:text-yellow-500 px-8 py-4 rounded-full transition-colors"
                        >
                            Get Started
                        </button>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
                <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
                    <div className="w-1 h-3 bg-yellow-500 rounded-full mt-2"></div>
                </div>
            </div>
        </section>
    );
}