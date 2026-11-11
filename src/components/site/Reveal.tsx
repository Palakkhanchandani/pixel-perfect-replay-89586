import { useEffect, useRef, type ReactNode, type ElementType } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const reduced = () => typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/** Word-by-word masked reveal for headings. */
export function SplitText({ text, as: Tag = "h2", className, delay = 0, onScroll = true }: { text: string; as?: ElementType; className?: string; delay?: number; onScroll?: boolean }) {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    if (reduced() || !ref.current) return;
    const words = ref.current.querySelectorAll(".w > span");
    const ctx = gsap.context(() => {
      gsap.from(words, { yPercent: 110, rotate: 4, duration: 1.1, ease: "expo.out", stagger: 0.06, delay,
        scrollTrigger: onScroll ? { trigger: ref.current, start: "top 85%" } : undefined });
    });
    return () => ctx.revert();
  }, [delay, onScroll]);
  return (
    <Tag ref={ref} className={className}>
      {text.split(" ").map((w, i) => (
        <span key={i} className="w inline-block overflow-hidden pb-[0.08em] align-bottom"><span className="inline-block">{w}&nbsp;</span></span>
      ))}
    </Tag>
  );
}

/** Fade-up children on scroll. */
export function Reveal({ children, className, stagger = 0.1, y = 50 }: { children: ReactNode; className?: string; stagger?: number; y?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    if (reduced() || !ref.current) return;
    const ctx = gsap.context(() => {
      gsap.from(ref.current!.children, { y, opacity: 0, duration: 1, ease: "power3.out", stagger, scrollTrigger: { trigger: ref.current, start: "top 85%" } });
    });
    return () => ctx.revert();
  }, [stagger, y]);
  return <div ref={ref} className={className}>{children}</div>;
}

/** Parallax image background. */
export function ParallaxImage({ src, alt, className, speed = 20 }: { src: string; alt: string; className?: string; speed?: number }) {
  const wrap = useRef<HTMLDivElement>(null);
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    if (reduced() || !wrap.current) return;
    const img = wrap.current.querySelector("img");
    const ctx = gsap.context(() => {
      gsap.fromTo(img, { yPercent: -speed }, { yPercent: speed, ease: "none", scrollTrigger: { trigger: wrap.current, scrub: true, start: "top bottom", end: "bottom top" } });
    });
    return () => ctx.revert();
  }, [speed]);
  return (
    <div ref={wrap} className={`relative overflow-hidden ${className ?? ""}`}>
      <img src={src} alt={alt} loading="lazy" className="absolute inset-0 h-[140%] w-full -top-[20%] object-cover" />
    </div>
  );
}
