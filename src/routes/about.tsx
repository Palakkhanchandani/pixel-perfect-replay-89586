import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Lightbulb, HeartHandshake, Rocket, ShieldCheck, Sparkles, LineChart, Users, Clock } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { SectionHead } from "@/components/site/SectionHead";
import { Reveal, ParallaxImage, SplitText } from "@/components/site/Reveal";
import { Counter } from "@/components/site/Counter";
import { FinalCta } from "./index";
import { IMG, STATS } from "@/lib/content";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — ELWOURA" },
      { name: "description", content: "Meet ELWOURA: our story, mission, values and the team turning ideas into impact." },
      { property: "og:title", content: "About ELWOURA — Where Ideas Become Impact" },
      { property: "og:description", content: "Our story, mission, values and the creative team behind ELWOURA." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: About,
});

const VALUES = [
  { icon: Lightbulb, t: "Creativity", d: "Bold ideas that break through the noise." },
  { icon: HeartHandshake, t: "Partnership", d: "We grow when you grow — always transparent." },
  { icon: LineChart, t: "Results", d: "Every decision is measured against real impact." },
  { icon: ShieldCheck, t: "Integrity", d: "Honest advice, clear reporting, no shortcuts." },
];
const TEAM = [
  { n: "Aarav Malhotra", r: "Founder & Strategy Lead", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80" },
  { n: "Isha Reddy", r: "Creative Director", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=800&q=80" },
  { n: "Kabir Singh", r: "Performance Marketing Head", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80" },
  { n: "Meera Iyer", r: "Brand & Content Strategist", img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=800&q=80" },
];
const WHY = [
  { icon: Sparkles, t: "Creative-first thinking" }, { icon: Rocket, t: "Fast, agile execution" },
  { icon: Users, t: "Dedicated account team" }, { icon: Clock, t: "Transparent monthly reporting" },
];

function About() {
  return (<>
    <PageHero eyebrow="About us" title="Where Ideas Become Impact." sub="We're a team of strategists, designers and storytellers on a mission to help brands grow beyond limits." img={IMG.studio} />

    <section className="section-light py-28 md:py-40">
      <div className="container-x grid gap-16 md:grid-cols-2 md:items-center">
        <ParallaxImage src={IMG.meeting} alt="ELWOURA team meeting" className="h-[34rem] rounded-2xl" />
        <div>
          <SectionHead eyebrow="Our story" title="Born from a single spark." />
          <Reveal className="mt-8 space-y-5 text-lg text-muted-foreground">
            <p>ELWOURA started with a simple belief: every brand has a brilliant idea at its core — it just needs the right light to shine.</p>
            <p>That's why our mark is a lightbulb. We exist to find that idea, shape it into a story, and amplify it across every channel that matters.</p>
          </Reveal>
        </div>
      </div>
    </section>

    <section className="section-teal py-28">
      <div className="container-x grid gap-6 md:grid-cols-2">
        {[{ t: "Our Mission", d: "To empower businesses with creative, data-driven marketing that builds lasting connections and measurable growth." },
          { t: "Our Vision", d: "To be the most trusted creative growth partner for ambitious brands — in India and around the world." }].map((m) => (
          <Reveal key={m.t}><div className="h-full rounded-2xl border border-paper/20 p-10 md:p-14">
            <p className="eyebrow text-alabaster">{m.t}</p>
            <p className="mt-6 font-display text-2xl leading-snug md:text-3xl">{m.d}</p>
          </div></Reveal>
        ))}
      </div>
    </section>

    <section className="section-grey py-28 md:py-40">
      <div className="container-x">
        <SectionHead eyebrow="Core values" title="What we stand for." />
        <Reveal className="mt-16 grid gap-6 md:grid-cols-4">
          {VALUES.map((v) => (
            <motion.div key={v.t} whileHover={{ y: -8 }} className="group rounded-2xl bg-paper p-8">
              <motion.div animate={{ rotate: [0, 8, -8, 0] }} transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="flex h-14 w-14 items-center justify-center rounded-full bg-teal text-paper"><v.icon className="h-6 w-6" /></motion.div>
              <h3 className="mt-8 text-xl font-semibold">{v.t}</h3>
              <p className="mt-2 text-muted-foreground">{v.d}</p>
            </motion.div>
          ))}
        </Reveal>
      </div>
    </section>

    <section className="relative overflow-hidden py-40 text-paper">
      <ParallaxImage src={IMG.creative} alt="Creative brainstorming" className="!absolute inset-0" />
      <div className="absolute inset-0 bg-ink/70" />
      <div className="container-x relative text-center">
        <p className="eyebrow text-alabaster">The ELWOURA way</p>
        <SplitText text="An idea is only the beginning. Impact is the destination." className="mx-auto mt-6 max-w-4xl text-4xl font-bold leading-tight md:text-6xl" />
      </div>
    </section>

    <section className="section-dark py-28 md:py-40">
      <div className="container-x">
        <SectionHead eyebrow="Our team" title="The minds behind the magic." />
        <Reveal className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {TEAM.map((m) => (
            <div key={m.n} className="group relative overflow-hidden rounded-2xl" data-cursor="hover">
              <img src={m.img} alt={m.n} loading="lazy" className="aspect-[3/4] w-full object-cover grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0" />
              <div className="absolute inset-x-0 bottom-0 translate-y-4 bg-gradient-to-t from-ink to-transparent p-6 transition-transform duration-500 group-hover:translate-y-0">
                <h3 className="text-xl font-semibold">{m.n}</h3>
                <p className="text-sm text-alabaster">{m.r}</p>
              </div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>

    <section className="section-light py-28 md:py-40">
      <div className="container-x grid gap-16 md:grid-cols-2">
        <div>
          <SectionHead eyebrow="Why choose us" title="A partner, not just an agency." />
          <Reveal className="mt-10 space-y-4">
            {WHY.map((w) => <div key={w.t} className="flex items-center gap-4 rounded-xl border border-ink/10 p-5"><w.icon className="h-6 w-6 text-teal" /><span className="font-display font-medium">{w.t}</span></div>)}
          </Reveal>
        </div>
        <div className="grid grid-cols-2 gap-4 self-center">
          {STATS.map((s, i) => (
            <div key={s.label} className={`rounded-2xl p-8 ${i % 3 === 0 ? "section-teal" : "section-grey"}`}>
              <div className="font-display text-5xl font-bold"><Counter to={s.n} suffix={s.s} /></div>
              <p className="mt-2 text-sm opacity-70">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
    <FinalCta />
  </>);
}
