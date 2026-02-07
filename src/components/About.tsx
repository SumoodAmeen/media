

export function About() {
    return (
        <section id="about" className="py-24 bg-gradient-to-b from-gray-900 to-black">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-4xl md:text-5xl mb-6">About Gogil Zenvogue OPC</h2>
                        <p className="text-xl text-gray-400 mb-6">
                            GOGIL ZENVOGUE OPC PRIVATE LIMITED is a professional media and creative
                            services company based in Kerala, India. We specialize in motion picture, video, and television programme
                            post-production activities, delivering high-quality creative solutions for film, digital, and broadcast platforms.
                        </p>
                        <p className="text-lg text-gray-400 mb-8">
                            Our services include editing, color grading, sound design, visual effects, AI-assisted post-production, creative consulting,
                            and digital content development.
                            We work with filmmakers, production houses, brands, and independent creators from India and international markets.
                        </p>
                        <p className="text-lg text-gray-400 mb-8">
                            We are committed to ethical business practices, transparency in payments, and delivering industry-standard creative outputs aligned with global media standards.
                        </p>
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