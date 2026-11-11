import { Link, useRouterState } from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Logo } from "./Logo";
import { Btn } from "./Btn";
import { cn } from "@/lib/utils";

export const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/services", label: "Services" },
  { to: "/contact", label: "Contact Us" },
] as const;

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const path = useRouterState({ select: (s) => s.location.pathname });
  useEffect(() => setOpen(false), [path]);
  useEffect(() => {
    const f = () => setScrolled(window.scrollY > 40);
    f(); window.addEventListener("scroll", f, { passive: true });
    return () => window.removeEventListener("scroll", f);
  }, []);

  return (
    <header className={cn("fixed inset-x-0 top-0 z-50 transition-all duration-500", scrolled ? "bg-ink/85 py-2 backdrop-blur-xl" : "py-4")}>
      <div className="container-x flex items-center justify-between">
        <Link to="/" aria-label="ELWOURA home"><Logo dark className="h-14" /></Link>
        <nav className="hidden items-center gap-1 lg:flex">
          {NAV.map((n) => (
            <Link key={n.to} to={n.to} activeOptions={{ exact: true }}
              className="relative px-4 py-2 font-display text-sm text-paper/70 transition-colors hover:text-paper data-[status=active]:text-paper">
              {({ isActive }) => (<>
                {n.label}
                {isActive && <motion.span layoutId="nav-dot" className="absolute inset-x-4 -bottom-0.5 h-px bg-paper" />}
              </>)}
            </Link>
          ))}
        </nav>
        <div className="hidden lg:block"><Btn to="/contact" variant="teal">Get a Free Consultation</Btn></div>
        <button aria-label="Menu" onClick={() => setOpen(!open)} className="relative z-50 flex h-11 w-11 flex-col items-center justify-center gap-1.5 lg:hidden">
          <motion.span animate={open ? { rotate: 45, y: 4 } : { rotate: 0, y: 0 }} className="block h-0.5 w-7 bg-paper" />
          <motion.span animate={open ? { rotate: -45, y: -4 } : { rotate: 0, y: 0 }} className="block h-0.5 w-7 bg-paper" />
        </button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div initial={{ clipPath: "circle(0% at 100% 0%)" }} animate={{ clipPath: "circle(150% at 100% 0%)" }} exit={{ clipPath: "circle(0% at 100% 0%)" }}
            transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
            className="bg-cinematic fixed inset-0 z-40 flex flex-col justify-center gap-4 px-8 lg:hidden">
            {NAV.map((n, i) => (
              <motion.div key={n.to} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 + i * 0.07 }}>
                <Link to={n.to} activeOptions={{ exact: true }} className="font-display text-4xl font-semibold text-paper/60 data-[status=active]:text-paper">{n.label}</Link>
              </motion.div>
            ))}
            <div className="mt-6"><Btn to="/contact" variant="light">Get a Free Consultation</Btn></div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
