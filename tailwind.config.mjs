/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'dusty-rose': '#C59684',
        'warm-brown': '#895620', 
        'natural-beige': '#B79F80',
        'golden-amber': '#D89F42',
        'coral-warmth': '#E67B58',
        'sage-green': '#7A8A6E',
        'off-white': '#faf9f7',
        'text-dark': '#2c2c2c',
        'text-medium': '#5a5a5a',
        'text-light': '#8a8a8a',
      },
      fontFamily: {
        'serif': ['Cormorant Garamond', 'serif'],
        'sans': ['Inter', 'sans-serif'],
      },
      fontSize: {
        'hero': '4rem',
        'section': '2.5rem',
      },
      borderRadius: {
        'xl': '15px',
        '2xl': '20px',
        '3xl': '25px',
      },
      boxShadow: {
        'soft': '0 5px 15px rgba(0,0,0,0.1)',
        'medium': '0 10px 30px rgba(0,0,0,0.1)',
        'strong': '0 20px 40px rgba(0,0,0,0.15)',
      },
    },
  },
  plugins: [],
} 