"use client";

import ProjectLayout from "../components/ProjectLayout";
import ImageGallery from "../components/ImageGallery";

const placeholderImages = [
    { src: "", alt: "description", caption: "description" },
    { src: "", alt: "description", caption: "description" },
    { src: "", alt: "description", caption: "description" },
];

const earlyIdeaImages = [
    { src: "/assets/Initial_sketches.jpg", alt: "Initial brainstorm session", caption: "Initial brainstorm session" },
];

const individualSketchesImages = [
    { src: "/assets/Grace_1010A.jpg", alt: "Button variants design", caption: "Button variants design" },
    { src: "/assets/Grace_1010B.jpg", alt: "Family arrangement sketches", caption: "Family arrangement sketches" },
    { src: "/assets/Grace_1010D.jpg", alt: "Idea 4 Expanded", caption: "Idea 4 Expanded" },
    { src: "/assets/Grace_10103.jpg", alt: "Idea 4 Expanded", caption: "Idea 4 Expanded" },
];

const convergingIdeaImages = [
    { src: "/assets/converging2.jpeg", alt: "Converging concept 1", caption: "Refining the selected direction" },
    { src: "/assets/OrbitIdeaPrototype.png", alt: "Converging concept 2", caption: "First draft of the selected concept" },
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
            projectSubtitle="Project 1"
            glowColor="purple"
            heroImage="https://picsum.photos/seed/hero5/1920/1080"
            designChallenge={{
                title: "The Design Challenge",
                content: (
                    <>
                        <p>Sketch, design, implement, and document a web/software application in which the interaction centres around exactly one button per team member, such that:</p>
                        <ul className="list-disc pl-6 mt-3 space-y-2">
                            <li>Each button represents one team member&apos;s personality or likeness in some way; and</li>
                            <li>Interactions with the application reveal aspects of the dynamics between the team members, e.g., highlighting similarities/differences between experiences, values, and personalities of the team members.</li>
                        </ul>
                    </>
                ),
            }}
            designProcess={{
                title: "Exploration",
                content: (
                    <>
                        <h3 className="font-display text-xl sm:text-2xl font-bold text-ink mt-8 mb-4">
                            Early Ideas
                        </h3>
                        <p className="mb-6">
                            The team first met in tutorial, got to know each other and briefly brainstormed possible ideas for the project. After this session, we decided to use the 1010 sketching method to each create different ideas for the project.
                        </p>
                        <div className="mb-12">
                            <ImageGallery images={earlyIdeaImages} />
                        </div>

                        <h3 className="font-display text-xl sm:text-2xl font-bold text-ink mt-8 mb-4">
                            Individual Sketches
                        </h3>
                        <p className="mb-6">
                            After the initial brainstorming session, we each went away and created 10 sketches of different ideas for the project.
                        </p>
                        <p className="mb-6">
                            For my sketches, I decided to sketch 10 different button types and also 10 different arrangements for the family of buttons. I then expanded on my 4th arrangement sketch which I liked the most.
                        </p>
                        <div className="mb-12">
                            <ImageGallery images={individualSketchesImages} />
                        </div>

                        <h3 className="font-display text-xl sm:text-2xl font-bold text-ink mt-8 mb-4">
                            Converging Ideas
                        </h3>
                        <p className="mb-6">
                            We got together and reviewed everyones ideas. This process allowed everyone to freely express their concepts and helped us to narrow down our ideas to a few that we all liked. The team uniamously selected the orbit concept for our project, this was my sketch 6.
                        </p>
                        <div className="mb-6">
                            <ImageGallery images={convergingIdeaImages} />
                        </div>
                    </>
                ),
            }}
            development={{
                title: "Development",
                content: (
                    <>
                        <h3 className="font-display text-xl sm:text-2xl font-bold text-ink mb-4">
                            Design
                        </h3>
                        <p className="mb-8">
                            Design of the sun and stars in Figma. Individual planet design in Inkscape.
                        </p>

                        <h3 className="font-display text-xl sm:text-2xl font-bold text-ink mb-4">
                            Code
                        </h3>
                        <p>
                            I was in charge of improving the visual design and implementing complex interactions.
                            I worked on:
                        </p>
                        <ul className="list-disc pl-6 mt-3 space-y-2">
                            <li>Creating an engaging space background with stars motion and shooting stars.</li>
                            <li>Planet and moon movement around their orbit and the sun.</li>
                            <li>Implementing the logic for pausing planets when clicked to reveal more information about team members.</li>
                            <li>Visual design for the sun's and orbit's glow as planets are clicked.</li>
                        </ul>
                    </>
                ),
            }}
            solution={{
                title: "Final Submission",
                content: (
                    <>
                        <p>Repository link: <a href="https://github.com/graceeilori/button-project">https://github.com/graceeilori/button-project</a></p>
                        <p>Live demo: <a href="https://cpsc-button-project.vercel.app/">https://cpsc-button-project.vercel.app/</a></p>
                    </>
                ),
                video: "/assets/CPSC581_FamilyOfButtons_group2.mp4",
                videoCaption: "The final interaction prototype demonstrating our family of buttons.",
            }}
            reflection={{
                title: "Coming soon...",
                content: (
                    <>
                        <ul className="list-disc pl-6 mt-3 space-y-2">
                            <li>Brief project reflection</li>
                            <li>More images on design process and details on tools used.</li>
                            <li>Spotify API integration to display the song I enjoyed the most while designing the project.</li>
                        </ul>
                    </>
                )
            }}
            team={[
                { name: "Grace", role: "Me!", image: "" },
                { name: "Chris", role: "Team Member", image: "" },
                { name: "Caleb", role: "Team Member", image: "" },
                { name: "JJ", role: "Team Member", image: "" },
            ]}
            songName="Dream Glow"
            artist="BTS x Charli XCX"
        />
    );
}
