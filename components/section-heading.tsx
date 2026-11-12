import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
export function SectionHeading({ eyebrow, title, note, action, href }: { eyebrow: string; title: string; note: string; action?: string; href?: string }) {
  const lines = title.replace(/\\n/g, "\n").split("\n");
  return (
    <div className="section-heading">
      <div>
        <span className="eyebrow">{eyebrow}</span>
        <h2>
          {lines.map((line, index) => (
            <span key={index}>
              {line}
              {index < lines.length - 1 ? <br /> : null}
            </span>
          ))}
        </h2>
        <p>{note}</p>
      </div>
      {action && href ? (
        <Link className="text-link section-action" href={href}>
          {action} <ArrowUpRight size={17} />
        </Link>
      ) : null}
    </div>
  );
}
