"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import EventSection from "@/components/EventSection";
import PastEvents from "@/components/PastEvents";

export default function EventsPage() {
    const [showPastEvents, setShowPastEvents] = useState(false);
    return (
        <main className="min-h-screen bg-black text-white">
            {/* Header Section */}
            <div className="pt-32 pb-10 px-6 container mx-auto">
                <h1 className="text-4xl md:text-6xl font-display font-bold uppercase tracking-tighter mb-8 text-center">
                    Events <span className="text-mission-blue">Organized</span>
                </h1>
                <p className="text-center text-stone-400 max-w-3xl mx-auto mb-16 leading-relaxed">
                    Our chapter actively conducts technical workshops, hands-on sessions, and industry engagements designed to bridge theoretical learning with real-world geoscience and remote sensing applications.
                </p>
            </div>

            {/* CODE-QUAKE Event */}
            <EventSection
                title="CODE-QUAKE"
                date="18 September 2025"
                venue="Room 1406, Block 1, MJCET"
                duration="9:30 AM – 3:00 PM"
                type="Technical Workshop & Hands-on Session"
                about={[
                    "CODE-QUAKE was designed to transform beginner-level programming into an interactive, application-driven learning experience. The workshop introduced participants to Python fundamentals, logical problem solving, and rapid web application development using Streamlit.",
                    "Rather than focusing solely on theory, the event emphasized practical implementation through a disaster-impact simulation exercise, demonstrating how computational thinking can be applied to real-world scenarios."
                ]}
                focusAreas={[
                    "Python Programming Fundamentals",
                    "Logical & Algorithmic Thinking",
                    "Streamlit Web App Development",
                    "Disaster Simulation & Modeling"
                ]}
                outcomes={[
                    "Foundational understanding of Python",
                    "Improved logical reasoning & problem solving",
                    "Exposure to Streamlit for rapid prototyping",
                    "Practical insight into simulation workflows"
                ]}
                participation={[
                    { label: "IEEE Members", count: 18 },
                    { label: "Non-IEEE Participants", count: 65 }
                ]}
                galleryImages={[
                    "/CODequake/Abd.jpeg",
                    "/CODequake/Zain.jpeg",
                    "/CODequake/abdM.jpeg",
                    "/CODequake/saa.jpeg",
                    "/CODequake/saad.jpeg",
                    "/CODequake/win.jpeg"
                ]}
                groupPhoto="/CODequake/grpphoto.jpeg"
                instagramEmbedUrl="https://www.instagram.com/reel/DPTL68WjvhP/"
            />

            {/* STELLAR-X Event */}
            <EventSection
                title="STELLAR-X"
                date="13 November 2025"
                venue="Room 1406, Block 1, MJCET"
                duration="9:30 AM – 3:30 PM"
                type="AI & Deep Learning Workshop"
                about={[
                    "STELLAR-X was a technical awareness and skill-building workshop focused on artificial intelligence applications in image recognition and deep learning. The event introduced students to Python data workflows, machine learning concepts, and Convolutional Neural Networks (CNNs).",
                    "Through a structured progression of sessions and a guided hands-on project, participants explored how intelligent models interpret visual data and recognize complex patterns."
                ]}
                focusAreas={[
                    "Python & Data Handling",
                    "Machine Learning Concepts",
                    "Image Datasets & CNN Fundamentals",
                    "Practical Deep Learning Workflows"
                ]}
                outcomes={[
                    "Understanding of ML & CNN principles",
                    "Insight into dataset preparation & structure",
                    "Practical exposure to model behavior",
                    "Confidence in AI-based workflows"
                ]}
                participation={[
                    { label: "IEEE Members", count: 32 },
                    { label: "Non-IEEE Participants", count: 45 }
                ]}
                galleryImages={[
                    "/Stellerx/abd22.jpeg",
                    "/Stellerx/againblack.jpeg",
                    "/Stellerx/areebha.jpeg",
                    "/Stellerx/audicar.jpeg",
                    "/Stellerx/audiee.jpeg",
                    "/Stellerx/black.jpeg",
                    "/Stellerx/giff.jpeg",
                    "/Stellerx/kareem33.jpeg",
                    "/Stellerx/laptop.jpeg",
                    "/Stellerx/wth.jpeg"
                ]}
                groupPhoto="/Stellerx/grouppic.jpeg"
                instagramEmbedUrl="https://www.instagram.com/reel/DSdUqG9k0Mk/"
            />

            {/* NRSC Visit Event */}
            <EventSection
                title="INDUSTRIAL VISIT — NRSC"
                date="17 November 2025"
                venue="National Remote Sensing Centre (NRSC)"
                duration="Full Day Engagement"
                type="Academic-Industry Engagement"
                about={[
                    "The industrial visit to NRSC provided students with first-hand exposure to India’s space-based Earth observation capabilities. Participants explored real-world remote sensing systems, satellite data workflows, and geospatial applications supporting national development.",
                    "The visit bridged classroom learning with operational technologies, offering valuable perspective on geoscience, satellite imaging, and data-driven decision-making."
                ]}
                focusAreas={[
                    "Satellite Systems Demo",
                    "Earth Observation Workflows",
                    "Expert Sessions",
                    "Geospatial Applications"
                ]}
                outcomes={[
                    "Satellite & sensing system demonstrations",
                    "Earth observation data workflows",
                    "Expert interaction & knowledge sessions",
                    "Real-world remote sensing applications"
                ]}
                participation={[
                    { label: "IEEE Members", count: 76 },
                    { label: "Non-IEEE Participants", count: 61 }
                ]}
                galleryImages={[
                    "/industri/Ashfhaq.jpeg",
                    "/industri/againabd.jpeg",
                    "/industri/diance.jpeg",
                    "/industri/dusra_globe.jpeg",
                    "/industri/globe.jpeg",
                    "/industri/objects.jpeg",
                    "/industri/phirsypicM.jpeg",
                    "/industri/robot.jpeg",
                    "/industri/rocket.jpeg",
                    "/industri/satellite.jpeg",
                    "/industri/semi.jpeg",
                    "/industri/sideaudi.jpeg",
                    "/industri/speech.jpeg",
                    "/industri/uma.jpeg"
                ]}
                groupPhoto="/industri/group_picture.jpeg"
                instagramEmbedUrl="https://www.instagram.com/reel/DUoIRElDWFl/"
            />

            {/* ASHA KIRAN Event */}
            <EventSection
                title="ASHA KIRAN — Outreach Initiative"
                date="19–20 January 2026"
                venue="Grace Model High School"
                duration="Two Day Initiative"
                type="Outreach Program & Awareness Drive"
                about={[
                    "ASHA KIRAN was a two-day outreach initiative by IEEE GRSS MJCET aimed at promoting environmental awareness and introducing school students to climate science and geospatial technologies.",
                    "The program combined creativity, academic sessions, and interactive discussions to make topics like climate change, air pollution, and technology-driven environmental monitoring accessible to young learners."
                ]}
                focusAreas={[
                    "Poster Presentation Competition",
                    "Climate Impact Awareness",
                    "Air Quality Monitoring Tech",
                    "Geoinformatics & AI Basics"
                ]}
                outcomes={[
                    "Awareness of climate challenges",
                    "Understanding of pollution & sustainability",
                    "Insight into geospatial tech",
                    "Encouragement toward science"
                ]}
                participation={[
                    { label: "Students Engaged", count: 90 },
                    { label: "GRSS Volunteers", count: 5 }
                ]}
                galleryImages={[
                    "/ashakir/againsit.jpeg",
                    "/ashakir/sasta.jpeg",
                    "/ashakir/scabd.jpeg",
                    "/ashakir/sitting.jpeg",
                    "/ashakir/umamam.jpeg",
                    "/ashakir/why.jpeg",
                    "/ashakir/win1.jpeg",
                    "/ashakir/win2.jpeg"
                ]}
                groupPhoto="/ashakir/day1grp.jpeg"
            />

            {/* Past Events Toggle Section */}
            <div className="py-20 bg-black flex flex-col items-center justify-center border-t border-white/10">
                {!showPastEvents ? (
                    <div className="text-center px-6">
                        <h2 className="text-2xl md:text-3xl font-display font-bold uppercase text-white mb-6">
                            Constructing the Legacy
                        </h2>
                        <p className="text-stone-400 max-w-2xl mx-auto mb-8 font-mono text-sm">
                            Discover the events and milestones that laid the foundation for our chapter's growth.
                        </p>
                        <button
                            onClick={() => setShowPastEvents(true)}
                            className="px-8 py-4 bg-white/5 border border-white/10 rounded-full hover:bg-mission-blue hover:text-white hover:border-mission-blue transition-all duration-300 font-mono text-sm uppercase tracking-widest flex items-center gap-3 group"
                        >
                            <span>Explore Past Events</span>
                            <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
                        </button>
                    </div>
                ) : (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        transition={{ duration: 0.8, ease: "easeInOut" }}
                        className="w-full"
                    >
                        <PastEvents />
                    </motion.div>
                )}
            </div>
        </main>
    );
}
