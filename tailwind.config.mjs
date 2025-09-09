/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./lib/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "#00008B",
          secondary: "#FFC107",
          white: "#FFFFFF",
        },
      },
      borderRadius: { "2xl": "1rem" },
      boxShadow: { soft: "0 8px 30px rgba(0,0,0,0.08)" },
    },
  },
  plugins: [],
};
