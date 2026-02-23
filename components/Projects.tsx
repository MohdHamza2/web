"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, X } from "lucide-react";
import { TiltCard } from "@/components/ui/tilt-card";

const projects = [
    {
        id: "01",
        title: "CODE QUAKE",
        category: "Event",
        status: "Completed",
        image: "/team/Codequake.jpeg",
        details: (
            <>
                <p className="mb-4">
                    <strong className="text-white block mb-2">PREFACE</strong>
                    CODE-QUAKE transformed beginner programming into an application-driven experience. Participants learned Python, logic building, and Streamlit through a disaster-impact simulation challenge.
                </p>
                <div className="mb-2">
                    <strong className="text-white block mb-2">OBJECTIVES</strong>
                    <ul className="list-disc list-outside ml-4 space-y-1 text-stone-400">
                        <li>Introduce Python programming fundamentals.</li>
                        <li>Enhance logical and analytical thinking.</li>
                        <li>Demonstrate app creation with Streamlit.</li>
                        <li>Show computational tools in decision-making.</li>
                        <li>Build confidence through hands-on practice.</li>
                        <li>Foster collaboration and participation.</li>
                    </ul>
                </div>
            </>
        ),
    },
    {
        id: "02",
        title: "STELLAR-X",
        category: "Workshop",
        status: "Completed",
        image: "/team/Stellarx.jpeg",
        details: (
            <>
                <p className="mb-4">
                    <strong className="text-white block mb-2">PREFACE</strong>
                    Stellar-X introduced students to AI and Deep Learning, simplifying concepts like CNNs and ML workflows. The workshop combined technical sessions with hands-on practice in image recognition.
                </p>
                <div className="mb-2">
                    <strong className="text-white block mb-2">OBJECTIVES</strong>
                    <ul className="list-disc list-outside ml-4 space-y-1 text-stone-400">
                        <li>Introduce AI-based image recognition.</li>
                        <li>Build Python data workflow skills.</li>
                        <li>Explain machine learning with real-world examples.</li>
                        <li>Provide exposure to CNN architectures.</li>
                        <li>Offer hands-on project experience.</li>
                        <li>Encourage interest in AI domains.</li>
                        <li>Promote curiosity and participation.</li>
                    </ul>
                </div>
            </>
        ),
    },
    {
        id: "03",
        title: "INdustrial trip -NRSC",
        category: "Field Visit",
        status: "Completed",
        image: "/team/INDustrialtrip.jpeg",
        details: (
            <>
                <p className="mb-4">
                    <strong className="text-white block mb-2">PREFACE</strong>
                    The trip to NRSC provided first-hand exposure to India’s Earth observation capabilities. Students witnessed how remote sensing supports national development through real-world applications.
                </p>
                <div className="mb-2">
                    <strong className="text-white block mb-2">OBJECTIVES</strong>
                    <ul className="list-disc list-outside ml-4 space-y-1 text-stone-400">
                        <li>Expose students to remote sensing systems.</li>
                        <li>Understand NRSC's operational workflow.</li>
                        <li>Introduce real-world geospatial applications.</li>
                        <li>Enhance awareness of Earth observation.</li>
                        <li>Explore career pathways in space research.</li>
                        <li>Promote research-oriented thinking.</li>
                    </ul>
                </div>
            </>
        ),
    },
];

export default function Projects() {
    const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

    useEffect(() => {
        if (selectedProject) {
            document.documentElement.classList.add('no-scroll');
        } else {
            document.documentElement.classList.remove('no-scroll');
        }
        return () => {
            document.documentElement.classList.remove('no-scroll');
        };
    }, [selectedProject]);

    return (
        <section id="projects" className="py-32 bg-space-black border-t border-dashed border-white/10 relative z-10">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-8">
                    <h2 className="text-4xl md:text-6xl font-display font-bold uppercase tracking-tighter leading-none text-white">
                        Events <br /> <span className="text-stone-600">Organized</span>
                    </h2>
                    <div className="flex flex-col items-start md:items-end w-full md:w-auto">
                        <div className="h-px w-32 bg-mission-blue mb-4 hidden md:block" />
                        <p className="font-mono text-xs uppercase tracking-widest text-stone-500 text-left md:text-right">
                            Fostering innovation <br /> through hands-on experience.
                        </p>
                    </div>
                </div>

                <div className="grid md:grid-cols-3 gap-y-16 gap-x-8 perspective-1000">
                    {projects.map((project, index) => (
                        <div key={index} onClick={() => setSelectedProject(project)}>
                            <TiltCard className="group cursor-pointer">
                                {/* Minimal Image Container */}
                                <div className="relative aspect-[4/3] overflow-hidden bg-stone-900 mb-6 border border-white/5 group-hover:border-white/20 transition-colors shadow-2xl">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover object-top opacity-60 grayscale-0 md:grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
                                    />
                                    {/* Technical Overlay */}
                                    <div className="absolute top-4 left-4 font-mono text-[10px] text-white bg-black/50 backdrop-blur px-2 py-1 uppercase tracking-widest translate-z-20">
                                        EVT. {project.id}
                                    </div>
                                </div>

                                {/* Text Content */}
                                <div className="flex justify-between items-start border-t border-white/10 pt-4 group-hover:border-mission-blue/50 transition-colors bg-space-black/80 backdrop-blur-sm p-4 translate-z-30">
                                    <div>
                                        <h3 className="text-xl font-bold uppercase mb-2 text-white group-hover:text-mission-blue transition-colors">{project.title}</h3>
                                        <p className="font-mono text-xs text-stone-500 uppercase tracking-wider">{project.category} // {project.status}</p>
                                    </div>
                                    <ArrowUpRight className="w-5 h-5 text-stone-600 group-hover:text-white transition-colors" />
                                </div>
                            </TiltCard>
                        </div>
                    ))}
                </div>
            </div>

            {/* Event Details Modal */}
            <AnimatePresence>
                {selectedProject && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedProject(null)}
                            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                        />
                        <motion.div
                            layoutId={`card-${selectedProject.id}`}
                            className="relative w-full max-w-2xl bg-stone-900 border border-white/10 overflow-hidden z-20 flex flex-col max-h-[85vh]"
                        >
                            {/* Event Image - Shorter/Cropped */}
                            <div className="relative h-48 md:h-64 w-full shrink-0">
                                <img
                                    src={selectedProject.image}
                                    alt={selectedProject.title}
                                    className="w-full h-full object-cover object-top"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
                                <button
                                    onClick={() => setSelectedProject(null)}
                                    className="absolute top-4 right-4 p-2 bg-black/50 hover:bg-black/80 text-white rounded-full transition-colors"
                                >
                                    <X className="w-5 h-5" />
                                </button>
                            </div>
                            <div className="p-8 overflow-y-auto custom-scrollbar">
                                <h3 className="text-3xl font-bold uppercase mb-2 text-mission-blue">{selectedProject.title}</h3>
                                <div className="flex items-center gap-4 mb-6">
                                    <span className="font-mono text-xs text-stone-400 uppercase tracking-wider">{selectedProject.category}</span>
                                    <span className="w-1 h-1 bg-stone-600 rounded-full" />
                                    <span className="font-mono text-xs text-green-500 uppercase tracking-wider">{selectedProject.status}</span>
                                </div>
                                <div className="text-stone-300 leading-relaxed min-h-[100px]">
                                    {selectedProject.details}
                                </div>
                            </div>
                            <style jsx global>{`
                                .custom-scrollbar::-webkit-scrollbar {
                                    width: 8px;
                                }
                                .custom-scrollbar::-webkit-scrollbar-track {
                                    background: rgba(255, 255, 255, 0.05);
                                    border-radius: 4px;
                                }
                                .custom-scrollbar::-webkit-scrollbar-thumb {
                                    background: rgba(255, 255, 255, 0.2);
                                    border-radius: 4px;
                                }
                                .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                                    background: rgba(255, 255, 255, 0.3);
                                }
                            `}</style>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </section>
    );
}
