/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#F0F0F0",
        accent: {
          1: "#DE0D6F",
          2: "#F8CDD9",
          3: "#731054",
          contrast: "#FFFFFF",
        },
        purple: {
          1: "#E2F3FC",
          2: "#EFEAFD",
          3: "#D6E4F4",
        },
        warning: {
          1: "#FDF4C8",
          2: "#FFEAD5",
        },
        danger: "#FF0000",
        success: "#D5F6DE",
      },
    },
  },
  plugins: [],
};
