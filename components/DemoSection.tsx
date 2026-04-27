import CodeBlock from "./CodeBlock";

interface DemoSectionProps {
  title: string;
  description: string;
  code: string;
  concepts: string[];
  children: React.ReactNode;
}

export default function DemoSection({
  title,
  description,
  code,
  concepts,
  children,
}: DemoSectionProps) {
  return (
    <section className="mb-20">
      <div className="mb-5">
        <h2 className="text-accent font-mono text-base font-semibold mb-1">
          {title}
        </h2>
        <p className="text-text-muted text-sm">{description}</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Interactive demo */}
        <div className="bg-surface border border-border rounded-lg p-8 flex items-center justify-center min-h-[280px]">
          {children}
        </div>

        {/* Code display */}
        <CodeBlock code={code} />
      </div>

      {/* Core concepts */}
      <div className="mt-3 flex flex-wrap gap-2">
        {concepts.map((concept) => (
          <span
            key={concept}
            className="text-xs text-accent border border-accent/30 bg-accent/5 px-2 py-1 rounded font-mono"
          >
            {concept}
          </span>
        ))}
      </div>
    </section>
  );
}
