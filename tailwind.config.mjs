/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        dark: "var(--dark)",
        darkSecondary: "var(--dark-secondary)",
        foreground: "var(--foreground)",
        primary400: "var(--primary-400)",
        primary300: "var(--primary-300)",
        primary200: "var(--primary-200)",
        primary100: "var(--primary-100)",
        secondary: "var(--secondary)",
        white100: "var(--white-100)",
      },
      fontFamily: {
        outfitThin: "var(--font-outfit-100)",
        outfitExtraLight: "var(--font-outfit-200)",
        outfitLight: "var(--font-outfit-300)",
        outfitRegular: "var(--font-outfit-400)",
        outfitMedium: "var(--font-outfit-500)",
        outfitSemiBold: "var(--font-outfit-600)",
        outfitBold: "var(--font-outfit-700)",
        outfitExtraBold: "var(--font-outfit-800)",
        outfitBlack: "var(--font-outfit-900)",
      },
      backgroundImage: {
        assetImage01: "url(/images/asset-image01.jpg)",
        assetImage02: "url(/images/asset-image02.jpg)",
        assetImage03: "url(/images/asset-image03.jpg)",
        assetImage04: "url(/images/asset-image04.jpg)",
        assetImage05: "url(/images/asset-image05.jpg)",
        assetImage06: "url(/images/asset-image06.jpg)",
        positionImage01: "url(/images/bottle-position01.png)",
        positionImage02: "url(/images/bottle-position02.png)",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".word-spacing-wide": {
          "word-spacing": "0.5rem",
        },
        ".word-spacing-wider": {
          "word-spacing": "1rem",
        },
      });
    },
  ],
};
