"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const CARDS = [
  { id: "a", title: "FLIP Technique",  body: "First, Last, Invert, Play. Framer Motion snapshots position before and after a layout change, then animates via transform — never triggering layout recalculation." },
  { id: "b", title: "layoutId Magic",  body: "Two separate DOM elements share one layoutId. When one mounts and the other unmounts, Framer Motion morphs between them using transforms." },
  { id: "c", title: "AnimatePresence", body: "Intercepts React's unmount to keep elements in the DOM until their exit animation finishes. Essential for layoutId and exit animations." },
];

export default function ExpandCardDemo() {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  return (
    <div className="w-full max-w-sm flex flex-col gap-2">
      {CARDS.map((card) => {
        const isSelected = selectedId === card.id;
        return (
          // layout="position": only animates x/y when other cards push this one.
          // Does NOT try to animate its own height — the inner div handles that.
          // This separates concerns and prevents the two animations fighting.
          <motion.div
            key={card.id}
            layout="position"
            onClick={() => setSelectedId(isSelected ? null : card.id)}
            className={`border rounded-lg px-4 py-3 cursor-pointer transition-colors ${
              isSelected ? "border-accent/40" : "border-border hover:border-accent/20"
            } bg-surface`}
            transition={{ type: "spring", stiffness: 280, damping: 28 }}
          >
            <p className="text-text-primary text-xs font-mono font-semibold">
              {card.title}
            </p>

            {/* Body text stays in the DOM always — no mount/unmount = no extra
                layout measurements. Height animates from 0 to auto instead. */}
            <motion.div
              initial={false}
              animate={{ height: isSelected ? "auto" : 0 }}
              style={{ overflow: "hidden" }}
              transition={{ type: "spring", stiffness: 280, damping: 28 }}
            >
              <motion.p
                initial={false}
                animate={{ opacity: isSelected ? 1 : 0 }}
                transition={{ duration: 0.2 }}
                className="text-text-muted text-xs font-mono mt-2 leading-relaxed"
              >
                {card.body}
              </motion.p>
            </motion.div>

            <p className="text-text-muted text-xs font-mono mt-1">
              {isSelected ? "click to close ←" : "click to expand →"}
            </p>
          </motion.div>
        );
      })}
    </div>
  );
}
