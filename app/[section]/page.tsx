import { notFound } from "next/navigation";
import { CollectionPage } from "@/components/collection-page";
const validSections = ["people", "memories", "journey", "hall-of-fame", "confessions", "guestbook", "projects", "time-capsule", "admin"];
export function generateStaticParams() { return validSections.map((section) => ({ section })); }
export default async function SectionRoute({ params }: { params: Promise<{ section: string }> }) {
  const { section } = await params;
  if (!validSections.includes(section)) notFound();
  return <CollectionPage section={section} />;
}
