import logo from "@/assets/elwoura-logo.png.asset.json";
import { cn } from "@/lib/utils";

export function Logo({ dark = false, className }: { dark?: boolean; className?: string }) {
  return (
    <img
      src={logo.url}
      alt="ELWOURA — Where Ideas Become Impact"
      className={cn("h-14 w-auto select-none", dark && "logo-invert", className)}
      draggable={false}
    />
  );
}
