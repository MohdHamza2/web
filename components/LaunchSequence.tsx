"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLaunch } from "@/context/LaunchContext";
import { ArrowRight, Satellite } from "lucide-react";
import { DecryptedText } from "@/components/ui/decrypted-text";

export default function LaunchSequence() {
    const { isLaunched, setLaunched } = useLaunch();
    const [phase, setPhase] = useState<"IDLE" | "LOADING" | "SPLASH" | "COMPLETED">("IDLE");
    const [progress, setProgress] = useState(0);

    // Handle Loading Phase
    useEffect(() => {
        if (phase === "LOADING") {
            const interval = setInterval(() => {
                setProgress((prev) => {
                    if (prev >= 100) {
                        clearInterval(interval);
                        setPhase("SPLASH");
                        return 100;
                    }
                    // Non-linear progress simulation
                    return prev + Math.floor(Math.random() * 5) + 1;
                });
            }, 50);
            return () => clearInterval(interval);
        }
    }, [phase]);

    // Handle Splash Phase Duration
    useEffect(() => {
        if (phase === "SPLASH") {
            const timer = setTimeout(() => {
                setLaunched(true);
                setPhase("COMPLETED");
            }, 9000); // 9 seconds to allow keywords to fully appear
            return () => clearTimeout(timer);
        }
    }, [phase, setLaunched]);

    if (phase === "COMPLETED") return null;

    return (
        <AnimatePresence>
            {!isLaunched && (
                <motion.div
                    className="fixed inset-0 z-[100] bg-black flex flex-col items-center justify-center overflow-hidden"
                    exit={{ opacity: 0, pointerEvents: "none" }}
                    transition={{ duration: 1 }}
                >
                    {/* Background Grid - similar to site theme */}
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

                    {/* PHASE 1: IDLE - LOAD BUTTON */}
                    {phase === "IDLE" && (
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 1.5, opacity: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <button
                                onClick={() => setPhase("LOADING")}
                                className="group relative px-12 py-6 bg-transparent border border-mission-blue/50 overflow-hidden transition-all hover:border-mission-blue shadow-[0_0_30px_rgba(59,130,246,0.3)] hover:shadow-[0_0_60px_rgba(59,130,246,0.6)]"
                            >
                                <div className="absolute inset-0 bg-mission-blue/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                                <div className="relative flex items-center gap-4">
                                    <Satellite className="w-6 h-6 text-mission-blue animate-pulse" />
                                    <span className="font-display font-bold text-2xl tracking-[0.2em] text-white uppercase">
                                        LOAD GRSS
                                    </span>
                                    <ArrowRight className="w-6 h-6 text-mission-blue group-hover:translate-x-2 transition-transform" />
                                </div>
                            </button>
                        </motion.div>
                    )}

                    {/* PHASE 2: LOADING - PROGRESS BAR */}
                    {phase === "LOADING" && (
                        <div className="w-full max-w-md px-6">
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="flex justify-between mb-2 font-mono text-mission-blue text-sm"
                            >
                                <span>INITIALIZING SYSTEMS</span>
                                <span>{Math.min(100, progress)}%</span>
                            </motion.div>
                            <div className="h-1 bg-white/10 w-full overflow-hidden">
                                <motion.div
                                    className="h-full bg-mission-blue shadow-[0_0_20px_rgba(59,130,246,0.8)]"
                                    initial={{ width: "0%" }}
                                    animate={{ width: `${progress}%` }}
                                />
                            </div>
                        </div>
                    )}

                    {/* PHASE 3: SPLASH - LOGO + TEXT REVEAL */}
                    {phase === "SPLASH" && (
                        <motion.div
                            className="flex flex-col items-center justify-center text-center px-4"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0, scale: 1.1 }} // Fades out as it 'moves' to navbar via LayoutId logic in next component
                        >
                            {/* Central Big Logo */}
                            <motion.div
                                layoutId="chapter-logo-container"
                                className="relative w-48 h-48 md:w-64 md:h-64 mb-8"
                                transition={{ type: "spring", stiffness: 50, damping: 20 }}
                            >
                                <motion.img
                                    layoutId="chapter-logo"
                                    src="/team/Logo_transparent.png"
                                    alt="IEEE GRSS"
                                    className="w-full h-full object-contain drop-shadow-[0_0_30px_rgba(255,255,255,0.3)]"
                                />
                            </motion.div>

                            {/* Main Title */}
                            {/* Main Title */}
                            <div className="mb-6 max-w-4xl px-4">
                                <motion.h1
                                    className="text-3xl md:text-5xl font-display font-bold tracking-widest uppercase text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]"
                                    initial="hidden"
                                    animate="visible"
                                    variants={{
                                        hidden: { opacity: 0 },
                                        visible: {
                                            opacity: 1,
                                            transition: {
                                                staggerChildren: 0.08,
                                                delayChildren: 0.5
                                            }
                                        }
                                    }}
                                >
                                    {/* Split text into characters for reveal */}
                                    {Array.from("IEEE Geoscience and Remote Sensing Society").map((char, index) => (
                                        <motion.span
                                            key={index}
                                            variants={{
                                                hidden: { opacity: 0, y: 20, filter: "blur(10px)" },
                                                visible: { opacity: 1, y: 0, filter: "blur(0px)" }
                                            }}
                                            transition={{ duration: 1.2, ease: "easeOut" }}
                                            className="inline-block"
                                        >
                                            {char === " " ? "\u00A0" : char}
                                        </motion.span>
                                    ))}
                                </motion.h1>
                            </div>

                            {/* Keywords Staggered */}
                            <motion.div
                                initial="hidden"
                                animate="visible"
                                variants={{
                                    hidden: { opacity: 0 },
                                    visible: {
                                        opacity: 1,
                                        transition: { staggerChildren: 0.4, delayChildren: 5.5 }
                                    }
                                }}
                                className="flex flex-col md:flex-row gap-4 md:gap-8 font-mono text-sm md:text-lg text-stone-400 uppercase tracking-widest"
                            >
                                <motion.span variants={{ hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1 } }}>
                                    Remote Sensing
                                </motion.span>
                                <motion.span
                                    className="hidden md:inline text-mission-blue"
                                    variants={{ hidden: { scale: 0 }, visible: { scale: 1 } }}
                                >
                                    •
                                </motion.span>
                                <motion.span variants={{ hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1 } }}>
                                    Geospatial Intelligence
                                </motion.span>
                                <motion.span
                                    className="hidden md:inline text-mission-blue"
                                    variants={{ hidden: { scale: 0 }, visible: { scale: 1 } }}
                                >
                                    •
                                </motion.span>
                                <motion.span variants={{ hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1 } }}>
                                    Earth Observation
                                </motion.span>
                            </motion.div>
                        </motion.div>
                    )}
                </motion.div>
            )}
        </AnimatePresence>
    );
}
