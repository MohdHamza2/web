"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, History } from "lucide-react";
import EventSection from "@/components/EventSection";

const pastEvents = [
    {
        title: "The Richard Moore Memorial Lecture",
        date: "December 11, 2024",
        venue: "Block-04, Seminar Hall",
        type: "Distinguished Technical Lecture",
        about: [
            "The Richard Moore Memorial Lecture (RML) featured Dr. P. V. Radhadevi, a distinguished scientist with extensive experience in India’s space program. The lecture explored advancements and emerging trends in geospatial technologies, satellite imaging, and Earth observation systems.",
            "The session provided students with valuable insights into hyperspectral imaging, high-resolution satellite missions, and modern spatial analytics."
        ],
        focusAreas: [
            "Latest Trends in Geospatial Technologies",
            "Satellite-Based Earth Observation",
            "Hyperspectral & High-Resolution Imaging",
            "Future Research Directions"
        ],
        outcomes: [
            "Understanding of evolving geospatial systems",
            "Insight into real-world applications",
            "Awareness of research opportunities",
            "Knowledge of remote sensing technologies"
        ],
        galleryImages: [
            "/RichardML/rml1.jpeg",
            "/RichardML/rm2.jpeg",
            "/RichardML/phot.jpeg",
            "/RichardML/mirf.jpeg",
            "/RichardML/beykar.jpeg",
            "/RichardML/aiduence.jpeg"
        ]
    },
    {
        title: "Geo Launch",
        date: "April 17, 2025",
        venue: "Block-05, Room 5407",
        type: "Hands-On Technical Session",
        about: [
            "Geo Launch introduced students to satellite-based remote sensing and Google Earth Engine (GEE), emphasizing practical geospatial workflows. The session combined conceptual explanations with live demonstrations of environmental and spatial data analysis.",
            "Interactive activities enhanced engagement while making remote sensing tools accessible to beginners."
        ],
        focusAreas: [
            "Satellite Remote Sensing Fundamentals",
            "Google Earth Engine (GEE)",
            "Geospatial Data Analysis",
            "Environmental & Urban Applications"
        ],
        outcomes: [
            "Practical awareness of geospatial platforms",
            "Confidence in analyzing satellite data",
            "Understanding of GEE workflows",
            "Exposure to environmental analysis"
        ],
        galleryImages: [
            "/Geolaunch/geo1.jpeg",
            "/Geolaunch/geo2.jpeg",
            "/Geolaunch/geo3.jpeg",
            "/Geolaunch/geo4.jpeg",
            "/Geolaunch/geo5.jpeg",
            "/Geolaunch/geo6.jpeg",
            "/Geolaunch/geo7.jpeg",
            "/Geolaunch/ggroup.jpeg"
        ]
    },
    {
        title: "Ideathon",
        date: "April 25, 2025",
        venue: "Block-04, Seminar Hall",
        type: "Innovation & Idea Competition",
        about: [
            "Ideathon was a dynamic problem-solving event designed to promote rapid ideation, creativity, and teamwork. Participants tackled surprise problem statements within strict time limits and presented solutions before a judging panel.",
            "The rolling format maintained continuous energy and participation throughout the event."
        ],
        focusAreas: [
            "Creative Problem Solving",
            "Rapid Ideation & Pitching",
            "Team-Based Innovation",
            "Analytical Thinking"
        ],
        outcomes: [
            "Strengthened collaboration skills",
            "Enhanced presentation abilities",
            "Confidence in structured solutions",
            "Experience in rapid prototyping"
        ],
        galleryImages: [
            "/Ideathon/id1.jpeg",
            "/Ideathon/Id2.jpeg",
            "/Ideathon/Id4.jpeg",
            "/Ideathon/ID5.jpeg",
            "/Ideathon/D7.jpeg",
            "/Ideathon/ID8M.jpeg",
            "/Ideathon/I1.jpeg",
            "/Ideathon/ggroup.jpeg"
        ]
    },
    {
        title: "Earth Explorers",
        date: "April 26, 2025",
        venue: "Gulam Ahmed Hall, SU Campus",
        type: "Interactive Knowledge Event",
        about: [
            "Earth Explorers blended scientific curiosity with interactive challenges focused on geography, Earth science, and planetary concepts. Participants engaged in creative, reasoning-based rounds designed to test observation, communication, and analytical thinking.",
            "The event transformed technical learning into an engaging collaborative experience."
        ],
        focusAreas: [
            "Earth & Planetary Science",
            "Geographic Reasoning",
            "Team-Based Challenges",
            "Observational Skills"
        ],
        outcomes: [
            "Enhanced critical thinking",
            "Improved communication skills",
            "Increased scientific awareness",
            "Experience in game-based learning"
        ],
        galleryImages: [
            "/earthexplorer/idk4.jpeg",
            "/earthexplorer/idk5.jpeg",
            "/earthexplorer/idkM.jpeg",
            "/earthexplorer/idl2.jpeg"
        ]
    },
    {
        title: "Campus Rewind",
        date: "July 08, 2025",
        venue: "Block-04, Seminar Hall",
        type: "Interactive Panel & Mentorship Session",
        about: [
            "Campus Rewind provided a reflective and interactive platform where graduating seniors shared academic journeys, placement experiences, and personal insights with junior students. The event fostered mentorship, continuity, and knowledge exchange across batches.",
            "Audience interaction made the session both engaging and inspiring."
        ],
        focusAreas: [
            "Experience Sharing & Mentorship",
            "Academic & Career Insights",
            "Interactive Discussions",
            "Community Building"
        ],
        outcomes: [
            "Guidance for academic growth",
            "Insight into placement journeys",
            "Stronger senior-junior bond",
            "Motivation for future endeavors"
        ],
        galleryImages: [
            "/Campus/10.jpeg",
            "/Campus/8.jpeg",
            "/Campus/9.jpeg",
            "/Campus/CAmp.jpeg",
            "/Campus/Camo4.jpeg",
            "/Campus/Camo5.jpeg",
            "/Campus/Camo6.jpeg",
            "/Campus/Camo71.jpeg",
            "/Campus/Camo7M.jpeg",
            "/Campus/Camp2.jpeg",
            "/Campus/Camp3.jpeg",
            "/Campus/group.jpeg"
        ]
    },
    {
        title: "Expogenix’25",
        date: "July 17, 2025",
        venue: "Gulam Ahmed Hall, SU Campus",
        type: "Project Exhibition & Poster Showcase",
        about: [
            "Expogenix’25 served as a vibrant platform celebrating innovation, creativity, and technical excellence. Students presented functional prototypes, research posters, and solution-driven projects across domains including AI, IoT, and environmental technologies.",
            "The event promoted interdisciplinary learning, peer interaction, and research-driven exploration."
        ],
        focusAreas: [
            "Project & Prototype Demonstrations",
            "Poster Presentations",
            "Technical Interaction",
            "Innovation & Research Culture"
        ],
        outcomes: [
            "Strengthened communication skills",
            "Confidence in technical presentation",
            "Exposure to diverse projects",
            "Active peer engagement"
        ],
        galleryImages: [
            "/Expo/Exp.jpeg",
            "/Expo/Exp2.jpeg",
            "/Expo/exp3M.jpeg",
            "/Expo/exp4.jpeg",
            "/Expo/exp5.jpeg",
            "/Expo/exp6.jpeg",
            "/Expo/exp7.jpeg",
            "/Expo/exp8.jpeg"
        ]
    }
];

export default function PastEvents() {
    const [activeIndex, setActiveIndex] = useState(0);

    const nextEvent = () => {
        setActiveIndex((prev) => (prev + 1) % pastEvents.length);
    };

    const prevEvent = () => {
        setActiveIndex((prev) => (prev - 1 + pastEvents.length) % pastEvents.length);
    };

    return (
        <section className="py-20 bg-stone-950 border-t border-white/10 relative overflow-hidden">
            {/* Background Texture */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

            <div className="container mx-auto px-6 mb-12 flex flex-col items-center text-center">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-mission-blue/10 border border-mission-blue/20 text-mission-blue text-xs font-mono uppercase tracking-widest mb-4">
                    <History className="w-4 h-4" />
                    <span>Archive</span>
                </div>
                <h2 className="text-3xl md:text-5xl font-display font-bold text-white uppercase tracking-tighter mb-4">
                    Past Tenure <span className="text-stone-500">Events</span>
                </h2>
                <p className="text-stone-400 max-w-2xl text-sm md:text-base leading-relaxed">
                    A look back at the milestones and learning experiences that have shaped our chapter's journey.
                </p>
            </div>

            <div className="container mx-auto px-4 relative">
                {/* Navigation Buttons */}
                <button
                    onClick={prevEvent}
                    className="absolute left-0 md:left-4 top-1/2 -translate-y-1/2 z-20 p-3 bg-black/50 border border-white/10 hover:bg-mission-blue hover:text-white hover:border-mission-blue rounded-full transition-all backdrop-blur-sm group"
                    aria-label="Previous Event"
                >
                    <ChevronLeft className="w-6 h-6 group-hover:-translate-x-1 transition-transform" />
                </button>

                <button
                    onClick={nextEvent}
                    className="absolute right-0 md:right-4 top-1/2 -translate-y-1/2 z-20 p-3 bg-black/50 border border-white/10 hover:bg-mission-blue hover:text-white hover:border-mission-blue rounded-full transition-all backdrop-blur-sm group"
                    aria-label="Next Event"
                >
                    <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </button>

                {/* Event Content with Slide Animation */}
                <div className="overflow-hidden min-h-[600px]">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeIndex}
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -50 }}
                            transition={{ duration: 0.4, ease: "easeInOut" }}
                            className="w-full"
                        >
                            <EventSection {...pastEvents[activeIndex]} />
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Pagination Dots */}
                <div className="flex justify-center gap-3 mt-8">
                    {pastEvents.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setActiveIndex(index)}
                            className={`h-1.5 rounded-full transition-all duration-300 ${index === activeIndex ? "w-8 bg-mission-blue" : "w-1.5 bg-white/20 hover:bg-white/40"
                                }`}
                            aria-label={`Go to event ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
