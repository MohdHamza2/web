"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Magnetic from "@/components/ui/magnetic";

const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/#about-grss" },
    { name: "Events", href: "/events" },
    { name: "Team", href: "/team" },
    { name: "Resources", href: "/resources" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 border-b ${scrolled ? "bg-black/90 backdrop-blur-md border-white/10 py-4" : "bg-transparent border-transparent py-6"
                }`}
        >
            <div className="container mx-auto px-6 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-4 group">
                    <motion.div layoutId="chapter-logo-container" className="relative">
                        <motion.img
                            layoutId="chapter-logo"
                            src="/team/Logo_transparent.png"
                            alt="IEEE GRSS Logo"
                            className="w-12 h-12 object-contain"
                            transition={{ type: "spring", stiffness: 50, damping: 20 }}
                        />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                        className="flex flex-col"
                    >
                        <span className="font-display font-bold text-lg tracking-widest text-white uppercase leading-none">IEEE GRSS</span>
                        <span className="font-mono text-xs text-stone-400 tracking-[0.2em] uppercase leading-none mt-1">Student Chapter</span>
                    </motion.div>
                </Link>

                {/* Desktop Nav - Technical Text */}
                <div className="hidden md:flex items-center gap-12">
                    {navLinks.map((link) => (
                        <Magnetic key={link.name}>
                            <Link
                                href={link.href}
                                className="block text-xs font-mono font-medium text-stone-400 hover:text-white transition-colors uppercase tracking-[0.15em] relative group px-2 py-1"
                            >
                                {link.name}
                                <span className="absolute -bottom-2 left-0 w-0 h-px bg-mission-blue transition-all duration-300 group-hover:w-full" />
                            </Link>
                        </Magnetic>
                    ))}
                </div>

                <div className="hidden md:block">
                    <Magnetic>
                        <button className="px-6 py-2 border border-white/20 text-xs font-mono uppercase tracking-widest hover:bg-white hover:text-black transition-all">
                            System Access
                        </button>
                    </Magnetic>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-white"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Nav Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "100vh" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="fixed inset-0 top-[80px] bg-black z-40 md:hidden"
                    >
                        <div className="flex flex-col p-8 space-y-8">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="text-2xl font-display font-bold text-white hover:text-mission-blue uppercase tracking-widest"
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
