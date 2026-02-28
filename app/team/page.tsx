"use client";

import { useState } from "react";
import { Palette, FileText, CalendarDays, Megaphone, Camera, Cpu, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function TeamPage() {
    const [showPastGB, setShowPastGB] = useState(false);
    const [expandedExecom, setExpandedExecom] = useState<number | null>(null);
    const [expandedCore, setExpandedCore] = useState<number | null>(null);

    const pastGBMembers = [
        {
            name: "Mir Nabeel Uddin",
            role: "Chairperson",
            description: "Leading chapter vision, activities, and foundational initiatives during the inaugural tenure.",
            image: "/PastGB/nabeelchair.jpeg"
        },
        {
            name: "Insiya Maryam",
            role: "Vice Chairperson",
            description: "Supporting chapter operations, coordination, and technical engagement.",
            image: "/PastGB/insiyavice.jpeg"
        },
        {
            name: "Mirfath Fathima",
            role: "Treasurer",
            description: "Managing financial planning and resource allocation for chapter activities.",
            image: "/PastGB/MirfathTreasurer.jpeg"
        },
        {
            name: "Bilal Hussain",
            role: "Secretary",
            description: "Handling chapter documentation, communication, and organizational processes.",
            image: "/PastGB/Bilalsecretary.jpeg"
        },
        {
            name: "Mohammed Adil",
            role: "Web Master",
            description: "Managing digital platforms and contributing to the chapter’s online presence.",
            image: "/PastGB/adilwebmastre.jpeg"
        },
        {
            name: "Zoha Mussadaq",
            role: "Social Media Coordinator",
            description: "Overseeing outreach, promotions, and community engagement through digital channels.",
            image: "/PastGB/zohasocial.jpeg"
        }
    ];
    const portfolios = [
        {
            title: "Design Team",
            leads: [
                { name: "Ayesha Hania", image: "/execom/design ayesha.jpeg" },
                { name: "Anjum", image: "/execom/design anjum.jpeg" }
            ],
            icon: Palette
        },
        {
            title: "Documentation Team",
            leads: [
                { name: "Sama Noreen", image: "/execom/Docs sama.jpeg" },
                { name: "Ilyas", image: "/execom/docs ilyas.jpeg" }  // Added based on directory contents
            ],
            icon: FileText
        },
        {
            title: "Events Team",
            leads: [
                { name: "Zainab Ahmed", image: "/execom/events zainab.jpeg" },
                { name: "Mohammed Omair Ahmed", image: "/execom/events omair.jpeg" }
            ],
            icon: CalendarDays
        },
        {
            title: "Marketing Team",
            leads: [
                { name: "Syed Irfan Ali", image: "/execom/marketing irfan.jpeg" },
                { name: "Usaid Minhaj", image: "/execom/marketing usaid.jpeg" }
            ],
            icon: Megaphone
        },
        {
            title: "Media Team",
            leads: [
                { name: "Rayaan", image: "/execom/media rayyan.jpeg" },
                { name: "Saad", image: "/execom/media saad.jpeg" }
            ],
            icon: Camera
        },
        {
            title: "Technical Team",
            leads: [
                { name: "Aman", image: "/execom/tech amaan.jpeg" },
                { name: "Areebha", image: "/execom/tech areebha.jpeg" }
            ],
            icon: Cpu
        }
    ];

    const coreTeam = [
        {
            title: "Design Team",
            members: ["Abdul Raqeeb", "Azfar Ahmed", "Ayaan Hyder"],
            icon: Palette
        },
        {
            title: "Documentation Team",
            members: ["Asfa", "Zaina Mohsin", "Farnaaz"],
            icon: FileText
        },
        {
            title: "Events Team",
            members: ["Mustafa Afzal", "Humera Tabassum", "Aira Qureshi"],
            icon: CalendarDays
        },
        {
            title: "Marketing Team",
            members: ["Mohammed Mustafa", "Shujatullah Amaan", "Muqtasid Haseem"],
            icon: Megaphone
        },
        {
            title: "Media Team",
            members: ["Ashfaq", "Misbaan"],
            icon: Camera
        },
        {
            title: "Technical Team",
            members: ["Kareemullah", "Omer Hussain Shaikh"],
            icon: Cpu
        }
    ];

    const fadeInUp = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } }
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    return (
        <main className="min-h-screen bg-navy-900 text-white pt-32 pb-20 px-6">
            <div className="container mx-auto">
                <motion.h1
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                    className="text-4xl md:text-6xl font-display font-bold uppercase tracking-tighter mb-8 text-center"
                >
                    Our <span className="text-mission-blue">Team</span>
                </motion.h1>
                <motion.p
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                    className="text-center text-stone-400 max-w-4xl mx-auto mb-20 leading-relaxed text-lg"
                >
                    The IEEE GRSS MJCET Student Chapter is driven by a multidisciplinary team of students committed to advancing geoscience, remote sensing, and technology-driven learning through workshops, projects, and outreach initiatives.
                </motion.p>

                {/* EXECUTIVE COMMITTEE Section */}
                <section>
                    <div className="flex flex-col items-center mb-16 text-center">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                        >
                            <h2 className="text-3xl md:text-5xl font-display font-bold uppercase tracking-tight mb-6 relative inline-block group cursor-default">
                                {/* Glowing Aura */}
                                <div className="absolute inset-0 bg-mission-blue/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10" />

                                {/* Text with Gradient Hover */}
                                <span className="relative z-10 bg-gradient-to-r from-white via-stone-200 to-stone-400 bg-clip-text text-transparent group-hover:from-mission-blue group-hover:via-cyan-400 group-hover:to-purple-500 transition-all duration-700 ease-out">
                                    EXECUTIVE COMMITTEE
                                </span>

                                {/* Animated Underline with Scan Effect */}
                                <div className="absolute -bottom-2 left-0 w-full h-1 bg-white/10 overflow-hidden rounded-full">
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-mission-blue to-transparent -translate-x-[150%] group-hover:translate-x-[150%] transition-transform duration-1000 ease-in-out" />
                                    <div className="absolute inset-0 bg-mission-blue opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-0 group-hover:w-full ease-out delay-100" />
                                </div>
                            </h2>
                        </motion.div>
                        <motion.p
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            className="text-stone-400 max-w-3xl mx-auto leading-relaxed"
                        >
                            The Executive Committee of IEEE GRSS MJCET comprises student leaders responsible for driving the chapter’s technical initiatives, events, collaborations, and strategic direction.
                        </motion.p>
                    </div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                        variants={staggerContainer}
                        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-start"
                    >
                        {portfolios.map((portfolio, index) => (
                            <motion.div
                                key={index}
                                variants={fadeInUp}
                                className="group bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:border-mission-blue/30 relative overflow-hidden"
                            >
                                {/* Hover Gradient Background */}
                                <div className="absolute inset-0 bg-gradient-to-br from-mission-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                                <div className="relative z-10 flex flex-col h-full">
                                    <div className="flex items-center gap-4 mb-6">
                                        <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center border border-white/20 group-hover:border-mission-blue group-hover:bg-mission-blue/20 transition-all shadow-[0_0_0_1px_rgba(255,255,255,0.05)] group-hover:shadow-[0_0_15px_rgba(59,130,246,0.3)]">
                                            <portfolio.icon className="w-6 h-6 text-stone-400 group-hover:text-mission-blue transition-colors duration-300" />
                                        </div>
                                        <h3 className="text-xl font-bold uppercase font-display tracking-wide text-white group-hover:text-mission-blue transition-colors">
                                            {portfolio.title}
                                        </h3>
                                    </div>

                                    <div className="flex-1 flex flex-col justify-end">
                                        <AnimatePresence>
                                            {expandedExecom === index && (
                                                <motion.div
                                                    initial={{ height: 0, opacity: 0 }}
                                                    animate={{ height: "auto", opacity: 1 }}
                                                    exit={{ height: 0, opacity: 0 }}
                                                    className="overflow-hidden"
                                                >
                                                    <div className="space-y-4 pl-16 border-l border-white/10 ml-6 mb-6 group-hover:border-mission-blue/30 transition-colors">
                                                        <div className="text-xs font-mono uppercase tracking-widest text-stone-500 mb-4">Team Leads</div>
                                                        <div className="flex flex-col gap-4">
                                                            {portfolio.leads.map((lead, i) => (
                                                                <div key={i} className="flex flex-col items-center gap-3 group/lead">
                                                                    <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-2 border-white/10 group-hover/lead:border-mission-blue transition-colors shrink-0 shadow-lg group-hover/lead:shadow-mission-blue/20">
                                                                        <img src={lead.image} alt={lead.name} className="w-full h-full object-cover object-top scale-110" />
                                                                    </div>
                                                                    <div className="text-stone-300 font-medium group-hover/lead:text-white transition-colors text-center text-lg">
                                                                        {lead.name}
                                                                    </div>
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </div>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>

                                        <button
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                setExpandedExecom(expandedExecom === index ? null : index);
                                            }}
                                            className="w-full mt-2 py-3 bg-white/5 border border-white/10 rounded-xl font-mono text-[10px] uppercase tracking-widest text-stone-400 group-hover:text-white group-hover:border-mission-blue/50 transition-all flex items-center justify-center gap-2"
                                        >
                                            <span>{expandedExecom === index ? "Collapse" : "View Portfolio"}</span>
                                            <ChevronDown className={`w-3 h-3 transition-transform duration-300 ${expandedExecom === index ? "rotate-180" : ""}`} />
                                        </button>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </section>

                {/* CORE TEAM Section */}
                <section className="mt-32">
                    <div className="flex flex-col items-center mb-16 text-center">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                        >
                            <h2 className="text-3xl md:text-5xl font-display font-bold uppercase tracking-tight mb-6 relative inline-block group cursor-default">
                                {/* Glowing Aura */}
                                <div className="absolute inset-0 bg-purple-500/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10" />

                                {/* Text with Gradient Hover */}
                                <span className="relative z-10 bg-gradient-to-r from-white via-stone-200 to-stone-400 bg-clip-text text-transparent group-hover:from-purple-500 group-hover:via-pink-500 group-hover:to-mission-blue transition-all duration-700 ease-out">
                                    CORE TEAM
                                </span>

                                {/* Animated Underline with Scan Effect */}
                                <div className="absolute -bottom-2 left-0 w-full h-1 bg-white/10 overflow-hidden rounded-full">
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500 to-transparent -translate-x-[150%] group-hover:translate-x-[150%] transition-transform duration-1000 ease-in-out" />
                                    <div className="absolute inset-0 bg-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-0 group-hover:w-full ease-out delay-100" />
                                </div>
                            </h2>
                        </motion.div>
                        <motion.p
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            className="text-stone-400 max-w-3xl mx-auto leading-relaxed"
                        >
                            The Core Team of IEEE GRSS MJCET plays a vital role in planning, organizing, and executing chapter activities, ensuring smooth operations across technical, creative, and logistical domains.
                        </motion.p>
                    </div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                        variants={staggerContainer}
                        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-start"
                    >
                        {coreTeam.map((team, index) => (
                            <motion.div
                                key={index}
                                variants={fadeInUp}
                                className="group bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:border-purple-500/30 relative overflow-hidden"
                            >
                                {/* Hover Gradient Background */}
                                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                                <div className="relative z-10 flex flex-col h-full">
                                    <div className="flex items-center gap-4 mb-6">
                                        <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center border border-white/20 group-hover:border-purple-500 group-hover:bg-purple-500/20 transition-all shadow-[0_0_0_1px_rgba(255,255,255,0.05)] group-hover:shadow-[0_0_15px_rgba(168,85,247,0.3)]">
                                            <team.icon className="w-6 h-6 text-stone-400 group-hover:text-purple-400 transition-colors duration-300" />
                                        </div>
                                        <h3 className="text-xl font-bold uppercase font-display tracking-wide text-white group-hover:text-purple-400 transition-colors">
                                            {team.title}
                                        </h3>
                                    </div>

                                    <div className="flex-1 flex flex-col justify-end">
                                        <AnimatePresence>
                                            {expandedCore === index && (
                                                <motion.div
                                                    initial={{ height: 0, opacity: 0 }}
                                                    animate={{ height: "auto", opacity: 1 }}
                                                    exit={{ height: 0, opacity: 0 }}
                                                    className="overflow-hidden"
                                                >
                                                    <div className="space-y-3 pl-16 border-l border-white/10 ml-6 mb-6 group-hover:border-purple-500/30 transition-colors">
                                                        <div className="text-xs font-mono uppercase tracking-widest text-stone-500 mb-2">Core Members</div>
                                                        {team.members.map((member, i) => (
                                                            <div key={i} className="text-stone-300 font-medium group-hover:text-white transition-colors">
                                                                {member}
                                                            </div>
                                                        ))}
                                                    </div>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>

                                        <button
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                setExpandedCore(expandedCore === index ? null : index);
                                            }}
                                            className="w-full mt-2 py-3 bg-white/5 border border-white/10 rounded-xl font-mono text-[10px] uppercase tracking-widest text-stone-400 group-hover:text-white group-hover:border-purple-500/50 transition-all flex items-center justify-center gap-2"
                                        >
                                            <span>{expandedCore === index ? "Collapse" : "View Portfolio"}</span>
                                            <ChevronDown className={`w-3 h-3 transition-transform duration-300 ${expandedCore === index ? "rotate-180" : ""}`} />
                                        </button>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </section>

                {/* PAST TENURE GB Section (Toggle) */}
                <section className="mt-32 pb-20 border-t border-white/10 pt-20 relative overflow-hidden bg-stone-950/50">
                    {/* Background Texture - Increased Opacity */}
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

                    <div className="flex flex-col items-center text-center relative z-10">
                        <button
                            onClick={() => setShowPastGB(!showPastGB)}
                            className="group flex items-center gap-4 px-8 py-4 bg-white/5 border border-white/10 rounded-full hover:bg-mission-blue/10 hover:border-mission-blue/50 transition-all duration-300"
                        >
                            <span className="font-mono text-sm uppercase tracking-widest text-stone-300 group-hover:text-mission-blue transition-colors">
                                {showPastGB ? "Hide" : "View"} Past Tenure Governing Body (2024-25)
                            </span>
                            <ChevronDown className={`w-4 h-4 text-stone-400 group-hover:text-mission-blue transition-transform duration-300 ${showPastGB ? "rotate-180" : ""}`} />
                        </button>
                    </div>

                    <motion.div
                        initial={false}
                        animate={{ height: showPastGB ? "auto" : 0, opacity: showPastGB ? 1 : 0 }}
                        className="overflow-hidden"
                    >
                        <div className="pt-16 pb-8 relative max-w-5xl mx-auto">
                            <p className="text-center text-stone-400 max-w-2xl mx-auto mb-12 text-sm md:text-base leading-relaxed px-4">
                                The 2024–2025 Governing Body represents the founding leadership of IEEE GRSS MJCET, whose dedication and vision established the chapter’s early initiatives, events, and technical culture. Their contributions laid the groundwork for the chapter’s continued growth and success.
                            </p>

                            {/* Gradient Masks for Marquee fade effect */}
                            <div className="absolute left-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-r from-navy-900 to-transparent pointer-events-none" />
                            <div className="absolute right-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-l from-navy-900 to-transparent pointer-events-none" />

                            <div className="flex overflow-hidden group/marquee">
                                <motion.div
                                    className="flex gap-6 pl-6"
                                    animate={{ x: ["0%", "-50%"] }}
                                    transition={{
                                        repeat: Infinity,
                                        ease: "linear",
                                        duration: 30, // Adjust speed here
                                    }}
                                    whileHover={{ animationPlayState: "paused" }} // Note: Framer motion doesn't support playState directly like this, using hover to pause requires state or CSS. 
                                // Alternative: using standard CSS animation for simpler pause-on-hover or sticking to continuous flow.
                                // Let's use a simpler Framer Motion approach but without easy pause. 
                                // Actually, for user experience, let's keep it simple: Continuous loop.
                                >
                                    {/* Duplicate list for seamless loop */}
                                    {[...pastGBMembers, ...pastGBMembers].map((member, index) => (
                                        <div
                                            key={index}
                                            className="w-48 shrink-0 group bg-stone-900/50 border border-white/10 rounded-xl overflow-hidden hover:border-stone-500/50 transition-all duration-300"
                                        >
                                            <div className="aspect-[3/4] relative overflow-hidden">
                                                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10 opactiy-80" />
                                                <img
                                                    src={member.image}
                                                    alt={member.name}
                                                    className="w-full h-full object-cover transition-all duration-700 scale-100 group-hover:scale-105"
                                                />
                                                <div className="absolute bottom-0 left-0 right-0 p-3 z-20">
                                                    <div className="text-[9px] font-mono text-mission-blue uppercase tracking-widest mb-0.5">{member.role}</div>
                                                    <h3 className="text-sm font-display font-bold text-white uppercase tracking-wide leading-tight">{member.name}</h3>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </motion.div>
                            </div>

                            <p className="text-center text-xs font-mono text-stone-600 mt-6 uppercase tracking-widest">
                            // 2024-2025 Tenure
                            </p>
                        </div>
                    </motion.div>
                </section>
            </div>
        </main>
    );
}
