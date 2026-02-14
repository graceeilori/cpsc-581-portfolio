"use client";

import { motion } from "framer-motion";

interface FloatingMusicBadgeProps {
    songName?: string;
    artist?: string;
}

export default function FloatingMusicBadge({
    songName = "Placeholder Song",
    artist = "Artist Name",
}: FloatingMusicBadgeProps) {
    return (
        <motion.div
            className="
        fixed bottom-6 right-6 z-40
        bg-white/80 backdrop-blur-sm
        rounded-full px-4 py-2
        shadow-md border border-warm-gray-light/20
        cursor-pointer
        hover:shadow-lg hover:bg-white/90
        transition-shadow duration-300
      "
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.6 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
        >
            <span className="text-sm text-ink">
                Designed to:{" "}
                <span className="text-warm-gray">
                    {songName}
                </span>
                {" "}by{" "}
                <span className="text-warm-gray">
                    {artist}
                </span>
            </span>
        </motion.div>
    );
}
