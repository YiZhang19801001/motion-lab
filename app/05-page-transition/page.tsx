/*
 * 阶段五：页面过渡
 *
 * 理论目标：
 * - 掌握 AnimatePresence 在路由层面的使用
 * - 理解不同页面用不同进出动效的实现方式
 * - 掌握 transition 期间滚动位置的处理
 * - 理解 exit 动画的 timing 问题
 *
 * 实战目标：
 * - 页面之间切换有 smooth 过渡动画
 * - 不同路由有不同的进出方向
 * - 过渡期间内容不闪烁
 *
 * 完成标志：
 * - 能实现完整的 page transition 系统
 * - 不同页面有不同动效，滚动位置正确处理
 */

import Link from "next/link";

export default function PageTransitionPage() {
  return (
    <main className="min-h-screen max-w-5xl mx-auto px-6 py-16">
      <Link
        href="/"
        className="text-text-muted text-xs font-mono hover:text-accent transition-colors"
      >
        ← back
      </Link>
      <div className="mt-6 text-accent font-mono text-xs tracking-widest mb-1">
        05
      </div>
      <h1 className="text-3xl font-bold font-mono text-text-primary mb-2">
        Page Transitions
      </h1>
      <p className="text-text-muted text-sm mb-8">
        Smooth route-level transitions with AnimatePresence.
      </p>

      <div className="border border-border rounded-lg p-8 text-center">
        <p className="text-text-muted text-sm font-mono">
          Coming soon &mdash; planned demos:
        </p>
        <ul className="mt-4 space-y-1 text-text-muted text-xs font-mono text-left inline-block">
          <li>
            <span className="text-accent mr-2">›</span>AnimatePresence with
            usePathname
          </li>
          <li>
            <span className="text-accent mr-2">›</span>fade transition between
            routes
          </li>
          <li>
            <span className="text-accent mr-2">›</span>slide transition
            direction
          </li>
          <li>
            <span className="text-accent mr-2">›</span>staggered page content
            entry
          </li>
        </ul>
      </div>
    </main>
  );
}
