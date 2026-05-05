"use client";

import { useState } from "react";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";

const ITEMS = [
  { id: 1, title: "Auth Service",    tag: "backend"  },
  { id: 2, title: "Design System",   tag: "frontend" },
  { id: 3, title: "API Gateway",     tag: "backend"  },
  { id: 4, title: "Motion Lab",      tag: "frontend" },
  { id: 5, title: "Data Pipeline",   tag: "backend"  },
  { id: 6, title: "Component Lib",   tag: "frontend" },
];

const TAGS = ["all", "frontend", "backend"] as const;
type Tag = typeof TAGS[number];

export default function LayoutFilterDemo() {
  const [activeTag, setActiveTag] = useState<Tag>("all");

  const filtered = activeTag === "all"
    ? ITEMS
    : ITEMS.filter((item) => item.tag === activeTag);

  return (
    <div className="w-full max-w-sm">
      {/* Filter tabs */}
      {/* LayoutGroup coordinates layout animations across the tab indicator and cards */}
      <LayoutGroup>
        <div className="flex gap-2 mb-6">
          {TAGS.map((tag) => (
            <button
              key={tag}
              onClick={() => setActiveTag(tag)}
              className="relative px-3 py-1 text-xs font-mono rounded transition-colors"
              style={{ color: activeTag === tag ? "#0a0a0a" : "#737373" }}
            >
              {/* layoutId on the indicator: when activeTag changes, the green pill
                  smoothly slides from the old button to the new one */}
              {activeTag === tag && (
                <motion.span
                  layoutId="tab-indicator"
                  className="absolute inset-0 bg-accent rounded"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              <span className="relative z-10">{tag}</span>
            </button>
          ))}
        </div>

        {/* Card grid */}
        <div className="flex flex-col gap-2">
          <AnimatePresence mode="popLayout">
            {filtered.map((item) => (
              <motion.div
                key={item.id}
                // layout: when this card's position changes due to filtering,
                // animate smoothly to its new position instead of jumping
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="flex items-center justify-between border border-border bg-surface rounded-lg px-4 py-3"
              >
                <span className="text-text-primary text-xs font-mono">{item.title}</span>
                <span className="text-text-muted text-xs font-mono border border-border/50 px-2 py-0.5 rounded">
                  {item.tag}
                </span>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </LayoutGroup>
    </div>
  );
}
