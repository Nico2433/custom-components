/** @type {import('tailwindcss').Config} */

const config = {
  content: ["./src/components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
};

export default config;
