"use client";

import { motion } from "framer-motion";
import { AnimatedCounter } from "@/components/ui/animated-counter";

const stats = [
    { label: "Active Members", value: 120 },
    { label: "Workshops Hosted", value: 45 },
    { label: "Research Projects", value: 12 },
    { label: "Global Hackathons", value: 3 },
];

export default function Stats() {
    return (
        <section className="py-12 border-y border-white/5 bg-navy-800/30 backdrop-blur-sm relative z-20">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    {stats.map((stat, index) => (
                        <div key={index} className="space-y-2 group">
                            <h3 className="text-4xl md:text-5xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-500 tabular-nums">
                                <AnimatedCounter value={stat.value} />
                                {stat.value > 10 ? "+" : ""}
                            </h3>
                            <p className="text-mission-blue/80 font-mono uppercase tracking-widest text-[10px] group-hover:text-mission-blue transition-colors">
                                {stat.label}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
