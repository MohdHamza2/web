"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TiltCard } from "@/components/ui/tilt-card";

const projects = [
    {
        id: "01",
        title: "Urban Heat Island Monitoring",
        category: "Thermal Imaging",
        status: "Active",
        image: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?q=80&w=2144&auto=format&fit=crop",
    },
    {
        id: "02",
        title: "Crop Yield AI",
        category: "Machine Learning",
        status: "Completed",
        image: "https://images.unsplash.com/photo-1625246333195-bf8f85404843?q=80&w=2067&auto=format&fit=crop",
    },
    {
        id: "03",
        title: "Flood Warning System",
        category: "Disaster Mgmt",
        status: "Deployed",
        image: "https://images.unsplash.com/photo-1444628838545-ac4016a5418a?q=80&w=2070&auto=format&fit=crop",
    },
];

export default function Projects() {
    return (
        <section id="projects" className="py-32 bg-space-black border-t border-dashed border-white/10 relative z-10">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
                    <h2 className="text-4xl md:text-6xl font-display font-bold uppercase tracking-tighter leading-none text-white">
                        Telemetry <br /> <span className="text-stone-600">Dashboard</span>
                    </h2>
                    <div className="flex flex-col items-end">
                        <div className="h-px w-32 bg-mission-blue mb-4" />
                        <p className="font-mono text-xs uppercase tracking-widest text-stone-500 text-right">
                            Analyzing global datasets <br /> in real-time.
                        </p>
                    </div>
                </div>

                <div className="grid md:grid-cols-3 gap-y-16 gap-x-8 perspective-1000">
                    {projects.map((project, index) => (
                        <TiltCard key={index} className="group cursor-pointer">
                            {/* Minimal Image Container */}
                            <div className="relative aspect-[4/3] overflow-hidden bg-stone-900 mb-6 border border-white/5 group-hover:border-white/20 transition-colors shadow-2xl">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
                                />
                                {/* Technical Overlay */}
                                <div className="absolute top-4 left-4 font-mono text-[10px] text-white bg-black/50 backdrop-blur px-2 py-1 uppercase tracking-widest translate-z-20">
                                    FIG. {project.id}
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
                    ))}
                </div>
            </div>
        </section>
    );
}
