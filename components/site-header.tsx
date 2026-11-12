"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu, X, ChevronDown, Heart } from "lucide-react";

const links = [
  { href: "/people", label: "People" },
  { href: "/memories", label: "Memories" },
  { href: "/journey", label: "Journey" },
  { href: "/hall-of-fame", label: "Hall of Fame" },
];

const moreLinks = [
  { href: "/confessions", label: "Confession wall" },
  { href: "/guestbook", label: "Guestbook" },
  { href: "/projects", label: "Our projects" },
  { href: "/time-capsule", label: "Time capsule" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="nav-shell">
        <Link href="/" className="brand" onClick={() => setOpen(false)}>
          <span className="brand-mark">Dr.</span>
          <span className="brand-name">
            പപ്പനും പിള്ളേരും
            <small>THE 2025 CSE MEMORY BOOK</small>
          </span>
        </Link>

        <nav className={open ? "main-nav nav-open" : "main-nav"} aria-label="Main navigation">
          {links.map((link) => (
            <Link key={link.href} href={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </Link>
          ))}

          <div className="nav-more">
            <button type="button" className="nav-more-trigger" aria-haspopup="true">
              More <ChevronDown size={14} aria-hidden="true" />
            </button>
            <div className="nav-dropdown">
              {moreLinks.map((link) => (
                <Link key={link.href} href={link.href} onClick={() => setOpen(false)}>
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <Link className="nav-cta" href="/guestbook" onClick={() => setOpen(false)}>
            Leave a note <Heart size={14} aria-hidden="true" />
          </Link>
        </nav>

        <button
          type="button"
          className="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </header>
  );
}
