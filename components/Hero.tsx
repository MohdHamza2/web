"use client";

import { motion } from "framer-motion";
import { ArrowRight, Globe, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DecryptedText } from "@/components/ui/decrypted-text";

import { useLaunch } from "@/context/LaunchContext";

export default function Hero() {
    const { isLaunched } = useLaunch();

    return (
        <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-space-black">
            {/* Realistic Starfield Background */}
            <div className="absolute inset-0 z-0 bg-starfield opacity-80 animate-[ping_60s_linear_infinite]" />

            {/* Orbital Gradient Mesh (Subtle) */}
            <div className="absolute top-[-50%] left-[-20%] w-[1000px] h-[1000px] bg-mission-blue/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-16 items-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="relative"
                >
                    {/* Mission Badge */}
                    <div className="inline-flex items-center gap-3 px-4 py-2 bg-white/5 border border-white/10 mb-10 backdrop-blur-sm">
                        <div className="w-2 h-2 bg-mission-blue rounded-full animate-pulse" />
                        <span className="font-mono text-xs tracking-[0.2em] text-starlight uppercase">Chapter Site: Active</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-display font-bold leading-[1.1] mb-8 tracking-tighter text-white uppercase">
                        <DecryptedText key={isLaunched ? "title1-launched" : "title1-wait"} text="IEEE GRSS" speed={50} animateOnView={true} /> <br />
                        <span className="text-mission-blue">
                            <DecryptedText key={isLaunched ? "title2-launched" : "title2-wait"} text="MJCET CHAPTER" speed={60} animateOnView={true} />
                        </span>
                    </h1>

                    <p className="text-lg md:text-xl text-stone-400 mb-12 max-w-lg leading-relaxed font-light tracking-wide">
                        Exploring Earth Through Data & Remote Sensing. The IEEE GRSS Student Chapter is a collective of innovators, engineers, and researchers advancing geoscience, earth observation, and intelligent sensing technologies.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-6">
                        <Button size="lg" className="bg-white text-black hover:bg-stone-200 font-bold text-sm uppercase tracking-widest h-14 px-10 rounded-none transition-all duration-300">
                            ESTABLISHED <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                        <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/5 font-mono text-xs h-14 px-10 rounded-none uppercase tracking-widest transition-all duration-300">
                            NOV 2024
                        </Button>
                    </div>

                    <div className="mt-20 flex gap-12 border-t border-white/10 pt-8">
                        <div>
                            <div className="text-3xl font-display font-bold text-white mb-1">
                                <DecryptedText text="T-Minus" speed={100} />
                            </div>
                            <div className="font-mono text-xs text-stone-500 uppercase tracking-wider">Upcoming Events</div>
                        </div>
                        <div>
                            <div className="text-3xl font-display font-bold text-white mb-1">405km</div>
                            <div className="font-mono text-xs text-stone-500 uppercase tracking-wider">Details</div>
                        </div>
                    </div>
                </motion.div>

                {/* Cinematic Visual - Realistic Earth & Satellite */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: isLaunched ? 1 : 0, scale: isLaunched ? 1 : 0.9 }}
                    transition={{ duration: 2, delay: 1 }}
                    className="relative hidden lg:flex items-center justify-center h-[800px] pointer-events-none perspective-1000"
                >
                    {/* Earth Sphere Container */}
                    <div className="relative w-[500px] h-[500px] rounded-full shadow-[0_0_100px_rgba(59,130,246,0.15)] bg-black">

                        {/* Earth Texture - Rendered AS IS with SCALE */}
                        <div className="absolute inset-0 rounded-full overflow-hidden">
                            <img
                                src="/earth-texture.png"
                                alt="Orbital View"
                                className="w-full h-full object-cover scale-[1.3]"
                            />
                        </div>

                        {/* Day/Night Terminator - Gradient Overlay */}
                        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-black/80 via-transparent to-transparent z-10" />

                        {/* Atmosphere Glow */}
                        <div className="absolute inset-0 rounded-full shadow-[inset_10px_10px_40px_rgba(255,255,255,0.1),inset_-20px_-20px_60px_rgba(0,0,0,0.9)] z-20" />

                        {/* Outer Atmosphere Haze */}
                        <div className="absolute -inset-1 rounded-full bg-mission-blue/20 blur-xl opacity-30 z-0" />

                        {/* Satellite REMOVED - Managed by SatelliteCanvas */}

                        {/* Data Floating Card */}
                        <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute top-10 right-[-20px] bg-black/80 backdrop-blur border border-white/20 p-3 rounded shadow-xl z-40"
                        >
                            <div className="flex items-center gap-2 mb-1">
                                <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
                                <span className="font-mono text-[10px] text-white uppercase tracking-widest">Signal Locked</span>
                            </div>
                            <div className="font-mono text-xs text-mission-blue">GHz: 12.455</div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
