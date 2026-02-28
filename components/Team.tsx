"use client";

import { Linkedin } from "lucide-react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const team = [
    {
        name: "Mohammed Hadi Bilal",
        role: "Treasurer",
        image: "/team/Treasurer.jpeg",
        description: "Managing financial resources to support our mission and events.",
        linkedin: "#"
    },
    {
        name: "Syed Afraaz Ashraf",
        role: "Vice Chairperson",
        image: "/team/vice chair.jpeg",
        description: "Driving operational excellence and strategic initiatives for the chapter.",
        linkedin: "#"
    },
    {
        name: "Abdullah Hussain Shaikh",
        role: "Chairperson",
        image: "/team/Chair.jpeg",
        description: "Leading the chapter with vision, ensuring growth and impactful activities.",
        linkedin: "#"
    },
    {
        name: "Nooren Fatima",
        role: "Secretary",
        image: "/team/SEcretary.jpeg",
        description: "Coordinating communications and maintaining organizational efficiency.",
        linkedin: "#"
    },
    {
        name: "Hamza Mohammed",
        role: "Web Master",
        image: "/team/webmaster.jpeg",
        description: "Developing and maintaining our digital presence and technical platforms.",
        linkedin: "#"
    },
];

export default function Team() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 1024); // lg breakpoint
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

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
                        <motion.div
                            key={index}
                            initial="hidden"
                            whileInView={isMobile ? "visible" : undefined}
                            whileHover={!isMobile ? "visible" : undefined}
                            viewport={{ once: true, margin: "-100px" }}
                            className={`group relative overflow-hidden ${index === 2 ? 'md:-mt-8' : ''}`}
                        >
                            {/* Grayscale to Color on Hover (Desktop) / Color by default (Mobile) */}
                            <div className={`overflow-hidden bg-stone-900 mb-4 border border-white/10 ${index === 2 ? 'aspect-[3/4] md:scale-110 shadow-2xl z-10' : 'aspect-[3/4]'}`}>
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="w-full h-full object-cover grayscale-0 md:grayscale brightness-90 md:brightness-75 contrast-110 md:contrast-125 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-700 object-top"
                                />
                            </div>

                            <div className="border-l-2 border-white/20 pl-4 group-hover:border-mission-blue transition-colors duration-300">
                                <h3 className={`font-bold text-white uppercase ${index === 2 ? 'text-xl text-mission-blue' : 'text-lg'}`}>{member.name}</h3>
                                <p className="font-mono text-xs text-stone-500 uppercase tracking-widest mt-1 mb-2">{member.role}</p>

                                {/* Info revealed on hover (Desktop) or scroll (Mobile) */}
                                <motion.div
                                    variants={{
                                        hidden: { opacity: 0, height: 0 },
                                        visible: {
                                            opacity: 1,
                                            height: "auto",
                                            transition: {
                                                duration: 0.6,
                                                staggerChildren: 0.15,
                                                delayChildren: 0.1
                                            }
                                        }
                                    }}
                                    className="overflow-hidden"
                                >
                                    <motion.p
                                        variants={{
                                            hidden: { opacity: 0, y: 10, filter: "blur(8px)" },
                                            visible: { opacity: 1, y: 0, filter: "blur(0px)" }
                                        }}
                                        transition={{ duration: 0.8, ease: "easeOut" }}
                                        className="text-xs text-stone-400 leading-relaxed"
                                    >
                                        {member.description}
                                    </motion.p>
                                    <motion.a
                                        variants={{
                                            hidden: { opacity: 0, y: 10, filter: "blur(8px)" },
                                            visible: { opacity: 1, y: 0, filter: "blur(0px)" }
                                        }}
                                        transition={{ duration: 0.8, ease: "easeOut" }}
                                        href={member.linkedin}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 text-stone-500 hover:text-mission-blue mt-2 transition-colors duration-300"
                                    >
                                        <Linkedin className="w-4 h-4" />
                                    </motion.a>
                                </motion.div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
