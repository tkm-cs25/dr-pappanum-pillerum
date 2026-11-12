"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { X, ArrowUpRight } from "lucide-react";

type Memory = { title: string; date: string; category: string; image: string; shape: string };

export function MemoryGallery({ memories }: { memories: Memory[] }) {
  const [active, setActive] = useState<Memory | null>(null);

  useEffect(() => {
    if (!active) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActive(null);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  return (
    <>
      <div className="memory-grid">
        {memories.map((memory) => (
          <button
            type="button"
            className={`memory-card memory-${memory.shape}`}
            key={memory.title}
            onClick={() => setActive(memory)}
            aria-label={`Open photo: ${memory.title}`}
          >
            <div className="memory-photo">
              <Image src={memory.image} alt={memory.title} fill sizes="(max-width: 720px) 92vw, 33vw" />
            </div>
            <div className="memory-caption">
              <span>
                {memory.date} · {memory.category}
              </span>
              <strong>{memory.title}</strong>
              <ArrowUpRight size={17} aria-hidden="true" />
            </div>
          </button>
        ))}
      </div>

      <div className="gallery-footnote">
        <span>THE ALBUM IS WAITING FOR YOUR PHOTOS.</span>
        <Link href="/memories">
          See all memories <ArrowUpRight size={15} />
        </Link>
      </div>

      {active && (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={active.title}
          onClick={() => setActive(null)}
        >
          <button type="button" className="lightbox-close" aria-label="Close photo" onClick={() => setActive(null)}>
            <X />
          </button>
          <div className="lightbox-content" onClick={(event) => event.stopPropagation()}>
            <div className="lightbox-image">
              <Image src={active.image} alt={active.title} fill sizes="90vw" />
            </div>
            <p>
              {active.title} <span>· {active.date}</span>
            </p>
          </div>
        </div>
      )}
    </>
  );
}
