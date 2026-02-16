"use client";

import { Palette, FileText, CalendarDays, Megaphone, Camera, Cpu } from "lucide-react";
import { motion } from "framer-motion";

export default function TeamPage() {
    const portfolios = [
        {
            title: "Design Team",
            leads: ["Ayesha Hania", "Anjum"],
            icon: Palette
        },
        {
            title: "Documentation Team",
            leads: ["Sama Noreen"],
            icon: FileText
        },
        {
            title: "Events Team",
            leads: ["Zainab Ahmed", "Mohammed Omair Ahmed"],
            icon: CalendarDays
        },
        {
            title: "Marketing Team",
            leads: ["Syed Irfan Ali", "Usaid Minhaj"],
            icon: Megaphone
        },
        {
            title: "Media Team",
            leads: ["Rayaan", "Saad"],
            icon: Camera
        },
        {
            title: "Technical Team",
            leads: ["Aman"],
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
            members: ["Kareemullah", "Omer Hussain Shaikh", "Areebha"],
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
                        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                    >
                        {portfolios.map((portfolio, index) => (
                            <motion.div
                                key={index}
                                variants={fadeInUp}
                                className="group bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:border-mission-blue/30 relative overflow-hidden active:scale-[0.98]"
                            >
                                {/* Hover Gradient Background */}
                                <div className="absolute inset-0 bg-gradient-to-br from-mission-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                <div className="relative z-10">
                                    <div className="flex items-center gap-4 mb-6">
                                        <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center border border-white/20 group-hover:border-mission-blue group-hover:bg-mission-blue/20 transition-all shadow-[0_0_0_1px_rgba(255,255,255,0.05)] group-hover:shadow-[0_0_15px_rgba(59,130,246,0.3)]">
                                            <portfolio.icon className="w-6 h-6 text-stone-400 group-hover:text-mission-blue transition-colors duration-300" />
                                        </div>
                                        <h3 className="text-xl font-bold uppercase font-display tracking-wide text-white group-hover:text-mission-blue transition-colors">
                                            {portfolio.title}
                                        </h3>
                                    </div>

                                    <div className="space-y-3 pl-16 border-l border-white/10 ml-6 group-hover:border-mission-blue/30 transition-colors">
                                        {/* Label */}
                                        <div className="text-xs font-mono uppercase tracking-widest text-stone-500 mb-2">Team Leads</div>

                                        {/* Names */}
                                        {portfolio.leads.map((lead, i) => (
                                            <div key={i} className="text-stone-300 font-medium group-hover:text-white transition-colors">
                                                {lead}
                                            </div>
                                        ))}
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
                        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                    >
                        {coreTeam.map((team, index) => (
                            <motion.div
                                key={index}
                                variants={fadeInUp}
                                className="group bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:border-purple-500/30 relative overflow-hidden active:scale-[0.98]"
                            >
                                {/* Hover Gradient Background */}
                                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                <div className="relative z-10">
                                    <div className="flex items-center gap-4 mb-6">
                                        <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center border border-white/20 group-hover:border-purple-500 group-hover:bg-purple-500/20 transition-all shadow-[0_0_0_1px_rgba(255,255,255,0.05)] group-hover:shadow-[0_0_15px_rgba(168,85,247,0.3)]">
                                            <team.icon className="w-6 h-6 text-stone-400 group-hover:text-purple-400 transition-colors duration-300" />
                                        </div>
                                        <h3 className="text-xl font-bold uppercase font-display tracking-wide text-white group-hover:text-purple-400 transition-colors">
                                            {team.title}
                                        </h3>
                                    </div>

                                    <div className="space-y-3 pl-16 border-l border-white/10 ml-6 group-hover:border-purple-500/30 transition-colors">
                                        {/* Label */}
                                        <div className="text-xs font-mono uppercase tracking-widest text-stone-500 mb-2">Core Members</div>

                                        {/* Names */}
                                        {team.members.map((member, i) => (
                                            <div key={i} className="text-stone-300 font-medium group-hover:text-white transition-colors">
                                                {member}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </section>
            </div>
        </main>
    );
}
