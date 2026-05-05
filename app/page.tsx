"use client";

import { motion, useReducedMotion } from "framer-motion";
import DemoCard from "@/components/DemoCard";
import { containerVariants } from "@/lib/motion-variants";

const demos = [
  {
    number: "01",
    title: "Basics",
    description:
      "Foundational animation APIs: animate, variants, and AnimatePresence.",
    tags: ["animate", "variants", "AnimatePresence"],
    href: "/01-basics",
    status: "ready" as const,
  },
  {
    number: "02",
    title: "Gestures",
    description: "Interactive gestures: hover, tap, drag, and useMotionValue.",
    tags: ["whileHover", "whileTap", "drag", "useMotionValue"],
    href: "/02-gestures",
    status: "ready" as const,
  },
  {
    number: "03",
    title: "Layout",
    description: "Shared layout animations and seamless layout transitions.",
    tags: ["layout", "layoutId", "LayoutGroup"],
    href: "/03-layout",
    status: "ready" as const,
  },
  {
    number: "04",
    title: "Scroll",
    description:
      "Scroll-driven animations with useScroll, useTransform, and whileInView.",
    tags: ["useScroll", "useTransform", "whileInView"],
    href: "/04-scroll",
    status: "wip" as const,
  },
  {
    number: "05",
    title: "Page Transitions",
    description: "Smooth route-level transitions with AnimatePresence.",
    tags: ["AnimatePresence", "usePathname", "exit"],
    href: "/05-page-transition",
    status: "wip" as const,
  },
];

export default function Home() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <main className="min-h-screen max-w-3xl mx-auto px-6 py-16">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-16"
      >
        <div className="text-accent font-mono text-xs tracking-widest mb-4">
          ~/motion-lab
        </div>
        <h1 className="text-4xl font-bold font-mono text-text-primary mb-3">
          Motion Lab
        </h1>
        <p className="text-text-muted text-sm">
          A Framer Motion learning playground &mdash; from basics to advanced
          patterns.
        </p>
      </motion.div>

      {/* Cards — container uses staggerChildren to orchestrate card entries */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="space-y-4"
      >
        {demos.map((demo) => (
          <DemoCard key={demo.number} {...demo} />
        ))}
      </motion.div>

      {/* Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.4 }}
        className="mt-16 pt-6 border-t border-border text-text-muted text-xs font-mono"
      >
        Built with Next.js 14 + Framer Motion &middot; {new Date().getFullYear()}
      </motion.div>
    </main>
  );
}
