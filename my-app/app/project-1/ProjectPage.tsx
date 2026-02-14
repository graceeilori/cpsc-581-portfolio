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
            projectNumber="1"
            projectTitle="Project Three"
            projectSubtitle="Content"
            glowColor="yellow"
            heroImage="https://picsum.photos/seed/hero1/1920/1080"
            problemSpace={{
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
            songName="Retrograde"
            artist="James Blake"
        />
    );
}
