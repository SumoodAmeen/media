import { Play } from 'lucide-react';

export function Hero() {
    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        element?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-teal-500">
            {/* Content */}
            <div className="relative z-10 container mx-auto px-4 text-center">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-4xl md:text-7xl mb-6 font-bold text-white opacity-0 animate-slide-in-left">
                        Crafting Stories That <span className="text-gray-900">Inspire</span>
                    </h1>
                    <p className="text-xl md:text-2xl mb-8 text-gray-900 font-medium opacity-0 animate-slide-in-right delay-200">
                        Professional Media and Creative Services Company - From Concept to Screen
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center opacity-0 animate-slide-in-bottom delay-500">
                        <button
                            onClick={() => scrollToSection('portfolio')}
                            className="bg-white hover:bg-gray-100 text-teal-600 px-8 py-4 rounded-full transition-colors flex items-center justify-center gap-2 font-bold"
                        >
                            <Play className="w-5 h-5 fill-teal-600" />
                            View Our Work
                        </button>
                        <button
                            onClick={() => scrollToSection('services')}
                            className="border-2 border-white text-white hover:bg-white/10 px-8 py-4 rounded-full transition-colors font-bold"
                        >
                            Get Started
                        </button>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
                <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
                    <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
                </div>
            </div>
        </section>
    );
}