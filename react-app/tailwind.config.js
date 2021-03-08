module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      blue: {
        
        DEFAULT: '#30545f',
       
      },
      yellow: {
      
        DEFAULT: '#ffea70',
        dark: '#FFDA07'
        
      },
      amber: {
        
        DEFAULT: '#d38c22',
        
      },

      red: {
        
        DEFAULT: '#711e1f',
        
      },
      brown: {
        
        DEFAULT: '#360709',
        
      }
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
