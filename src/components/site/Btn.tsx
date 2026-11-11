import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { cva, type VariantProps } from "class-variance-authority";
import { Magnetic } from "./Magnetic";
import { cn } from "@/lib/utils";

const btn = cva(
  "group inline-flex items-center gap-2 rounded-full px-7 py-3.5 font-display text-sm font-medium transition-all duration-300",
  {
    variants: {
      variant: {
        teal: "bg-teal text-paper hover:bg-paper hover:text-ink",
        light: "bg-paper text-ink hover:bg-teal hover:text-paper",
        ink: "bg-ink text-paper hover:bg-teal",
        ghostLight: "border border-paper/40 text-paper hover:bg-paper hover:text-ink",
        ghostDark: "border border-ink/30 text-ink hover:bg-ink hover:text-paper",
      },
    },
    defaultVariants: { variant: "teal" },
  },
);

type P = VariantProps<typeof btn> & { to: "/" | "/about" | "/services" | "/contact"; children: React.ReactNode; className?: string };

export function Btn({ to, children, variant, className }: P) {
  return (
    <Magnetic>
      <Link to={to} className={cn(btn({ variant }), className)} data-cursor="hover">
        {children}
        <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:rotate-45" />
      </Link>
    </Magnetic>
  );
}
export { btn as btnVariants };
