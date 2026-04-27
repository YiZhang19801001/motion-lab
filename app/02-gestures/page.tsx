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
