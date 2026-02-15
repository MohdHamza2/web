"use client";

import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&";

interface DecryptedTextProps {
    text: string;
    speed?: number;
    className?: string;
    animateOnView?: boolean;
}

export function DecryptedText({
    text,
    speed = 50,
    className = "",
    animateOnView = true
}: DecryptedTextProps) {
    const [displayText, setDisplayText] = useState(text);
    const [isAnimating, setIsAnimating] = useState(false);
    const iterations = useRef(0);

    const startAnimation = () => {
        setIsAnimating(true);
        iterations.current = 0;
    };

    useEffect(() => {
        if (!isAnimating) return;

        const interval = setInterval(() => {
            setDisplayText((prev) =>
                text
                    .split("")
                    .map((letter, index) => {
                        if (index < iterations.current) {
                            return text[index];
                        }
                        return letters[Math.floor(Math.random() * letters.length)];
                    })
                    .join("")
            );

            if (iterations.current >= text.length) {
                setIsAnimating(false);
                clearInterval(interval);
            }

            iterations.current += 1 / 3;
        }, speed);

        return () => clearInterval(interval);
    }, [isAnimating, text, speed]);

    return (
        <motion.span
            className={`inline-block font-mono ${className}`}
            onViewportEnter={() => {
                if (animateOnView) startAnimation();
            }}
            onMouseEnter={startAnimation}
        >
            {displayText}
        </motion.span>
    );
}
