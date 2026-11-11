import { Sparkle } from "lucide-react";
export function Marquee({ items, className = "section-teal" }: { items: string[]; className?: string }) {
  const row = [...items, ...items];
  return (
    <div className={`${className} overflow-hidden py-8`}>
      <div className="animate-marquee flex w-max gap-10 whitespace-nowrap">
        {row.map((t, i) => (
          <span key={i} className="flex items-center gap-10 font-display text-4xl font-semibold md:text-6xl">
            {t}<Sparkle className="h-8 w-8 opacity-60" />
          </span>
        ))}
      </div>
    </div>
  );
}
