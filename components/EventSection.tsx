"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, Clock, MapPin, Users, Target, CheckCircle, X, Image as ImageIcon } from "lucide-react";

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
    const [showGallery, setShowGallery] = useState(false);

    // Background Slideshow Effect
    useEffect(() => {
        if (galleryImages.length <= 1) return;
        const interval = setInterval(() => {
            setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length);
        }, 5000); // Change every 5 seconds
        return () => clearInterval(interval);
    }, [galleryImages]);

    return (
        <section className="py-8 px-4 md:px-6 flex justify-center">
            <div className="relative w-full max-w-4xl rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-zinc-900 isolate">

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

                <div className="relative z-10 p-5 md:p-8">
                    {/* Header Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-6 border-l-4 border-mission-blue pl-4 md:pl-6"
                    >
                        <h2 className="text-3xl md:text-5xl font-display font-bold uppercase tracking-tighter mb-4 relative group cursor-default w-fit">
                            {/* Glowing effect behind text */}
                            <div className="absolute inset-0 bg-mission-blue/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />

                            {/* Main Text with Gradient Transition */}
                            <span className="bg-gradient-to-r from-white via-stone-100 to-stone-400 bg-clip-text text-transparent group-hover:from-mission-blue group-hover:via-cyan-400 group-hover:to-purple-500 transition-all duration-500 ease-out drop-shadow-sm group-hover:drop-shadow-[0_0_15px_rgba(56,189,248,0.5)]">
                                {title}
                            </span>

                            {/* Animated Underline */}
                            <div className="absolute -bottom-2 left-0 w-0 h-[2px] bg-gradient-to-r from-mission-blue to-purple-500 group-hover:w-full transition-all duration-700 ease-out" />
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
                    <div className="grid lg:grid-cols-12 gap-6 md:gap-8 mb-8">

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
                                    <Target className="w-5 h-5 md:w-6 md:h-6 text-mission-blue" /> Event Debrief
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
                                    Event Outcomes
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
                                    Participants
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

                    {/* Gallery Button */}
                    <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => setShowGallery(true)}
                        className="w-full py-4 mt-8 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl flex items-center justify-center gap-3 group transition-all"
                    >
                        <ImageIcon className="w-5 h-5 text-mission-blue group-hover:text-white transition-colors" />
                        <span className="font-mono text-sm uppercase tracking-widest text-stone-300 group-hover:text-white transition-colors">
                            View Event Gallery
                        </span>
                    </motion.button>
                </div>
            </div>

            {/* Gallery Modal */}
            <AnimatePresence>
                {showGallery && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 bg-black/90 backdrop-blur-md"
                        onClick={() => setShowGallery(false)}
                    >
                        <button
                            className="absolute top-4 right-4 md:top-8 md:right-8 p-2 bg-white/10 rounded-full hover:bg-white/20 text-white transition-colors z-50"
                            onClick={() => setShowGallery(false)}
                        >
                            <X className="w-6 h-6" />
                        </button>

                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            className="w-full max-w-2xl h-auto max-h-[80vh] overflow-hidden rounded-3xl bg-zinc-900 border border-white/10 p-4 flex flex-col"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <h3 className="text-xl md:text-2xl font-display font-bold text-white mb-6 flex-shrink-0">
                                Event Gallery: {title}
                            </h3>

                            <div className="overflow-y-auto flex-1 pr-2">
                                {/* Group Photo Hero */}
                                {groupPhoto && (
                                    <div className="mb-8">
                                        <h4 className="font-mono text-xs text-mission-blue uppercase tracking-widest mb-3">Team Photo</h4>
                                        <div className="relative rounded-xl overflow-hidden border border-white/10">
                                            <img src={groupPhoto} alt="Group" className="w-full h-auto object-cover" />
                                        </div>
                                    </div>
                                )}

                                {/* Gallery Marquee */}
                                <div className="mb-4">
                                    <h4 className="font-mono text-xs text-mission-blue uppercase tracking-widest mb-4">Event Snaps</h4>

                                    <div className="relative w-full overflow-hidden group">
                                        {/* Fade Edges */}
                                        <div className="absolute inset-y-0 left-0 w-8 md:w-16 bg-gradient-to-r from-zinc-900 to-transparent z-10 pointer-events-none" />
                                        <div className="absolute inset-y-0 right-0 w-8 md:w-16 bg-gradient-to-l from-zinc-900 to-transparent z-10 pointer-events-none" />

                                        <motion.div
                                            className="flex gap-4"
                                            animate={{ x: ["0%", "-50%"] }}
                                            transition={{
                                                repeat: Infinity,
                                                ease: "linear",
                                                duration: galleryImages.length * 3, // Adapt speed to count
                                                repeatType: "loop"
                                            }}
                                            style={{ width: "fit-content" }}
                                            whileHover={{ animationPlayState: "paused" }}
                                        >
                                            {/* Tripling to satisfy wide screens if needed, simple duplication is usually enough but tripling is safer for very wide screens */}
                                            {[...galleryImages, ...galleryImages, ...galleryImages].map((img, i) => (
                                                <div
                                                    key={i}
                                                    className="relative flex-shrink-0 w-48 md:w-64 aspect-video rounded-lg overflow-hidden border border-white/5 bg-black/50"
                                                >
                                                    <img src={img} alt={`Gallery ${i}`} className="w-full h-full object-cover" loading="lazy" />
                                                </div>
                                            ))}
                                        </motion.div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
