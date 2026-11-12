import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { Hero } from "@/components/hero";
import { SectionHeading } from "@/components/section-heading";
import { StudentCard } from "@/components/student-card";
import { MemoryGallery } from "@/components/memory-gallery";
import { Footer } from "@/components/footer";
import { ArrowUpRight, CalendarDays, Camera, Code2, Heart, MessageCircle, Sparkles, Trophy } from "lucide-react";

const students = [
  { name: "Your name goes here", role: "The idea machine", initials: "YN", color: "sage" },
  { name: "A future legend", role: "Chief last-minute expert", initials: "FL", color: "clay" },
  { name: "Batchmate #03", role: "Keeper of the playlist", initials: "03", color: "blue" },
  { name: "Batchmate #04", role: "The quiet problem-solver", initials: "04", color: "rose" },
];

const memories = [
  {
    title: "The first-day feeling",
    date: "AUG 2025",
    category: "First chapters",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=900&q=85",
    shape: "tall",
  },
  {
    title: "Between two lectures",
    date: "SEP 2025",
    category: "Campus life",
    image: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&w=900&q=85",
    shape: "wide",
  },
  {
    title: "A little chaos, a lot of us",
    date: "OCT 2025",
    category: "The gang",
    image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=900&q=85",
    shape: "square",
  },
];

export default function Home() {
  return (
    <main>
      <SiteHeader />
      <Hero />

      <section className="section-wrap people-section" id="people">
        <SectionHeading
          eyebrow="THE PEOPLE BEHIND THE MADNESS"
          title={"A hundred different stories.\nOne shared chapter."}
          note="The faces, voices and personalities that made this batch what it is."
          action="Meet everyone"
          href="/people"
        />
        <div className="student-grid">
          {students.map((student) => (
            <StudentCard key={student.initials} {...student} />
          ))}
        </div>
        <p className="demo-note">
          <span className="demo-dot" /> Sample cards for layout preview — real profiles will appear when the batch adds
          them.
        </p>
      </section>

      <section className="memory-section" id="memories">
        <div className="section-wrap">
          <SectionHeading
            eyebrow="MEMORY LANE · OPEN WHENEVER YOU MISS US"
            title={"Some moments deserve\na permanent home."}
            note="A camera roll with a heartbeat. Add the blurry ones too — they usually hold the best stories."
            action="Open the albums"
            href="/memories"
          />
          <MemoryGallery memories={memories} />
        </div>
      </section>

      <section className="section-wrap journey-section" id="journey">
        <div className="journey-copy">
          <span className="eyebrow">A TIMELINE OF US</span>
          <h2>
            From “hello” to
            <br />
            <em>remember when…</em>
          </h2>
          <p>
            We’re still writing this part. The first introductions, the unexpected wins, the trips, the deadlines, the
            stories that somehow became legends.
          </p>
          <Link className="text-link" href="/journey">
            Walk through our journey <ArrowUpRight size={17} />
          </Link>
        </div>
        <div className="timeline-preview">
          <div className="timeline-line" />
          <article className="timeline-item">
            <span className="timeline-pin" />
            <span className="timeline-date">AUGUST 2025</span>
            <h3>The beginning of everything</h3>
            <p>New faces. New classrooms. A thousand unknowns.</p>
          </article>
          <article className="timeline-item">
            <span className="timeline-pin" />
            <span className="timeline-date">THE CHAPTERS AHEAD</span>
            <h3>More stories loading…</h3>
            <p>This timeline belongs to everyone in the batch. Add a milestone when it happens.</p>
          </article>
        </div>
      </section>

      <section className="awards-section" id="hall-of-fame">
        <div className="section-wrap awards-inner">
          <div className="award-stamp">
            <Trophy size={31} strokeWidth={1.4} aria-hidden="true" />
            <span>
              UNOFFICIAL
              <br />
              BATCH HISTORY
            </span>
          </div>
          <div className="awards-copy">
            <span className="eyebrow">HALL OF FAME</span>
            <h2>
              Legends are not born.
              <br />
              <em>They are selected by the batch.</em>
            </h2>
            <p>
              The 2 AM debugger. The professional sleeper. The human Google. A little recognition for the characters who
              make the plot interesting.
            </p>
            <Link className="button button-dark" href="/hall-of-fame">
              See the nominations <ArrowUpRight size={16} />
            </Link>
          </div>
          <div className="award-list">
            <div>
              <span>01</span>
              <strong>The 2 AM Debugger</strong>
              <small>For fixing what broke at 1:59 AM</small>
            </div>
            <div>
              <span>02</span>
              <strong>The Human Google</strong>
              <small>Knows a guy who knows the answer</small>
            </div>
            <div>
              <span>03</span>
              <strong>Last-Minute Legend</strong>
              <small>Deadline? What deadline?</small>
            </div>
          </div>
        </div>
      </section>

      <section className="community-section section-wrap" id="community">
        <SectionHeading
          eyebrow="THE THINGS WE NEVER SAID OUT LOUD"
          title={"Leave a little piece\nof yourself here."}
          note="A thank-you, a confession, a message for someone who made the semester better. Keep it kind. Keep it real."
        />
        <div className="note-grid">
          <Link className="paper-note note-yellow" href="/confessions">
            <span className="pin" />
            <span className="note-label">
              <MessageCircle size={14} aria-hidden="true" /> CONFESSION WALL
            </span>
            <p>“To the person who shared their notes before every exam — you saved more than my GPA.”</p>
            <b>
              Leave a note anonymously <ArrowUpRight size={15} />
            </b>
          </Link>
          <Link className="paper-note note-pink" href="/guestbook">
            <span className="pin" />
            <span className="note-label">
              <Heart size={14} aria-hidden="true" /> GUESTBOOK
            </span>
            <p>“If we ever forget how this started, let this place remind us.”</p>
            <b>
              Sign the guestbook <ArrowUpRight size={15} />
            </b>
          </Link>
          <Link className="paper-note note-green" href="/time-capsule">
            <span className="pin" />
            <span className="note-label">
              <Sparkles size={14} aria-hidden="true" /> TIME CAPSULE
            </span>
            <p>“Dear future us, I hope we’re still laughing at the same silly things.”</p>
            <b>
              Write to the future <ArrowUpRight size={15} />
            </b>
          </Link>
        </div>
      </section>

      <section className="projects-band" id="projects">
        <div className="section-wrap projects-inner">
          <div>
            <span className="eyebrow">BUILT BY THE PEOPLE IN THE ROOM</span>
            <h2>
              Code. Create. Build.
              <br />
              <em>Repeat.</em>
            </h2>
            <p>From tiny experiments to ambitious ideas — a shelf for the things we made together.</p>
            <Link className="button button-outline" href="/projects">
              Explore our projects <ArrowUpRight size={16} />
            </Link>
          </div>

          <div className="projects-showcase">
            <div className="project-cards">
              <article className="project-card project-one">
                <div className="project-window">
                  <span />
                  <span />
                  <span />
                </div>
                <Code2 size={28} aria-hidden="true" />
                <h3>Campus Connect</h3>
                <p>Community · Web app</p>
              </article>
              <article className="project-card project-two">
                <div className="project-window">
                  <span />
                  <span />
                  <span />
                </div>
                <CalendarDays size={28} aria-hidden="true" />
                <h3>StudyBuddy</h3>
                <p>Learning · Collaboration</p>
              </article>
              <article className="project-card project-three">
                <div className="project-window">
                  <span />
                  <span />
                  <span />
                </div>
                <Camera size={28} aria-hidden="true" />
                <h3>Eventify</h3>
                <p>Events · Management</p>
              </article>
            </div>
            <span className="project-demo">DEMO CONCEPTS — NOT LIVE PROJECTS</span>
          </div>
        </div>
      </section>

      <section className="closing-section">
        <div className="closing-inner">
          <span className="eyebrow">A NOTE TO OUR FUTURE SELVES</span>
          <h2>
            One day, this will all be
            <br />
            <em>the good old days.</em>
          </h2>
          <p>
            So take the picture. Save the voice note. Write the stupid joke down.
            <br />
            The little things are the whole thing.
          </p>
          <Link className="button button-dark" href="/time-capsule">
            Leave something for later <ArrowUpRight size={16} />
          </Link>
          <span className="closing-doodle">with love, from all of us ♡</span>
        </div>
      </section>
      <Footer />
    </main>
  );
}
