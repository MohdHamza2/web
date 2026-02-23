"use client";

import { useEffect, useRef } from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";

interface AnimatedCounterProps {
    value: number;
    direction?: "up" | "down";
    className?: string;
}

export function AnimatedCounter({ value, direction = "up", className }: AnimatedCounterProps) {
    const ref = useRef<HTMLSpanElement>(null);
    const motionValue = useMotionValue(direction === "down" ? value : 0);
    const springValue = useSpring(motionValue, {
        damping: 100,
        stiffness: 100,
    });
    const isInView = useInView(ref, { once: true, margin: "-20px" });

    useEffect(() => {
        // Initial set to ensure "0" or initial value is visible before animation
        if (ref.current) {
            ref.current.textContent = Intl.NumberFormat("en-US").format(
                direction === "down" ? value : 0
            );
        }
    }, [direction, value]);

    useEffect(() => {
        if (isInView) {
            motionValue.set(direction === "down" ? 0 : value);
        }
    }, [motionValue, isInView, value, direction]);

    useEffect(() => {
        const unsubscribe = springValue.on("change", (latest: number) => {
            if (ref.current) {
                ref.current.textContent = Intl.NumberFormat("en-US").format(Math.floor(latest));
            }
        });

        return () => unsubscribe();
    }, [springValue]);

    return <span className={className} ref={ref} />;
}
