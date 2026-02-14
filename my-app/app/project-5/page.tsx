import type { Metadata } from "next";
import ProjectPage from "./ProjectPage";

export const metadata: Metadata = {
    title: "Project 5 — CPSC 581 Portfolio",
    description: "Group Project 1: An HCI case study exploring innovative interaction design.",
};

export default function Page() {
    return <ProjectPage />;
}
