"use client";

import { motion } from "framer-motion";

export default function ScrollHint() {
    return (
        <motion.div
            className="flex flex-col items-center gap-2 cursor-default"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 0.8 }}
        >
            <span className="font-caveat text-warm-gray-light text-sm tracking-wide">
                scroll to browse
            </span>
            <motion.div
                className="flex flex-col items-center"
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            >
                <svg
                    width="20"
                    height="30"
                    viewBox="0 0 20 30"
                    fill="none"
                    className="text-warm-gray-light"
                >
                    {/* Mouse outline */}
                    <rect
                        x="1"
                        y="1"
                        width="18"
                        height="28"
                        rx="9"
                        stroke="currentColor"
                        strokeWidth="1.5"
                    />
                    {/* Scroll wheel */}
                    <motion.line
                        x1="10"
                        y1="8"
                        x2="10"
                        y2="13"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        animate={{ y1: [8, 10, 8], y2: [13, 15, 13] }}
                        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
                    />
                </svg>
            </motion.div>
        </motion.div>
    );
}
