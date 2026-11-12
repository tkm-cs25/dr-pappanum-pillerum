import Link from "next/link";
import { Heart, Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <Link href="/" className="footer-brand">
          Dr. പപ്പനും പിള്ളേരും
          <span>2025 · B.TECH CSE · TKMCE</span>
        </Link>
        <p>
          A little corner of the internet
          <br />
          that feels like a place we know.
        </p>
        <div className="footer-links">
          <Link href="/people">People</Link>
          <Link href="/memories">Memories</Link>
          <Link href="/journey">Journey</Link>
          <Link href="/guestbook">Guestbook</Link>
        </div>
        <a
          className="footer-social"
          href="https://www.instagram.com/"
          target="_blank"
          rel="noreferrer"
          aria-label="Instagram"
        >
          <Instagram size={18} />
        </a>
      </div>
      <div className="footer-bottom">
        <span>
          © 2025–2026 · MADE WITH <Heart size={12} fill="currentColor" aria-hidden="true" /> BY THE BATCH
        </span>
        <span>WE WERE HERE. WE LIVED IT.</span>
        <Link href="#top">BACK TO TOP ↑</Link>
      </div>
      <span className="footer-credit">A living scrapbook. Still being written.</span>
    </footer>
  );
}
