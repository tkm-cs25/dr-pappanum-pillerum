import Link from "next/link";

export default function NotFound() {
  return (
    <main className="collection-page">
      <section className="collection-hero">
        <span className="eyebrow">WRONG PAGE, RIGHT BATCH</span>
        <h1>
          This page wandered
          <br />
          off campus.
        </h1>
        <p>We couldn&apos;t find the page you were looking for.</p>
        <Link className="button button-primary" href="/">
          Back to the scrapbook
        </Link>
      </section>
    </main>
  );
}
