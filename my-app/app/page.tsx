"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import styles from "./page.module.css";

type Project = {
  id: number;
  title: string;
  href: string;
  thumbnailImg?: string;
  available: boolean;
};

type Bonus = {
  id: number;
  title: string;
  href: string;
  thumbnailImg?: string;
  available: boolean;
};

const mainProjects: Project[] = [
  {
    id: 1,
    title: "A Family of Buttons",
    href: "/project-1",
    thumbnailImg: "/assets/button-project-cover.png",
    available: true,
  },
  {
    id: 2,
    title: "CAD Expertise Sharing",
    href: "/project-2",
    thumbnailImg: "/assets/cad-expertise-cover.png",
    available: false,
  },
  {
    id: 3,
    title: "Augmented Eating Experience",
    href: "/project-3",
    thumbnailImg: "/assets/placeholder.png",
    available: false,
  },
];

const bonusProjects: Bonus[] = [
  {
    id: 4,
    title: "The Corner",
    href: "/project-4",
    thumbnailImg: "/assets/bonus-1-cover.png",
    available: false,
  },
  {
    id: 5,
    title: "The Shed",
    href: "/project-5",
    thumbnailImg: "/assets/bonus-2-cover.png",
    available: false,
  },
  {
    id: 6,
    title: "The Creed",
    href: "/project-6",
    thumbnailImg: "/assets/bonus-3-cover.png",
    available: false,
  },
];

const allProjects = [...mainProjects, ...bonusProjects];

function ProjectThumbnail({ project }: { project: (typeof allProjects)[0] }) {
  if (project.thumbnailImg) return <img src={project.thumbnailImg} alt={project.title} className={styles.projectImage} />;
  return null;
}

function BonusThumbnail({ project }: { project: (typeof bonusProjects)[0] }) {
  if (project.thumbnailImg) return <img src={project.thumbnailImg} alt={project.title} className={styles.bonusImage} />;
  return null;
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
      <motion.img
        src="/assets/custom-divider.png"
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
