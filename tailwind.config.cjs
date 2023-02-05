const plugin = require("tailwindcss/plugin");

/**
 * Add `hover:` + `focus:` selectors
 *
 * Built using https://github.com/soorria/tailwindcss-hocus
 */
const hocusSelectors = plugin(function ({ addVariant }) {
  // Normal selectors
  const hoverSelector = "&:hover";
  addVariant("hocus", [hoverSelector, "&:focus"]);
  addVariant("hocus-within", [hoverSelector, "&:focus-within"]);
  addVariant("hocus-visible", [hoverSelector, "&:focus-visible"]);

  // Group selectors
  const groupHoverSelector = ":merge(.group):hover &";
  addVariant("group-hocus", [groupHoverSelector, ":merge(.group):focus &"]);
  addVariant("group-hocus-within", [
    groupHoverSelector,
    ":merge(.group):focus-within &",
  ]);
  addVariant("group-hocus-visible", [
    groupHoverSelector,
    ":merge(.group):focus-visible &",
  ]);
});

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        accent: "hsl(var(--accent) / <alpha-value>)",
      },
      backgroundImage: {
        "brand-gradient": "var(--brand-gradient)",
      },
    },
  },
  plugins: [hocusSelectors],
};
