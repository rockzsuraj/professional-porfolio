// tailwind.config.js
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--color-primary)",
        gray: "var(--color-gray)",
        background: "var(--color-background)"
      }
    }
  }
}