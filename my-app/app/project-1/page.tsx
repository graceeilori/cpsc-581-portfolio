import type { Metadata } from "next";
import ProjectPage from "./ProjectPage";

export const metadata: Metadata = {
    title: "Group Project 1: CPSC 581 Portfolio",
    description: "An interactive solar system visualization that represents our group as planets ",
};

export default function Page() {
    return <ProjectPage />;
}
