import { createFileRoute, Link, ClientOnly } from "@tanstack/react-router";
import { lazy, Suspense, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { Btn } from "@/components/site/Btn";
import { SplitText, Reveal, ParallaxImage } from "@/components/site/Reveal";
import { SectionHead } from "@/components/site/SectionHead";
import { TiltCard } from "@/components/site/TiltCard";
import { Counter } from "@/components/site/Counter";
import { Marquee } from "@/components/site/Marquee";
import { IMG, SERVICES, PROCESS, TESTIMONIALS, STATS, KEYWORDS } from "@/lib/content";

const HeroScene = lazy(() => import("@/components/site/HeroScene"));

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ELWOURA — Grow Your Brand. Beyond Limits." },
      { name: "description", content: "ELWOURA is a premium digital marketing agency for social media, performance ads, SEO, branding and web design." },
      { property: "og:title", content: "ELWOURA — Grow Your Brand. Beyond Limits." },
      { property: "og:description", content: "A premium digital marketing agency. Where Ideas Become Impact." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

function Home() {
  return (<>
    <Hero />
    <Marquee items={KEYWORDS} />
    <Intro />
    <ServicesPreview />
    <ParallaxBand />
    <Stats />
    <Process />
    <Testimonials />
    <FinalCta />
  </>);
}

function Hero() {
  return (
    <section className="bg-cinematic relative flex min-h-screen items-center overflow-hidden text-paper">
      <div className="absolute inset-0"><ClientOnly><Suspense fallback={null}><HeroScene /></Suspense></ClientOnly></div>
      <div className="pointer-events-none container-x relative pt-24">
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2 }} className="eyebrow text-alabaster">Digital Marketing Agency</motion.p>
        <SplitText as="h1" text="Grow Your Brand. Beyond Limits." onScroll={false} delay={1.9}
          className="mt-6 max-w-4xl text-6xl font-bold leading-[0.98] md:text-[7.5rem]" />
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 2.6 }} className="mt-8 max-w-lg text-lg text-paper/70">
          Strategy, creativity and performance — fused into marketing that moves people and grows businesses.
        </motion.p>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 2.8 }} className="pointer-events-auto mt-10 flex flex-wrap gap-4">
          <Btn to="/services" variant="light">Our Services</Btn>
          <Btn to="/contact" variant="ghostLight">Contact Us</Btn>
        </motion.div>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-xs uppercase tracking-[0.3em] text-paper/50">Scroll</div>
    </section>
  );
}

function Intro() {
  return (
    <section className="section-light py-28 md:py-40">
      <div className="container-x grid gap-16 md:grid-cols-2 md:items-center">
        <div>
          <SectionHead eyebrow="Who we are" title="We craft brands people can't scroll past." />
          <Reveal className="mt-8 space-y-5 text-lg text-muted-foreground">
            <p>ELWOURA is a creative-first digital marketing agency helping ambitious brands find their voice, reach the right audience and grow — beyond limits.</p>
            <p>From the first spark of an idea to campaigns that deliver measurable impact, we're your partner at every step.</p>
            <div className="pt-4"><Btn to="/about" variant="ink">More about us</Btn></div>
          </Reveal>
        </div>
        <div className="relative grid grid-cols-2 gap-4">
          <ParallaxImage src={IMG.team} alt="Creative team collaborating" className="h-[28rem] rounded-2xl" />
          <ParallaxImage src={IMG.branding} alt="Branding work" className="mt-16 h-[28rem] rounded-2xl" speed={30} />
        </div>
      </div>
    </section>
  );
}

function ServicesPreview() {
  return (
    <section className="section-dark py-28 md:py-40">
      <div className="container-x">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <SectionHead eyebrow="What we do" title="Services built for growth." />
          <Btn to="/services" variant="ghostLight">All services</Btn>
        </div>
        <Reveal className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {SERVICES.slice(0, 4).map((s, i) => (
            <TiltCard key={s.title} className="h-full">
              <Link to="/services" className="group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-paper/10 bg-paper/[0.03] p-8 transition-colors duration-500 hover:bg-teal">
                <span className="font-display text-sm text-paper/40">0{i + 1}</span>
                <s.icon className="mt-10 h-10 w-10 text-alabaster transition-transform duration-500 group-hover:scale-110" />
                <div className="mt-10">
                  <h3 className="text-2xl font-semibold">{s.title}</h3>
                  <p className="mt-3 text-sm text-paper/60 group-hover:text-paper/85">{s.desc}</p>
                </div>
                <ArrowUpRight className="absolute right-6 top-6 h-6 w-6 opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:rotate-45" />
              </Link>
            </TiltCard>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

function ParallaxBand() {
  return (
    <section className="relative h-[80vh] overflow-hidden text-paper">
      <ParallaxImage src={IMG.analytics} alt="Analytics dashboard" className="!absolute inset-0" speed={25} />
      <div className="absolute inset-0 bg-ink/60" />
      <div className="container-x relative flex h-full items-center">
        <SplitText text="Data-driven. Creatively obsessed. Results guaranteed to move." className="max-w-4xl text-4xl font-bold leading-tight md:text-7xl" />
      </div>
    </section>
  );
}

function Stats() {
  return (
    <section className="section-grey py-24">
      <div className="container-x grid grid-cols-2 gap-10 md:grid-cols-4">
        {STATS.map((s) => (
          <div key={s.label} className="border-l border-ink/20 pl-6">
            <div className="font-display text-5xl font-bold text-teal md:text-7xl"><Counter to={s.n} suffix={s.s} /></div>
            <p className="mt-2 text-sm uppercase tracking-widest text-ink/60">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Process() {
  const line = useRef<HTMLDivElement>(null);
  const wrap = useRef<HTMLDivElement>(null);
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.fromTo(line.current, { scaleY: 0 }, { scaleY: 1, ease: "none", scrollTrigger: { trigger: wrap.current, start: "top 70%", end: "bottom 60%", scrub: true } });
      gsap.utils.toArray<HTMLElement>(".pstep").forEach((el) =>
        gsap.from(el, { opacity: 0, x: -40, duration: 0.9, scrollTrigger: { trigger: el, start: "top 80%" } }));
    }, wrap);
    return () => ctx.revert();
  }, []);
  return (
    <section className="section-teal py-28 md:py-40">
      <div className="container-x grid gap-16 md:grid-cols-12">
        <div className="md:col-span-5 md:sticky md:top-32 md:self-start">
          <SectionHead eyebrow="Our process" title="Five steps from idea to impact." />
        </div>
        <div ref={wrap} className="relative md:col-span-7">
          <div className="absolute bottom-0 left-6 top-0 w-px bg-paper/15" />
          <div ref={line} style={{ transformOrigin: "top" }} className="absolute bottom-0 left-6 top-0 w-px bg-paper" />
          <div className="space-y-16">
            {PROCESS.map((p, i) => (
              <div key={p.step} className="pstep relative pl-20">
                <div className="absolute left-0 top-0 flex h-12 w-12 items-center justify-center rounded-full bg-paper font-display font-semibold text-teal">0{i + 1}</div>
                <h3 className="text-3xl font-semibold md:text-4xl">{p.step}</h3>
                <p className="mt-3 max-w-md text-paper/70">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const [i, setI] = useState(0);
  useEffect(() => { const t = setInterval(() => setI((v) => (v + 1) % TESTIMONIALS.length), 6000); return () => clearInterval(t); }, []);
  const t = TESTIMONIALS[i] ?? TESTIMONIALS[0]!;
  return (
    <section className="section-light py-28 md:py-40">
      <div className="container-x max-w-5xl text-center">
        <p className="eyebrow text-teal">Testimonials</p>
        <Quote className="mx-auto mt-8 h-12 w-12 text-teal" />
        <div className="relative mt-8 min-h-[16rem]">
          <AnimatePresence mode="wait">
            <motion.div key={i} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -30 }} transition={{ duration: 0.5 }}>
              <p className="font-display text-2xl font-medium leading-snug md:text-4xl">"{t.quote}"</p>
              <p className="mt-8 font-display font-semibold">{t.name}</p>
              <p className="text-sm text-muted-foreground">{t.role}</p>
            </motion.div>
          </AnimatePresence>
        </div>
        <div className="mt-8 flex items-center justify-center gap-4">
          <button aria-label="Previous" onClick={() => setI((i - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)} className="flex h-12 w-12 items-center justify-center rounded-full border border-ink/20 hover:bg-ink hover:text-paper"><ChevronLeft className="h-5 w-5" /></button>
          <div className="flex gap-2">{TESTIMONIALS.map((_, k) => <span key={k} className={`h-1.5 rounded-full transition-all ${k === i ? "w-8 bg-teal" : "w-1.5 bg-ink/20"}`} />)}</div>
          <button aria-label="Next" onClick={() => setI((i + 1) % TESTIMONIALS.length)} className="flex h-12 w-12 items-center justify-center rounded-full border border-ink/20 hover:bg-ink hover:text-paper"><ChevronRight className="h-5 w-5" /></button>
        </div>
      </div>
    </section>
  );
}

export function FinalCta() {
  return (
    <section className="section-light pb-28">
      <div className="container-x">
        <div className="bg-gradient-teal relative overflow-hidden rounded-3xl px-8 py-20 text-center text-paper md:py-28">
          <SplitText text="Ready to grow beyond limits?" className="mx-auto max-w-3xl text-4xl font-bold md:text-7xl" />
          <p className="mx-auto mt-6 max-w-lg text-paper/70">Let's talk about your goals. Your first consultation is on us.</p>
          <div className="mt-10 flex justify-center"><Btn to="/contact" variant="light">Get a Free Consultation</Btn></div>
        </div>
      </div>
    </section>
  );
}
