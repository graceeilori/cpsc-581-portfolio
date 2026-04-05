"use client";

import ProjectLayout from "@/app/components/ProjectLayout";
import Link from "next/link";

export default function ProjectPage() {
    return (
        <ProjectLayout
            className="projectPage"
            heroImage="/assets/button-project/project-1-hero.png"
        >
            <div className="projectTitleSection">
                <h1 className="titleText">A Family of Buttons</h1>
                <div className="summary">
                    <div className="summaryItem">
                        <span className="summaryLabel">Duration</span>
                        <span className="summaryValue">2 Weeks</span>
                    </div>
                    <div className="summaryItem">
                        <span className="summaryLabel">Tools &amp; Tech</span>
                        <span className="summaryValue">Figma, Inkscape, React</span>
                    </div>
                </div>
                <Link href="/" className="cancelBtn" aria-label="Back to home">
                    <div className="cancelBtnInner">
                        <img src="/assets/general/cancel-01.svg" alt="Cancel" width={28} height={28} />
                    </div>
                </Link>
            </div>

            {/* Challenge */}
            <section className="pp-border-section">
                <div className="pp-two-col">
                    <h2 className="pp-two-col-heading">The<br />Design<br />Challenge</h2>
                    <div className="pp-two-col-body">
                        <p>
                            Sketch, design, implement, and document a web/software application in which
                            the interaction centres around exactly one button per team member, such that:
                        </p>
                        <ul>
                            <li>Each button represents one team member&apos;s personality or likeness in some way; and</li>
                            <li>
                                Interactions with the application reveal aspects of the dynamics between the
                                team members, e.g., highlighting similarities/differences between experiences,
                                values, and personalities of the team members.
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Exploration */}
            <section className="pp-section">
                <h2 className="pp-section-centered-heading">Exploration</h2>

                {/* Diverging Ideas */}
                <div className="pp-subsection">
                    <span className="pp-badge">Diverging Ideas</span>
                    <div className="pp-left-right">
                        <p className="pp-body">
                            The team brainstormed possible ideas for the project in our first meeting. After which
                            we decided to use the 10 + 10 sketching method to individually
                            develop different concepts for the project.
                        </p>
                        <p className="pp-body">
                            For my sketches, I designed 10 different button types and 10 different
                            content arrangements using different button types.
                            I then decided to explore different button ideas for sketch #4.
                        </p>
                    </div>
                    <div>
                        <div>
                            <div className="pp-sketch-strip-hor">
                                <img src="/assets/button-project/sketch_a.jpg" className="pp-sketch-img" />
                                <img src="/assets/button-project/sketch_b.jpg" className="pp-sketch-img" />
                                <img src="/assets/button-project/sketch_c.jpg" className="pp-sketch-img" />
                                <img src="/assets/button-project/sketch_d.jpg" className="pp-sketch-img" />
                            </div>
                            <p className="pp-image-caption">Early sketches</p>
                        </div>
                    </div>
                </div>

                {/* Converging Ideas */}
                <div className="pp-subsection">
                    <span className="pp-badge">Converging Ideas</span>
                    <div className="pp-left-right">
                        <div>
                            <p className="pp-body">
                                The team convened and we reviewed everyone&apos;s ideas. Each member
                                explained their concepts and we narrowed down our ideas. The team
                                unanimously selected the orbit concept for our project, this was my
                                sketch #6. This idea was selected mainly for its:
                            </p>
                            <ul className="pp-bar-bullets" style={{ marginTop: 16 }}>
                                <li className="pp-bar-bullet bar-pink">Playful Elements</li>
                                <li className="pp-bar-bullet bar-red">Technical Feasibility</li>
                                <li className="pp-bar-bullet bar-purple">Display of Individual Uniqueness</li>
                            </ul>
                        </div>
                        <div>
                            <img
                                src="/assets/button-project/OrbitIdeaPrototype.png"
                                alt="Orbit concept prototype"
                                className="pp-sketch-img"
                            />
                            <p className="pp-image-caption">Orbit concept</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Development */}
            <section className="pp-section">
                <h2 className="pp-section-centered-heading">Development</h2>

                {/* Design subsection */}
                <div className="pp-subsection">
                    <span className="pp-badge">Design</span>

                    {/* Planet & Moon Design */}
                    <div style={{ marginBottom: 36 }}>
                        <h3 className="pp-sub-title">Planet Design</h3>
                        <div className="pp-left-right" style={{ marginBottom: 24 }}>
                            <p className="pp-body-small">
                                My planet design draws inspiration from the album art of the <em>BTS World: Original Soundtrack</em>,
                                its color palette felt like a natural fit for representing my planet.
                                During a team brainstorming session, a teammate suggested engraving our names into the planet's surface.
                                I designed this in Inkscape, then assembled the final composition in Figma.
                            </p>
                            <div>
                                <p className="pp-body-small">
                                    The moons orbiting each planet represent a personal or shared interests:
                                </p>
                                <ul className="pp-box-bullets" style={{ marginTop: 16, marginLeft: 32 }}>
                                    <li className="pp-box-bullet box-gray">a piano for my childhood interest in music (shared with Caleb)</li>
                                    <li className="pp-box-bullet box-black">a gun for Call of Duty: Mobile (shared with Chris)</li>
                                    <li className="pp-box-bullet box-yellow">an oven for baking (shared with JJ)</li>
                                    <li className="pp-box-bullet box-red">a red moon symbolizing the shape of sickle cell red blood cells, a personal reference to my own experience with sickle cell anemia.</li>
                                </ul>
                                <p className="pp-body-small" style={{ marginTop: -4 }}>
                                    The piano and moon assets were sourced from Storyset by Freepik.
                                </p>
                            </div>
                        </div>
                        <img src="/assets/button-project/planet-moon-design.png" className="pp-sketch-img" />
                        <p className="pp-image-caption">Planet Design</p>
                    </div>

                    {/* Sun Design */}
                    <div style={{ marginBottom: 36 }}>
                        <h3 className="pp-sub-title">Sun Design</h3>
                        <p className="pp-body">
                            Design of the sun and stars in Figma.
                        </p>
                        <img src="/assets/button-project/sun-star-design.png" className="pp-sketch-img" />
                        <p className="pp-image-caption">Sun Design</p>
                    </div>

                    {/* More Design Notes */}
                    <div>
                        <h3 className="pp-sub-title">More Design Notes</h3>
                        <p className="pp-body">Orbit, dock, typography and colors?</p>
                    </div>
                </div>

                {/* Code subsection */}
                <div className="pp-subsection" style={{ marginBottom: 0 }}>
                    <span className="pp-badge">Code</span>
                    <p className="pp-body">
                        I was in charge of improving the visual design and implementing complex
                        interactions. I worked on:
                    </p>
                    <ul className="pp-bullet-list" style={{ marginTop: 8 }}>
                        <li>Creating an engaging space background with stars motion and shooting stars.</li>
                        <li>Planet and moon movement around their orbit and the sun.</li>
                        <li>Implementing the logic for pausing planets when clicked to reveal more information about team members.</li>
                        <li>Visual design for the sun&apos;s and orbit&apos;s glow as planets are clicked.</li>
                    </ul>
                </div>
            </section>

            {/* Final Submission */}
            <section className="pp-section">
                <h2 className="pp-section-centered-heading">Final Submission</h2>

                <div className="pp-video-container">
                    <video controls preload="none">
                        <source src="/assets/CPSC581_FamilyOfButtons_group2.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
                <p className="pp-image-caption" style={{ textAlign: "center", marginBottom: 0 }}>Video Exp</p>

                <div className="pp-links-row">
                    <div className="pp-link-group">
                        <span className="pp-link-label">Repository</span>
                        <a
                            href="https://github.com/graceeilori/button-project"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="pp-link-value"
                        >
                            github.com/graceeilori/button-project
                        </a>
                    </div>
                    <div className="pp-link-group">
                        <span className="pp-link-label">Live Demo</span>
                        <a
                            href="https://cpsc-button-project.vercel.app/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="pp-link-value"
                        >
                            cpsc-button-project.vercel.app
                        </a>
                    </div>
                </div>

                <div className="pp-team-row">
                    <span className="pp-team-label">Team</span>
                    <span className="pp-team-names">Grace, Chris, JJ, Caleb</span>
                </div>
            </section>

            {/* Reflection */}
            <section className="pp-section">
                <div className="pp-two-col">
                    <h2 className="pp-two-col-heading">Reflection</h2>
                    <div className="pp-two-col-body">
                        <p>
                            Sketch, design, implement, and document a web/software application in which
                            the interaction centres around exactly one button per team member, such that:
                        </p>
                        <ul>
                            <li>Each button represents one team member&apos;s personality or likeness in some way; and</li>
                            <li>
                                Interactions with the application reveal aspects of the dynamics between the
                                team members, e.g., highlighting similarities/differences between experiences,
                                values, and personalities of the team members.
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Soundtrack */}
            <div className="pp-soundtrack">
                <p className="pp-soundtrack-label">My Project Soundtrack</p>
                <img
                    src="/assets/placeholder.png"
                    alt="Dream Glow vinyl record"
                    className="pp-vinyl"
                />
                <p className="pp-song-title">Dream Glow</p>
                <p className="pp-song-artist">BTS x Charli XCX</p>
            </div>

        </ProjectLayout>
    );
}
