"use client";

import { motion } from "framer-motion";
import BackButton from "./BackButton";
import FloatingMusicBadge from "./FloatingMusicBadge";
import ImageGallery from "./ImageGallery";
import VideoPlayer from "./VideoPlayer";

interface ProjectSection {
    title: string;
    content: React.ReactNode;
    images?: { src: string; alt: string; caption?: string }[];
    video?: string;
    videoCaption?: string;
}

interface ProjectLayoutProps {
    projectNumber: string;
    projectTitle: string;
    projectSubtitle: string;
    glowColor: "pink" | "mint" | "yellow" | "purple";
    heroImage: string;
    designChallenge: ProjectSection;
    designProcess: ProjectSection;
    development?: ProjectSection;
    solution: ProjectSection;
    reflection: ProjectSection;
    songName?: string;
    artist?: string;
    team?: { name: string; role?: string; image?: string }[];
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
    designChallenge,
    designProcess,
    development,
    solution,
    reflection,
    songName,
    artist,
    team,
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
                        className="text-lg sm:text-xl text-warm-gray mt-3 max-w-xl"
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
                    className="py-10"
                    variants={sectionVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-80px" }}
                    transition={sectionTransition}
                >
                    <SectionHeader title={designChallenge.title} />
                    <div className="text-ink-light text-lg leading-relaxed max-w-3xl">
                        {designChallenge.content}
                    </div>
                    {designChallenge.images && designChallenge.images.length > 0 && (
                        <div className="mt-8">
                            <ImageGallery images={designChallenge.images} />
                        </div>
                    )}
                </motion.section>

                {/* Design Process */}
                <motion.section
                    className="py-10"
                    variants={sectionVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-80px" }}
                    transition={sectionTransition}
                >
                    <SectionHeader title={designProcess.title} />
                    <div className="text-ink-light text-lg leading-relaxed max-w-3xl">
                        {designProcess.content}
                    </div>
                    {designProcess.images && designProcess.images.length > 0 && (
                        <div className="mt-8">
                            <ImageGallery images={designProcess.images} />
                        </div>
                    )}
                </motion.section>

                {/* Development (Optional) */}
                {development && (
                    <motion.section
                        className="py-10"
                        variants={sectionVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-80px" }}
                        transition={sectionTransition}
                    >
                        <SectionHeader title={development.title} />
                        <div className="text-ink-light text-lg leading-relaxed max-w-3xl">
                            {development.content}
                        </div>
                        {development.video ? (
                            <div className="mt-8">
                                <VideoPlayer src={development.video} caption={development.videoCaption} />
                            </div>
                        ) : development.images && development.images.length > 0 ? (
                            <div className="mt-8">
                                <ImageGallery images={development.images} />
                            </div>
                        ) : null}
                    </motion.section>
                )}

                {/* Solution */}
                <motion.section
                    className="py-10"
                    variants={sectionVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-80px" }}
                    transition={sectionTransition}
                >
                    <SectionHeader title={solution.title} />
                    <div className="text-ink-light text-lg leading-relaxed max-w-3xl">
                        {solution.content}
                    </div>
                    {solution.video ? (
                        <div className="mt-8">
                            <VideoPlayer src={solution.video} caption={solution.videoCaption} />
                        </div>
                    ) : solution.images && solution.images.length > 0 ? (
                        <div className="mt-8">
                            <ImageGallery images={solution.images} />
                        </div>
                    ) : null}
                </motion.section>

                {/* Reflection */}
                <motion.section
                    className="py-10"
                    variants={sectionVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-80px" }}
                    transition={sectionTransition}
                >
                    <SectionHeader title={reflection.title} />
                    <div className="text-ink-light text-lg leading-relaxed max-w-3xl">
                        {reflection.content}
                    </div>
                </motion.section>

                {/* Team Section */}
                {team && team.length > 0 && (
                    <motion.section
                        className="py-10"
                        variants={sectionVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-80px" }}
                        transition={sectionTransition}
                    >
                        <SectionHeader title="The Team" />
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                            {team.map((member, index) => (
                                <div key={index} className="flex flex-col items-center text-center">
                                    {member.image && (
                                        <div className="w-24 h-24 rounded-full overflow-hidden mb-4 bg-neutral-200">
                                            <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                                        </div>
                                    )}
                                    <h3 className="font-display text-lg font-bold text-ink">{member.name}</h3>
                                    {member.role && <p className="text-warm-gray text-sm">{member.role}</p>}
                                </div>
                            ))}
                        </div>
                    </motion.section>
                )}
            </div>

            {/* Floating music badge */}
            {songName && artist && (
                <FloatingMusicBadge songName={songName} artist={artist} />
            )}
        </div>
    );
}

/* ---- Sub-component: Section Header ---- */
function SectionHeader({ title }: { title: string }) {
    return (
        <div className="mb-8">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-ink">
                {title}
            </h2>
        </div>
    );
}
