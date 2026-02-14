import type { Metadata } from "next";
import AboutPage from "./AboutPage";

export const metadata: Metadata = {
    title: "About — CPSC 581 Portfolio",
    description: "Learn about my design philosophy and journey through CPSC 581.",
};

export default function Page() {
    return <AboutPage />;
}
