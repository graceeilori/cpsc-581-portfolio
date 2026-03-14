"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import styles from "./page.module.css";

type Project = {
  id: number;
  title: string;
  href: string;
  thumbnailBg: string;
  thumbnailType: string;
  cardLabel?: string;
  available: boolean;
};

const mainProjects: Project[] = [
  {
    id: 1,
    title: "A Family of Buttons",
    href: "/project-1",
    thumbnailBg: "#0D0D1A",
    thumbnailType: "starfield",
    available: true,
  },
  {
    id: 2,
    title: "CAD Expertise Sharing",
    href: "/project-2",
    thumbnailBg: "#E6E6E6",
    thumbnailType: "cad",
    available: false,
  },
  {
    id: 3,
    title: "Augmented Eating Experience",
    href: "/project-3",
    thumbnailBg: "#C08E6B",
    thumbnailType: "solid",
    available: false,
  },
];

const bonusProjects: Project[] = [
  {
    id: 4,
    title: "The Corner",
    href: "/project-4",
    thumbnailBg: "#DABFB7",
    thumbnailType: "card",
    cardLabel: "The Corner",
    available: false,
  },
  {
    id: 5,
    title: "The Shed",
    href: "/project-5",
    thumbnailBg: "#A7C7D7",
    thumbnailType: "card",
    cardLabel: "The Shed",
    available: false,
  },
  {
    id: 6,
    title: "The Creed",
    href: "/project-6",
    thumbnailBg: "#F2F2F2",
    thumbnailType: "quote",
    cardLabel: "The Creed",
    available: false,
  },
];

const allProjects = [...mainProjects, ...bonusProjects];

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

function StarfieldThumbnail() {
  return (
    <div className={styles.starfield}>
      {STARS.map((s, i) => (
        <div
          key={i}
          className={styles.star}
          style={{ width: s.w, height: s.h, top: `${s.top}%`, left: `${s.left}%`, opacity: s.op }}
        />
      ))}
      <div className={styles.shootingStar1} />
      <div className={styles.shootingStar2} />
    </div>
  );
}

function CADThumbnail() {
  return (
    <div className={styles.cadThumb}>
      <div className={styles.cadDotGrid}>
        {[...Array(72)].map((_, i) => (
          <div key={i} className={styles.cadDot} />
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
    <div className={styles.cardLabelThumb} style={{ background: bg }}>
      <div className={styles.cardLabel}>{label}</div>
    </div>
  );
}

function QuoteThumbnail({ label }: { label: string }) {
  return (
    <div className={styles.quoteThumb}>
      <div className={`${styles.quoteMark} ${styles.topLeft}`}>&ldquo;</div>
      <div className={`${styles.quoteMark} ${styles.bottomRight}`}>&ldquo;</div>
      <div className={styles.cardLabel}>{label}</div>
    </div>
  );
}

function ProjectThumbnail({ project }: { project: (typeof allProjects)[0] }) {
  if (project.thumbnailType === "starfield") return <StarfieldThumbnail />;
  if (project.thumbnailType === "cad") return <CADThumbnail />;
  if (project.thumbnailType === "solid") return <SolidThumbnail bg={project.thumbnailBg} />;
  if (project.thumbnailType === "card") return <CardLabelThumbnail bg={project.thumbnailBg} label={project.cardLabel!} />;
  if (project.thumbnailType === "quote") return <QuoteThumbnail label={project.cardLabel!} />;
  return <SolidThumbnail bg={project.thumbnailBg} />;
}

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.4 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

function ProjectCard({ project, thumbnailClass }: { project: (typeof allProjects)[0]; thumbnailClass: string }) {
  const CardWrapper = project.available ? Link : "div";
  const cardProps = project.available ? { href: project.href } : {};
  const cardClass = [styles.card, project.available ? styles.clickable : styles.disabled].join(" ");

  return (
    <CardWrapper {...(cardProps as any)} className={cardClass}>
      <div className={thumbnailClass}>
        <div className={styles.thumbnailInner}>
          <ProjectThumbnail project={project} />
        </div>
        {project.available && (
          <div className={styles.hoverOverlay}>
            <span className={styles.hoverLabel}>View Project</span>
          </div>
        )}
        {!project.available && (
          <div className={styles.soonBadge}>Soon</div>
        )}
      </div>
      <div className={styles.cardTitle}>
        <span className={`${styles.cardTitleText} ${project.available ? styles.available : styles.unavailable}`}>
          {project.title}
        </span>
      </div>
    </CardWrapper>
  );
}

export default function Home() {
  return (
    <div className={styles.page}>

      {/* Top Nav */}
      <motion.header
        className={styles.nav}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <span className={styles.logo}>Grace Ilori</span>
      </motion.header>

      {/* Hero Title */}
      <motion.div
        className={styles.hero}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.15 }}
      >
        <h1 className={styles.heroTitle}>CPSC 581: Portfolio</h1>
        <p className={styles.heroSubtitle}>Human Computer Interaction II</p>
      </motion.div>

      {/* Projects Grid */}
      <motion.div variants={containerVariants} initial="hidden" animate="show">
        <div className={styles.grid}>
          {mainProjects.map((project, i) => {
            const isLastInRow = (i + 1) % 3 === 0;
            const cellClass = [
              styles.gridCell,
              !isLastInRow ? styles.borderRight : "",
            ].join(" ");

            return (
              <motion.div key={project.id} variants={itemVariants} className={cellClass}>
                <ProjectCard project={project} thumbnailClass={styles.thumbnail} />
              </motion.div>
            );
          })}
        </div>
      </motion.div>

      {/* Horizontal Divider */}
      <motion.div
        className={styles.divider}
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.8, delay: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
      />

      {/* Bonus Section */}
      <motion.div variants={containerVariants} initial="hidden" animate="show">
        <div className={styles.bonusGrid}>
          {bonusProjects.map((project, i) => {
            const isLastInRow = (i + 1) % 3 === 0;
            const cellClass = [
              styles.gridCell,
              !isLastInRow ? styles.borderRight : "",
            ].join(" ");

            return (
              <motion.div key={project.id} variants={itemVariants} className={cellClass}>
                <ProjectCard project={project} thumbnailClass={styles.bonusThumbnail} />
              </motion.div>
            );
          })}
        </div>
      </motion.div>

    </div>
  );
}
