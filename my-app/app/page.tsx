"use client";

import GlowNumber from "./components/GlowNumber";
// import VinylPlayer from "./components/VinylPlayer";
// import PolaroidPhoto from "./components/PolaroidPhoto";
// import ScrollHint from "./components/ScrollHint";
import { motion } from "framer-motion";

const projects = [
  {
    digit: "5",
    color: "purple" as const,
    href: "/project-5",
    title: "A Family of Buttons",
  },
  {
    digit: "8",
    color: "mint" as const,
    href: "/project-8",
    title: "Project Two",
    disabled: true,
  },
  {
    digit: "1",
    color: "yellow" as const,
    href: "/project-1",
    title: "Project Three",
    disabled: true,
  },
];

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col bg-cream overflow-hidden">
      {/* Polaroid photo — top right (commented out) */}
      {/* <div className="absolute top-6 right-6 z-10">
        <PolaroidPhoto />
      </div> */}

      {/* Welcome message */}
      <motion.div
        className="pt-16 sm:pt-20 px-6 text-center"
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        <h1 className="text-xl sm:text-2xl md:text-3xl text-ink leading-relaxed" style={{ fontFamily: 'var(--font-caveat), cursive' }}>
          welcome to my CPSC 581
        </h1>
        <h1 className="text-2xl sm:text-3xl md:text-4xl text-ink leading-relaxed" style={{ fontFamily: 'var(--font-caveat), cursive' }}>
          Human Computer Interaction II portfolio
        </h1>
        {/* <p className="font-hand text-warm-gray text-base sm:text-lg mt-2">
          click a number to explore
        </p> */}
      </motion.div>

      {/* 581 Hero Numbers */}
      <div className="flex-1 flex items-center justify-center px-4">
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-2 md:gap-6 lg:gap-10">
          {projects.map((project, i) => (
            <GlowNumber
              key={project.digit}
              digit={project.digit}
              color={project.color}
              href={project.href}
              projectTitle={project.title}
              delay={0.5 + i * 0.15}
              disabled={project.disabled}
            />
          ))}
        </div>
      </div>

      {/* Vinyl Player — bottom left (commented out) */}
      {/* <div className="absolute bottom-8 left-6 z-10">
        <VinylPlayer size="md" />
      </div> */}

      {/* Scroll Hint — bottom center (commented out — no scroll behavior yet) */}
      {/* <div className="pb-10 flex justify-center">
        <ScrollHint />
      </div> */}

      {/* Subtle decorative elements */}
      <motion.div
        className="absolute top-1/4 left-8 w-2 h-2 rounded-full bg-glow-pink/30"
        animate={{ y: [0, -20, 0], opacity: [0.3, 0.7, 0.3] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-1/3 right-12 w-1.5 h-1.5 rounded-full bg-glow-mint/30"
        animate={{ y: [0, -15, 0], opacity: [0.2, 0.6, 0.2] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />
      <motion.div
        className="absolute bottom-1/3 left-1/4 w-1 h-1 rounded-full bg-glow-yellow/30"
        animate={{ y: [0, -12, 0], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />
    </div>
  );
}
