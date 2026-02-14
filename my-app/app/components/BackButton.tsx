"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function BackButton() {
    return (
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
        >
            <Link
                href="/"
                className="
          inline-flex items-center gap-2
          font-caveat text-lg text-warm-gray
          hover:text-ink transition-colors duration-300
          group
        "
            >
                <motion.span
                    className="inline-block"
                    whileHover={{ x: -4 }}
                    transition={{ type: "spring", stiffness: 400, damping: 20 }}
                >
                    ←
                </motion.span>
                <span className="group-hover:underline underline-offset-4 decoration-glow-pink/50">
                    Back to 581
                </span>
            </Link>
        </motion.div>
    );
}
