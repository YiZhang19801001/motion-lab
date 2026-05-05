/*
 * 阶段三：Layout Animation
 *
 * 理论目标：
 * - 理解 layout prop 的工作原理（FLIP 技术）
 * - 掌握 layoutId 实现 shared element transition
 * - 理解 useScroll / useScrollMotionValue
 * - 区分 useInView 和 whileInView 的使用场景
 * - 掌握 MotionConfig 统一配置
 *
 * 实战目标：
 * - Tag 筛选功能，筛选时卡片用 layout animation 重新排列
 * - 点击卡片，用 layoutId 实现展开成详情页的 shared element transition
 *
 * 完成标志：
 * - 能解释 FLIP（First Last Invert Play）是什么
 * - 能解释为什么 layout animation 不会触发昂贵的 layout 计算
 */

import Link from "next/link";
import DemoSection from "@/components/DemoSection";
import LayoutFilterDemo from "@/components/demos/LayoutFilterDemo";
import ExpandCardDemo from "@/components/demos/ExpandCardDemo";

const filterCode = `// layout prop: when this element's position changes (e.g. after filtering),
// animate smoothly to its new position instead of jumping.
// AnimatePresence mode="popLayout" coordinates enter/exit with layout shifts.
<LayoutGroup>
  <AnimatePresence mode="popLayout">
    {filtered.map((item) => (
      <motion.div
        key={item.id}
        layout
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
      />
    ))}
  </AnimatePresence>

  {/* layoutId on the tab indicator: the green pill slides between buttons.
      Two <span> elements share one layoutId — Framer Motion treats them
      as the same element moving, not two separate fade in/out events. */}
  {activeTag === tag && (
    <motion.span layoutId="tab-indicator" className="absolute inset-0 bg-accent rounded" />
  )}
</LayoutGroup>`;

const expandCode = `// layout on each card: when the card grows (user clicks it),
// AND when other cards get pushed down to make room —
// all of it animates smoothly via FLIP (no layout recalculation).
<motion.div layout transition={{ type: "spring", stiffness: 280, damping: 28 }}>
  <motion.p layout>{card.title}</motion.p>

  {/* AnimatePresence fades the body text in/out independently.
      The card's size change is handled by layout — two separate concerns. */}
  <AnimatePresence>
    {isSelected && (
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {card.body}
      </motion.p>
    )}
  </AnimatePresence>
</motion.div>

// Key insight: layout (same element growing in place) vs layoutId
// (two different elements sharing an identity across DOM positions).
// For in-place expansion, layout is the right tool.`;

export default function LayoutPage() {
  return (
    <main className="min-h-screen max-w-5xl mx-auto px-6 py-16">
      <Link
        href="/"
        className="text-text-muted text-xs font-mono hover:text-accent transition-colors"
      >
        ← back
      </Link>
      <div className="mt-6 text-accent font-mono text-xs tracking-widest mb-1">
        03
      </div>
      <h1 className="text-3xl font-bold font-mono text-text-primary mb-2">
        Layout
      </h1>
      <p className="text-text-muted text-sm mb-14">
        FLIP-based layout animation and shared element transitions with layoutId.
      </p>

      <DemoSection
        title="3.1 — layout + LayoutGroup"
        description="The layout prop makes elements animate to their new position when the list changes. The tab indicator uses layoutId to slide between buttons as a single moving element."
        code={filterCode}
        concepts={["layout", "LayoutGroup", "layoutId", "AnimatePresence mode='popLayout'"]}
      >
        <LayoutFilterDemo />
      </DemoSection>

      <DemoSection
        title="3.2 — layout In-Place Expansion"
        description="Clicking a card expands it in place. The layout prop handles the size change via FLIP — other cards animate out of the way automatically. AnimatePresence fades the body text independently."
        code={expandCode}
        concepts={["layout", "FLIP", "AnimatePresence", "layout vs layoutId"]}
      >
        <ExpandCardDemo />
      </DemoSection>
    </main>
  );
}
