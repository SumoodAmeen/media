import { Quote } from 'lucide-react';
import DirectorImage from '../assets/director.png';

export function VisionaryNote() {
    return (
        <section className="py-24 bg-black relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-yellow-500/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Image Column */}
                    <div className="relative group lg:max-w-md justify-self-center">
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-yellow-500/10 border border-white/10">
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10"></div>
                            <img
                                src={DirectorImage}
                                alt="Gogil G Nath - Director"
                                className="w-full h-auto object-cover grayscale-0 lg:grayscale lg:group-hover:grayscale-0 transition-all duration-700 ease-in-out"
                            />
                        </div>
                        {/* Decorative Box */}
                        <div className="absolute -bottom-4 -right-4 w-24 h-24 border-r-2 border-b-2 border-yellow-400 rounded-br-2xl -z-10 bg-transparent animate-pulse"></div>
                        <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-yellow-400 rounded-tl-2xl -z-10 bg-transparent animate-pulse"></div>
                    </div>

                    {/* Content Column */}
                    <div className="text-left">
                        <Quote className="w-12 h-12 text-yellow-500 mb-6 opacity-80" />

                        <blockquote className="text-xl md:text-2xl lg:text-3xl text-gray-200 font-light leading-relaxed mb-8 italic">
                            "Visual storytelling is the art of giving form to the unseen—it's where your brand’s heartbeat meets our creative pulse. At Gogil Zenvogue, we don't just capture images; we curate experiences that linger long after the screen fades. Our mission is to bridge the gap between high-end aesthetics and authentic narrative, ensuring that every frame we produce is as timeless as it is bold."
                        </blockquote>

                        <div className="flex items-center gap-4">
                            <div className="h-px w-12 bg-yellow-500"></div>
                            <div>
                                <h3 className="text-2xl font-bold text-white tracking-wide">GOGIL G NATH</h3>
                                <p className="text-yellow-500 font-medium tracking-wider text-sm mt-1">DIRECTOR</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
