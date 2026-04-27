import Link from "next/link";

export default function ScrollPage() {
  return (
    <main className="min-h-screen max-w-5xl mx-auto px-6 py-16">
      <Link
        href="/"
        className="text-text-muted text-xs font-mono hover:text-accent transition-colors"
      >
        ← back
      </Link>
      <div className="mt-6 text-accent font-mono text-xs tracking-widest mb-1">
        04
      </div>
      <h1 className="text-3xl font-bold font-mono text-text-primary mb-2">
        Scroll
      </h1>
      <p className="text-text-muted text-sm mb-8">
        Scroll-driven animations with useScroll, useTransform, and whileInView.
      </p>

      <div className="border border-border rounded-lg p-8 text-center">
        <p className="text-text-muted text-sm font-mono">
          Coming soon &mdash; planned demos:
        </p>
        <ul className="mt-4 space-y-1 text-text-muted text-xs font-mono text-left inline-block">
          <li>
            <span className="text-accent mr-2">›</span>useScroll + scrollYProgress
          </li>
          <li>
            <span className="text-accent mr-2">›</span>useTransform for
            parallax
          </li>
          <li>
            <span className="text-accent mr-2">›</span>whileInView fade-in
          </li>
          <li>
            <span className="text-accent mr-2">›</span>scroll-linked progress
            bar
          </li>
        </ul>
      </div>
    </main>
  );
}
