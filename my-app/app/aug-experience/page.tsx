import type { Metadata } from "next";
import ProjectPage from "./ProjectPage";

export const metadata: Metadata = {
    title: "Convivium — Augmented Eating Experience",
    description: "A physical computing system that augments the table so the host can stay seated and socialize.",
};

export default function Page() {
    return <ProjectPage />;
}
