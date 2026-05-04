"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform, useReducedMotion } from "framer-motion";

export default function TiltCardDemo() {
  const ref = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  // Raw motion values — track mouse position relative to card centre.
  // These update every frame without triggering a re-render.
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // useSpring makes the tilt lag slightly behind the cursor,
  // giving it a physical, inertial feel instead of instant snapping.
  const springX = useSpring(mouseX, { stiffness: 150, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 150, damping: 20 });

  // Map spring values → rotation angles.
  // Moving the mouse right tilts the card's right edge away (positive rotateY).
  // Moving the mouse down tilts the card's bottom edge away (negative rotateX).
  const rotateX = useTransform(springY, [-0.5, 0.5], shouldReduceMotion ? [0, 0] : [12, -12]);
  const rotateY = useTransform(springX, [-0.5, 0.5], shouldReduceMotion ? [0, 0] : [-12, 12]);

  // Subtle highlight that follows the mouse — makes the card feel lit from above.
  const glareX = useTransform(springX, [-0.5, 0.5], ["0%", "100%"]);
  const glareY = useTransform(springY, [-0.5, 0.5], ["0%", "100%"]);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    // Normalise mouse position to -0.5 → 0.5 relative to card centre
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  }

  function handleMouseLeave() {
    // Spring back to flat when cursor leaves
    mouseX.set(0);
    mouseY.set(0);
  }

  return (
    // perspective is required on the parent for rotateX/Y to appear 3D
    <div style={{ perspective: 800 }}>
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        // whileTap applies on top of the current animated state
        whileTap={{ scale: 0.96 }}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className="relative w-48 h-64 bg-surface border border-border rounded-xl cursor-pointer select-none overflow-hidden"
      >
        {/* Card content */}
        <div className="p-5 h-full flex flex-col justify-between" style={{ transform: "translateZ(20px)" }}>
          <div className="text-accent font-mono text-xs tracking-widest">motion card</div>
          <div>
            <div className="text-text-primary font-mono text-sm font-semibold mb-1">
              Tilt + Tap
            </div>
            <div className="text-text-muted text-xs font-mono leading-relaxed">
              Move mouse over card. Click to tap.
            </div>
          </div>
        </div>

        {/* Glare overlay — a radial gradient that tracks the mouse */}
        <motion.div
          className="absolute inset-0 rounded-xl pointer-events-none"
          style={{
            background: useTransform(
              [glareX, glareY],
              ([x, y]) =>
                `radial-gradient(circle at ${x} ${y}, rgba(255,255,255,0.08) 0%, transparent 70%)`
            ),
          }}
        />
      </motion.div>
    </div>
  );
}
