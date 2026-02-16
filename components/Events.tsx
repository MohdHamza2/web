"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

export default function Events() {
    const [selectedAchievement, setSelectedAchievement] = useState<any>(null);

    const achievements = [
        {
            date: "8 NOV",
            year: "2025",
            title: "HACK REVolution Winners",
            details: [
                {
                    image: "/team/terraviewe.jpeg",
                    title: "Secured 2nd place in Terraviewe Data Analytics Challenge by Omer Hussain Shaikh",
                    description: (
                        <>
                            <strong className="text-mission-blue block mb-2">Proud Moment for GRRS 🎉</strong>
                            <p>We are delighted to celebrate the achievement of our team member Omar, who secured 2nd Place in the Terraview Data Analytics Challenge. This accomplishment reflects exceptional analytical skills, dedication, and passion for data-driven problem solving.</p>
                            <p className="mt-4">Congratulations on this well-deserved success!</p>
                        </>
                    )
                },
                {
                    image: "/team/URBANSmartcity.jpeg",
                    title: "Secured 3rd place in Urban and smart cities domain by Afraaz and Hania",
                    description: (
                        <>
                            <strong className="text-mission-blue block mb-2">Another Milestone for GRRS 🚀</strong>
                            <p>We are proud to announce that our team secured 3rd Place in the Urban & Smart Cities domain at Hack Revolution. This achievement reflects our commitment to innovation, problem-solving, and building technology-driven solutions for smarter, more sustainable cities.</p>
                            <p className="mt-4">A great accomplishment for the entire team!</p>
                        </>
                    )
                },
                {
                    image: "/team/Agrotect.jpeg",
                    title: "Celebrating Student Excellence",
                    description: (
                        <>
                            <strong className="text-mission-blue block mb-2">We proudly congratulate Areebha for securing 2nd Place in the AgroTech domain.</strong>
                            <p>This achievement reflects creativity, dedication, and the spirit of innovation that defines our chapter.</p>
                            <p className="mt-4">Moments like these inspire our entire community to keep building and exploring.</p>
                        </>
                    )
                }
            ]
        },
        {
            date: "30 NOV",
            year: "2025",
            title: "DATANYX Winners",
            details: [
                {
                    image: "/team/Datanyx.jpeg",
                    title: "Dedication. Innovation. Achievement. 🚀",
                    description: (
                        <>
                            <p>At Datanyx, Kareem secured 3rd Place in the EdTech domain after an intense 24-hour problem-solving sprint. This accomplishment showcases perseverance, creativity, and the ability to perform under pressure.</p>
                            <p className="mt-4">A proud moment that reflects the spirit of innovation within our chapter.</p>
                        </>
                    )
                }
            ]
        },
        {
            date: "13 Feb",
            year: "2026",
            title: "Tech Faceoff Runner ups",
            details: [
                {
                    image: "/team/Techface.jpeg",
                    title: "Voices of Innovation 🏆",
                    description: (
                        <>
                            <p>The GRSS team — Kareem, Areebha, Usaid, Ilyas, and Sama — emerged as Runner-Up in the Tech Debate, competing among 16 clubs. This achievement celebrates not only knowledge and critical thinking, but also teamwork, confidence, and the power of ideas.</p>
                            <p className="mt-4">A proud moment for our chapter!</p>
                        </>
                    )
                },
                {
                    image: "/team/areebhawin.jpeg",
                    title: "Best Debater Award 🎤",
                    description: (
                        <>
                            <strong className="text-mission-blue block mb-2">Exceptional Articulation & Reasoning</strong>
                            <p>At the inter-club Tech Face Off debate event, Areebha was honored with the Best Debater Award for her exceptional articulation, analytical reasoning, and confident presentation.</p>
                            <p className="mt-4">Competing among participants from multiple student chapters and technical clubs, her performance stood out for its clarity of thought, structured argumentation, and persuasive delivery.</p>
                        </>
                    )
                }
            ]
        }
    ];

    return (
        <section id="achievements" className="py-32 bg-stone-950 text-white border-t border-white/10 relative">
            <div className="container mx-auto px-6">
                <h2 className="text-xs font-mono uppercase tracking-[0.3em] font-bold text-stone-500 mb-12">Achievements by GRSS</h2>

                <div className="border-t border-b border-white/10 divide-y divide-white/10">
                    {achievements.map((item, index) => (
                        <div key={index} className="grid grid-cols-1 md:grid-cols-12 gap-8 py-8 items-center group hover:bg-white/5 transition-colors duration-300 px-4 -mx-4">
                            {/* Date */}
                            <div className="col-span-2 font-mono">
                                <div className="text-2xl font-bold text-white uppercase">{item.date}</div>
                                <div className="text-xs text-stone-500">{item.year}</div>
                            </div>

                            {/* Title */}
                            <div className="col-span-8">
                                <h3 className="text-2xl font-display font-medium group-hover:pl-4 transition-all duration-300 group-hover:text-mission-blue">
                                    {item.title}
                                </h3>
                            </div>

                            {/* Action */}
                            <div className="col-span-2 text-right">
                                <button
                                    onClick={() => setSelectedAchievement(item)}
                                    className="inline-block border border-white/20 px-4 py-2 font-mono text-xs uppercase hover:bg-white hover:text-black cursor-pointer transition-all"
                                >
                                    OPEN
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Achievement Details Modal */}
            <AnimatePresence>
                {selectedAchievement && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedAchievement(null)}
                            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                        />
                        <motion.div
                            initial={{ scale: 0.95, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.95, opacity: 0 }}
                            className="relative w-full max-w-4xl bg-stone-900 border border-white/10 overflow-hidden z-20 flex flex-col max-h-[85vh] rounded-lg shadow-2xl"
                        >
                            <div className="p-6 border-b border-white/10 flex justify-between items-center bg-stone-900/50 backdrop-blur shrink-0">
                                <h3 className="text-xl font-bold uppercase text-mission-blue tracking-wider">{selectedAchievement.title}</h3>
                                <button
                                    onClick={() => setSelectedAchievement(null)}
                                    className="p-2 hover:bg-white/10 rounded-full transition-colors text-stone-400 hover:text-white"
                                >
                                    <X className="w-5 h-5" />
                                </button>
                            </div>

                            <div className="overflow-y-auto p-8 custom-scrollbar space-y-12">
                                {selectedAchievement.details.map((detail: any, idx: number) => (
                                    <div key={idx} className="grid md:grid-cols-2 gap-8 items-start">
                                        <div className="aspect-video relative rounded-lg overflow-hidden border border-white/10 bg-black/50">
                                            <img
                                                src={detail.image}
                                                alt={detail.title}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                        <div>
                                            <h4 className="text-lg font-bold text-white mb-4 leading-tight">{detail.title}</h4>
                                            <div className="text-stone-300 text-sm leading-relaxed">
                                                {detail.description}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <style jsx global>{`
                                .custom-scrollbar::-webkit-scrollbar {
                                    width: 8px;
                                }
                                .custom-scrollbar::-webkit-scrollbar-track {
                                    background: rgba(255, 255, 255, 0.05);
                                    border-radius: 4px;
                                }
                                .custom-scrollbar::-webkit-scrollbar-thumb {
                                    background: rgba(255, 255, 255, 0.2);
                                    border-radius: 4px;
                                }
                                .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                                    background: rgba(255, 255, 255, 0.3);
                                }
                            `}</style>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </section>
    );
}
