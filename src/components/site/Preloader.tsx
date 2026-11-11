import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Logo } from "./Logo";

export function Preloader() {
  const [show, setShow] = useState(true);
  useEffect(() => { const t = setTimeout(() => setShow(false), 1900); return () => clearTimeout(t); }, []);
  return (
    <AnimatePresence>
      {show && (
        <motion.div exit={{ y: "-100%" }} transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
          className="section-dark fixed inset-0 z-[100] flex flex-col items-center justify-center">
          <motion.div initial={{ opacity: 0, scale: 0.85, filter: "blur(10px)" }} animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }} transition={{ duration: 1 }}>
            <Logo dark className="h-40" />
          </motion.div>
          <div className="mt-10 h-px w-48 overflow-hidden bg-paper/15">
            <motion.div initial={{ x: "-100%" }} animate={{ x: "0%" }} transition={{ duration: 1.6, ease: "easeInOut" }} className="h-full bg-paper" />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
