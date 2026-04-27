"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { listContainerVariants, listItemVariants } from "@/lib/motion-variants";

const items = [
  "useReducedMotion",
  "AnimatePresence",
  "useMotionValue",
  "useScroll",
  "layoutId",
];

export default function VariantsDemo() {
  // Incrementing key remounts the list, re-triggering the entry animation
  const [key, setKey] = useState(0);
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="flex flex-col gap-5 w-full max-w-xs">
      {/*
       * Parent container: variants.visible sets staggerChildren.
       * Each direct child inherits the "hidden"/"visible" variant names
       * and is animated with an auto-calculated stagger delay.
       */}
      <motion.ul
        key={key}
        variants={listContainerVariants}
        initial="hidden"
        animate="visible"
        className="space-y-2"
      >
        {items.map((item) => (
          // Child: no animate/initial needed — inherited from parent variants
          <motion.li
            key={item}
            variants={shouldReduceMotion ? {} : listItemVariants}
            className="bg-surface-2 border border-border rounded px-4 py-2 text-sm font-mono text-text-primary"
          >
            <span className="text-accent mr-2">›</span>
            {item}
          </motion.li>
        ))}
      </motion.ul>

      <button
        onClick={() => setKey((k) => k + 1)}
        className="text-xs font-mono text-text-muted border border-border px-4 py-2 rounded hover:border-accent/50 hover:text-accent transition-colors"
      >
        ↺ replay
      </button>
    </div>
  );
}
