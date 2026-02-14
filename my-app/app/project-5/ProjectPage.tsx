"use client";

import ProjectLayout from "../components/ProjectLayout";

const placeholderImages = [
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
            projectNumber="5"
            projectTitle="A Family of Buttons"
            projectSubtitle="Content"
            glowColor="purple"
            heroImage="https://picsum.photos/seed/hero5/1920/1080"
            problemSpace={{
                title: "The Design Challenge",
                content: "Content",
                images: placeholderImages,
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
            songName="Electric Feel"
            artist="MGMT"
        />
    );
}
