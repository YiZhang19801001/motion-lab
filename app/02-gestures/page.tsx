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
      <p className="text-text-muted text-sm mb-8">
        Interactive gestures: hover, tap, drag, and useMotionValue.
      </p>

      <div className="border border-border rounded-lg p-8 text-center">
        <p className="text-text-muted text-sm font-mono">
          Coming soon &mdash; planned demos:
        </p>
        <ul className="mt-4 space-y-1 text-text-muted text-xs font-mono text-left inline-block">
          <li>
            <span className="text-accent mr-2">›</span>whileHover / whileTap
          </li>
          <li>
            <span className="text-accent mr-2">›</span>drag with constraints
          </li>
          <li>
            <span className="text-accent mr-2">›</span>useMotionValue +
            useTransform
          </li>
          <li>
            <span className="text-accent mr-2">›</span>useDragControls
          </li>
        </ul>
      </div>
    </main>
  );
}
