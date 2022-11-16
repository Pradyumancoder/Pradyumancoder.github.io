/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        spin: "spin 1.5s linear",
        "spin-slow": "spin 3s linear infinite",
        "reverse-spin": "reverse-spin 4s linear infinite",
        wiggle: "wiggle 1s ease-in-out infinite",
        wigglehi: "wigglehi 1s ease-in-out infinite",
        wigglelow: "wigglelow 1s ease-in-out infinite",
      },
      keyframes: {
        "reverse-spin": {
          from: {
            transform: "rotate(360deg)",
          },
        },
        wiggle: {
          "0%, 100%": { transform: "rotate(-5deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
        wigglehi: {
          "0%, 100%": { transform: "rotate(-50deg)" },
          "50%": { transform: "rotate(5deg)" },
        }, 
        wigglelow: {
          "0%, 100%": { transform: "rotate(50deg)" },
          "50%": { transform: "rotate(8deg)" },
        }, 
      },
    },
    fontFamily: {
      title: ["Mochiy Pop One"],
    },
  },
  plugins: [],
};
