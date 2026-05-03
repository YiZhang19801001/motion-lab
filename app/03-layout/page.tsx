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
      <p className="text-text-muted text-sm mb-8">
        Shared layout animations and seamless layout transitions.
      </p>

      <div className="border border-border rounded-lg p-8 text-center">
        <p className="text-text-muted text-sm font-mono">
          Coming soon &mdash; planned demos:
        </p>
        <ul className="mt-4 space-y-1 text-text-muted text-xs font-mono text-left inline-block">
          <li>
            <span className="text-accent mr-2">›</span>layout prop basics
          </li>
          <li>
            <span className="text-accent mr-2">›</span>layoutId shared element
            transition
          </li>
          <li>
            <span className="text-accent mr-2">›</span>LayoutGroup for
            coordinated layouts
          </li>
          <li>
            <span className="text-accent mr-2">›</span>Reorder list
          </li>
        </ul>
      </div>
    </main>
  );
}
