"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { squareStateA, squareStateB } from "@/lib/motion-variants";

export default function BasicAnimateDemo() {
  const [toggled, setToggled] = useState(false);
  // useReducedMotion: respects prefers-reduced-motion OS setting
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="flex flex-col items-center gap-8">
      {/*
       * motion.div: the `animate` prop drives all property changes.
       * Framer Motion interpolates between values automatically.
       * spring transition gives it a physical, bouncy feel.
       */}
      <motion.div
        animate={toggled ? squareStateB : squareStateA}
        transition={
          shouldReduceMotion
            ? { duration: 0 }
            : { type: "spring", stiffness: 300, damping: 25 }
        }
        onClick={() => setToggled((t) => !t)}
        className="cursor-pointer"
        style={{ willChange: "transform" }}
      />

      <button
        onClick={() => setToggled((t) => !t)}
        className="text-xs font-mono text-text-muted border border-border px-4 py-2 rounded hover:border-accent/50 hover:text-accent transition-colors"
      >
        {toggled ? "← reset" : "toggle →"}
      </button>
    </div>
  );
}
