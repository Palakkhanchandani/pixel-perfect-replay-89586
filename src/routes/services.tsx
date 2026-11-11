import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { SectionHead } from "@/components/site/SectionHead";
import { Reveal } from "@/components/site/Reveal";
import { TiltCard } from "@/components/site/TiltCard";
import { Marquee } from "@/components/site/Marquee";
import { Btn } from "@/components/site/Btn";
import { FinalCta } from "./index";
import { IMG, SERVICES, PROCESS, KEYWORDS } from "@/lib/content";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — ELWOURA Digital Marketing" },
      { name: "description", content: "Social media, performance marketing, SEO, branding, web design, video and analytics by ELWOURA." },
      { property: "og:title", content: "ELWOURA Services — Marketing That Moves" },
      { property: "og:description", content: "Full-service digital marketing built to grow your brand beyond limits." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Services,
});

function Services() {
  return (<>
    <PageHero eyebrow="Services" title="Marketing that moves people." sub="Everything your brand needs to be seen, remembered and chosen — under one roof." img={IMG.social} />
    <section className="section-light py-28 md:py-40">
      <div className="container-x">
        <SectionHead eyebrow="What we offer" title="Eight ways we grow your brand." />
        <Reveal className="mt-16 grid gap-6 md:grid-cols-2" stagger={0.08}>
          {SERVICES.map((s, i) => (
            <TiltCard key={s.title}>
              <div className="group relative h-full overflow-hidden rounded-2xl border border-ink/10 bg-paper p-10 transition-colors duration-500 hover:border-teal hover:shadow-lift">
                <img src={s.img} alt="" loading="lazy" className="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
                <div className="absolute inset-0 bg-teal/90 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="relative transition-colors duration-500 group-hover:text-paper">
                  <div className="flex items-center justify-between">
                    <s.icon className="h-10 w-10 text-teal transition-colors group-hover:text-paper" />
                    <span className="font-display text-sm opacity-40">0{i + 1}</span>
                  </div>
                  <h3 className="mt-10 text-3xl font-semibold">{s.title}</h3>
                  <p className="mt-3 text-muted-foreground group-hover:text-paper/80">{s.desc}</p>
                  <ul className="mt-6 grid grid-cols-2 gap-2 text-sm">
                    {s.points.map((p) => <li key={p} className="flex items-center gap-2"><Check className="h-4 w-4 text-teal group-hover:text-paper" />{p}</li>)}
                  </ul>
                </div>
              </div>
            </TiltCard>
          ))}
        </Reveal>
      </div>
    </section>
    <Marquee items={KEYWORDS} className="section-dark" />
    <section className="section-grey py-28">
      <div className="container-x">
        <SectionHead eyebrow="How we work" title="A proven path to growth." />
        <div className="mt-16 grid gap-4 md:grid-cols-5">
          {PROCESS.map((p, i) => (
            <motion.div key={p.step} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.12 }}
              className={`rounded-2xl p-8 ${i % 2 ? "section-light" : "section-teal"}`}>
              <span className="font-display text-5xl font-bold opacity-30">0{i + 1}</span>
              <h3 className="mt-6 text-2xl font-semibold">{p.step}</h3>
              <p className="mt-2 text-sm opacity-75">{p.desc}</p>
            </motion.div>
          ))}
        </div>
        <div className="mt-16 flex justify-center"><Btn to="/contact" variant="ink">Start your project</Btn></div>
      </div>
    </section>
    <div className="section-light pt-28"><FinalCta /></div>
  </>);
}
