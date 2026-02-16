const team = [
    {
        name: "Mohammed Hadi Bilal",
        role: "Treasurer",
        image: "/team/Treasurer.jpeg",
        description: "Managing financial resources to support our mission and events."
    },
    {
        name: "Syed Afraaz Ashraf",
        role: "Vice Chairperson",
        image: "/team/vice chair.jpeg",
        description: "Driving operational excellence and strategic initiatives for the chapter."
    },
    {
        name: "Abdullah Hussain Shaikh",
        role: "Chairperson",
        image: "/team/Chair.jpeg",
        description: "Leading the chapter with vision, ensuring growth and impactful activities."
    },
    {
        name: "Nooren Fatima",
        role: "Secretary",
        image: "/team/SEcretary.jpeg",
        description: "Coordinating communications and maintaining organizational efficiency."
    },
    {
        name: "Hamza Mohammed",
        role: "Web Master",
        image: "/team/webmaster.jpeg",
        description: "Developing and maintaining our digital presence and technical platforms."
    },
];

export default function Team() {
    return (
        <section id="team" className="py-32 bg-space-black border-t border-white/10">
            <div className="container mx-auto px-6">
                <div className="flex items-center justify-between mb-20">
                    <h2 className="text-4xl md:text-6xl font-display font-bold uppercase tracking-tight relative group cursor-default w-fit">
                        {/* Text with subtle gradient (no blue shift) */}
                        <span className="bg-gradient-to-r from-white via-stone-200 to-stone-500 bg-clip-text text-transparent transition-all duration-500 ease-out">
                            GOVERNING BODY
                        </span>

                    </h2>
                    <div className="flex flex-col items-end">
                        <div className="h-px w-32 bg-mission-blue mb-4" />
                        <p className="font-mono text-xs uppercase tracking-widest text-stone-500 text-right">
                            Tenure 2025-26
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
                    {team.map((member, index) => (
                        <div key={index} className={`group relative overflow-hidden ${index === 2 ? 'md:-mt-8' : ''}`}>
                            {/* Grayscale to Color on Hover */}
                            <div className={`overflow-hidden bg-stone-900 mb-4 border border-white/10 ${index === 2 ? 'aspect-[3/4] md:scale-110 shadow-2xl z-10' : 'aspect-[3/4]'}`}>
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="w-full h-full object-cover grayscale brightness-75 contrast-125 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-700 object-top"
                                />
                            </div>

                            <div className="border-l-2 border-white/20 pl-4 group-hover:border-mission-blue transition-colors duration-300">
                                <h3 className={`font-bold text-white uppercase ${index === 2 ? 'text-xl text-mission-blue' : 'text-lg'}`}>{member.name}</h3>
                                <p className="font-mono text-xs text-stone-500 uppercase tracking-widest mt-1 mb-2">{member.role}</p>
                                <p className="text-xs text-stone-400 leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300 h-0 group-hover:h-auto overflow-hidden">
                                    {member.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
