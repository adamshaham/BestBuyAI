/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        blue: "#0500ff",
        gray: "rgba(0, 0, 0, 0.32)",
        gold: "#ffe600",
        black: "#000",
        white: "#fff",
      },
      spacing: {},
      fontFamily: {
        inter: "Inter",
      },
      borderRadius: {
        "2xs-9": "10.9px",
        "4xs-8": "8.8px",
      },
    },
    fontSize: {
      "3xs": "10px",
      "5xs-3": "7.3px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
