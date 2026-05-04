/*
 * 阶段二：手势与交互
 *
 * 理论目标：
 * - 掌握 whileHover / whileTap / whileFocus
 * - 理解 drag prop 和 dragConstraints
 * - 理解 useMotionValue 是什么，和 state 有什么区别
 * - 掌握 useTransform 如何映射 motion value
 * - 理解 useSpring 为什么比普通 animate 更"物理"
 *
 * 实战目标：
 * - 卡片 hover 时轻微 3D 倾斜（useMotionValue + useTransform 跟踪鼠标）
 * - 点击时 scale down
 * - drag 时可在容器内自由拖动，有 spring 回弹
 *
 * 完成标志：
 * - 能解释 useMotionValue 和 useState 的本质区别
 *   （为什么 motion value 不触发 re-render）
 */

import Link from "next/link";
import DemoSection from "@/components/DemoSection";
import TiltCardDemo from "@/components/demos/TiltCardDemo";
import DragDemo from "@/components/demos/DragDemo";

const tiltCardCode = `// useMotionValue: a value that updates without triggering re-render.
// Perfect for high-frequency events like mousemove.
const mouseX = useMotionValue(0);
const mouseY = useMotionValue(0);

// useSpring wraps the raw value — when mouseX changes,
// springX chases it with inertia instead of jumping instantly.
const springX = useSpring(mouseX, { stiffness: 150, damping: 20 });
const springY = useSpring(mouseY, { stiffness: 150, damping: 20 });

// useTransform maps one motion value range to another.
// Reading from springX (not mouseX) so the tilt inherits the spring lag.
const rotateY = useTransform(springX, [-0.5, 0.5], [-12, 12]);
const rotateX = useTransform(springY, [-0.5, 0.5], [12, -12]);

function handleMouseMove(e) {
  const rect = ref.current.getBoundingClientRect();
  // Normalise to -0.5 → +0.5 relative to card centre
  mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
  mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
}

// perspective on the parent is required for rotateX/Y to appear 3D
<div style={{ perspective: 800 }}>
  <motion.div
    ref={ref}
    onMouseMove={handleMouseMove}
    onMouseLeave={() => { mouseX.set(0); mouseY.set(0); }}
    whileTap={{ scale: 0.96 }}   // layered on top of current spring state
    style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
  />
</div>`;

const dragCode = `// drag enables dragging on both axes (or "x" / "y" for one axis).
// dragConstraints keeps the element inside the referenced parent div.
// dragElastic controls how far past the boundary it can be pulled.
// dragTransition controls the spring when it snaps back to bounds.
<div ref={constraintsRef}>
  <motion.div
    drag
    dragConstraints={constraintsRef}
    dragElastic={0.15}
    dragTransition={{ bounceStiffness: 250, bounceDamping: 25 }}
    // whileDrag applies while the element is being dragged
    whileDrag={{ scale: 1.1 }}
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.97 }}
  />
</div>`;

export default function GesturesPage() {
  return (
    <main className="min-h-screen max-w-5xl mx-auto px-6 py-16">
      <Link
        href="/"
        className="text-text-muted text-xs font-mono hover:text-accent transition-colors"
      >
        ← back
      </Link>
      <div className="mt-6 text-accent font-mono text-xs tracking-widest mb-1">
        02
      </div>
      <h1 className="text-3xl font-bold font-mono text-text-primary mb-2">
        Gestures
      </h1>
      <p className="text-text-muted text-sm mb-14">
        Interactive gestures: hover, tap, drag, and motion values.
      </p>

      <DemoSection
        title="2.1 — 3D Tilt Card"
        description="useMotionValue tracks the mouse without re-renders. useSpring adds inertia. useTransform maps the spring value to rotation angles."
        code={tiltCardCode}
        concepts={["useMotionValue", "useSpring", "useTransform", "whileTap", "perspective"]}
      >
        <TiltCardDemo />
      </DemoSection>

      <DemoSection
        title="2.2 — Drag with Constraints"
        description="drag enables free dragging. dragConstraints restricts movement to a parent boundary. dragElastic controls overshoot, dragTransition controls the snap-back spring."
        code={dragCode}
        concepts={["drag", "dragConstraints", "dragElastic", "dragTransition", "whileDrag"]}
      >
        <DragDemo />
      </DemoSection>
    </main>
  );
}
