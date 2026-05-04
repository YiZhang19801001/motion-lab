# Motion Lab

A Framer Motion learning playground — structured by concept,
built to ship real skills.

**Stack:** Next.js 14 (App Router) · TypeScript · Tailwind CSS · Framer Motion

---

## Goal

A systematic study of Framer Motion — from core concepts to production-quality animations.
Each chapter includes interactive demos and concept breakdowns.

## Learning Path

### Stage 1: Core Concepts (`/01-basics`)

**Theory:**
- Understand the difference between `motion.div` and a regular `div`
- Know how `animate`, `initial`, and `exit` relate to each other
- Understand what variants are and why they're preferred over inline values
- Master `transition` options: `duration`, `ease`, `delay`, `type`
- Understand what problem `AnimatePresence` solves

**Demos:**
- Basic animate — a box toggling between two states (color, border-radius, size)
- Variants — parent/child variants driving a staggered list entrance
- AnimatePresence — toggle show/hide with a proper exit animation

**Done when:**
You can explain without looking at the docs why `AnimatePresence` must wrap
a conditionally rendered element.

---

### Stage 2: Gestures & Interaction (`/02-gestures`)

**Theory:**
- Master `whileHover`, `whileTap`, `whileFocus`
- Understand the `drag` prop and `dragConstraints`
- Understand what `useMotionValue` is and how it differs from React state
- Master `useTransform` for mapping one motion value to another
- Understand why `useSpring` feels more physical than a plain `animate`

**Demos:**
A single card component that demonstrates:
- Subtle 3D tilt on hover (`useMotionValue` + `useTransform` tracking the mouse)
- Scale-down on tap
- Free drag within a container with spring-back on release

**Done when:**
You can explain the fundamental difference between `useMotionValue` and `useState`
(why a motion value doesn't trigger a re-render).

---

### Stage 3: Layout Animation (`/03-layout`)

**Theory:**
- Understand how the `layout` prop works (the FLIP technique)
- Master `layoutId` for shared element transitions
- Understand `useScroll` / `useScrollMotionValue`
- Know when to use `useInView` vs `whileInView`
- Master `MotionConfig` for global animation settings

**Demos:**
A project list page with:
- Tag filtering — cards reorder using layout animation
- Card expand — clicking a card uses `layoutId` to transition into a detail view

**Done when:**
You can explain what FLIP (First, Last, Invert, Play) means and why layout
animation avoids expensive layout recalculations.

---

### Stage 4: Scroll Animations (`/04-scroll`)

**Theory:**
- Master `useScroll` and `scrollYProgress`
- Understand `useTransform` applied to scroll values
- Master `whileInView` with `threshold` and `margin` options
- Know the difference between scroll-linked and scroll-triggered animations

**Demos:**
- Parallax — elements moving at different speeds as you scroll
- Reading progress bar — a bar at the top of the page tied to scroll position
- Staggered entrance — elements animating in as they enter the viewport

**Done when:**
You can implement a scroll-linked parallax effect without looking at the docs.

---

### Stage 5: Page Transitions (`/05-page-transition`)

**Theory:**
- Master `AnimatePresence` at the routing level
- Understand how to apply different enter/exit animations per route
- Handle scroll position correctly during transitions
- Understand the timing constraints of exit animations

**Demos:**
- Smooth transitions between pages
- Different animation directions per route
- No content flash during transitions

**Done when:**
You can build a complete page transition system where each route has its own
animation and scroll position is handled correctly.

---

## Guiding Principles

- Every demo is paired with annotated key code and concept callouts
- All animations respect `prefers-reduced-motion` via `useReducedMotion()`
- Variants are centralised in `lib/motion-variants.ts`
- When a stage is complete, update the page header from `🚧 Work in Progress` to `✅ Completed`

## Progress

- [x] Stage 1: Core Concepts
- [x] Stage 2: Gestures & Interaction
- [ ] Stage 3: Layout Animation
- [ ] Stage 4: Scroll Animations
- [ ] Stage 5: Page Transitions

---

## Project Structure

```
app/                           # Next.js App Router pages
  page.tsx                     # Homepage — stagger card list
  01-basics/page.tsx           # Basics (✅ Completed)
  02-gestures/page.tsx         # 🚧 Work in Progress
  03-layout/page.tsx           # 🚧 Work in Progress
  04-scroll/page.tsx           # 🚧 Work in Progress
  05-page-transition/page.tsx  # 🚧 Work in Progress

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
