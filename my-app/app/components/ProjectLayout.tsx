"use client";

import { motion } from "framer-motion";
import Link from "next/link";

interface ProjectLayoutProps {
    className?: string;
    heroImage: string;
    children?: React.ReactNode;
}

export default function ProjectLayout({
    className,
    heroImage,
    children,
}: ProjectLayoutProps) {

    return (
        <div className={className}>

            <motion.header
                className="nav"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
            >
                <Link href="/" className="logo">Grace Ilori</Link>
            </motion.header>
            <div className="navSpacer" />

            <div style={{ position: "relative" }}>
                <div style={{ overflow: "hidden" }}>
                    <motion.img
                        src={heroImage}
                        alt="Hero Image"
                        style={{ width: "100%", display: "block" }}
                    />
                </div>
            </div>

            <motion.div className="caseStudy">
                {children}
            </motion.div>
        </div>
    );
}

