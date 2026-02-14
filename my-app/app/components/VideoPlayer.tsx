"use client";

import { motion } from "framer-motion";

interface VideoPlayerProps {
    src: string;
    poster?: string;
    caption?: string;
}

export default function VideoPlayer({ src, poster, caption }: VideoPlayerProps) {
    return (
        <motion.div
            className="w-full max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
        >
            <div className="relative aspect-video bg-neutral-900 rounded-lg overflow-hidden border border-warm-gray-light/20 shadow-lg">
                <video
                    className="w-full h-full object-cover"
                    controls
                    playsInline
                    poster={poster}
                >
                    <source src={src} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
            {caption && (
                <p className="text-warm-gray text-sm md:text-base mt-3 text-center italic">
                    {caption}
                </p>
            )}
        </motion.div>
    );
}
