/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        nutri: {
          green: '#7bc342', // Verde vibrante de la hoja
          teal: '#30b5a1',  // Verde agua del corazón
          dark: '#2c3338',  // Gris oscuro del texto
          bg: '#fbfdfc',    // Un fondo casi blanco, muy sutil y fresco
        }
      }
    },
  },
  plugins: [],
}