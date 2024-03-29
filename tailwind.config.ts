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
        space: "5rem",
        smm: "0.938rem",
      },
      backgroundImage: {
        "bubble-pattern": "url('/bg-pattern-card.svg')",
        "space-home-mobile":
          "url('/space-website/home/background-home-mobile.jpg')",
        "space-home-tablet":
          "url('/space-website/home/background-home-tablet.jpg')",
        "space-home-desktop":
          "url('/space-website/home/background-home-desktop.jpg')",
      },
      borderWidth: {
        "1/2": "0.5px",
      },
      colors: {
        cyan: {
          550: "#1AA1AE",
        },
        "light-slate-blue": "hsl(252, 100%, 67%)",
        "light-royal-blue": "hsl(241, 81%, 54%)",
        "violet-blue": "hsla(256, 72%, 46%, 1)",
        "persian-blue": "hsla(241, 72%, 46%, 0)",
        "pale-blue": "hsl(221, 100%, 96%)",
        "light-lavender": "hsl(241, 100%, 89%)",
        "dark-gray-blue": "hsl(224, 30%, 27%)",
        "white-new": "hsl(0, 0%, 100%)",
        "light-red": "hsl(0, 100%, 67%)",
        "orangey-yellow": "hsl(39, 100%, 56%)",
        "green-teal": "hsl(166, 100%, 37%)",
        "cobalt-blue": "hsl(234, 85%, 45%)",
        "space-violet": "#D0D6F9",
        "space-grey": "#979797",
        "space-dark-grey": "#616476",
      },
      screens: {
        lgs: "1440px",
      },
    },
  },
  plugins: [],
};
export default config;
