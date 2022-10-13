module.exports = {
  mode: 'jit',
  content: [
    "./src/**/*.{js,jsx}",
    "./index.html"
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        md: '3rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
    extend: {
      fontFamily: {
        poppins: [ "Inter", "sans-serif" ]
      },
      colors: {
        primary: "#468EF9",
        secondary: "#0C66EE",
        blue: "#2F7CF0",
        black: "#222222",
        gray: "#666666",
        lightgray: "#DDDDDD",
        green: "#28C165",
        red: "#F4574D",
      },
      backgroundImage: {
        'brand-pattern': "linear-gradient(to right bottom, rgba(255, 255, 255, 0.9), rgba(244, 249, 255, 0.9)), url('/src/images/background-brand.png')",
      },
      animation: {
        moveright: 'moveright 1s ease-in-out infinite',
        movedown: 'movedown 1s ease-in-out infinite',
      },
      keyframes: {
        moveright: {
          '0%, 100%': { transform: 'translateX(-20%)' },
          '50%': { transform: 'translateX(0%)' },
        },
        movedown: {
          '0%, 100%': { transform: 'translateY(-20%)' },
          '50%': { transform: 'translateY(0%)' },
        }
      },
    },
  },
  plugins: [ ],
}