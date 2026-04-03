"use client";

import { motion } from "framer-motion";
import Link from "next/link";

interface ProjectTitleSection {
    title: string;
    subtitle1: string;
    subtitle2: string;
    subcontent1: string;
    subcontent2: string;
}

interface ProjectLayoutProps {
    className?: string;
    heroImage: string;
    projectTitleSection: ProjectTitleSection;
    children?: React.ReactNode;
}

export default function ProjectLayout({
    className,
    heroImage,
    projectTitleSection,
    children,
}: ProjectLayoutProps) {

    return (
        <div className={className}>

            {/* Top Nav */}
            <motion.header
                className="nav"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
            >
                <Link href="/" className="logo">Grace Ilori</Link>
            </motion.header>

            <img src={heroImage} alt="Hero Image" style={{ width: "100%", display: "block" }} />

            <div className="projectTitleSection">
                <h1 className="titleText">{projectTitleSection.title}</h1>
                <div className="summary">
                    <div className="summaryItem">
                        <span className="summaryLabel">{projectTitleSection.subtitle1}</span>
                        <span className="summaryValue">{projectTitleSection.subcontent1}</span>
                    </div>
                    <div className="summaryItem">
                        <span className="summaryLabel">{projectTitleSection.subtitle2}</span>
                        <span className="summaryValue">{projectTitleSection.subcontent2}</span>
                    </div>
                </div>
            </div>

            {children}
        </div>
    );
}

