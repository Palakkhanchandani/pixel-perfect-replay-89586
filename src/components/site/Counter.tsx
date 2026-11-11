import { useEffect, useRef, useState } from "react";
import { useInView, animate } from "framer-motion";
export function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [v, setV] = useState(0);
  useEffect(() => { if (!inView) return; const c = animate(0, to, { duration: 2.2, ease: "easeOut", onUpdate: (n) => setV(Math.round(n)) }); return () => c.stop(); }, [inView, to]);
  return <span ref={ref}>{v}{suffix}</span>;
}
