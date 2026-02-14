"use client";

import { motion } from "framer-motion";
import Link from "next/link";

interface PolaroidPhotoProps {
    src?: string;
    alt?: string;
    caption?: string;
    href?: string;
    rotation?: number;
}

export default function PolaroidPhoto({
    src,
    alt = "About me",
    caption = "about me",
    href = "/about",
    rotation = -3,
}: PolaroidPhotoProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: -20, rotate: rotation - 5 }}
            animate={{ opacity: 1, y: 0, rotate: rotation }}
            transition={{ delay: 1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ rotate: 0, scale: 1.08, y: -4 }}
            className="cursor-pointer"
        >
            <Link href={href}>
                <div
                    className="polaroid w-24 sm:w-28 md:w-32"
                    style={{ transform: `rotate(${rotation}deg)` }}
                >
                    {/* Photo area */}
                    <div className="aspect-square bg-cream-dark rounded-sm overflow-hidden relative">
                        {src ? (
                            <img
                                src={src}
                                alt={alt}
                                className="w-full h-full object-cover"
                            />
                        ) : (
                            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-glow-pink-muted/30 via-glow-mint-muted/30 to-glow-yellow-muted/30">
                                <span className="text-3xl"></span>
                            </div>
                        )}
                    </div>

                    {/* Caption */}
                    <p className="font-hand text-ink text-center text-xs sm:text-sm mt-1 pb-1">
                        {caption}
                    </p>
                </div>
            </Link>
        </motion.div>
    );
}
