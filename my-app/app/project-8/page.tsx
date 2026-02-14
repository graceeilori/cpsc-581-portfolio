import type { Metadata } from "next";
import ProjectPage from "./ProjectPage";

export const metadata: Metadata = {
    title: "Project 8 — CPSC 581 Portfolio",
    description: "Group Project 2: An HCI case study exploring collaborative design spaces.",
};

export default function Page() {
    return <ProjectPage />;
}
