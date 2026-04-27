"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { presenceVariants } from "@/lib/motion-variants";

export default function AnimatePresenceDemo() {
  const [visible, setVisible] = useState(true);
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="flex flex-col items-center gap-8 min-h-[120px] justify-center">
      {/*
       * AnimatePresence: keeps unmounting children in the DOM
       * until their `exit` animation finishes.
       * mode="wait": waits for exit to complete before entering new child.
       * The `key` prop is required — it's how AnimatePresence tracks identity.
       */}
      <AnimatePresence mode="wait">
        {visible && (
          <motion.div
            key="presence-box"
            variants={shouldReduceMotion ? {} : presenceVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="bg-accent/10 border border-accent/40 rounded-lg px-8 py-4 font-mono text-accent text-sm text-center"
          >
            I animate on exit too
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setVisible((v) => !v)}
        className="text-xs font-mono text-text-muted border border-border px-4 py-2 rounded hover:border-accent/50 hover:text-accent transition-colors"
      >
        {visible ? "hide" : "show"}
      </button>
    </div>
  );
}
