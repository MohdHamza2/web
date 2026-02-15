"use client";

import { motion } from "framer-motion";
import { Server, Cpu, Globe2, Users } from "lucide-react";
import { SpotlightCard } from "@/components/ui/spotlight-card";

const features = [
    {
        icon: <Server className="w-8 h-8 text-mission-blue" />,
        title: "Orbital Systems",
        description: "Hands-on workshops on satellite telemetry, ground station operations, and remote sensing protocols.",
    },
    {
        icon: <Cpu className="w-8 h-8 text-white" />,
        title: "Neural Networks",
        description: "Deep learning models for analyzing multi-spectral imagery and predicting planetary changes.",
    },
    {
        icon: <Globe2 className="w-8 h-8 text-mission-blue" />,
        title: "Global Intelligence",
        description: "Access to international datasets and collaborative research initiatives across the IEEE network.",
    },
    {
        icon: <Users className="w-8 h-8 text-white" />,
        title: "Crew Assembly",
        description: "Connect with elite engineers, researchers, and industry veterans in the aerospace sector.",
    },
];

export default function ValueProps() {
    return (
        <section className="py-32 bg-space-black relative overflow-hidden min-h-screen flex items-center">
            {/* Tech Grid Background */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_80%)]" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Left Side: Content */}
                    <div>
                        <div className="mb-16">
                            <div className="inline-block border border-white/10 bg-white/5 px-3 py-1 mb-4">
                                <span className="font-mono text-xs uppercase tracking-[0.3em] text-stone-400">System Modules</span>
                            </div>
                            <h2 className="text-4xl md:text-6xl font-display font-bold uppercase tracking-tighter mb-4">
                                Advanced <br /> <span className="text-mission-blue">Capabilities</span>
                            </h2>
                            <p className="text-stone-400 max-w-md leading-relaxed">
                                Our platform offers a comprehensive suite of tools for geospatial analysis and satellite operations.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            {features.map((feature, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                >
                                    <SpotlightCard className="h-full bg-stone-900/50 border border-white/10 group rounded-none">
                                        <div className="p-8 relative z-20 h-full flex flex-col">
                                            <div className="mb-6 bg-white/5 w-14 h-14 flex items-center justify-center border border-white/10 group-hover:border-mission-blue/50 transition-colors">
                                                {feature.icon}
                                            </div>
                                            <h3 className="mb-3 text-xl font-bold uppercase tracking-wide group-hover:text-mission-blue transition-colors">
                                                {feature.title}
                                            </h3>
                                            <p className="text-stone-400 font-mono text-xs leading-relaxed uppercase tracking-wider">
                                                {feature.description}
                                            </p>

                                            {/* Corner Accents */}
                                            <div className="absolute top-0 right-0 p-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                                <div className="w-2 h-2 bg-mission-blue" />
                                            </div>
                                        </div>
                                    </SpotlightCard>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Right Side: Empty to accommodate Satellite Anchor */}
                    <div className="hidden lg:block">
                        {/* SatelliteCanvas will occupy this space visually */}
                    </div>
                </div>
            </div>
        </section>
    );
}
