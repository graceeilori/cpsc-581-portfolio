"use client";

import ProjectLayout from "@/app/components/ProjectLayout";
import Link from "next/link";

function ImagePlaceholder({ label, aspect = "4/3" }: { label: string; aspect?: string }) {
    return (
        <div className="pp-img-placeholder" style={{ aspectRatio: aspect }}>
            <span className="pp-img-placeholder-label">{label}</span>
        </div>
    );
}

export default function ProjectPage() {
    return (
        <ProjectLayout
            className="projectPage"
        >
            {/* Title Section */}
            <div className="projectTitleSection">
                <h1 className="titleText">RBrick</h1>
                <div className="summary">
                    <div className="summaryItem">
                        <span className="summaryLabel">Duration</span>
                        <span className="summaryValue">~3 Weeks</span>
                    </div>
                    <div className="summaryItem">
                        <span className="summaryLabel">Tools & Tech</span>
                        <span className="summaryValue">Figma, Three.js, Next.js, Socket.IO</span>
                    </div>
                    <div className="summaryItem">
                        <span className="summaryLabel">Team</span>
                        <span className="summaryValue">Grace, Chris, JJ, Caleb</span>
                    </div>
                </div>
                <Link href="/" className="cancelBtn" aria-label="Back to home">
                    <div className="cancelBtnInner">
                        <img src="/assets/general/cancel-01.svg" alt="Cancel" width={28} height={28} />
                    </div>
                </Link>
            </div>

            {/* Design Challenge */}
            <section className="pp-border-section">
                <div className="pp-two-col">
                    <h2 className="pp-two-col-heading">Design<br />Challenge</h2>
                    <div className="pp-two-col-body">
                        <p>
                            Design a system that lets CAD experts synchronously and remotely share expertise
                            with novices, using embodied input and output such as sensing, haptics, and audio. Video calls and screen sharing are the obvious answer,
                            and designs that rely on them as the core interaction would suffer on the novelty criterion.
                        </p>
                        <p>
                            The CAD domain, number of experts and novices, and how the expertise
                            is passed accross were all up to us to decide. This openness
                            was the real design challenge.
                        </p>
                    </div>
                </div>
            </section>

            {/* Framing the Problem */}
            <section className="pp-section">
                <h2 className="pp-section-centered-heading">Framing the Problem</h2>

                <div className="pp-subsection">
                    <p className="pp-body">
                        Our first instinct was &ldquo;expert watches student, expert talks, student listens.&rdquo; That&apos;s still
                        basically screen sharing with a voice call on top. We kept asking ourselves what expertise to communicate and how
                        to create an environment that conveys the expertise with minimal involvement of the expert.
                    </p>
                    <p className="pp-body">
                        The shift came when we landed on LEGO brickbuilding as our domain.
                    </p>
                    <ul className="pp-box-bullets" style={{ marginTop: 16, marginLeft: 32 }}>
                        <li className="pp-box-bullet box-blue">Bricks snap to a grid</li>
                        <li className="pp-box-bullet box-brown">Layers are discrete and countable</li>
                        <li className="pp-box-bullet box-lbrown">Progress is spatially unambiguous (either the brick is
                            in the right place or it isn&apos;t)</li>
                        <li className="pp-box-bullet box-rbrown">Experts can react to the student's progress automatically</li>
                    </ul>

                    <blockquote className="pp-pull-quote">
                        The environment should close the feedback loop, the expert&apos;s role is to be available
                        when the environment can&apos;t handle teaching the expertise.
                    </blockquote>
                </div>

                {/* Sketches 2×2 */}
                <div className="pp-subsection">
                    <span className="pp-badge">Early Sketches</span>
                    <p>
                        With a clear direction, we explored different input and output methods and the number of experts and novices involved in
                        the learning environment.
                    </p>
                    <div className="pp-2x2-grid">
                        <div>
                            <img
                                src="/assets/cad-expertise/sketch-1.png"
                            />
                            <p className="pp-image-caption">Real-time corrections</p>
                        </div>
                        <div>
                            <img
                                src="/assets/cad-expertise/sketch-2.png"
                            />
                            <p className="pp-image-caption">Screen-sharing + voice annotation</p>
                        </div>
                        <div>
                            <img
                                src="/assets/cad-expertise/sketch-3.jpg"
                            />
                            <p className="pp-image-caption">Input/output taxonomy — JJ</p>
                        </div>
                        <div>
                            <img
                                src="/assets/cad-expertise/sketch-4.jpg"
                            />
                            <p className="pp-image-caption">Lecture-style configuration — JJ</p>
                        </div>
                    </div>
                </div>

                {/* Scoping Decisions 2×2 card grid */}
                <div className="pp-subsection">
                    <span className="pp-badge">Scoping Decisions</span>
                    <div className="pp-2x2-grid">
                        <div className="pp-scope-card">
                            <span className="pp-scope-card-label">Domain</span>
                            <p className="pp-body-small">
                                We chose to model our system after BrickLink over Tinkercad because Tinkercad would&apos;ve required implementing
                                complex 3D primitives, with BrickLink as a guide, it was much easier to simplify functionalities. LEGO bricks have a discrete, grid-based logic that maps
                                cleanly onto a layered lesson structure.
                            </p>
                        </div>
                        <div className="pp-scope-card">
                            <span className="pp-scope-card-label">Input</span>
                            <p className="pp-body-small">
                                We chose voice over gesture because both inputs would&apos;ve covered the same functions.
                                Voice was our final choice because we were already planning an audio discussion feauture, same hardware,
                                same infrastructure, no redundancy.
                            </p>
                        </div>
                        <div className="pp-scope-card">
                            <span className="pp-scope-card-label">Haptics</span>
                            <p className="pp-body-small">
                                We used phone vibration instead of custom hardware because there was no time to build
                                a physical haptic device for students. And email notification as a haptic stand-in for experts.
                            </p>
                        </div>
                        <div className="pp-scope-card">
                            <span className="pp-scope-card-label">Configuration</span>
                            <p className="pp-body-small">
                                We went lecture-style meaning one expert, many novices. This was because it gave us the clearest
                                separation between the two portals and a reason to build session management
                                infrastructure.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Converging sketch */}
                <div className="pp-subsection">
                    <img
                        src="/assets/cad-expertise/meeting.jpg"
                    />
                    <p className="pp-image-caption">Team meeting to discuss concept</p>
                </div>
            </section>

            {/* Core Interaction Loop */}
            <section className="pp-section">
                <h2 className="pp-section-centered-heading">The Core Interaction Loop</h2>

                <p className="pp-body" style={{ textAlign: "center", maxWidth: 680, margin: "0 auto 48px" }}>
                    Everything in RBrick is organized around one question: how does a student know they&apos;re
                    making progress without the expert having to tell them? The loop runs without the expert
                    unless it breaks down.
                </p>

                <div className="pp-numbered-list">
                    <div className="pp-numbered-item">
                        <span className="pp-numbered-label">01</span>
                        <div className="pp-numbered-body">
                            <h3 className="pp-numbered-title">Ghost overlay sets the target</h3>
                            <p className="pp-body-small">
                                Semi-transparent wireframe bricks defined in JSON and rendered inside the same
                                Three.js canvas as the student&apos;s real bricks shows exactly what needs to be built.
                            </p>
                        </div>
                    </div>
                    <div className="pp-numbered-item">
                        <span className="pp-numbered-label">02</span>
                        <div className="pp-numbered-body">
                            <h3 className="pp-numbered-title">Student builds</h3>
                            <p className="pp-body-small">
                                The bricks snap to grid, layers track completion, students can delete bricks
                                that were wrongly placed. Students can also drag bricks along the grid and view the grid
                                from different camera angles.
                            </p>
                        </div>
                    </div>
                    <div className="pp-numbered-item" style={{ borderBottom: "none" }}>
                        <span className="pp-numbered-label">03</span>
                        <div className="pp-numbered-body">
                            <h3 className="pp-numbered-title">Haptic feedback on completion</h3>
                            <p className="pp-body-small">
                                Socket.IO triggers haptic feedback to the student&apos;s linked phone. Confirmation
                                is physical, not just a screen notification. Ideally, we imagine this eventually being a
                                3D-printed brick on the desk that buzzes. Feedback on correct brick placement and a longer feedback for layer completion.
                            </p>
                        </div>
                    </div>

                    <div className="pp-loop-divider">expert enters as needed</div>

                    <div className="pp-numbered-item">
                        <span className="pp-numbered-label">04</span>
                        <div className="pp-numbered-body">
                            <h3 className="pp-numbered-title">Experts receive haptic feedback</h3>
                            <p className="pp-body-small">
                                Chrome&apos;s Web Speech API listens continuously for the keyword, "Help". When detected,
                                Nodemailer fires a notification to the expert&apos;s device. The expert is physically
                                alerted to check in on student.
                            </p>
                        </div>
                    </div>
                    <div className="pp-numbered-item">
                        <span className="pp-numbered-label">05</span>
                        <div className="pp-numbered-body">
                            <h3 className="pp-numbered-title">Expert navigates to student&apos;s workspace and talks.</h3>
                            <p className="pp-body-small">
                                Either party presses &ldquo;Talk&rdquo; to open an audio line.
                                The expert sees the student's live layer progress at all times and can enter their workspace to answer their question.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Student + expert views side by side */}
                <div className="pp-left-right" style={{ marginTop: 48 }}>
                    <div>
                        <img
                            src="/assets/cad-expertise/student-view-1.png"
                        />
                        <p className="pp-image-caption">Student workspace view</p>
                    </div>
                    <div>
                        <img
                            src="/assets/cad-expertise/expert-view.png"
                        />
                        <p className="pp-image-caption">Expert view</p>
                    </div>
                </div>
            </section>

            {/* How I Built It */}
            <section className="pp-section">
                <h2 className="pp-section-centered-heading">How I Built It</h2>

                <p className="pp-body" style={{ textAlign: "center", maxWidth: 640, margin: "0 auto 48px" }}>
                    My work covered the full stack, from Figma prototypes through to the deployed server.
                </p>

                {/* Hi-fi Prototyping */}
                <div className="pp-subsection">
                    <span className="pp-badge">Hi-Fi Prototyping</span>
                    <p className="pp-body">
                        I designed both dashboards in Figma before writing any component code, establishing the visual
                        language and navigation structure the team built against. I used Figma&apos;s Dev Mode MCP with
                        Antigravity IDE, passing node URLs directly into coding prompts, so the model could read the
                        design before generating components. This resulted in significantly less translation overhead between design and code.
                    </p>
                    <div className="pp-left-right">
                        <div>
                            <img
                                src="/assets/cad-expertise/expert-view-fig.png"
                            />
                            <p className="pp-image-caption">Expert dashboard</p>
                        </div>
                        <div>
                            <img
                                src="/assets/cad-expertise/student-view-fig.png"
                            />
                            <p className="pp-image-caption">Student dashboard</p>
                        </div>
                    </div>
                </div>

                {/* 3D Environment */}
                <div className="pp-subsection">
                    <span className="pp-badge">The 3D Environment</span>
                    <p className="pp-body">
                        Built from scratch in Three.js and @react-three/fiber  no off-the-shelf CAD library.
                        The components that required the most iteration:
                    </p>
                    <div className="pp-tech-list">
                        <div className="pp-tech-row">
                            <span className="pp-tech-name">Baseplate</span>
                            <span className="pp-tech-desc">
                                Instanced mesh studs and grid line geometry for rendering performance.
                            </span>
                        </div>
                        <div className="pp-tech-row">
                            <span className="pp-tech-name">Brick placement</span>
                            <span className="pp-tech-desc">
                                Raycasting on left-click, snap-to-grid utility, and AABB collision detection to prevent overlap.
                            </span>
                        </div>
                        <div className="pp-tech-row">
                            <span className="pp-tech-name">Layer system</span>
                            <span className="pp-tech-desc">
                                Derived from brick Y positions — Math.floor(y) + 1 driving the layers panel
                                dynamically without any manual tracking.
                            </span>
                        </div>
                    </div>
                </div>

                {/* Dashboards */}
                <div className="pp-subsection">
                    <span className="pp-badge">Dashboards & Session Architecture</span>
                    <p className="pp-body">
                        Both dashboards built in Next.js App Router with React, TypeScript, and Tailwind CSS v4.
                        The expert-side session creation flow name a session, assign a module, share a join
                        code runs over a Socket.IO server deployed separately on Render, with the app on Vercel.
                        Socket.IO syncs student workspace state to the expert in real time, driving the layer progress panel.
                    </p>
                    <div className="pp-left-right">
                        <div>
                            <img
                                src="/assets/cad-expertise/expert-view-2.png"
                            />
                            <p className="pp-image-caption">Expert dashboard</p>
                        </div>
                        <div>
                            <img
                                src="/assets/cad-expertise/student-view-2.png"
                            />
                            <p className="pp-image-caption">Student dashboard</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* What Broke */}
            <section className="pp-section">

                <div className="pp-subsection" style={{ marginBottom: 0 }}>
                    <span className="pp-badge">What Didn&apos;t Ship</span>
                    <div className="pp-status-list">
                        <div className="pp-status-item">
                            <span className="pp-status-tag status-constraint">Constraint</span>
                            <p className="pp-body-small" style={{ marginBottom: 0 }}>
                                Live student-expert voice chat works locally but breaks when hosted. A WebRTC/socket
                                relay issue that would&apos;ve required infrastructure work beyond our timeline.
                            </p>
                        </div>
                        <div className="pp-status-item">
                            <span className="pp-status-tag status-missed">Missed</span>
                            <p className="pp-body-small" style={{ marginBottom: 0 }}>
                                Expert voice navigation — saying a student&apos;s name to jump to their workspace was
                                fully designed and documented but not implemented. It became mouse-based navigation instead.
                            </p>
                        </div>
                        <div className="pp-status-item">
                            <span className="pp-status-tag status-scoped">Scoped</span>
                            <p className="pp-body-small" style={{ marginBottom: 0 }}>
                                The CAD environment is intentionally limited to brick placement, rotation, and deletion. Full tooling
                                such as custom colors and bricks weren&apos;t the evaluation criterion. The interaction loop was.
                            </p>
                        </div>
                    </div>

                    <p className="pp-body" style={{ marginTop: 36 }}>
                        Building a 3D environment from scratch was the most technically demanding thing I did in this
                        course. But the bigger lesson from RBrick was about scope: understanding what the brief is
                        actually evaluating, and making sure the hardest parts of your implementation are in service
                        of that not adjacent to it.
                    </p>
                </div>
            </section>

            {/* Final Submission */}
            <section className="pp-section">
                <h2 className="pp-section-centered-heading">Final Submission</h2>

                <div className="pp-video-container">
                    <video controls preload="none">
                        <source src="/assets/cad-expertise/RBrickDemoRecording.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>

                <div className="pp-links-row">
                    <div className="pp-link-group">
                        <span className="pp-link-label">Live App</span>
                        <a
                            href="https://rbrick.vercel.app/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="pp-link-value"
                        >
                            rbrick.vercel.app
                        </a>
                    </div>
                    <div className="pp-link-group">
                        <span className="pp-link-label">Repository</span>
                        <a
                            href="https://github.com/ChristianN517/CPSC-581-Group-Project-2"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="pp-link-value"
                        >
                            github.com/ChristianN517/CPSC-581-Group-Project-2
                        </a>
                    </div>
                </div>
            </section>

            {/* Soundtrack */}
            <div className="pp-soundtrack">
                <p className="pp-soundtrack-label">
                    My Project Soundtrack
                </p>
                <iframe
                    data-testid="embed-iframe"
                    style={{ borderRadius: '12px', marginLeft: '25%', marginTop: '2%' }}
                    src="https://open.spotify.com/embed/track/4ddpHR6drcPRGPL5jYFluh?utm_source=generator&theme=0"
                    width="50%"
                    height="152"
                    frameBorder="0"
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    loading="lazy">
                </iframe>
            </div>

        </ProjectLayout>
    );
}
