Tailwind Theme — tafseer-circle

This project includes a custom Tailwind theme (no light/dark variants) centered on royal green + golden colors inspired by the project logo.

Available color tokens (use in Tailwind classes or CSS vars):
- royal-50 .. royal-900 (primary green family)
- tafseerGold-50 .. tafseerGold-900 (accent golden family)
- tafseerGreen-50 .. tafseerGreen-900 (secondary green family)
- tafseerAccent (single hex), cream, taupe

Examples (JSX/HTML):
- <div className="bg-royal-500 text-white">Primary header</div>
- <button className="brand-btn">Get Started</button>

Notes:
- Tailwind is configured in `tailwind.config.cjs`.
- Base styles and helpers are in `src/index.css`.
- No light/dark theme is included by design.
