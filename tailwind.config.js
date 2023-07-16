/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      primary: {
        "pale-blue": "hsl(225, 100%, 94%)",
        "bright-blue": "hsl(245, 75%, 52%)",
      },
      secondary: {
        "desaturated-blue": "hsl(224, 23%, 55%)",
        "very-pale-blue": "hsl(225, 100%, 98%)",
        "dark-blue": "hsl(223, 47%, 23%)",
      },
    },
    fontWeight: {
      normal: "500",
      bold: "700",
      bolder: "900",
    },
    extend: {},
  },
  plugins: [],
};
