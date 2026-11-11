import { ParallaxImage, SplitText } from "./Reveal";
import { motion } from "framer-motion";
export function PageHero({ eyebrow, title, sub, img }: { eyebrow: string; title: string; sub: string; img: string }) {
  return (
    <section className="section-dark relative flex min-h-[80vh] items-end overflow-hidden pb-20 pt-40">
      <ParallaxImage src={img} alt="" className="!absolute inset-0 opacity-40" speed={15} />
      <div className="bg-cinematic absolute inset-0 opacity-80" />
      <div className="container-x relative">
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="eyebrow text-alabaster">{eyebrow}</motion.p>
        <SplitText as="h1" text={title} onScroll={false} delay={0.2} className="mt-6 max-w-5xl text-5xl font-bold leading-[1.02] md:text-8xl" />
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }} className="mt-8 max-w-xl text-lg text-paper/70">{sub}</motion.p>
      </div>
    </section>
  );
}
