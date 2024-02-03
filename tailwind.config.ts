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
    },
  },
  plugins: [],
};
export default config;
