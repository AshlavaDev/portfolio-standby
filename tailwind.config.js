const { m } = require('framer-motion');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    colors: {
      'deep-blue': '#0d0f19',
      'neon-white': '#f9f8fd',
      'lighter-blue': '#17354f',
      'mid-blue': '#1e2a3f'
    },
    extend: {
      fontFamily: {
        neon: ['Tourney', 'Copperplate', 'Papyrus', 'Serif'],
        subheading: ['IBM Plex Mono', 'Courier', 'monospace']
      },
      keyframes: {
        lights: {
          '0%': {
            'text-shadow': [
              '0 0 4px #ffffff',
              '0 0 11px #ffffff',
              '0 0 19px #ffffff',
              '0 0 40px neon-white',
              '0 0 80px neon-white',
              '0 0 90px neon-white',
              '0 0 100px neon-white',
              '0 0 150px neon-white'
            ]
          },
          '18%': {
            'text-shadow': [
              '0 0 4px #ffffff',
              '0 0 11px #ffffff',
              '0 0 19px #ffffff',
              '0 0 40px neon-white',
              '0 0 80px neon-white',
              '0 0 90px neon-white',
              '0 0 100px neon-white',
              '0 0 150px neon-white'
            ]
          },
          '22%': {
            'text-shadow': [
              '0 0 4px #ffffff',
              '0 0 11px #ffffff',
              '0 0 19px #ffffff',
              '0 0 40px neon-white',
              '0 0 80px neon-white',
              '0 0 90px neon-white',
              '0 0 100px neon-white',
              '0 0 150px neon-white'
            ]
          },
          '25%': {
            'text-shadow': [
              '0 0 4px #ffffff',
              '0 0 11px #ffffff',
              '0 0 19px #ffffff',
              '0 0 40px neon-white',
              '0 0 80px neon-white',
              '0 0 90px neon-white',
              '0 0 100px neon-white',
              '0 0 150px neon-white'
            ]
          },
          '53%': {
            'text-shadow': [
              '0 0 4px #ffffff',
              '0 0 11px #ffffff',
              '0 0 19px #ffffff',
              '0 0 40px neon-white',
              '0 0 80px neon-white',
              '0 0 90px neon-white',
              '0 0 100px neon-white',
              '0 0 150px neon-white'
            ]
          },
          '57%': {
            'text-shadow': [
              '0 0 4px #ffffff',
              '0 0 11px #ffffff',
              '0 0 19px #ffffff',
              '0 0 40px neon-white',
              '0 0 80px neon-white',
              '0 0 90px neon-white',
              '0 0 100px neon-white',
              '0 0 150px neon-white'
            ]
          },
          '100%': {
            'text-shadow': [
              '0 0 4px #ffffff',
              '0 0 11px #ffffff',
              '0 0 19px #ffffff',
              '0 0 40px neon-white',
              '0 0 80px neon-white',
              '0 0 90px neon-white',
              '0 0 100px neon-white',
              '0 0 150px neon-white'
            ]
          },
          '20%': {
            'text-shadow': [
              'none'
            ]
          },
          '24%': {
            'text-shadow': [
              'none'
            ]
          },
          '55%': {
            'text-shadow': [
              'none'
            ]
          }
        },
        
      },
      animation: {
        'lights': 'lights 1.5s infinite alternate',
      }
    },
  },
  plugins: [],
}
