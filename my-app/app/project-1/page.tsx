import type { Metadata } from "next";
import ProjectPage from "./ProjectPage";

export const metadata: Metadata = {
    title: "Project 1 — CPSC 581 Portfolio",
    description: "Group Project 3: An HCI case study exploring accessible interaction patterns.",
};

export default function Page() {
    return <ProjectPage />;
}
