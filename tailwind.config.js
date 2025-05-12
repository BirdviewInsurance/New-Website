/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        redCustom: '#E42D2C',
        blueCustom: '#157EBC',
      },
      fontFamily: {
        custom: ['Poppins', 'sans-serif'],  
      },
      animation: {
        blink: 'blink 1.5s infinite alternate', // Add blinking animation
      },
      keyframes: {
        blink: {
          '0%': { opacity: '1' },
          '100%': { opacity: '0.6' },
        },
      },
    },
  },
  plugins: [],
};

