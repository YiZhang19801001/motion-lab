# Motion Lab

A Framer Motion learning playground and portfolio showcase. Each page covers a distinct animation concept with interactive demos, annotated code, and core concept callouts.

**Stack:** Next.js 14 (App Router) · TypeScript · Tailwind CSS · Framer Motion

---

## Pages

| Route | Stage | Description |
|-------|-------|-------------|
| `/` | — | Homepage with stagger-animated navigation cards |
| `/01-basics` | Basics | `animate`, `variants`, `AnimatePresence` |
| `/02-gestures` | Gestures | `whileHover`, `whileTap`, `drag`, `useMotionValue` |
| `/03-layout` | Layout | `layout`, `layoutId`, `LayoutGroup` |
| `/04-scroll` | Scroll | `useScroll`, `useTransform`, `whileInView` |
| `/05-page-transition` | Page Transitions | `AnimatePresence` with `usePathname` |

## Project Structure

```
app/                           # Next.js App Router pages
  page.tsx                     # Homepage — stagger card list
  01-basics/page.tsx           # Basics (fully implemented)
  02-gestures/page.tsx         # Placeholder
  03-layout/page.tsx           # Placeholder
  04-scroll/page.tsx           # Placeholder
  05-page-transition/page.tsx  # Placeholder

components/
  DemoCard.tsx              # Navigation card on homepage
  DemoSection.tsx           # Demo container: effect + code + concepts
  CodeBlock.tsx             # Syntax-highlighted code (prism-react-renderer)
  demos/
    BasicAnimateDemo.tsx    # animate prop — toggle between two states
    VariantsDemo.tsx        # stagger variants — parent orchestrates children
    AnimatePresenceDemo.tsx # exit animation on unmount

lib/
  motion-variants.ts        # All Variants definitions, centralised
```

## Dev

```bash
npm run dev     # http://localhost:3000
npm run build
npm run start
```

## Design

Dark terminal aesthetic — `#0a0a0a` background, `#22c55e` accent, Geist Mono typeface.
All animations respect `prefers-reduced-motion` via `useReducedMotion()`.
