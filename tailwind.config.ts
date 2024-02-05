import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      spacing: {
        "128": "32rem",
      },
      height: {
        "18": "4.5rem",
      },
      fontSize: {
        xss: "0.625rem",
      },
      backgroundImage: {
        "bubble-pattern": "url('/bg-pattern-card.svg')",
      },
      borderWidth: {
        "1/2": "0.5px",
      },
      colors: {
        cyan: {
          550: "#1AA1AE",
        },
      },
    },
  },
  plugins: [],
};
export default config;
