"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

type Project = {
  id: number;
  title: string;
  description: string;
  href: string;
  thumbnailImg?: string;
  available: boolean;
};

type BonusKey = "corner" | "shed" | "creed";

type Bonus = {
  id: number;
  title: string;
  key: BonusKey;
  thumbnailImg?: string;
};

const mainProjects: Project[] = [
  {
    id: 1,
    title: "A Family of Buttons",
    description:
      "An interactive solar system where each planet is a team member's button, revealing personality through orbit and interaction.",
    href: "/button-project",
    thumbnailImg: "/assets/button-project/project-1-cover.png",
    available: true,
  },
  {
    id: 2,
    title: "RBrick",
    description:
      "A real-time collaborative CAD platform using ghost overlays, haptic feedback, and voice to let experts guide novices remotely.",
    href: "/cad-expertise",
    thumbnailImg: "/assets/cad-expertise/project-2-cover.png",
    available: true,
  },
  {
    id: 3,
    title: "Convivium",
    description:
      "Augumented objects that sense and signal passively to improve the dining experience of hosts during large parties.",
    href: "/aug-experience",
    thumbnailImg: "/assets/aug-experience/project-3-cover.png",
    available: true,
  },
];

const bonusProjects: Bonus[] = [
  {
    id: 4,
    title: "The Corner",
    key: "corner",
    thumbnailImg: "/assets/bonus/cover-1.png",
  },
  {
    id: 5,
    title: "The Shed",
    key: "shed",
    thumbnailImg: "/assets/bonus/cover-2.png",
  },
  {
    id: 6,
    title: "The Creed",
    key: "creed",
    thumbnailImg: "/assets/bonus/cover-3.png",
  },
];

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.4 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
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
            <img
              src={project.thumbnailImg}
              alt={project.title}
              className="projectImage"
            />
          )}
        </div>
      </div>
      <div className="cardInfo">
        <h3
          className={`cardInfoTitle ${project.available ? "available" : "unavailable"
            }`}
        >
          {project.title}
        </h3>
        <p className="cardInfoDesc">{project.description}</p>
      </div>
    </CardWrapper>
  );
}

const bonusRotations = [-8.5, -5, 5];

function BonusCard({
  project,
  rotation,
  onOpen,
}: {
  project: Bonus;
  rotation: number;
  onOpen: () => void;
}) {
  return (
    <button className="card bonusCardBtn" onClick={onOpen}>
      <div className="bonusThumbnail">
        <div className="thumbnailInner">
          {project.thumbnailImg && (
            <img
              src={project.thumbnailImg}
              alt={project.title}
              className="bonusImage"
            />
          )}
        </div>
        <div
          className="bonusCardLabel"
          style={
            { "--bonus-rotation": `${rotation}deg` } as React.CSSProperties
          }
        >
          <span className="bonusCardLabelText">{project.title}</span>
        </div>
      </div>
    </button>
  );
}

//  Creed data 
const beliefs = [
  {
    num: "01",
    statement: "The process is evidence.",
    body: [
      "A design decision that can't be explained probably wasn't a decision, it was a default. This was a lesson I learnt throughout this course.",
      "Overtime, I have learnt to document what I chose and what I didn't, and why both matter. Showing the moments the obvious approach failed and something better emerged.",
    ],
  },
  {
    num: "02",
    statement: "Research and craft aren't separate tracks.",
    body: [
      "Building is a way of asking questions and when a prototype fails, we go back to the \"drawing board\".",
      "Design is an iterative process and I believe design informs what's worth studying, and studying informs what's worth building. The loop is the method. #DesignThinking",
    ],
  },
  {
    num: "03",
    statement: "Scoping is a design decision.",
    body: [
      "Understanding what a project brief is evaluating and making sure the hardest parts of my team's work are in service of that.",
      "Arriving at a good scope means we know what to leave out, and can explain why clearly.",
    ],
  },
];

// Shed data
const shedCategories = [
  {
    label: "Design",
    tools: [
      { name: "Figma", tip: "Family, RBrick, Portfolio", type: "design" },
      { name: "Inkscape", tip: "A Family of Buttons", type: "design" },
      { name: "TinkerCAD", tip: "Convivium concept models, RBrick 3D environment exploration", type: "design" },
      { name: "BrickLink Studio", tip: "RBrick 3D environment exploration", type: "design" },
    ],
  },
  {
    label: "Code",
    tools: [
      { name: "Next.js", tip: "Family, RBrick, Portfolio", type: "" },
      { name: "React", tip: "Family, RBrick, Portfolio", type: "" },
      { name: "TypeScript", tip: "Family, RBrick, Portfolio", type: "" },
      { name: "Three.js", tip: "RBrick", type: "" },
      { name: "Tailwind CSS", tip: "Family, RBrick, Portfolio", type: "" },
      { name: "Socket.IO", tip: "RBrick", type: "" },
      { name: "HTML/CSS", tip: "Family, RBrick, Portfolio", type: "" },
      { name: "Antigravity IDE", tip: "Family, RBrick, Portfolio", type: "" },
    ],
  },
  {
    label: "Hardware & Sensing",
    tools: [
      { name: "Arduino Nano", tip: "Convivium", type: "" },
      { name: "RFID", tip: "Convivium", type: "" },
      { name: "FSR", tip: "Convivium", type: "" },
      { name: "Web Speech API", tip: "RBrick", type: "" },
      { name: "WS2812B LEDs", tip: "Convivium", type: "" },
      { name: "Nodemailer", tip: "RBrick", type: "" },
    ],
  },
  {
    label: "Research & Process",
    tools: [
      { name: "Storyboarding", tip: "Convivium", type: "research" },
      { name: "Sketching", tip: "Family, RBrick, Convinium, Portfolio", type: "research" },
      { name: "Frame-Diverge-Converge", tip: "RBrick, Convivium", type: "research" },
    ],
  },
];

// Corner data
const sketches = [
  {
    wide: true,
    imgs: ["/assets/bonus/bsketch_9.png"],
    project: "Class Activity",
    type: "Sketch",
  },
  {
    wide: true,
    imgs: ["/assets/bonus/bsketch_1.jpg"],
    project: "Physical Computing",
    type: "Storyboard",
  },
  {
    wide: false,
    imgs: ["/assets/bonus/bsketch_2.jpg"],
    project: "Class Activity",
    type: "Pair Ideation",
  },
  {
    wide: false,
    imgs: ["/assets/bonus/bsketch_3.jpg"],
    project: "Class Activity",
    type: "Group ideation",
  },
  {
    wide: true,
    imgs: ["/assets/bonus/bsketch_6.png"],
    project: "Portfolio, first look",
    type: "Sketch",
  },
  {
    wide: false,
    imgs: ["/assets/bonus/bsketch_4.jpg"],
    project: "Button Project",
    type: "Crit notes",
  },
  {
    wide: false,
    imgs: ["/assets/bonus/bsketch_5.png"],
    project: "Embodied Interaction",
    type: "Sketch",
  },
  {
    wide: true,
    imgs: ["/assets/bonus/bsketch_7.png", "/assets/bonus/bsketch_8.png"],
    project: "Class Activity",
    type: "Sketch",
  },
];

// Main page 
export default function Home() {
  const [activePanel, setActivePanel] = useState<BonusKey | null>(null);

  const open = (key: BonusKey) => {
    setActivePanel(key);
    document.body.style.overflow = "hidden";
  };

  const close = () => {
    setActivePanel(null);
    document.body.style.overflow = "";
  };

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, []);

  return (
    <div className="page">

      {/*  Nav  */}
      <motion.header
        className="nav"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <span className="logo">Grace Ilori</span>
      </motion.header>

      {/*  Hero  */}
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

      {/*  Main project grid  */}
      <motion.div variants={containerVariants} initial="hidden" animate="show">
        <div className="grid">
          {mainProjects.map((project) => (
            <motion.div key={project.id} variants={itemVariants} className="gridCell">
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.img
        src="/assets/general/custom-divider.png"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.8, delay: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
      />

      {/*  Bonus grid  */}
      <motion.div variants={containerVariants} initial="hidden" animate="show">
        <div className="bonusGrid">
          {bonusProjects.map((project, i) => (
            <motion.div key={project.id} variants={itemVariants} className="gridCell">
              <BonusCard
                project={project}
                rotation={bonusRotations[i]}
                onOpen={() => open(project.key)}
              />
            </motion.div>
          ))}
        </div>
      </motion.div>

      <AnimatePresence>

        {/*  OVERLAY BACKDROP — only mounts when a panel is open  */}
        {activePanel && (
          <motion.div
            key="overlay"
            className="bonusOverlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            style={{ pointerEvents: "all" }}
            onClick={close}
          />
        )}

        {/*  THE CREED — slides up from bottom  */}
        {activePanel === "creed" && (
          <motion.div
            key="creed"
            className="creedPanel"
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="creedInner">
              <div className="creedTop">
                <div>
                  <h2 className="creedHeading">
                    The <br></br><span>Creed</span>
                  </h2>
                  <p className="cornerSubtitle">
                    My design philosophy<br />
                  </p>
                </div>
                <button className="bonusCloseBtn" onClick={close}>Close ✕</button>
              </div>

              {beliefs.map((b) => (
                <div className="belief" key={b.num}>
                  <div>
                    <div className="beliefNum">{b.num}</div>
                    <div className="beliefStatement">{b.statement}</div>
                  </div>
                  <div className="beliefBody">
                    {b.body.map((p, i) => <p key={i}>{p}</p>)}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {/*  THE SHED — scales in from center  */}
        {activePanel === "shed" && (
          <motion.div
            key="shed"
            className="shedPopup"
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.92 }}
            transition={{ duration: 0.3, ease: [0.34, 1.56, 0.64, 1] }}
          >
            <div className="shedPopupHeader">
              <div>
                <h2 className="shedPopupTitle">
                  The <span>Shed</span>
                </h2>
                <p className="cornerSubtitle">
                  Arsenal for the course<br />
                </p>
              </div>
              <button className="bonusCloseBtn" onClick={close}>Close ✕</button>
            </div>

            {shedCategories.map((cat) => (
              <div className="shedCategory" key={cat.label}>
                <div className="shedCatLabel">{cat.label}</div>
                <div className="toolGrid">
                  {cat.tools.map((t) => (
                    <div
                      className={`toolTile${t.type ? " " + t.type : ""}`}
                      key={t.name}
                    >
                      {t.name}
                      <div className="toolTip">{t.tip}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>
        )}

        {/*  THE CORNER — slides in from right  */}
        {activePanel === "corner" && (
          <motion.div
            key="corner"
            className="cornerDrawer"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="cornerDrawerHeader">
              <div>
                <h2 className="cornerDrawerTitle">
                  The <span>Corner</span>
                </h2>
                <p className="cornerSubtitle">
                  Sketches and scribbles from class activities<br />
                </p>
              </div>
              <button className="bonusCloseBtn" onClick={close}>Close ✕</button>
            </div>

            <div className="sketchBoard">
              {sketches.map((sk, i) => (
                <div className={`sketchItem${sk.wide ? " wide" : ""}`} key={i}>
                  <div className={`sketchImg${sk.imgs.length > 1 ? " sketchImgRow" : ""}`}>
                    {sk.imgs.map((src, j) => (
                      <img key={j} src={src} alt={`${sk.project} sketch`} className="sketchPhoto" />
                    ))}
                  </div>
                  <div className="sketchMeta">
                    <span className="sketchProject">{sk.project}</span>
                    <span className="sketchType">{sk.type}</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}

      </AnimatePresence>

    </div>
  );
}
