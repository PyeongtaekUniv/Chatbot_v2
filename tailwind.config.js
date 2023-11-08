/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      mb: "400px",
      // => @media (min-width: 414px) {mobile}

      sm: "640px",
      // => @media (min-width: 640px) { No more use Shawn}

      md: "769px",
      // => @media (min-width: 768px) { ... }

      lg: "1025px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) {Between tablet and desktop }

      xxl: "1500px",
      // => @media (min-width: 1536px) { ... }

      dt: "1500px",
      // => @media (min-width: 1536px) { desktop }

      xxxl: "1800px",
      // => @media (min-width: 2000px) { ... }

      xxxxl: "1920px",
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
