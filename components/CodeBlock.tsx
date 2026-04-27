"use client";

import { Highlight, themes } from "prism-react-renderer";

interface CodeBlockProps {
  code: string;
  language?: string;
}

export default function CodeBlock({ code, language = "tsx" }: CodeBlockProps) {
  return (
    <Highlight theme={themes.oneDark} code={code} language={language}>
      {({ style, tokens, getLineProps, getTokenProps }) => (
        <div
          className="rounded-lg border border-border overflow-auto"
          style={{ ...style, background: "#0d1117" }}
        >
          <pre
            className="p-5 text-xs leading-relaxed overflow-x-auto"
            style={{ background: "transparent", margin: 0 }}
          >
            {tokens.map((line, i) => (
              <div key={i} {...getLineProps({ line })} className="flex">
                {/* Line numbers */}
                <span className="select-none text-[#404040] mr-4 w-5 text-right shrink-0 inline-block">
                  {i + 1}
                </span>
                <span>
                  {line.map((token, key) => (
                    <span key={key} {...getTokenProps({ token })} />
                  ))}
                </span>
              </div>
            ))}
          </pre>
        </div>
      )}
    </Highlight>
  );
}
