"use client";
import Link from "next/link";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, ArrowUpRight, Camera, Check, Heart, Sparkles } from "lucide-react";

const photos = [
  {
    src: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&w=900&q=85",
    alt: "Students gathered on a university campus",
    className: "polaroid-main",
    caption: "the place it all began",
  },
  {
    src: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=700&q=85",
    alt: "Friends spending time together",
    className: "polaroid-small",
    caption: "same chaos, new day",
  },
  {
    src: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=700&q=85",
    alt: "A group of students sharing a moment",
    className: "polaroid-bottom",
    caption: "our kind of people",
  },
];

const scribbleItems = ["classes", "projects", "trips", "inside jokes", "everything in between"];

export function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="hero-section" id="top">
      <div className="hero-paper-grain" />
      <div className="hero-inner">
        <div className="hero-copy">
          <div className="hero-kicker">
            <span className="kicker-line" />
            <span>TKM COLLEGE OF ENGINEERING</span>
            <span className="kicker-year">· EST. 2025</span>
          </div>

          <motion.h1
            initial={reduceMotion ? false : { opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            We came for a degree.
            <br />
            <em>We found a family.</em>
          </motion.h1>

          <p className="hero-malayalam">
            Dr. പപ്പനും പിള്ളേരും <Heart size={21} fill="currentColor" aria-hidden="true" />
          </p>

          <p className="hero-description">
            A collection of unforgettable people, questionable decisions, legendary memories and stories worth
            remembering.
          </p>

          <div className="hero-actions">
            <Link href="#memories" className="button button-primary">
              Explore our memories <ArrowUpRight size={16} />
            </Link>
            <Link href="#people" className="button button-ghost">
              Meet the batch
            </Link>
          </div>

          <div className="hero-scribble" aria-label="What this scrapbook holds">
            {scribbleItems.map((item) => (
              <span className="scribble-item" key={item}>
                <span className="scribble-box" aria-hidden="true">
                  <Check size={11} strokeWidth={2.75} />
                </span>
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="hero-collage" aria-label="A collage of campus and friendship photographs">
          <div className="collage-tape tape-one" />
          <div className="collage-tape tape-two" />
          {photos.map((photo, index) => (
            <motion.figure
              key={photo.className}
              className={`polaroid ${photo.className}`}
              initial={reduceMotion ? false : { opacity: 0, y: 25, rotate: index === 0 ? -3 : index === 1 ? 5 : -7 }}
              animate={{ opacity: 1, y: 0, rotate: index === 0 ? -3 : index === 1 ? 5 : -7 }}
              transition={{ delay: 0.18 + index * 0.13, duration: 0.65 }}
            >
              <div className="polaroid-photo">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(max-width: 700px) 46vw, 340px"
                  priority={index === 0}
                />
              </div>
              <figcaption>{photo.caption}</figcaption>
            </motion.figure>
          ))}
          <div className="collage-sticker">
            <Sparkles size={17} aria-hidden="true" />
            <span>
              good times
              <br />
              live here
            </span>
          </div>
          <span className="collage-heart" aria-hidden="true">
            ♡
          </span>
        </div>
      </div>

      <div className="hero-meta-bar">
        <span className="hero-meta-spacer" aria-hidden="true" />
        <a className="scroll-cue" href="#people">
          <span>SCROLL TO REMEMBER</span>
          <ArrowDown size={15} aria-hidden="true" />
        </a>
        <div className="hero-bottom-note">
          <Camera size={15} aria-hidden="true" />
          <span>REAL PEOPLE. REAL MEMORIES. ALWAYS A WORK IN PROGRESS.</span>
        </div>
      </div>
    </section>
  );
}
