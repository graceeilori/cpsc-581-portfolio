"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRouter } from "next/navigation";
import { useState, useCallback } from "react";

interface GlowNumberProps {
    digit: string;
    color: "pink" | "mint" | "yellow" | "purple";
    href: string;
    projectTitle: string;
    delay?: number;
}

const colorMap = {
    pink: {
        text: "#FFB5C5",
        glow: "text-glow-pink",
        glowIntense: "text-glow-pink-intense",
        bg: "rgba(255, 181, 197, 0.08)",
        border: "rgba(255, 181, 197, 0.2)",
    },
    mint: {
        text: "#A8E6CF",
        glow: "text-glow-mint",
        glowIntense: "text-glow-mint-intense",
        bg: "rgba(168, 230, 207, 0.08)",
        border: "rgba(168, 230, 207, 0.2)",
    },
    yellow: {
        text: "#FFE66D",
        glow: "text-glow-yellow",
        glowIntense: "text-glow-yellow-intense",
        bg: "rgba(255, 230, 109, 0.08)",
        border: "rgba(255, 230, 109, 0.2)",
    },
    purple: {
        text: "#C5A3FF",
        glow: "text-glow-purple",
        glowIntense: "text-glow-purple-intense",
        bg: "rgba(197, 163, 255, 0.08)",
        border: "rgba(197, 163, 255, 0.2)",
    },
};

export default function GlowNumber({
    digit,
    color,
    href,
    projectTitle,
    delay = 0,
}: GlowNumberProps) {
    const router = useRouter();
    const [isHovered, setIsHovered] = useState(false);
    const [isDragging, setIsDragging] = useState(false);
    const colors = colorMap[color];

    // Spring physics for drag
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const springX = useSpring(x, { stiffness: 300, damping: 20, mass: 0.8 });
    const springY = useSpring(y, { stiffness: 300, damping: 20, mass: 0.8 });

    // Rotation based on drag position
    const rotateX = useTransform(springY, [-100, 100], [10, -10]);
    const rotateY = useTransform(springX, [-100, 100], [-10, 10]);

    const handleClick = useCallback(() => {
        if (!isDragging) {
            router.push(href);
        }
    }, [isDragging, href, router]);

    return (
        <motion.div
            className="relative flex flex-col items-center cursor-grab active:cursor-grabbing select-none"
            initial={{ opacity: 0, y: 40, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
                delay,
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1],
            }}
        >
            {/* Project title (visible on hover) */}
            <motion.span
                className="font-hand text-warm-gray text-lg md:text-xl mb-2 pointer-events-none whitespace-nowrap"
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 5 }}
                transition={{ duration: 0.3 }}
            >
                {projectTitle}
            </motion.span>

            {/* The number */}
            <motion.div
                className={`font-display font-extrabold text-[8rem] sm:text-[10rem] md:text-[14rem] lg:text-[18rem] leading-none relative ${isHovered ? colors.glowIntense : colors.glow
                    }`}
                style={{
                    color: colors.text,
                    x: springX,
                    y: springY,
                    rotateX,
                    rotateY,
                    perspective: 800,
                }}
                drag
                dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
                dragElastic={0.3}
                dragTransition={{
                    bounceStiffness: 300,
                    bounceDamping: 20,
                }}
                onDragStart={() => setIsDragging(true)}
                onDragEnd={() => {
                    setTimeout(() => setIsDragging(false), 100);
                    x.set(0);
                    y.set(0);
                }}
                onHoverStart={() => setIsHovered(true)}
                onHoverEnd={() => setIsHovered(false)}
                onClick={handleClick}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
            >
                {digit}

                {/* Background glow circle */}
                <motion.div
                    className="absolute inset-0 -z-10 rounded-full"
                    style={{
                        background: `radial-gradient(circle, ${colors.bg} 0%, transparent 70%)`,
                    }}
                    animate={{
                        scale: isHovered ? 1.3 : 1,
                        opacity: isHovered ? 1 : 0.5,
                    }}
                    transition={{ duration: 0.4 }}
                />
            </motion.div>

            {/* "Click to explore" hint */}
            <motion.span
                className="font-hand text-warm-gray-light text-sm mt-2 pointer-events-none"
                initial={{ opacity: 0 }}
                animate={{ opacity: isHovered ? 0.8 : 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
            >
                click to explore →
            </motion.span>
        </motion.div>
    );
}
