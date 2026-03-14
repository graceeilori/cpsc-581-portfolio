"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "A Family of Buttons",
    href: "/project-1",
    thumbnail: "/assets/buttons-thumb.jpg",
    thumbnailBg: "#0D0D1A",
    thumbnailType: "starfield",
    available: true,
  },
  {
    id: 2,
    title: "CAD Expertise Sharing",
    href: "/project-2",
    thumbnail: "/assets/cad-thumb.jpg",
    thumbnailBg: "#E6E6E6",
    thumbnailType: "cad",
    available: false,
  },
  {
    id: 3,
    title: "Augmented Eating Experience",
    href: "/project-3",
    thumbnail: "/assets/eating-thumb.jpg",
    thumbnailBg: "#C08E6B",
    thumbnailType: "solid",
    available: false,
  },
  {
    id: 4,
    title: "The Corner",
    href: "/project-4",
    thumbnail: "/assets/corner-thumb.jpg",
    thumbnailBg: "#DABFB7",
    thumbnailType: "card",
    cardLabel: "The Corner",
    available: false,
  },
  {
    id: 5,
    title: "The Shed",
    href: "/project-5",
    thumbnail: "/assets/shed-thumb.jpg",
    thumbnailBg: "#A7C7D7",
    thumbnailType: "card",
    cardLabel: "The Shed",
    available: false,
  },
  {
    id: 6,
    title: "The Creed",
    href: "/project-6",
    thumbnail: "/assets/creed-thumb.jpg",
    thumbnailBg: "#F2F2F2",
    thumbnailType: "quote",
    cardLabel: "The Creed",
    available: false,
  },
];

// Stable pre-computed star positions to avoid SSR hydration mismatch
const STARS = [
  { w: 2, h: 2, top: 8, left: 12, op: 0.9 },
  { w: 1, h: 1, top: 15, left: 78, op: 0.6 },
  { w: 2, h: 2, top: 22, left: 45, op: 0.8 },
  { w: 1, h: 1, top: 30, left: 6, op: 0.5 },
  { w: 2, h: 2, top: 35, left: 92, op: 0.7 },
  { w: 1, h: 1, top: 42, left: 33, op: 0.9 },
  { w: 2, h: 2, top: 48, left: 60, op: 0.4 },
  { w: 1, h: 1, top: 55, left: 18, op: 0.8 },
  { w: 2, h: 2, top: 60, left: 85, op: 0.6 },
  { w: 1, h: 1, top: 70, left: 50, op: 0.9 },
  { w: 2, h: 2, top: 75, left: 25, op: 0.5 },
  { w: 1, h: 1, top: 82, left: 70, op: 0.7 },
  { w: 2, h: 2, top: 90, left: 40, op: 0.8 },
  { w: 1, h: 1, top: 5, left: 55, op: 0.6 },
  { w: 2, h: 2, top: 18, left: 30, op: 0.9 },
  { w: 1, h: 1, top: 28, left: 67, op: 0.4 },
  { w: 2, h: 2, top: 38, left: 88, op: 0.7 },
  { w: 1, h: 1, top: 52, left: 3, op: 0.8 },
  { w: 2, h: 2, top: 65, left: 42, op: 0.5 },
  { w: 1, h: 1, top: 78, left: 95, op: 0.9 },
];

// Inline SVG-based thumbnails matching the Figma design
function StarfieldThumbnail() {
  return (
    <div
      className="w-full h-full relative overflow-hidden"
      style={{ background: "linear-gradient(135deg, #0D0D1A 0%, #1A1A2E 40%, #0D0D1A 100%)" }}
    >
      {/* Stars — stable positions */}
      {STARS.map((s, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-white"
          style={{
            width: s.w + "px",
            height: s.h + "px",
            top: s.top + "%",
            left: s.left + "%",
            opacity: s.op,
          }}
        />
      ))}
      {/* Shooting stars */}
      <div
        className="absolute w-16 h-px"
        style={{
          background: "linear-gradient(to right, transparent, rgba(255,255,255,0.8))",
          top: "25%",
          left: "30%",
          transform: "rotate(-40deg)",
          opacity: 0.7,
        }}
      />
      <div
        className="absolute w-10 h-px"
        style={{
          background: "linear-gradient(to right, transparent, rgba(255,255,255,0.6))",
          top: "55%",
          left: "15%",
          transform: "rotate(-35deg)",
          opacity: 0.5,
        }}
      />
    </div>
  );
}

function CADThumbnail() {
  return (
    <div
      className="w-full h-full flex items-center justify-center"
      style={{ background: "#E6E6E6" }}
    >
      {/* Grid of dots to mimic LEGO plate */}
      <div className="grid gap-1.5" style={{ gridTemplateColumns: "repeat(9, 1fr)" }}>
        {[...Array(72)].map((_, i) => (
          <div
            key={i}
            className="rounded-full"
            style={{ width: 8, height: 8, background: "#C8C8C8", boxShadow: "inset 0 1px 2px rgba(0,0,0,0.15)" }}
          />
        ))}
      </div>
    </div>
  );
}

function SolidThumbnail({ bg }: { bg: string }) {
  return <div className="w-full h-full" style={{ background: bg }} />;
}

function CardLabelThumbnail({ bg, label }: { bg: string; label: string }) {
  return (
    <div className="w-full h-full relative flex items-end justify-center pb-8" style={{ background: bg }}>
      <div
        className="bg-white px-6 py-2 text-center shadow-sm"
        style={{ fontFamily: "var(--font-prata), Georgia, serif", fontSize: "1rem", letterSpacing: "0.04em" }}
      >
        {label}
      </div>
    </div>
  );
}

function QuoteThumbnail({ label }: { label: string }) {
  return (
    <div className="w-full h-full relative flex items-center justify-center" style={{ background: "#F2F2F2" }}>
      {/* Large quotation marks at corners */}
      <div className="absolute top-4 left-4 text-6xl text-gray-300 leading-none select-none" style={{ fontFamily: "var(--font-prata), Georgia, serif" }}>
        &ldquo;
      </div>
      <div className="absolute bottom-4 right-4 text-6xl text-gray-300 leading-none select-none" style={{ fontFamily: "var(--font-prata), Georgia, serif", transform: "rotate(180deg)" }}>
        &ldquo;
      </div>
      <div
        className="bg-white px-6 py-2 text-center shadow-sm z-10"
        style={{ fontFamily: "var(--font-prata), Georgia, serif", fontSize: "1rem", letterSpacing: "0.04em" }}
      >
        {label}
      </div>
    </div>
  );
}

function ProjectThumbnail({ project }: { project: (typeof projects)[0] }) {
  if (project.thumbnailType === "starfield") return <StarfieldThumbnail />;
  if (project.thumbnailType === "cad") return <CADThumbnail />;
  if (project.thumbnailType === "solid") return <SolidThumbnail bg={project.thumbnailBg} />;
  if (project.thumbnailType === "card") return <CardLabelThumbnail bg={project.thumbnailBg} label={project.cardLabel!} />;
  if (project.thumbnailType === "quote") return <QuoteThumbnail label={project.cardLabel!} />;
  return <SolidThumbnail bg={project.thumbnailBg} />;
}

const containerVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08, delayChildren: 0.4 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

export default function Home() {
  return (
    <div className="home-portfolio min-h-screen" style={{ background: "#E6E1D1" }}>

      {/* â”€â”€ Header â”€â”€ */}
      <motion.header
        className="flex items-start justify-between px-8 pt-7 pb-5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        {/* Name â€” top left */}
        <span
          style={{
            fontFamily: "var(--font-prata), Georgia, serif",
            fontSize: "1.05rem",
            fontWeight: 600,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "#000",
          }}
        >
          Grace Ilori
        </span>

        {/* Year tag â€” top right (optional detail) */}
        <span
          style={{
            fontFamily: "var(--font-ibm-plex-sans), system-ui, sans-serif",
            fontSize: "0.7rem",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            color: "#6B6560",
          }}
        >
          2025
        </span>
      </motion.header>

      {/* â”€â”€ Hero Title â”€â”€ */}
      <motion.div
        className="text-center px-8 pb-8"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.15 }}
      >
        <h1
          style={{
            fontFamily: "var(--font-prata), Georgia, serif",
            fontSize: "clamp(3rem, 8vw, 6rem)",
            fontWeight: 400,
            lineHeight: 1.05,
            letterSpacing: "-0.01em",
            color: "#000",
            margin: 0,
          }}
        >
          CPSC 581: Portfolio
        </h1>
        <p
          style={{
            fontFamily: "var(--font-ibm-plex-sans), system-ui, sans-serif",
            fontSize: "clamp(0.875rem, 1.6vw, 1.1rem)",
            fontWeight: 400,
            letterSpacing: "0.04em",
            color: "#1A1A1A",
            marginTop: "0.6rem",
          }}
        >
          Human Computer Interaction II
        </p>
      </motion.div>

      {/* â”€â”€ Horizontal Divider â”€â”€ */}
      <motion.div
        style={{ height: 1, background: "rgba(0,0,0,0.2)", margin: "0" }}
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.8, delay: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
      />

      {/* â”€â”€ Project Grid â”€â”€ */}
      <motion.div
        className="relative"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        {/* 3-column grid with vertical dividers via CSS */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
          }}
        >
          {projects.map((project, i) => {
            const isLastInRow = (i + 1) % 3 === 0;
            const isFirstRow = i < 3;
            const CardWrapper = project.available ? Link : "div";
            const cardProps = project.available
              ? { href: project.href }
              : {};

            return (
              <motion.div
                key={project.id}
                variants={itemVariants}
                className="relative"
                style={{
                  borderRight: !isLastInRow ? "1px solid rgba(0,0,0,0.2)" : "none",
                  borderBottom: isFirstRow ? "1px solid rgba(0,0,0,0.2)" : "none",
                }}
              >
                <CardWrapper
                  {...(cardProps as any)}
                  className={`block group ${!project.available ? "cursor-default" : "cursor-pointer"}`}
                >
                  {/* Thumbnail */}
                  <div
                    className="relative overflow-hidden"
                    style={{ aspectRatio: "4/3" }}
                  >
                    <div className="w-full h-full">
                      <ProjectThumbnail project={project} />
                    </div>

                    {/* Hover overlay for available projects */}
                    {project.available && (
                      <div
                        className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100"
                        style={{
                          background: "rgba(0,0,0,0.25)",
                          transition: "opacity 0.3s ease",
                        }}
                      >
                        <span
                          style={{
                            fontFamily: "var(--font-ibm-plex-sans), system-ui, sans-serif",
                            fontSize: "0.7rem",
                            letterSpacing: "0.2em",
                            textTransform: "uppercase",
                            color: "white",
                            borderBottom: "1px solid white",
                            paddingBottom: "2px",
                          }}
                        >
                          View Project
                        </span>
                      </div>
                    )}

                    {/* Coming soon tag for unavailable projects */}
                    {!project.available && (
                      <div
                        className="absolute top-3 right-3"
                        style={{
                          background: "rgba(230,225,209,0.85)",
                          fontSize: "0.6rem",
                          letterSpacing: "0.15em",
                          textTransform: "uppercase",
                          padding: "3px 7px",
                          fontFamily: "var(--font-ibm-plex-sans), system-ui, sans-serif",
                          color: "#6B6560",
                        }}
                      >
                        Soon
                      </div>
                    )}
                  </div>

                  {/* Title */}
                  <div
                    className="text-center"
                    style={{
                      padding: "0.85rem 1rem 1.1rem",
                      borderTop: "1px solid rgba(0,0,0,0.1)",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "var(--font-prata), Georgia, serif",
                        fontSize: "1.05rem",
                        fontWeight: 400,
                        letterSpacing: "0.01em",
                        color: project.available ? "#000" : "#666",
                      }}
                    >
                      {project.title}
                    </span>
                  </div>
                </CardWrapper>
              </motion.div>
            );
          })}
        </div>
      </motion.div>

      {/* â”€â”€ Footer â”€â”€ */}
      <motion.footer
        className="px-8 py-5 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.2 }}
        style={{
          borderTop: "1px solid rgba(0,0,0,0.2)",
          marginTop: 0,
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-ibm-plex-sans), system-ui, sans-serif",
            fontSize: "0.7rem",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "#6B6560",
          }}
        >
          CPSC 581 &mdash; University of Calgary
        </span>
      </motion.footer>
    </div>
  );
}

