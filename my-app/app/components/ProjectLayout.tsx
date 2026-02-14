"use client";

import { motion } from "framer-motion";
import BackButton from "./BackButton";
import FloatingMusicBadge from "./FloatingMusicBadge";
import ImageGallery from "./ImageGallery";

interface ProjectSection {
    title: string;
    content: string;
    images?: { src: string; alt: string; caption?: string }[];
}

interface ProjectLayoutProps {
    projectNumber: string;
    projectTitle: string;
    projectSubtitle: string;
    glowColor: "pink" | "mint" | "yellow" | "purple";
    heroImage: string;
    problemSpace: ProjectSection;
    designProcess: ProjectSection;
    solution: ProjectSection;
    reflection: ProjectSection;
    songName?: string;
    artist?: string;
}

const glowColors = {
    pink: { text: "#FFB5C5", glow: "text-glow-pink", bg: "from-glow-pink-muted/20" },
    mint: { text: "#A8E6CF", glow: "text-glow-mint", bg: "from-glow-mint-muted/20" },
    yellow: { text: "#FFE66D", glow: "text-glow-yellow", bg: "from-glow-yellow-muted/20" },
    purple: { text: "#C5A3FF", glow: "text-glow-purple", bg: "from-glow-purple-muted/20" },
};

const sectionVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
};

const sectionTransition = { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const };

export default function ProjectLayout({
    projectNumber,
    projectTitle,
    projectSubtitle,
    glowColor,
    heroImage,
    problemSpace,
    designProcess,
    solution,
    reflection,
    songName,
    artist,
}: ProjectLayoutProps) {
    const colors = glowColors[glowColor];

    return (
        <div className="min-h-screen bg-cream">
            {/* Hero Section */}
            <section className="relative min-h-[70vh] md:min-h-[80vh] flex flex-col justify-end overflow-hidden">
                {/* Hero background */}
                <div className="absolute inset-0">
                    <div className="w-full h-full bg-neutral-300" />
                    <div className={`absolute inset-0 bg-gradient-to-t from-cream via-cream/60 to-transparent`} />
                </div>

                {/* Back button */}
                <div className="absolute top-6 left-6 z-10">
                    <BackButton />
                </div>

                {/* Hero content */}
                <div className="relative z-10 px-6 sm:px-12 md:px-20 pb-12">
                    <motion.h1
                        className={`font-display text-4xl sm:text-5xl md:text-6xl font-bold ${colors.glow}`}
                        style={{ color: colors.text }}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                    >
                        {projectTitle}
                    </motion.h1>
                    <motion.p
                        className="font-hand text-lg sm:text-xl text-warm-gray mt-3 max-w-xl"
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.6 }}
                    >
                        {projectSubtitle}
                    </motion.p>
                </div>
            </section>

            {/* Content Sections */}
            <div className="px-6 sm:px-12 md:px-20 max-w-5xl mx-auto pb-24">
                {/* Problem Space */}
                <motion.section
                    className="py-16"
                    variants={sectionVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-80px" }}
                    transition={sectionTransition}
                >
                    <SectionHeader title={problemSpace.title} annotation="the challenge" />
                    <p className="text-ink-light text-lg leading-relaxed max-w-3xl">
                        {problemSpace.content}
                    </p>
                    {problemSpace.images && problemSpace.images.length > 0 && (
                        <div className="mt-8">
                            <ImageGallery images={problemSpace.images} />
                        </div>
                    )}
                </motion.section>

                <div className="section-divider" />

                {/* Design Process */}
                <motion.section
                    className="py-16"
                    variants={sectionVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-80px" }}
                    transition={sectionTransition}
                >
                    <SectionHeader title={designProcess.title} annotation="the messy middle" />
                    <p className="text-ink-light text-lg leading-relaxed max-w-3xl">
                        {designProcess.content}
                    </p>
                    {designProcess.images && designProcess.images.length > 0 && (
                        <div className="mt-8">
                            <ImageGallery images={designProcess.images} />
                        </div>
                    )}
                </motion.section>

                <div className="section-divider" />

                {/* Solution */}
                <motion.section
                    className="py-16"
                    variants={sectionVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-80px" }}
                    transition={sectionTransition}
                >
                    <SectionHeader title={solution.title} annotation="the result" />
                    <p className="text-ink-light text-lg leading-relaxed max-w-3xl">
                        {solution.content}
                    </p>
                    {solution.images && solution.images.length > 0 && (
                        <div className="mt-8">
                            <ImageGallery images={solution.images} />
                        </div>
                    )}
                </motion.section>

                <div className="section-divider" />

                {/* Reflection */}
                <motion.section
                    className="py-16"
                    variants={sectionVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-80px" }}
                    transition={sectionTransition}
                >
                    <SectionHeader title={reflection.title} annotation="looking back" />
                    <p className="text-ink-light text-lg leading-relaxed max-w-3xl">
                        {reflection.content}
                    </p>
                </motion.section>
            </div>

            {/* Floating music badge */}
            {songName && artist && (
                <FloatingMusicBadge songName={songName} artist={artist} />
            )}
        </div>
    );
}

/* ---- Sub-component: Section Header ---- */
function SectionHeader({
    title,
    annotation,
}: {
    title: string;
    annotation: string;
}) {
    return (
        <div className="mb-8">
            <span className="font-hand text-warm-gray-light text-sm italic block mb-1">
        // {annotation}
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-ink">
                {title}
            </h2>
        </div>
    );
}
