import Link from "next/link";
import DemoSection from "@/components/DemoSection";
import BasicAnimateDemo from "@/components/demos/BasicAnimateDemo";
import VariantsDemo from "@/components/demos/VariantsDemo";
import AnimatePresenceDemo from "@/components/demos/AnimatePresenceDemo";

const basicAnimateCode = `// animate prop interpolates between any two states
const stateA = {
  width: 80, height: 80,
  borderRadius: 8,
  backgroundColor: "#7c3aed",
};
const stateB = {
  width: 120, height: 120,
  borderRadius: 60,
  backgroundColor: "#22c55e",
};

<motion.div
  animate={toggled ? stateB : stateA}
  // spring gives physical, bouncy feel vs duration-based easing
  transition={{ type: "spring", stiffness: 300, damping: 25 }}
  onClick={() => setToggled(!toggled)}
/>`;

const variantsCode = `// Variants let you name states and orchestrate children
const container: Variants = {
  hidden: {},
  visible: {
    transition: {
      // staggerChildren: delay between each child's animation
      staggerChildren: 0.12,
    },
  },
};

const item: Variants = {
  hidden: { opacity: 0, x: -16 },
  visible: { opacity: 1, x: 0 },
};

// Parent propagates "hidden"/"visible" to all children automatically
<motion.ul variants={container} initial="hidden" animate="visible">
  {items.map((i) => (
    // No initial/animate needed — inherited from parent
    <motion.li key={i} variants={item}>{i}</motion.li>
  ))}
</motion.ul>`;

const animatePresenceCode = `// AnimatePresence keeps unmounting elements in the DOM
// until their exit animation completes
<AnimatePresence mode="wait">
  {visible && (
    <motion.div
      key="box"        // required: identifies the element
      initial="hidden"
      animate="visible"
      exit="exit"      // runs when element is removed from tree
      variants={{
        hidden: { opacity: 0, scale: 0.85, y: -10 },
        visible: { opacity: 1, scale: 1, y: 0 },
        exit:   { opacity: 0, scale: 0.85, y: 10 },
      }}
    />
  )}
</AnimatePresence>`;

export default function BasicsPage() {
  return (
    <main className="min-h-screen max-w-5xl mx-auto px-6 py-16">
      {/* Header */}
      <div className="mb-14">
        <Link
          href="/"
          className="text-text-muted text-xs font-mono hover:text-accent transition-colors"
        >
          ← back
        </Link>
        <div className="mt-6 text-accent font-mono text-xs tracking-widest mb-1">
          01
        </div>
        <h1 className="text-3xl font-bold font-mono text-text-primary mb-2">
          Basics
        </h1>
        <p className="text-text-muted text-sm">
          Core animation primitives: animate, variants, and AnimatePresence.
        </p>
      </div>

      {/* Demo 1.1 — Basic animate */}
      <DemoSection
        title="1.1 — animate"
        description="The animate prop directly drives property changes. Click the box to toggle between two states."
        code={basicAnimateCode}
        concepts={["motion.div", "animate", "transition", "spring"]}
      >
        <BasicAnimateDemo />
      </DemoSection>

      {/* Demo 1.2 — Variants */}
      <DemoSection
        title="1.2 — variants"
        description="Parent variants use staggerChildren to orchestrate children. Children inherit variant names and are animated with auto-calculated delays."
        code={variantsCode}
        concepts={["Variants", "staggerChildren", "variant propagation"]}
      >
        <VariantsDemo />
      </DemoSection>

      {/* Demo 1.3 — AnimatePresence */}
      <DemoSection
        title="1.3 — AnimatePresence"
        description="AnimatePresence keeps unmounting components in the DOM until their exit animation completes. The key prop is required."
        code={animatePresenceCode}
        concepts={["AnimatePresence", "exit", "mode='wait'", "key"]}
      >
        <AnimatePresenceDemo />
      </DemoSection>
    </main>
  );
}
