import { ArrowUpRight, Star } from "lucide-react";
export function StudentCard({ name, role, initials, color }: { name: string; role: string; initials: string; color: string }) {
  return <article className={`student-card student-${color}`}><div className="student-photo-placeholder"><span>{initials}</span><small>PHOTO<br />GOES HERE</small><Star className="student-star" size={17} /></div><div className="student-info"><div><h3>{name}</h3><p>{role}</p></div><span className="student-arrow"><ArrowUpRight size={17} /></span></div></article>;
}
