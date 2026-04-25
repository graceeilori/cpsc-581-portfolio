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
                <h1 className="titleText">Convivium</h1>
                <div className="summary">
                    <div className="summaryItem">
                        <span className="summaryLabel">Duration</span>
                        <span className="summaryValue">~3 Weeks</span>
                    </div>
                    <div className="summaryItem">
                        <span className="summaryLabel">Tools & Tech</span>
                        <span className="summaryValue">Arduino, TinkerCAD</span>
                    </div>
                    <div className="summaryItem">
                        <span className="summaryLabel">Team</span>
                        <span className="summaryValue">
                            <a href="https://github.com/graceeilori" target="_blank" rel="noopener noreferrer">Grace</a>,{" "}
                            <a href="https://github.com/ChristianN517" target="_blank" rel="noopener noreferrer">Chris</a>,{" "}
                            <a href="https://github.com/Jnels23" target="_blank" rel="noopener noreferrer">JJ</a>,{" "}
                            <a href="https://github.com/CalebMelin" target="_blank" rel="noopener noreferrer">Caleb</a>
                        </span>
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
                            Augment one or more everyday objects to improve the experience of people eating together,
                            using physical computing. The system had to sense, respond, and communicate, not just decorate.
                        </p>
                    </div>
                </div>
            </section>

            {/* The Reframe */}
            <section className="pp-section">
                <h2 className="pp-section-centered-heading">Framing The Problem</h2>

                <div className="pp-subsection">
                    <p className="pp-body">
                        Our first framing instinct was generic: make food better, keep it warm, make drinks easier.
                        Useful, but we needed to flesh it out more for a novel approach.
                    </p>
                    <p className="pp-body">
                        We mapped out the actual range of contexts, such as dinner dates, family dinners, large gatherings,
                        and one pattern became clear. As group size increases, the host&apos;s responsibilities increase
                        in a way that&apos;s specifically social. They&apos;re not just doing more work. They&apos;re being pulled
                        <em> out</em> of the gathering they created.
                    </p>
                    <p className="pp-body">
                        At a large dinner, the host is last to sit and first to stand. They&apos;re monitoring food levels,
                        refilling drinks, managing portions, none of which requires their presence to be social, but
                        all of which requires their <em>attention</em>. The food and drinks are constantly asking to be noticed.
                    </p>

                    <blockquote className="pp-pull-quote">
                        The design question isn&apos;t &ldquo;how do we help the host do more?&rdquo; It&apos;s &ldquo;how do we make
                        the party autonomous enough that the host stops being asked?&rdquo;
                    </blockquote>

                    <p className="pp-body">
                        With this framing, the scope became clear: don&apos;t build tools for the host to use. Build
                        objects that sense their own state and signal passively, so the host only needs to act
                        when something strictly requires them.
                    </p>
                </div>

                {/* Context mapping sketch */}
                <div className="pp-left-right">
                    <p className="pp-body">
                        That context mapping shaped our framing directly: the objective was for the host to remain
                        seated and socialize while still being informed. Feedback to the host had to be subtle,
                        non-disruptive, and only interrupt when necessary.
                    </p>
                    <div>
                        <img
                            src="/assets/aug-experience/sketch-1.jpg"
                        />
                        <p className="pp-image-caption">Context mapping: gathering types by size and familiarity — JJ</p>
                    </div>
                </div>


            </section>

            {/* From Ideas to Objects */}
            <section className="pp-section">
                <h2 className="pp-section-centered-heading">From Ideas to Objects</h2>

                <div className="pp-subsection">
                    <p className="pp-body">
                        We ran an open brainstorming session before converging. We had a wide range of ideas, from heated
                        individual mats, a rice pot with humidity sensing, pizza plate glow sticks that assigned
                        guests conversation partners, beer glasses that fill from the bottom, to a tea kettle with
                        a weight sensor.
                    </p>
                </div>

                {/* Brainstorm sketches side by side */}
                <div className="pp-subsection">
                    <span className="pp-badge">Early Sketches</span>
                    <div className="pp-left-right">
                        <div>
                            <img
                                src="/assets/aug-experience/sketch-2.jpg"
                            />
                            <p className="pp-image-caption">Early concepts</p>
                        </div>
                        <div>
                            <img
                                src="/assets/aug-experience/sketch-3.jpg"
                            />
                            <p className="pp-image-caption">Early concepts — JJ</p>
                        </div>
                    </div>
                </div>

                <div className="pp-subsection">
                    <p className="pp-body">
                        Two things happened in the brainstorming session that shaped our final system.
                    </p>
                    <p className="pp-body">
                        First, we noticed we&apos;d been thinking entirely about food and hadn&apos;t touched beverages at
                        all. That gap produced the wine glass tag idea, drink eligibility by guest, and the
                        dispenser concept.
                    </p>
                    <p className="pp-body">
                        Second, when we reviewed our food ideas against the large-gathering context, individual
                        heated mats didn&apos;t hold up. Guests at large gatherings aren&apos;t seated the whole time.
                        They move around, circulate, stand. A mat per seat solves nothing if the seat isn&apos;t
                        occupied. We needed to address food warming at the source.
                    </p>
                </div>

                {/* Heated mat storyboard */}
                <div className="pp-subsection">
                    <img
                        src="/assets/aug-experience/sb1.jpg"
                    />
                    <p className="pp-image-caption">Heated Mat Exploration — Chris</p>
                </div>

                <div className="pp-subsection">
                    <p className="pp-body">
                        Those two pivots landed us on four objects to augment: an induction mat, a pot,
                        a drink dispenser, and RFID-tagged wine glasses.
                    </p>
                </div>

                {/* Why these four — 2×2 scope cards */}
                <div className="pp-subsection">
                    <span className="pp-badge">Why These Four</span>
                    <div className="pp-2x2-grid">
                        <div className="pp-scope-card">
                            <span className="pp-scope-card-label">Tea kettle Dropped</span>
                            <p className="pp-body-small">
                                Tea preparation involves too many individual variables such as steeping time, temperature
                                preferences, tea type that the system couldn&apos;t resolve without becoming intrusive.
                            </p>
                        </div>
                        <div className="pp-scope-card">
                            <span className="pp-scope-card-label">Bottom-fill beer glass Dropped</span>
                            <p className="pp-body-small">
                                Didn&apos;t meaningfully reduce host burden. While it&apos;s a novelty, not a solution to being pulled
                                out of the social gathering.
                            </p>
                        </div>
                        <div className="pp-scope-card">
                            <span className="pp-scope-card-label">Weight sensing Transferred</span>
                            <p className="pp-body-small">
                                The induction mat adopted weight sensing from the tea kettle idea. Weight on a serving
                                pot is a more actionable signal than weight in a kettle.
                            </p>
                        </div>
                        <div className="pp-scope-card">
                            <span className="pp-scope-card-label">RFID over QR</span>
                            <p className="pp-body-small">
                                RFID tags works without the guest having to do anything, no scanning, no alignment, no
                                friction.
                            </p>
                        </div>

                    </div>
                </div>

                {/* Storyboards side by side */}
                <div className="pp-subsection" style={{ marginBottom: 0 }}>
                    <p className="pp-body">
                        Our narrative storyboards for our final system.
                    </p>
                    <div className="pp-left-right">
                        <div>
                            <img
                                src="/assets/aug-experience/sb2.jpg"
                            />
                            <p className="pp-image-caption">Food — Chris</p>
                        </div>
                        <div>
                            <img
                                src="/assets/aug-experience/sb3.jpg"
                            />
                            <p className="pp-image-caption">Drinks — Chris</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* The System */}
            <section className="pp-section">
                <h2 className="pp-section-centered-heading">The System</h2>

                <p className="pp-body" style={{ textAlign: "center", maxWidth: 700, margin: "0 auto 56px" }}>
                    Convivium augments the table across two subsystems that share the same underlying logic:
                    sense state, display passively, only interrupt the host when something is low or wrong.
                </p>

                {/* Food side */}
                <div className="pp-subsection">
                    <span className="pp-badge">Food: Induction Mat & Pot</span>
                    <p className="pp-body">
                        The induction mat works with magnetic strips on the pot so heating only activates when a
                        compatible vessel is placed on it — no burn risk from the surface itself. The mat displays
                        two things: current heat level (Low, Medium, High) via addressable RGB LEDs that change
                        colour, and remaining food weight via an FSR, shown on an LCD screen. When food is running
                        low, the signal is visible from across the table. No one needs to lift a lid to check.
                    </p>
                    <p className="pp-body">
                        The host sets the temperature with two buttons. That&apos;s the full extent of their interaction
                        with the system during a meal.
                    </p>

                    {/* Sketches */}
                    <div className="pp-left-right" style={{ marginBottom: 24 }}>
                        <div>
                            <img
                                src="/assets/aug-experience/concept_2.jpg"
                            />
                            <p className="pp-image-caption">Induction mat sketch — JJ</p>
                        </div>
                        <div>
                            <img
                                src="/assets/aug-experience/concept_1.jpg"
                            />
                            <p className="pp-image-caption">Pot sketch — JJ</p>
                        </div>
                    </div>

                    {/* 3D model */}
                    <div className="pp-left-right" style={{ marginBottom: 24 }}>
                        <div>
                            <img
                                src="/assets/aug-experience/model_1.png"
                            />
                            <p className="pp-image-caption">TinkerCAD concept model: Mat and Pot — Chris</p>
                        </div>
                        <div>
                            <img
                                src="/assets/aug-experience/model_4.jpg"
                            />
                            <p className="pp-image-caption">TinkerCAD concept model: Mat and Pot — Chris</p>
                        </div>
                    </div>

                    {/* Physical build 2×2 */}
                    <div className="pp-left-right" style={{ marginBottom: 24 }}>
                        <div>
                            <img
                                src="/assets/aug-experience/object_1.jpg"
                            />
                            <p className="pp-image-caption">Pot placed on mat</p>
                        </div>
                        <div>
                            <img
                                src="/assets/aug-experience/object_2.jpg"
                            />
                            <p className="pp-image-caption">Pot placed with refill notification</p>
                        </div>
                    </div>
                </div>

                {/* Drink side */}
                <div className="pp-subsection" style={{ marginBottom: 0 }}>
                    <span className="pp-badge">Drink: Dispenser & Wine Glass Tags</span>
                    <p className="pp-body">
                        Each wine glass has an RFID tag at its base. When the guest places their glass in the
                        dispenser, the reader identifies who they are, how many drinks they&apos;ve had, and what size
                        their glass is. The system checks that information against the host&apos;s pre-configured rules,
                        whether that guest is permitted another drink, and how much to pour. It then signals with an
                        LED: green when ready to pour, red when the dispenser needs a refill.
                    </p>
                    <p className="pp-body">
                        The host sets the rules before the meal. After that, the dispenser manages itself. If a
                        guest has reached their limit, the system simply doesn&apos;t give the green light. The host
                        doesn&apos;t have to intervene, watch, or have an uncomfortable conversation.
                    </p>

                    {/* Sketches */}
                    <div className="pp-left-right" style={{ marginBottom: 24, marginTop: 24 }}>
                        <div>
                            <img
                                src="/assets/aug-experience/concept_4.jpg"
                            />
                            <p className="pp-image-caption">Dispenser sketch — JJ</p>
                        </div>
                        <div>
                            <img
                                src="/assets/aug-experience/concept_3.jpg"
                            />
                            <p className="pp-image-caption">Glass tag sketch — JJ</p>
                        </div>
                    </div>

                    {/* 3D model */}
                    <div className="pp-left-right" style={{ marginBottom: 24 }}>
                        <div>
                            <img className="pp-sketch-img"
                                src="/assets/aug-experience/model_2.png"
                            />
                            <p className="pp-image-caption">TinkerCAD concept model: Dispenser and glass tag - Chris</p>
                        </div>
                        <div>
                            <img className="pp-sketch-img"
                                src="/assets/aug-experience/model_3.jpg"
                            />
                            <p className="pp-image-caption">TinkerCAD concept model: Dispenser and glass tag - Chris</p>
                        </div>
                    </div>

                    {/* Physical dispenser 2×2 */}
                    <div className="pp-left-right" style={{ marginBottom: 24 }}>
                        <div>
                            <img
                                src="/assets/aug-experience/object_3.jpg"
                            />
                            <p className="pp-image-caption">Ready to pour</p>
                        </div>
                        <div>
                            <img
                                src="/assets/aug-experience/object_4.jpg"
                            />
                            <p className="pp-image-caption">Done</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final Submission */}
            <section className="pp-section">
                <h2 className="pp-section-centered-heading">Final Submission</h2>

                <div className="pp-2x2-grid" style={{ gap: 2 }}>
                    <div className="pp-video-container">
                        <video controls preload="none">
                            <source src="/assets/aug-experience/matdemo.mov" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                    <div className="pp-video-container">
                        <video controls preload="none">
                            <source src="/assets/aug-experience/drinkdemo.mov" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </div>
                <div className="pp-links-row">
                    <div className="pp-link-group">
                        <span className="pp-link-label">Repository</span>
                        <a
                            href="https://github.com/Jnels23/CPSC581-AugEating"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="pp-link-value"
                        >
                            github.com/Jnels23/CPSC581-AugEating
                        </a>
                    </div>
                </div>
            </section>

            {/* Soundtrack */}
            <div className="pp-soundtrack">
                <p className="pp-soundtrack-label">
                    My Project <s>Soundtrack</s> Podcast
                </p>
                <iframe
                    data-testid="embed-iframe"
                    style={{ borderRadius: '12px', marginLeft: '25%', marginTop: '2%' }}
                    src="https://open.spotify.com/embed/episode/05Fz2N0afiqK5OLkGYq6io?utm_source=generator&theme=0"
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