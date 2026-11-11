import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export function CustomCursor() {
  const [on, setOn] = useState(false);
  const [hover, setHover] = useState(false);
  const x = useMotionValue(-100), y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 300, damping: 28 }), sy = useSpring(y, { stiffness: 300, damping: 28 });
  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;
    setOn(true); document.documentElement.classList.add("has-cursor");
    const m = (e: MouseEvent) => {
      x.set(e.clientX); y.set(e.clientY);
      setHover(!!(e.target as HTMLElement).closest("a,button,[data-cursor]"));
    };
    window.addEventListener("mousemove", m);
    return () => { window.removeEventListener("mousemove", m); document.documentElement.classList.remove("has-cursor"); };
  }, [x, y]);
  if (!on) return null;
  return (<>
    <motion.div style={{ x, y }} className="pointer-events-none fixed left-0 top-0 z-[200] -ml-1 -mt-1 h-2 w-2 rounded-full bg-paper mix-blend-difference" />
    <motion.div style={{ x: sx, y: sy }} animate={{ scale: hover ? 1.8 : 1 }}
      className="pointer-events-none fixed left-0 top-0 z-[200] -ml-5 -mt-5 h-10 w-10 rounded-full border border-paper mix-blend-difference" />
  </>);
}
