"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence, useScroll, useTransform, useSpring } from "framer-motion";
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
    const [isMobile, setIsMobile] = useState(false);
    const { scrollY } = useScroll();
    const smoothScrollY = useSpring(scrollY, { stiffness: 100, damping: 20, mass: 0.5 });

    // Transform logic: Move closer to center (nav links) as user scrolls down
    const xLeft = useTransform(smoothScrollY, [0, 250], [0, 250]); // Move logo right
    const xRight = useTransform(smoothScrollY, [0, 250], [0, -250]); // Move action btn left

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };
        handleResize(); // Initial check
        window.addEventListener("resize", handleResize);

        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("resize", handleResize);
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    // Scroll Lock for Mobile Menu
    useEffect(() => {
        if (isOpen && isMobile) {
            document.documentElement.classList.add('no-scroll');
        } else {
            document.documentElement.classList.remove('no-scroll');
        }
        return () => {
            document.documentElement.classList.remove('no-scroll');
        };
    }, [isOpen, isMobile]);

    return (
        <nav
            className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 border-b ${scrolled ? "bg-black/90 backdrop-blur-md border-white/10 py-4" : "bg-transparent border-transparent py-6"
                }`}
        >
            <div className="container mx-auto px-6 flex items-center justify-between">
                <motion.div
                    style={{ x: isMobile ? 0 : xLeft }}
                    className="relative z-50"
                >
                    <Link href="/" className="flex items-center gap-4 group">
                        <motion.div layoutId="chapter-logo-container" className="relative">
                            <motion.img
                                layoutId="chapter-logo"
                                src="/team/Logo_transparent.png"
                                alt="IEEE GRSS Logo"
                                className="w-10 h-10 md:w-12 md:h-12 object-contain"
                                transition={{ type: "spring", stiffness: 50, damping: 20 }}
                            />
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.5, duration: 0.8 }}
                            className="flex flex-col"
                        >
                            <span className="font-display font-bold text-base md:text-lg tracking-widest text-white uppercase leading-none text-nowrap">IEEE GRSS</span>
                            <span className="font-mono text-[10px] md:text-xs text-stone-400 tracking-[0.2em] uppercase leading-none mt-1">Student Chapter</span>
                        </motion.div>
                    </Link>
                </motion.div>

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

                <motion.div style={{ x: isMobile ? 0 : xRight }} className="hidden md:block relative z-50">
                    <Magnetic>
                        <button className="px-6 py-2 border border-white/20 text-xs font-mono uppercase tracking-widest hover:bg-white hover:text-black transition-all">
                            System Access
                        </button>
                    </Magnetic>
                </motion.div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden relative z-50 p-2 bg-white/5 border border-white/10 rounded-full"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                </button>
            </div>

            {/* Mobile Nav Overlay - Redesigned */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsOpen(false)}
                            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
                        />
                        <motion.div
                            initial={{ y: "-100%" }}
                            animate={{ y: 0 }}
                            exit={{ y: "-100%" }}
                            transition={{ type: "spring", damping: 30, stiffness: 300 }}
                            className="fixed inset-x-0 top-0 bg-stone-900/95 backdrop-blur-xl border-b border-white/10 z-50 md:hidden flex flex-col pt-24 pb-12 px-8 shadow-2xl"
                        >
                            <div className="space-y-6">
                                <div className="text-[10px] font-mono text-stone-500 uppercase tracking-[0.3em] mb-4 border-b border-white/5 pb-2">Navigation Menu</div>
                                {navLinks.map((link, i) => (
                                    <motion.div
                                        key={link.name}
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.1 + i * 0.1 }}
                                    >
                                        <Link
                                            href={link.href}
                                            onClick={() => setIsOpen(false)}
                                            className="block text-xl font-display font-medium text-white hover:text-mission-blue uppercase tracking-widest transition-all hover:translate-x-2"
                                        >
                                            {link.name}
                                        </Link>
                                    </motion.div>
                                ))}

                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.8 }}
                                    className="pt-12 mt-12 border-t border-white/5"
                                >
                                    <div className="text-[10px] font-mono text-mission-blue uppercase tracking-widest mb-4">Uplink Status</div>
                                    <div className="flex items-center gap-2">
                                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                                        <span className="text-xs font-mono text-stone-400">Connection Secured</span>
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </nav>
    );
}
