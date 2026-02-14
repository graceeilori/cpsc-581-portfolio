"use client";

import { motion } from "framer-motion";

interface VinylPlayerProps {
    songName?: string;
    artist?: string;
    isPlaying?: boolean;
    size?: "sm" | "md" | "lg";
    onClick?: () => void;
}

export default function VinylPlayer({
    songName = "Lo-Fi Study Beats",
    artist = "Chillhop",
    isPlaying = true,
    size = "md",
    onClick,
}: VinylPlayerProps) {
    const sizeMap = {
        sm: { vinyl: 80, label: 28 },
        md: { vinyl: 120, label: 42 },
        lg: { vinyl: 180, label: 64 },
    };

    const { vinyl, label } = sizeMap[size];

    return (
        <motion.div
            className="flex items-center gap-3 cursor-pointer group"
            onClick={onClick}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
        >
            {/* Vinyl record */}
            <div className="relative" style={{ width: vinyl, height: vinyl }}>
                {/* Outer disc */}
                <motion.div
                    className="absolute inset-0 rounded-full"
                    style={{
                        background: `
              radial-gradient(circle at 50% 50%,
                #1a1a1a 0%,
                #2a2a2a 30%,
                #1a1a1a 31%,
                #2a2a2a 50%,
                #1a1a1a 51%,
                #2a2a2a 70%,
                #1a1a1a 71%,
                #111 100%
              )
            `,
                        boxShadow: "0 2px 12px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.05)",
                    }}
                    animate={isPlaying ? { rotate: 360 } : {}}
                    transition={
                        isPlaying
                            ? { duration: 8, repeat: Infinity, ease: "linear" }
                            : {}
                    }
                >
                    {/* Grooves */}
                    <div
                        className="absolute inset-2 rounded-full opacity-20"
                        style={{
                            background:
                                "repeating-radial-gradient(circle, transparent, transparent 2px, rgba(255,255,255,0.03) 3px)",
                        }}
                    />

                    {/* Center label */}
                    <div
                        className="absolute rounded-full"
                        style={{
                            width: label,
                            height: label,
                            top: "50%",
                            left: "50%",
                            transform: "translate(-50%, -50%)",
                            background: "linear-gradient(135deg, #FFB5C5 0%, #FFE66D 50%, #A8E6CF 100%)",
                            boxShadow: "0 0 8px rgba(255, 181, 197, 0.3)",
                        }}
                    >
                        {/* Center hole */}
                        <div
                            className="absolute rounded-full bg-ink"
                            style={{
                                width: label * 0.2,
                                height: label * 0.2,
                                top: "50%",
                                left: "50%",
                                transform: "translate(-50%, -50%)",
                            }}
                        />
                    </div>
                </motion.div>
            </div>

            {/* Song info */}
            <div className="flex flex-col">
                <span className="font-hand text-ink text-sm leading-tight group-hover:text-glow-pink transition-colors">
                    {songName}
                </span>
                <span className="font-hand text-warm-gray text-xs">
                    {artist}
                </span>
                {isPlaying && (
                    <div className="flex gap-0.5 mt-1">
                        {[0, 1, 2, 3].map((i) => (
                            <motion.div
                                key={i}
                                className="w-0.5 bg-glow-pink rounded-full"
                                animate={{ height: [4, 12, 6, 10, 4] }}
                                transition={{
                                    duration: 0.8,
                                    repeat: Infinity,
                                    delay: i * 0.15,
                                    ease: "easeInOut",
                                }}
                            />
                        ))}
                    </div>
                )}
            </div>
        </motion.div>
    );
}
