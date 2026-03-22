import ProjectLayout from "@/app/components/ProjectLayout";

export default function ProjectPage() {
    return (
        <ProjectLayout
            className="projectPage"
            heroImage="/assets/project-1-hero.png"
            projectTitleSection={{
                title: "A Family of Buttons",
                subtitle1: "Duration",
                subtitle2: "Tools & Tech",
                subcontent1: "2 weeks",
                subcontent2: "Figma, Inkscape, React"
            }}>
        </ProjectLayout>
    );
}
