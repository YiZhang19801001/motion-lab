"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { cardVariants } from "@/lib/motion-variants";

interface DemoCardProps {
  number: string;
  title: string;
  description: string;
  tags: string[];
  href: string;
  status?: "ready" | "wip";
}

export default function DemoCard({
  number,
  title,
  description,
  tags,
  href,
  status = "ready",
}: DemoCardProps) {
  return (
    // cardVariants is inherited from the parent container's staggerChildren
    <motion.div variants={cardVariants}>
      <Link href={href}>
        <div className="group relative border border-border bg-surface rounded-lg p-6 hover:border-accent/50 transition-colors duration-200 cursor-pointer">
          {/* Stage number */}
          <div className="text-accent font-mono text-xs tracking-widest mb-3">
            {number}
          </div>

          {/* Title + WIP badge */}
          <div className="flex items-start justify-between mb-2 pr-8">
            <h2 className="text-text-primary font-mono text-lg font-semibold group-hover:text-accent transition-colors">
              {title}
            </h2>
            {status === "wip" && (
              <span className="text-xs text-text-muted border border-border px-2 py-0.5 rounded font-mono shrink-0 ml-3">
                WIP
              </span>
            )}
          </div>

          {/* Description */}
          <p className="text-text-muted text-sm mb-4">{description}</p>

          {/* Concept tags */}
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="text-xs text-text-muted border border-border/50 px-2 py-0.5 rounded font-mono"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Arrow — translates on hover via group */}
          <div className="absolute right-6 top-1/2 -translate-y-1/2 text-text-muted group-hover:text-accent group-hover:translate-x-1 transition-all duration-200">
            →
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
