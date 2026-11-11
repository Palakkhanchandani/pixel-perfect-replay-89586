import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import type { ReactNode } from "react";
export function TiltCard({ children, className }: { children: ReactNode; className?: string }) {
  const mx = useMotionValue(0.5), my = useMotionValue(0.5);
  const rx = useSpring(useTransform(my, [0, 1], [10, -10]), { stiffness: 150, damping: 15 });
  const ry = useSpring(useTransform(mx, [0, 1], [-10, 10]), { stiffness: 150, damping: 15 });
  return (
    <motion.div style={{ rotateX: rx, rotateY: ry, transformPerspective: 900 }}
      onMouseMove={(e) => { const r = e.currentTarget.getBoundingClientRect(); mx.set((e.clientX - r.left) / r.width); my.set((e.clientY - r.top) / r.height); }}
      onMouseLeave={() => { mx.set(0.5); my.set(0.5); }} className={className} data-cursor="hover">
      {children}
    </motion.div>
  );
}
