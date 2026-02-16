"use client";

import { ExternalLink, Video, BookOpen, Layers, Award, GraduationCap } from "lucide-react";
import { motion } from "framer-motion";

export default function ResourcesPage() {
    const resources = [
        {
            title: "GRSS Webinar Program",
            description: "A collection of high-quality webinars covering remote sensing, geoscience, and related technologies. Delivered by eminent researchers and professionals.",
            idealFor: "Learning current industry trends, expert talks, niche remote sensing topics, continuing education.",
            link: "https://www.grss-ieee.org/events/webinars/grss-webinar-program/",
            icon: GraduationCap,
            image: "/resource/GRSS-Webinar-Program.jpeg"
        },
        {
            title: "Videos & YouTube Content",
            description: "Access GRSS-curated video content, including foundational introductions, tutorials, and expert presentations on remote sensing and related sciences.",
            idealFor: "Visual learning, introductory overviews, supplementing technical understanding.",
            link: "https://www.grss-ieee.org/videos/",
            icon: Video,
            image: "/resource/Videos.jpeg"
        },
        {
            title: "External Educational Resources",
            description: "A collection of carefully selected external links, documents, and learning materials related to geoscience, Earth observation, and remote sensing.",
            idealFor: "Reference materials, academic reading, extended learning.",
            link: "https://www.grss-ieee.org/resources/education/external-educational-resources/",
            icon: ExternalLink,
            image: "/resource/ExternalEducational.jpeg"
        },
        {
            title: "Tutorials & Documents",
            description: "Curated tutorials and documents providing deep dives into specific remote sensing topics — such as microwave remote sensing, sensors, and geospatial data interpretation.",
            idealFor: "Workshops, student learning modules, hands-on technical reading.",
            link: "https://www.grss-ieee.org/resources/tutorials-documents/",
            icon: BookOpen,
            image: "/resource/Tutorial-Document.jpeg"
        },
        {
            title: "Awards & Recognition",
            description: "Information about the IEEE GRSS Awards Program, which honors individuals and groups for outstanding contributions in remote sensing science and technology.",
            idealFor: "Motivation, chapter promotion, highlighting opportunities for academic recognition.",
            link: "https://www.grss-ieee.org/resources/awards/",
            icon: Award,
            image: "/resource/Awards&Recognition.jpeg"
        },
        {
            title: "GRSS Resource Center (Central Hub)",
            description: "A central online platform with a wealth of technical resources including courses, documents, and videos. Includes structured content on thermal sensing, SAR, and optical payloads.",
            idealFor: "Deep technical learning and structured study material.",
            link: "https://www.grss-ieee.org/resources/",
            icon: Layers,
            image: "/resource/GRSSresourceCenter.jpeg"
        }
    ];

    const fadeInUp = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } }
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    return (
        <main className="min-h-screen bg-navy-900 text-white pt-32 pb-20 px-6">
            <div className="container mx-auto">
                <motion.h1
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                    className="text-4xl md:text-6xl font-display font-bold uppercase tracking-tighter mb-8 text-center"
                >
                    Resources <span className="text-mission-blue">& Learning</span>
                </motion.h1>

                {/* Pro Tip Section */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                    className="max-w-4xl mx-auto mb-20 bg-mission-blue/10 border border-mission-blue/30 rounded-xl p-6 md:p-8 text-center relative overflow-hidden"
                >
                    <div className="absolute top-0 left-0 w-2 h-full bg-mission-blue" />

                    <p className="text-stone-300 leading-relaxed text-lg">
                        “Here are curated educational and technical resources from IEEE GRSS for students, researchers, and professionals exploring remote sensing and Earth observation.”
                    </p>
                </motion.div>

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    variants={staggerContainer}
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {resources.map((res, index) => (
                        <motion.div
                            key={index}
                            variants={fadeInUp}
                            className="group bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-300 hover:border-mission-blue/30 flex flex-col h-full"
                        >
                            {/* Resource Image */}
                            <div className="h-48 bg-stone-800 relative overflow-hidden">
                                <img
                                    src={res.image}
                                    alt={res.title}
                                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    onError={(e) => {
                                        // Fallback if image fails (e.g. for placeholders)
                                        e.currentTarget.style.display = 'none';
                                        if (e.currentTarget.parentElement) {
                                            e.currentTarget.parentElement.classList.add('bg-stone-800');
                                        }
                                    }}
                                />
                                {/* Fallback Text (visible if image fails or is loading) - positioned behind image */}
                                <div className="absolute inset-0 bg-stone-800 flex items-center justify-center text-stone-600 font-mono text-xs uppercase -z-10">
                                    {res.title}
                                </div>

                                {/* Overlay Gradient */}
                                <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-navy-900/50 to-transparent" />
                            </div>

                            <div className="p-6 flex flex-col flex-grow">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="p-2 rounded-lg bg-mission-blue/10 text-mission-blue">
                                        <res.icon className="w-6 h-6" />
                                    </div>
                                    <h3 className="text-xl font-bold font-display uppercase leading-tight group-hover:text-mission-blue transition-colors">
                                        {res.title}
                                    </h3>
                                </div>

                                <p className="text-stone-400 text-sm leading-relaxed mb-6 flex-grow">
                                    {res.description}
                                </p>

                                <div className="mt-auto">
                                    <div className="mb-4">
                                        <span className="text-xs font-mono uppercase tracking-widest text-mission-blue block mb-1">Ideal For:</span>
                                        <p className="text-xs text-stone-500 italic border-l-2 border-white/10 pl-3">
                                            {res.idealFor}
                                        </p>
                                    </div>

                                    <a
                                        href={res.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-full py-3 rounded-lg border border-white/10 hover:bg-mission-blue hover:text-white hover:border-mission-blue transition-all duration-300 font-mono text-xs uppercase tracking-widest flex items-center justify-center gap-2 group/btn"
                                    >
                                        Access Resource
                                        <ExternalLink className="w-3 h-3 group-hover/btn:translate-x-1 transition-transform" />
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </main>
    );
}
