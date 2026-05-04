"use client";

import { useRef } from "react";
import { motion } from "framer-motion";

export default function DragDemo() {
  const constraintsRef = useRef<HTMLDivElement>(null);

  return (
    // The ref on this div becomes the drag boundary
    <div
      ref={constraintsRef}
      className="w-72 h-48 border border-dashed border-border rounded-xl flex items-center justify-center relative"
    >
      <span className="absolute top-3 left-0 right-0 text-center text-text-muted text-xs font-mono">
        drag area
      </span>

      <motion.div
        drag
        // Keeps the element within the parent div's bounds
        dragConstraints={constraintsRef}
        // How far the element can be pulled past the boundary (0 = none, 1 = full)
        dragElastic={0.15}
        // Spring back to constrained position on release
        dragTransition={{ bounceStiffness: 250, bounceDamping: 25 }}
        whileDrag={{ scale: 1.1, boxShadow: "0 8px 32px rgba(34,197,94,0.2)" }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.97 }}
        className="w-16 h-16 bg-accent/10 border border-accent/40 rounded-lg cursor-grab active:cursor-grabbing flex items-center justify-center"
      >
        <span className="text-accent text-xs font-mono">drag</span>
      </motion.div>
    </div>
  );
}
