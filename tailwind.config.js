module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {

    extend: {
      
      backgroundImage: theme => ({
        'hero-bg': "url('/images/farmhero.jpg')",
       }),
      colors: {
        gradblue:"#80BFFF",
        formtext:"#626262",
        inputbg:"#F8F8F8",
        inputborder:"#BCBCBC",
        btnblue:"#2994FF",
        textblue:"#000E48",
        dashgray:"#FAFAFA",
        logout:"#FF6464",
        card1:"#2C2C2C",
        card2:"#373737",
        cardgray:"#919191"
      }
    },

    screens: {
      'xs': '330px',
      // => @media (min-width: 330px) { ... }

      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    }
  },
  variants: {
    extend: {
      backgroundColor: ['checked'],
      borderColor: ['checked'],
    }
  },
  plugins: [],
}
