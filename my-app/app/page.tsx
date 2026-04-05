"use client";

import Link from "next/link";
import { motion } from "framer-motion";

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
    href: "/button-project",
    thumbnailImg: "/assets/button-project-cover.png",
    available: true,
  },
  {
    id: 2,
    title: "CAD Expertise Sharing",
    href: "/button-project",
    thumbnailImg: "/assets/cad-expertise-cover.png",
    available: true,
  },
  {
    id: 3,
    title: "Augmented Eating Experience",
    href: "/button-project",
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
  if (project.thumbnailImg) return <img src={project.thumbnailImg} alt={project.title} className="projectImage" />;
  return null;
}

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

function ProjectCard({ project, thumbnailClass }: { project: (typeof allProjects)[0]; thumbnailClass: string }) {
  const CardWrapper = project.available ? Link : "div";
  const cardProps = project.available ? { href: project.href } : {};
  const cardClass = ["card", project.available ? "clickable" : "disabled"].join(" ");

  return (
    <CardWrapper {...(cardProps as any)} className={cardClass}>
      <div className={thumbnailClass}>
        <div className="thumbnailInner">
          <ProjectThumbnail project={project} />
        </div>
        {project.available && (
          <div className="hoverOverlay">
            <span className="hoverLabel">View Project</span>
          </div>
        )}
        {!project.available && (
          <div className="soonBadge">Soon</div>
        )}
      </div>
      <div className="cardTitle">
        <span className={`cardTitleText ${project.available ? "available" : "unavailable"}`}>
          {project.title}
        </span>
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

      {/* Top Nav */}
      <motion.header
        className="nav"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <span className="logo">Grace Ilori</span>
      </motion.header>

      {/* Hero Title */}
      <motion.div
        className="hero"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.15 }}
      >
        <h1 className="heroTitle">CPSC 581: Portfolio</h1>
        <p className="heroSubtitle">Human Computer Interaction II</p>
      </motion.div>

      {/* Projects Grid */}
      <motion.div variants={containerVariants} initial="hidden" animate="show">
        <div className="grid">
          {mainProjects.map((project, i) => {
            const cellClass = [
              "gridCell",
              i === 0 ? "dividerRight" : "",
              i === 1 ? "dividerRightAlt" : "",
            ].join(" ");
            return (
              <motion.div key={project.id} variants={itemVariants} className={cellClass}>
                <ProjectCard project={project} thumbnailClass="thumbnail" />
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
