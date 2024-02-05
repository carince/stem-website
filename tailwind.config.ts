import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "bg0": "#F7F7FF",
        "bg1": "#dbdced",
        "fg0": "#676da3",
        "fg1": "#585d8b"
      }
    },
  },
  plugins: [],
};
export default config;
