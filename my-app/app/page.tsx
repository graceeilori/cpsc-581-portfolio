"use client";

import Link from "next/link";
import { motion } from "framer-motion";

type Project = {
  id: number;
  title: string;
  description: string;
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
    description: "An interactive solar system where each planet is a team member's button, revealing personality through orbit and interaction.",
    href: "/button-project",
    thumbnailImg: "/assets/button-project/project-1-cover.png",
    available: true,
  },
  {
    id: 2,
    title: "CAD Expertise Sharing",
    description: "A real-time collaborative CAD platform using ghost overlays, haptic feedback, and voice to let experts guide novices remotely.",
    href: "/cad-expertise",
    thumbnailImg: "/assets/cad-expertise/project-2-cover.png",
    available: true,
  },
  {
    id: 3,
    title: "Augmented Eating Experience",
    description: "Augumented objects that sense and signal passively to improve the dining experience of hosts during large parties.",
    href: "/aug-experience",
    thumbnailImg: "/assets/aug-experience/project-3-cover.png",
    available: true,
  },
];

const bonusProjects: Bonus[] = [
  {
    id: 4,
    title: "The Corner",
    href: "/project-4",
    thumbnailImg: "/assets/bonus/cover-1.png",
    available: false,
  },
  {
    id: 5,
    title: "The Shed",
    href: "/project-5",
    thumbnailImg: "/assets/bonus/cover-2.png",
    available: false,
  },
  {
    id: 6,
    title: "The Creed",
    href: "/project-6",
    thumbnailImg: "/assets/bonus/cover-3.png",
    available: false,
  },
];

const allProjects = [...mainProjects, ...bonusProjects];

function BonusThumbnail({ project }: { project: (typeof bonusProjects)[0] }) {
  if (project.thumbnailImg) return <img src={project.thumbnailImg} alt={project.title} className="bonusImage" />;
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

function ProjectCard({ project }: { project: Project }) {
  const CardWrapper = project.available ? Link : "div";
  const cardProps = project.available ? { href: project.href } : {};
  const cardClass = ["card", project.available ? "clickable" : "disabled"].join(" ");

  return (
    <CardWrapper {...(cardProps as any)} className={cardClass}>
      <div className="thumbnail">
        <div className="thumbnailInner">
          {project.thumbnailImg && (
            <img src={project.thumbnailImg} alt={project.title} className="projectImage" />
          )}
        </div>
      </div>
      <div className="cardInfo">
        <h3 className={`cardInfoTitle ${project.available ? "available" : "unavailable"}`}>
          {project.title}
        </h3>
        <p className="cardInfoDesc">{project.description}</p>
      </div>
    </CardWrapper>
  );
}

const bonusRotations = [-8.5, -5, 5];

function BonusCard({ project, rotation }: { project: (typeof bonusProjects)[0]; rotation: number }) {
  const CardWrapper = project.available ? Link : "div";
  const cardProps = project.available ? { href: project.href } : {};
  const cardClass = ["card", project.available ? "clickable" : "disabled"].join(" ");

  return (
    <CardWrapper {...(cardProps as any)} className={cardClass}>
      <div className="bonusThumbnail">
        <div className="thumbnailInner">
          <BonusThumbnail project={project} />
        </div>
        <div
          className="bonusCardLabel"
          style={{ "--bonus-rotation": `${rotation}deg` } as React.CSSProperties}
        >
          <span className="bonusCardLabelText">{project.title}</span>
        </div>
        {!project.available && (
          <div className="soonBadge">Soon</div>
        )}
      </div>
    </CardWrapper>
  );
}

export default function Home() {
  return (
    <div className="page">

      <motion.header
        className="nav"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <span className="logo">Grace Ilori</span>
      </motion.header>

      <motion.div
        className="hero"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.15 }}
      >
        <h1 className="heroTitle">CPSC 581: Portfolio</h1>
        <p className="heroSubtitle">Human Computer Interaction II</p>
      </motion.div>

      <motion.img
        src="/assets/general/custom-divider.png"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.8, delay: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
      />

      <motion.div variants={containerVariants} initial="hidden" animate="show">
        <div className="grid">
          {mainProjects.map((project, i) => {
            return (
              <motion.div key={project.id} variants={itemVariants} className="gridCell">
                <ProjectCard project={project} />
              </motion.div>
            );
          })}
        </div>
      </motion.div>

      <motion.img
        src="/assets/general/custom-divider.png"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.8, delay: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
      />

      <motion.div variants={containerVariants} initial="hidden" animate="show">
        <div className="bonusGrid">
          {bonusProjects.map((project, i) => (
            <motion.div key={project.id} variants={itemVariants} className="gridCell">
              <BonusCard project={project} rotation={bonusRotations[i]} />
            </motion.div>
          ))}
        </div>
      </motion.div>

    </div>
  );
}
