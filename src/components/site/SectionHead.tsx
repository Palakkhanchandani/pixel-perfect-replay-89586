import { SplitText } from "./Reveal";
export function SectionHead({ eyebrow, title, className = "" }: { eyebrow: string; title: string; className?: string }) {
  return (
    <div className={className}>
      <p className="eyebrow opacity-60">{eyebrow}</p>
      <SplitText text={title} className="mt-4 text-4xl font-bold leading-tight md:text-6xl" />
    </div>
  );
}
