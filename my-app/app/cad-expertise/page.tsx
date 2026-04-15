import type { Metadata } from "next";
import ProjectPage from "./ProjectPage";

export const metadata: Metadata = {
    title: "CAD Expertise Sharing",
    description: "An interactive platform for sharing CAD expertise",
};

export default function Page() {
    return <ProjectPage />;
}
