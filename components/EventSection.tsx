"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, Clock, MapPin, Users, Target, CheckCircle } from "lucide-react";

interface EventSectionProps {
    title: string;
    date: string;
    venue: string;
    duration: string;
    type: string;
    about: string[];
    focusAreas: string[];
    outcomes: string[];
    participation: { label: string; count: number }[];
    galleryImages: string[];
    groupPhoto?: string;
    instagramEmbedUrl?: string;
}

export default function EventSection({
    title,
    date,
    venue,
    duration,
    type,
    about,
    focusAreas,
    outcomes,
    participation,
    galleryImages,
    groupPhoto,
    instagramEmbedUrl
}: EventSectionProps) {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    // Background Slideshow Effect
    useEffect(() => {
        if (galleryImages.length <= 1) return;
        const interval = setInterval(() => {
            setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length);
        }, 5000); // Change every 5 seconds
        return () => clearInterval(interval);
    }, [galleryImages]);

    return (
        <section className="py-12 px-4 md:px-6 flex justify-center">
            <div className="relative w-full max-w-6xl rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-zinc-900 isolate">

                {/* Dynamic Background Slideshow */}
                <div className="absolute inset-0 z-[-1]">
                    <AnimatePresence mode="popLayout">
                        <motion.div
                            key={currentImageIndex}
                            initial={{ opacity: 0, scale: 1.1 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 1.5 }}
                            className="absolute inset-0"
                        >
                            <div
                                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                                style={{ backgroundImage: `url("${galleryImages[currentImageIndex]}")` }}
                            />
                        </motion.div>
                    </AnimatePresence>
                    {/* Overlay for Readability */}
                    <div className="absolute inset-0 bg-black/80 backdrop-blur-[2px]" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black" />
                </div>

                <div className="relative z-10 p-8 md:p-12">
                    {/* Header Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-12 border-l-4 border-mission-blue pl-6 md:pl-8"
                    >
                        <h2 className="text-4xl md:text-6xl font-display font-bold uppercase tracking-tighter text-white mb-4">
                            {title}
                        </h2>
                        <div className="flex flex-wrap gap-4 md:gap-6 text-stone-300 font-mono text-xs md:text-sm uppercase tracking-wider">
                            <div className="flex items-center gap-2">
                                <Calendar className="w-4 h-4 text-mission-blue" /> {date}
                            </div>
                            <div className="flex items-center gap-2">
                                <Clock className="w-4 h-4 text-mission-blue" /> {duration}
                            </div>
                            <div className="flex items-center gap-2">
                                <MapPin className="w-4 h-4 text-mission-blue" /> {venue}
                            </div>
                        </div>
                    </motion.div>

                    {/* Main Content Grid */}
                    <div className="grid lg:grid-cols-12 gap-8 md:gap-12 mb-16">

                        {/* Left Column: About & Details */}
                        <div className="lg:col-span-7 space-y-8 md:space-y-12">
                            {/* About */}
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="bg-white/5 border border-white/10 p-6 md:p-8 rounded-lg backdrop-blur-md"
                            >
                                <h3 className="text-xl md:text-2xl font-display font-bold uppercase tracking-wide text-white mb-4 md:mb-6 flex items-center gap-3">
                                    <Target className="w-5 h-5 md:w-6 md:h-6 text-mission-blue" /> Mission Debrief
                                </h3>
                                <div className="space-y-4 text-stone-300 leading-relaxed text-sm md:text-base">
                                    {about.map((paragraph, i) => (
                                        <p key={i}>{paragraph}</p>
                                    ))}
                                </div>
                            </motion.div>

                            {/* Focus Areas */}
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                            >
                                <h3 className="text-lg md:text-xl font-mono font-bold uppercase tracking-wide text-mission-blue mb-4 md:mb-6">
                                    Key Focus Areas
                                </h3>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                                    {focusAreas.map((area, i) => (
                                        <div key={i} className="flex items-center gap-3 bg-white/5 border border-white/5 p-3 md:p-4 rounded hover:bg-white/10 transition-colors">
                                            <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-emerald-500 rounded-full shrink-0" />
                                            <span className="text-stone-300 text-xs md:text-sm font-medium">{area}</span>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        </div>

                        {/* Right Column: Outcomes & Stats */}
                        <div className="lg:col-span-5 space-y-8 md:space-y-12">
                            {/* Learning Outcomes */}
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="bg-mission-blue/10 border border-mission-blue/20 p-6 md:p-8 rounded-lg"
                            >
                                <h3 className="text-xl md:text-2xl font-display font-bold uppercase tracking-wide text-white mb-4 md:mb-6">
                                    Mission Outcomes
                                </h3>
                                <ul className="space-y-3 md:space-y-4">
                                    {outcomes.map((outcome, i) => (
                                        <li key={i} className="flex gap-3 md:gap-4">
                                            <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-mission-blue shrink-0 mt-0.5" />
                                            <span className="text-stone-300 text-sm md:text-base">{outcome}</span>
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>

                            {/* Participation Stats */}
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                            >
                                <h3 className="text-lg md:text-xl font-mono font-bold uppercase tracking-wide text-stone-400 mb-4 md:mb-6">
                                    Personnel
                                </h3>
                                <div className="grid grid-cols-2 gap-3 md:gap-4">
                                    {participation.map((stat, i) => (
                                        <div key={i} className="bg-black/40 border border-white/10 p-4 md:p-6 rounded text-center">
                                            <div className="text-3xl md:text-4xl font-display font-bold text-white mb-1 md:mb-2">{stat.count}</div>
                                            <div className="text-[10px] md:text-xs font-mono text-stone-500 uppercase tracking-widest">{stat.label}</div>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        </div>
                    </div>

                    {/* Group Photo Section */}
                    {groupPhoto && (
                        <div
                            className="relative rounded-xl overflow-hidden border border-white/10 group"
                        >
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10" />
                            <img
                                src={groupPhoto}
                                alt="Event Team Group"
                                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700 max-h-[400px] md:max-h-[600px]"
                            />
                            <div className="absolute bottom-0 left-0 p-6 md:p-8 z-20">
                                <h3 className="text-2xl md:text-3xl font-display font-bold text-white uppercase tracking-tighter mb-2">Mission Accomplished</h3>
                                <p className="text-stone-300 font-mono text-xs md:text-sm max-w-xl">
                                    The team behind the successful execution of {title}.
                                </p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}
