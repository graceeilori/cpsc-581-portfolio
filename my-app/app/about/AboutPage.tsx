"use client";

import { motion } from "framer-motion";
import BackButton from "../components/BackButton";

const sectionVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
};

const sectionTransition = { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const };

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-cream">
            {/* Header */}
            <div className="px-6 sm:px-12 md:px-20 pt-8">
                <BackButton />
            </div>

            <div className="max-w-3xl mx-auto px-6 sm:px-12 py-16">
                {/* Title */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.7 }}
                >
                    <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-ink leading-tight">
                        hi, I&apos;m{" "}
                        <span className="text-glow-pink" style={{ color: "#FFB5C5" }}>
                            Grace
                        </span>
                    </h1>
                    <p className="font-hand text-xl text-warm-gray mt-4">
                        designer, builder, and eternal curiosity-follower
                    </p>
                </motion.div>

                {/* Photo + Bio */}
                <motion.section
                    className="mt-12 flex flex-col md:flex-row gap-8 items-start"
                    variants={sectionVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={sectionTransition}
                >
                    {/* Photo placeholder */}
                    <div className="polaroid w-48 shrink-0 self-center md:self-start" style={{ transform: "rotate(2deg)" }}>
                        <div className="aspect-[3/4] bg-cream-dark rounded-sm overflow-hidden">
                            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-glow-pink-muted/30 via-glow-mint-muted/20 to-glow-yellow-muted/30">
                                <span className="text-5xl"></span>
                            </div>
                        </div>
                        <p className="font-hand text-ink text-center text-sm mt-1">that&apos;s me!</p>
                    </div>

                    <div>
                        <p className="text-ink-light text-lg leading-relaxed">
                            I&apos;m a student in CPSC 581 — Human-Computer Interaction at the
                            University of Calgary. This portfolio is a collection of my journey
                            through the course: the projects, the process, and the growth.
                        </p>
                        <p className="text-ink-light text-lg leading-relaxed mt-4">
                            I believe the best interfaces don&apos;t just work — they{" "}
                            <span className="font-hand text-xl text-warm-gray italic">delight</span>.
                            Every pixel, every transition, every micro-interaction is a chance to
                            make someone&apos;s day a tiny bit better.
                        </p>
                    </div>
                </motion.section>

                <div className="section-divider" />

                {/* Design Philosophy */}
                <motion.section
                    variants={sectionVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={sectionTransition}
                >
                    <span className="font-hand text-warm-gray-light text-sm italic">
            // what I believe
                    </span>
                    <h2 className="font-display text-2xl sm:text-3xl font-bold text-ink mt-1 mb-6">
                        Design Philosophy
                    </h2>

                    <div className="space-y-6">
                        {[
                            {
                                emoji: "",
                                title: "Human First, Always",
                                desc: "Technology should adapt to people, never the other way around. I start every project by deeply understanding who I'm designing for.",
                            },
                            {
                                emoji: "",
                                title: "Delight in the Details",
                                desc: "The difference between good and unforgettable lives in micro-interactions, thoughtful transitions, and the moments that make users smile.",
                            },
                            {
                                emoji: "",
                                title: "Embrace the Mess",
                                desc: "Great design is rarely linear. I've learned to love the messy middle — the failed prototypes, the surprising user feedback, the pivots that lead to breakthroughs.",
                            },
                            {
                                emoji: "",
                                title: "Inclusive by Default",
                                desc: "Accessibility isn't a feature — it's a foundation. Designing for the widest range of abilities leads to better experiences for everyone.",
                            },
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                className="flex gap-4 items-start p-4 rounded-xl bg-white/50 border border-warm-gray-light/10"
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.1, duration: 0.5 }}
                                viewport={{ once: true }}
                            >
                                <span className="text-2xl">{item.emoji}</span>
                                <div>
                                    <h3 className="font-display font-semibold text-ink text-lg">
                                        {item.title}
                                    </h3>
                                    <p className="text-ink-light text-base mt-1 leading-relaxed">
                                        {item.desc}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.section>

                <div className="section-divider" />

                {/* Tools & Skills */}
                <motion.section
                    variants={sectionVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={sectionTransition}
                >
                    <span className="font-hand text-warm-gray-light text-sm italic">
            // what I work with
                    </span>
                    <h2 className="font-display text-2xl sm:text-3xl font-bold text-ink mt-1 mb-6">
                        Tools & Skills
                    </h2>

                    <div className="flex flex-wrap gap-3">
                        {[
                            "Figma",
                            "React",
                            "Next.js",
                            "TypeScript",
                            "Framer Motion",
                            "User Research",
                            "Prototyping",
                            "Usability Testing",
                            "Wireframing",
                            "Interaction Design",
                            "Visual Design",
                            "Accessibility",
                        ].map((skill, i) => (
                            <motion.span
                                key={skill}
                                className="
                  px-4 py-2 rounded-full text-sm font-medium
                  bg-white/70 text-ink border border-warm-gray-light/20
                  hover:bg-white hover:border-warm-gray-light/40
                  transition-all duration-300
                "
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: i * 0.05, duration: 0.4 }}
                                viewport={{ once: true }}
                            >
                                {skill}
                            </motion.span>
                        ))}
                    </div>
                </motion.section>

                <div className="section-divider" />

                {/* Contact CTA */}
                <motion.section
                    className="text-center py-8"
                    variants={sectionVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    <h2 className="font-hand text-2xl text-ink mb-4">
                        let&apos;s connect
                    </h2>
                    <div className="flex flex-wrap justify-center gap-4">
                        {[
                            { label: "Email", href: "mailto:placeholder@ucalgary.ca", icon: "" },
                            { label: "LinkedIn", href: "#", icon: "" },
                            { label: "GitHub", href: "#", icon: "" },
                        ].map((link) => (
                            <a
                                key={link.label}
                                href={link.href}
                                className="
                  inline-flex items-center gap-2 px-5 py-2.5
                  rounded-full bg-ink text-cream font-medium text-sm
                  hover:bg-ink-light transition-colors duration-300
                "
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <span>{link.icon}</span>
                                {link.label}
                            </a>
                        ))}
                    </div>
                </motion.section>
            </div>
        </div>
    );
}
