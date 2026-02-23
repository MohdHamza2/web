"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Phone, Mail, User, Building2, MessageSquare, X, Smartphone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function CTA() {
    const [isFormOpen, setIsFormOpen] = useState(false);

    useEffect(() => {
        if (isFormOpen) {
            document.documentElement.classList.add('no-scroll');
        } else {
            document.documentElement.classList.remove('no-scroll');
        }
        return () => {
            document.documentElement.classList.remove('no-scroll');
        };
    }, [isFormOpen]);

    return (
        <section className="py-32 relative overflow-hidden bg-space-black flex items-center justify-center min-h-[800px]">
            {/* Ambient Shield */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-mission-blue/5 to-transparent opacity-20" />

            {/* Main Content */}
            <div className="container mx-auto px-6 relative z-10 text-center">
                <div className="mb-12">
                    <div className="w-px h-20 bg-gradient-to-b from-transparent via-white/20 to-transparent mx-auto mb-8" />
                    <h2 className="text-5xl md:text-8xl font-display font-bold uppercase tracking-tighter mb-8">
                        Connect <br /> <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/50">With Us</span>
                    </h2>
                    <p className="text-stone-400 font-mono text-sm uppercase tracking-[0.2em] max-w-2xl mx-auto leading-relaxed mb-12">
                        Ready to join our community or collaborate with us? We'd love to hear from you. <br />
                        Reach out for partnerships, sponsorships, or to share your expertise.
                    </p>

                    <div className="flex justify-center">
                        <Button
                            onClick={() => setIsFormOpen(true)}
                            size="lg"
                            className="h-20 px-12 md:px-16 text-base md:text-lg font-bold bg-mission-blue text-white hover:bg-mission-blue/80 uppercase tracking-widest rounded-none border border-mission-blue/50 shadow-[0_0_50px_rgba(59,130,246,0.3)] hover:shadow-[0_0_100px_rgba(59,130,246,0.6)] transition-all scale-100 hover:scale-105"
                        >
                            Initiate Collaboration
                        </Button>
                    </div>
                </div>

                {/* Contact Details - Side by Side */}
                <div className="flex flex-col md:flex-row justify-center gap-8 mt-16 max-w-4xl mx-auto">
                    {/* Chairperson */}
                    <motion.div
                        whileHover={{ scale: 1.05, borderColor: "rgba(59, 130, 246, 0.5)" }}
                        className="flex-1 bg-stone-900/50 backdrop-blur border border-white/10 p-8 flex items-center gap-6 cursor-pointer group shadow-2xl"
                    >
                        <div className="w-16 h-16 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full flex items-center justify-center border border-white/10 group-hover:border-mission-blue/50 transition-colors">
                            <User className="w-8 h-8 text-mission-blue" />
                        </div>
                        <div className="text-left">
                            <h3 className="text-white font-bold uppercase tracking-wider mb-2 text-lg">Chairperson</h3>
                            <div className="flex items-center gap-2 text-stone-400 font-mono">
                                <Smartphone className="w-4 h-4" />
                                <span>+91 95508 07130</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Secretary */}
                    <motion.div
                        whileHover={{ scale: 1.05, borderColor: "rgba(236, 72, 153, 0.5)" }}
                        className="flex-1 bg-stone-900/50 backdrop-blur border border-white/10 p-8 flex items-center gap-6 cursor-pointer group shadow-2xl"
                    >
                        <div className="w-16 h-16 bg-gradient-to-br from-pink-500/20 to-rose-500/20 rounded-full flex items-center justify-center border border-white/10 group-hover:border-pink-500/50 transition-colors">
                            <User className="w-8 h-8 text-pink-500" />
                        </div>
                        <div className="text-left">
                            <h3 className="text-white font-bold uppercase tracking-wider mb-2 text-lg">Secretary</h3>
                            <div className="flex items-center gap-2 text-stone-400 font-mono">
                                <Smartphone className="w-4 h-4" />
                                <span>+91 93815 04830</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Form Modal */}
            <AnimatePresence>
                {isFormOpen && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsFormOpen(false)}
                            className="absolute inset-0 bg-black/80 backdrop-blur-md"
                        />
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.9, opacity: 0, y: 20 }}
                            transition={{ type: "spring", duration: 0.6 }}
                            className="relative w-full max-w-2xl bg-stone-900 border border-white/10 rounded-2xl shadow-[0_0_100px_rgba(0,0,0,0.8)] overflow-hidden z-50"
                        >
                            <div className="p-8 md:p-12 relative overflow-hidden">
                                {/* Decorative elements */}
                                <div className="absolute top-0 right-0 w-64 h-64 bg-mission-blue/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />

                                <div className="flex justify-between items-start mb-8 relative z-10">
                                    <div>
                                        <h3 className="text-3xl font-display font-bold uppercase tracking-tight text-white mb-2">Establish Uplink</h3>
                                        <p className="text-stone-400 text-sm">Fill in your details to initiate collaboration protocols.</p>
                                    </div>
                                    <button
                                        onClick={() => setIsFormOpen(false)}
                                        className="p-2 hover:bg-white/10 rounded-full transition-colors"
                                    >
                                        <X className="w-6 h-6 text-stone-400 hover:text-white" />
                                    </button>
                                </div>

                                <form className="space-y-6 relative z-10">
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-xs font-mono uppercase text-stone-500">Name</label>
                                            <div className="relative group">
                                                <User className="absolute left-3 top-3 w-4 h-4 text-stone-500 group-focus-within:text-mission-blue transition-colors" />
                                                <input type="text" className="w-full bg-black/40 border border-white/10 rounded p-2.5 pl-10 text-white text-sm focus:border-mission-blue/50 outline-none transition-all placeholder:text-stone-700" placeholder="Your Name" />
                                            </div>
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-xs font-mono uppercase text-stone-500">Organization / College</label>
                                            <div className="relative group">
                                                <Building2 className="absolute left-3 top-3 w-4 h-4 text-stone-500 group-focus-within:text-mission-blue transition-colors" />
                                                <input type="text" className="w-full bg-black/40 border border-white/10 rounded p-2.5 pl-10 text-white text-sm focus:border-mission-blue/50 outline-none transition-all placeholder:text-stone-700" placeholder="Organization" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-xs font-mono uppercase text-stone-500">Email ID</label>
                                            <div className="relative group">
                                                <Mail className="absolute left-3 top-3 w-4 h-4 text-stone-500 group-focus-within:text-mission-blue transition-colors" />
                                                <input type="email" className="w-full bg-black/40 border border-white/10 rounded p-2.5 pl-10 text-white text-sm focus:border-mission-blue/50 outline-none transition-all placeholder:text-stone-700" placeholder="email@example.com" />
                                            </div>
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-xs font-mono uppercase text-stone-500">Phone No</label>
                                            <div className="relative group">
                                                <Phone className="absolute left-3 top-3 w-4 h-4 text-stone-500 group-focus-within:text-mission-blue transition-colors" />
                                                <input type="tel" className="w-full bg-black/40 border border-white/10 rounded p-2.5 pl-10 text-white text-sm focus:border-mission-blue/50 outline-none transition-all placeholder:text-stone-700" placeholder="+91 00000 00000" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-xs font-mono uppercase text-stone-500">Message</label>
                                        <div className="relative group">
                                            <MessageSquare className="absolute left-3 top-3 w-4 h-4 text-stone-500 group-focus-within:text-mission-blue transition-colors" />
                                            <textarea className="w-full bg-black/40 border border-white/10 rounded p-2.5 pl-10 text-white text-sm focus:border-mission-blue/50 outline-none transition-all min-h-[120px] placeholder:text-stone-700" placeholder="How can we collaborate?" />
                                        </div>
                                    </div>

                                    <Button className="w-full bg-mission-blue text-white hover:bg-mission-blue/80 uppercase tracking-widest font-bold py-6 shadow-lg shadow-mission-blue/20">
                                        Send Message
                                    </Button>
                                </form>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </section>
    );
}
