import { Play } from 'lucide-react';

const projects = [
    {
        title: 'Film & OTT Post-Production',
        category: 'Film',
        image: 'https://images.unsplash.com/photo-1673767297196-ce9739933932?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWRlbyUyMHByb2R1Y3Rpb24lMjBzdHVkaW98ZW58MXx8fHwxNzY1NTAwNDExfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
        title: 'Video Editing & Color Grading',
        category: 'Video Editing',
        image: 'https://images.unsplash.com/photo-1655802696525-3f686da00887?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBjaW5lbWF0b2dyYXBoeXxlbnwxfHx8fDE3NjU1NzY5MDZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
        title: 'Sound Design & Re-Recording',
        category: 'Sound Design',
        image: 'https://www.rmcad.edu/wp-content/uploads/2025/02/shutterstock_2346223061-scaled.jpg'
    },
    {
        title: 'Creative & Technical Consulting',
        category: 'Creative',
        image: 'https://images.unsplash.com/photo-1691180273080-aacef51379d4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaWxtJTIwcHJvZHVjdGlvbiUyMGNhbWVyYXxlbnwxfHx8fDE3NjU1MTA3NzB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
        title: 'Visual Effects (VFX)',
        category: 'VFX',
        image: 'https://images.unsplash.com/photo-1673767297196-ce9739933932?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWRlbyUyMHByb2R1Y3Rpb24lMjBzdHVkaW98ZW58MXx8fHwxNzY1NTAwNDExfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
        title: 'AI-Based Post-Production Solutions',
        category: 'AI',
        image: 'https://images.unsplash.com/photo-1655802696525-3f686da00887?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBjaW5lbWF0b2dyYXBoeXxlbnwxfHx8fDE3NjU1NzY5MDZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
        title: 'Documentary & Digital Content Post-Production',
        category: 'Documentary',
        image: 'https://images.unsplash.com/photo-1758553026412-bc1da0ebd366?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpYSUyMGVkaXRpbmclMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzY1NTc2OTA2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    }
];

export function Portfolio() {
    return (
        <section id="portfolio" className="py-24 bg-black">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl mb-4">Our Portfolio</h2>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        A showcase of our finest work across various media formats
                    </p>
                </div>

                <div className="flex flex-wrap justify-center gap-6">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="group relative overflow-hidden rounded-2xl aspect-video cursor-pointer w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1rem)]"
                        >
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>

                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                <div className="bg-yellow-500 rounded-full p-4">
                                    <Play className="w-8 h-8 text-black" />
                                </div>
                            </div>

                            <div className="absolute bottom-0 left-0 right-0 p-6">
                                <span className="text-yellow-500 text-sm">{project.category}</span>
                                <h3 className="text-xl mt-1">{project.title}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}