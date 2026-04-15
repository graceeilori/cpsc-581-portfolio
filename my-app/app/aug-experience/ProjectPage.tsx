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
                            Augment one or more everyday objects to improve the experience of people eating together,
                            using physical computing. The system had to sense, respond, and communicate, not just decorate.
                        </p>
                    </div>
                </div>
            </section>

            {/* The Reframe */}
            <section className="pp-section">
                <h2 className="pp-section-centered-heading">The Reframe</h2>

                <div className="pp-subsection">
                    <p className="pp-body">
                        Our first framing instinct was generic: make food better, keep it warm, make drinks easier.
                        Useful, but not a design problem yet.
                    </p>
                    <p className="pp-body">
                        We mapped out the actual range of contexts — dinner dates, family dinners, large gatherings —
                        and one pattern became clear. As group size increases, the host&apos;s responsibilities increase
                        in a way that&apos;s specifically social. They&apos;re not just doing more work. They&apos;re being pulled
                        <em> out</em> of the gathering they created.
                    </p>
                    <p className="pp-body">
                        At a large dinner, the host is last to sit and first to stand. They&apos;re monitoring food levels,
                        refilling drinks, managing portions — none of which requires their presence to be social, but
                        all of which requires their <em>attention</em>. The food and drinks are constantly asking to be noticed.
                    </p>

                    <blockquote className="pp-pull-quote">
                        The design question isn&apos;t &ldquo;how do we help the host do more?&rdquo; It&apos;s &ldquo;how do we make
                        the table autonomous enough that the host stops being asked?&rdquo;
                    </blockquote>

                    <p className="pp-body">
                        From that reframe, the scope became clear: don&apos;t build tools for the host to use. Build
                        objects that sense their own state and signal passively, so the host only needs to act
                        when something genuinely requires them.
                    </p>
                </div>

                {/* Context mapping sketch */}
                <div className="pp-subsection">
                    <ImagePlaceholder label="JJ's familiarity context sketches — 3×3 grid mapping gathering types by group size and familiarity (Fig. A3)" aspect="4/3" />
                    <p className="pp-image-caption">Context mapping — gathering types by size and familiarity — Fig. A3</p>
                </div>

                <div className="pp-subsection" style={{ marginBottom: 0 }}>
                    <p className="pp-body">
                        That context mapping shaped our framing directly: the objective was for the host to remain
                        seated and socialize while still being informed. Feedback to the host had to be subtle,
                        non-disruptive, and only interrupt when necessary.
                    </p>
                </div>
            </section>

            {/* From Ideas to Objects */}
            <section className="pp-section">
                <h2 className="pp-section-centered-heading">From Ideas to Objects</h2>

                <div className="pp-subsection">
                    <p className="pp-body">
                        We ran an open brainstorming session before converging. The range was wide — heated
                        individual mats, a rice pot with humidity sensing, pizza plate glow sticks that assigned
                        guests conversation partners, beer glasses that fill from the bottom, a tea kettle with
                        a weight sensor.
                    </p>
                </div>

                {/* Brainstorm sketches side by side */}
                <div className="pp-subsection">
                    <span className="pp-badge">Early Sketches</span>
                    <div className="pp-left-right">
                        <div>
                            <ImagePlaceholder label="Grace's brainstorm sketches — wine glass tags, drink eligibility, pressure sensors, QR identity (Fig. A1)" aspect="4/3" />
                            <p className="pp-image-caption">Grace&apos;s early concepts — Fig. A1</p>
                        </div>
                        <div>
                            <ImagePlaceholder label="JJ's brainstorm sketches — heated box, modular warmer concepts (Fig. A2)" aspect="4/3" />
                            <p className="pp-image-caption">JJ&apos;s early concepts — Fig. A2</p>
                        </div>
                    </div>
                </div>

                <div className="pp-subsection">
                    <p className="pp-body">
                        Two things happened in that session that shaped the final system.
                    </p>
                    <p className="pp-body">
                        First, we noticed we&apos;d been thinking entirely about food and hadn&apos;t touched beverages at
                        all. That gap produced the wine glass tag idea, drink eligibility by guest, and the
                        dispenser concept — all in one thread.
                    </p>
                    <p className="pp-body">
                        Second, when we reviewed our food ideas against the large-gathering context, individual
                        heated mats didn&apos;t hold up. Guests at large gatherings aren&apos;t seated the whole time.
                        They move around, circulate, stand. A mat per seat solves nothing if the seat isn&apos;t
                        occupied. We needed to address food warming at the source — the serving vessel itself.
                    </p>
                </div>

                {/* Heated mat storyboard */}
                <div className="pp-subsection">
                    <ImagePlaceholder label="Heated mat storyboard — before/after: without system vs. with system (Fig. 1)" aspect="16/7" />
                    <p className="pp-image-caption">Heated mat concept — before/after storyboard — Fig. 1</p>
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
                            <span className="pp-scope-card-label">Tea kettle → dropped</span>
                            <p className="pp-body-small">
                                Tea preparation involves too many individual variables — steeping time, temperature
                                preferences, tea type — that the system couldn&apos;t resolve without becoming intrusive.
                            </p>
                        </div>
                        <div className="pp-scope-card">
                            <span className="pp-scope-card-label">Bottom-fill beer glass → dropped</span>
                            <p className="pp-body-small">
                                Didn&apos;t meaningfully reduce host burden. It&apos;s a novelty, not a solution to being pulled
                                out of the social gathering.
                            </p>
                        </div>
                        <div className="pp-scope-card">
                            <span className="pp-scope-card-label">RFID over QR</span>
                            <p className="pp-body-small">
                                RFID works without the guest having to do anything — no scanning, no alignment, no
                                friction. The passive read is the point.
                            </p>
                        </div>
                        <div className="pp-scope-card">
                            <span className="pp-scope-card-label">Weight sensing → transferred</span>
                            <p className="pp-body-small">
                                The induction mat adopted weight sensing from the tea kettle idea. Weight on a serving
                                pot is a more actionable signal than weight in a kettle.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Storyboards side by side */}
                <div className="pp-subsection" style={{ marginBottom: 0 }}>
                    <div className="pp-left-right">
                        <div>
                            <ImagePlaceholder label="Induction mat storyboard — host getting up vs. staying seated (Fig. 2)" aspect="4/3" />
                            <p className="pp-image-caption">Induction mat — Fig. 2</p>
                        </div>
                        <div>
                            <ImagePlaceholder label="Drink dispenser storyboard — guests over-drinking without system vs. passive management (Fig. 3)" aspect="4/3" />
                            <p className="pp-image-caption">Drink dispenser — Fig. 3</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* The System */}
            <section className="pp-section">
                <h2 className="pp-section-centered-heading">The System</h2>

                <p className="pp-body" style={{ textAlign: "center", maxWidth: 700, margin: "0 auto 56px" }}>
                    Convivium augments the table across two subsystems that share the same underlying logic:
                    sense state, display passively, only interrupt the host when something is genuinely low or wrong.
                </p>

                {/* Food side */}
                <div className="pp-subsection">
                    <span className="pp-badge">Food Side — Induction Mat & Pot</span>
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
                            <ImagePlaceholder label="Induction mat annotated design sketch (Fig. 4)" aspect="4/3" />
                            <p className="pp-image-caption">Induction mat sketch — Fig. 4</p>
                        </div>
                        <div>
                            <ImagePlaceholder label="Pot sketch — magnetic strips, false bottom for LED wiring, LED colour states (Fig. 5)" aspect="4/3" />
                            <p className="pp-image-caption">Pot sketch — Fig. 5</p>
                        </div>
                    </div>

                    {/* 3D model */}
                    <div style={{ marginBottom: 24 }}>
                        <ImagePlaceholder label="Induction mat and pot — TinkerCAD 3D concept render (Fig. 8)" aspect="16/9" />
                        <p className="pp-image-caption">Mat and pot — TinkerCAD concept model — Fig. 8</p>
                    </div>

                    {/* Physical build 2×2 */}
                    <div className="pp-2x2-grid">
                        <div className="pp-2x2-cell">
                            <ImagePlaceholder label="Physical build — empty mat" aspect="4/3" />
                            <p className="pp-image-caption">Empty mat</p>
                        </div>
                        <div className="pp-2x2-cell">
                            <ImagePlaceholder label="Physical build — pot placed on mat" aspect="4/3" />
                            <p className="pp-image-caption">Pot placed — heating active</p>
                        </div>
                        <div className="pp-2x2-cell">
                            <ImagePlaceholder label="Physical build — low weight indicator state" aspect="4/3" />
                            <p className="pp-image-caption">Low weight indicator</p>
                        </div>
                        <div className="pp-2x2-cell">
                            <ImagePlaceholder label="Physical build — temperature display on LCD" aspect="4/3" />
                            <p className="pp-image-caption">Temperature display</p>
                        </div>
                    </div>
                </div>

                {/* Drink side */}
                <div className="pp-subsection" style={{ marginBottom: 0 }}>
                    <span className="pp-badge">Drink Side — Dispenser & Wine Glass Tags</span>
                    <p className="pp-body">
                        Each wine glass has an RFID tag at its base. When the guest places their glass in the
                        dispenser, the reader identifies who they are, how many drinks they&apos;ve had, and what size
                        their glass is. The system checks that information against the host&apos;s pre-configured rules —
                        whether that guest is permitted another drink, and how much to pour — then signals with an
                        LED: green when ready to pour, red when the dispenser needs a refill.
                    </p>
                    <p className="pp-body">
                        The host sets the rules before the meal. After that, the dispenser manages itself. If a
                        guest has reached their limit, the system simply doesn&apos;t give the green light. The host
                        doesn&apos;t have to intervene, watch, or have an uncomfortable conversation.
                    </p>

                    {/* Sketches */}
                    <div className="pp-left-right" style={{ marginBottom: 24 }}>
                        <div>
                            <ImagePlaceholder label="Dispenser annotated sketch — RFID reader, LED indicators, modular nozzle, pressure connector (Fig. 6)" aspect="4/3" />
                            <p className="pp-image-caption">Dispenser sketch — Fig. 6</p>
                        </div>
                        <div>
                            <ImagePlaceholder label="Wine glass tag sketch — RFID tag at base, identification details (Fig. 7)" aspect="4/3" />
                            <p className="pp-image-caption">Glass tag sketch — Fig. 7</p>
                        </div>
                    </div>

                    {/* 3D model */}
                    <div style={{ marginBottom: 24 }}>
                        <ImagePlaceholder label="Dispenser and wine glass tag — Blender 3D render: front, side, glass in position, display screen (Fig. 9)" aspect="16/9" />
                        <p className="pp-image-caption">Dispenser and glass tag — Blender concept model — Fig. 9</p>
                    </div>

                    {/* Physical dispenser 2×2 */}
                    <div className="pp-2x2-grid">
                        <div className="pp-2x2-cell">
                            <ImagePlaceholder label="Cardboard dispenser prototype — 'Thank You!' state" aspect="4/3" />
                            <p className="pp-image-caption">&ldquo;Thank You!&rdquo;</p>
                        </div>
                        <div className="pp-2x2-cell">
                            <ImagePlaceholder label="Cardboard dispenser prototype — 'Running Low / Please refill' state" aspect="4/3" />
                            <p className="pp-image-caption">&ldquo;Running Low — Please refill&rdquo;</p>
                        </div>
                        <div className="pp-2x2-cell">
                            <ImagePlaceholder label="Cardboard dispenser prototype — 'Red Wine' state" aspect="4/3" />
                            <p className="pp-image-caption">&ldquo;Red Wine&rdquo;</p>
                        </div>
                        <div className="pp-2x2-cell">
                            <ImagePlaceholder label="Cardboard dispenser prototype — 'Hello SuSan! Ready to pour' — RFID personalization demo" aspect="4/3" />
                            <p className="pp-image-caption">&ldquo;Hello SuSan! Ready to pour&rdquo;</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* What Broke */}
            <section className="pp-section">
                <h2 className="pp-section-centered-heading">What Broke & What I Learned</h2>

                <div className="pp-subsection">
                    <span className="pp-badge">Hardware Constraints, Not Design Failures</span>
                    <p className="pp-body">
                        Three things didn&apos;t make it into the physical build. It&apos;s worth being precise about why.
                    </p>
                    <div className="pp-status-list">
                        <div className="pp-status-item">
                            <span className="pp-status-tag status-constraint">Constraint</span>
                            <p className="pp-body-small" style={{ marginBottom: 0 }}>
                                The RFID reader and water pump we received for the dispenser were incompatible with
                                our other components. We demoed the dispenser side using a button that walks through
                                a scripted scenario, which let us demonstrate the intended states and logic without
                                the actual sensing.
                            </p>
                        </div>
                        <div className="pp-status-item">
                            <span className="pp-status-tag status-constraint">Constraint</span>
                            <p className="pp-body-small" style={{ marginBottom: 0 }}>
                                The large LCD screen intended for the front of the dispenser was out of range for a
                                school project budget. We substituted paper cards in a slideshow format, manually
                                flipping between states during the demo. It communicated exactly what the screen
                                would have shown.
                            </p>
                        </div>
                        <div className="pp-status-item">
                            <span className="pp-status-tag status-constraint">Constraint</span>
                            <p className="pp-body-small" style={{ marginBottom: 0 }}>
                                Because the RFID and pump didn&apos;t work, drink count tracking and personalized pour
                                amounts couldn&apos;t run live. The logic is implemented; the sensors that would
                                trigger it weren&apos;t functional.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="pp-subsection" style={{ marginBottom: 0 }}>
                    <span className="pp-badge">What I&apos;d Push Further</span>
                    <p className="pp-body">
                        The passive notification design is right, but the dispenser in particular only works if
                        the guest knows to bring their glass to it. At a large gathering, that&apos;s a new behaviour
                        to establish. We talked briefly about adding a subtle ambient signal — a slow pulse at the
                        guest&apos;s seat — that invites them to get a drink without the host announcing it. That layer
                        of proactive communication between the system and the guest, not just the system and the
                        host, would make the whole thing feel more complete.
                    </p>
                    <p className="pp-body">
                        The induction mat side is closer to deployable. Weight sensing and LED temperature
                        indication work, the hardware is stable, and the interaction is genuinely zero-effort
                        for the host after setup.
                    </p>
                </div>
            </section>

            {/* Final Submission */}
            <section className="pp-section">
                <h2 className="pp-section-centered-heading">Final Submission</h2>

                <div className="pp-video-container">
                    <video controls preload="none">
                        <source src="/assets/aug-experience/project-3-demo-video.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
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