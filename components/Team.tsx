const team = [
    {
        name: "Alex Rivera",
        role: "Commander",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop",
    },
    {
        name: "Samantha Lee",
        role: "Flight Engineer",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1000&auto=format&fit=crop",
    },
    {
        name: "Marcus Johnson",
        role: "Payload Specialist",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1000&auto=format&fit=crop",
    },
    {
        name: "Priya Patel",
        role: "Mission Control",
        image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1000&auto=format&fit=crop",
    },
];

export default function Team() {
    return (
        <section id="team" className="py-32 bg-space-black border-t border-white/10">
            <div className="container mx-auto px-6">
                <div className="flex items-center justify-between mb-20">
                    <h2 className="text-4xl md:text-5xl font-display font-bold uppercase tracking-tight">Mission Crew</h2>
                    <div className="w-20 h-1 bg-white" />
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {team.map((member, index) => (
                        <div key={index} className="group relative overflow-hidden">
                            {/* Grayscale to Color on Hover */}
                            <div className="aspect-[3/4] overflow-hidden bg-stone-900 mb-4">
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="w-full h-full object-cover grayscale brightness-75 contrast-125 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-700"
                                />
                            </div>

                            <div className="border-l-2 border-white/20 pl-4 group-hover:border-mission-blue transition-colors duration-300">
                                <h3 className="text-lg font-bold text-white uppercase">{member.name}</h3>
                                <p className="font-mono text-xs text-stone-500 uppercase tracking-widest mt-1">{member.role}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
