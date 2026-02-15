"use client";

import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import { useState } from "react";

export default function SatelliteCanvas() {
    const { scrollY } = useScroll();
    const [isAnchored, setIsAnchored] = useState(false);

    // Scroll ranges:
    // 0 - 1000: Hero (Orbit -> Anchor)
    // 1000+: Acts as static image inside ValueProps and beyond (never disappears)

    const scale = useTransform(scrollY, [0, 1000], [0.8, 2.5]);
    const left = useTransform(scrollY, [0, 1000], ["60%", "75%"]);
    const rotate = useTransform(scrollY, [0, 1000], [-90, 0]);

    // Vertical handling (Y-Axis):
    // We use pixels for stability. Height is 300px, so center offset is -150px.
    // 0-1000: Stays at center (-150px relative to top: 50%)
    // 1000+: Moves UP at 1:1 ratio (1px scroll = 1px up)
    // Range end: 50000 -> -150 - (50000 - 1000) = -49150
    const y = useTransform(scrollY, [0, 1000, 50000], [-150, -150, -49150]);

    // Horizontal handling (X-Axis):
    // Constant centering offset of -50% (relative to left position)
    const x = useTransform(scrollY, [0, 1000], ["-50%", "-50%"]);

    useMotionValueEvent(scrollY, "change", (latest) => {
        // Stop floating animation when anchored or scrolled past
        if (latest > 1000) {
            setIsAnchored(true);
        } else {
            setIsAnchored(false);
        }
    });

    return (
        <div className="fixed inset-0 z-40 pointer-events-none overflow-hidden">
            <motion.div
                style={{
                    top: "50%", // Fixed vertical center source
                    left,
                    x,
                    y,
                    scale,
                    rotate,
                }}
                className="absolute w-32 h-32"
            >
                <motion.div
                    animate={isAnchored ? {
                        y: 0,
                        x: 0,
                        rotate: 0
                    } : {
                        y: [-10, 10, -10],
                        x: [-5, 5, -5],
                        rotate: [-5, 5, -5]
                    }}
                    transition={{
                        duration: isAnchored ? 0.5 : 6,
                        repeat: isAnchored ? 0 : Infinity,
                        ease: "easeInOut"
                    }}
                    className="w-full h-full"
                >
                    <img
                        src="/satellite.png"
                        alt="Satellite"
                        className="w-full h-full object-contain drop-shadow-[0_0_30px_rgba(59,130,246,0.5)]"
                    />
                </motion.div>
            </motion.div>
        </div>
    );
}
