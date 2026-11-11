import { Link } from "@tanstack/react-router";
import { Instagram, Linkedin, Facebook, Twitter, Mail, Phone, MapPin } from "lucide-react";
import { Logo } from "./Logo";
import { NAV } from "./Navbar";

export function Footer() {
  return (
    <footer className="section-dark relative overflow-hidden pt-24">
      <div className="container-x grid gap-12 pb-16 md:grid-cols-12">
        <div className="md:col-span-5">
          <Logo dark className="h-24" />
          <p className="mt-6 max-w-sm font-display text-2xl text-paper/90">Where Ideas Become Impact.</p>
          <div className="mt-8 flex gap-3">
            {[Instagram, Linkedin, Facebook, Twitter].map((I, i) => (
              <a key={i} href="#" aria-label="Social link" className="flex h-11 w-11 items-center justify-center rounded-full border border-paper/20 transition-colors hover:bg-teal hover:border-teal"><I className="h-4 w-4" /></a>
            ))}
          </div>
        </div>
        <div className="md:col-span-3">
          <p className="eyebrow text-paper/50">Quick links</p>
          <ul className="mt-6 space-y-3">
            {NAV.map((n) => <li key={n.to}><Link to={n.to} className="text-paper/80 hover:text-paper">{n.label}</Link></li>)}
          </ul>
        </div>
        <div className="md:col-span-4">
          <p className="eyebrow text-paper/50">Contact</p>
          <ul className="mt-6 space-y-4 text-paper/80">
            <li className="flex gap-3"><Phone className="h-5 w-5 text-alabaster" /><a href="tel:+918107035735">+91 81070 35735</a></li>
            <li className="flex gap-3"><Mail className="h-5 w-5 text-alabaster" /><a href="mailto:hello@elwoura.com">hello@elwoura.com</a></li>
            <li className="flex gap-3"><MapPin className="h-5 w-5 text-alabaster" />India — working with brands worldwide</li>
          </ul>
        </div>
      </div>
      <div className="container-x select-none font-display text-[18vw] font-bold leading-none text-paper/5">ELWOURA</div>
      <div className="border-t border-paper/10 py-6">
        <div className="container-x flex flex-col justify-between gap-2 text-sm text-paper/50 md:flex-row">
          <span>© {new Date().getFullYear()} ELWOURA. All rights reserved.</span>
          <span>Grow Your Brand. Beyond Limits.</span>
        </div>
      </div>
    </footer>
  );
}
