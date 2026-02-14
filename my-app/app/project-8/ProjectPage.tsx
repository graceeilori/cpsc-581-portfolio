"use client";

import ProjectLayout from "../components/ProjectLayout";

const sketchImages = [
    { src: "", alt: "description", caption: "description" },
    { src: "", alt: "description", caption: "description" },
    { src: "", alt: "description", caption: "description" },
];

const processImages = [
    { src: "", alt: "description", caption: "description" },
    { src: "", alt: "description", caption: "description" },
    { src: "", alt: "description", caption: "description" },
    { src: "", alt: "description", caption: "description" },
];

const solutionImages = [
    { src: "", alt: "description", caption: "description" },
    { src: "", alt: "description", caption: "description" },
    { src: "", alt: "description", caption: "description" },
];

export default function ProjectPage() {
    return (
        <ProjectLayout
            projectNumber="8"
            projectTitle="Project Two"
            projectSubtitle="Content"
            glowColor="mint"
            heroImage="https://picsum.photos/seed/hero8/1920/1080"
            designChallenge={{
                title: "The Design Challenge",
                content: "Content",
                images: sketchImages,
            }}
            designProcess={{
                title: "Design Process",
                content: "Content",
                images: processImages,
            }}
            solution={{
                title: "The Solution",
                content: "Content",
                images: solutionImages,
            }}
            reflection={{
                title: "Reflection",
                content: "Content",
            }}
            songName="Midnight City"
            artist="M83"
        />
    );
}
