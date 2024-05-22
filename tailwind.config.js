import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';

export default {
  // content: ["./src/**/*.{html,js,ts,tsx}"],
  content: ['./dist/*.html'],
  theme: {
    extend: {
      SuisseInt: ['SuisseInt', 'normal'],
      SuisseIntLight: ['SuisseIntLight', 'normal'],
      SofiaPro: ['SofiaPro', 'normal'],
      colors: {
        neutralColor: '#F9F0E5',
        textColor01: '#01005B',
        textColor04: '#565656',
        textColor05: '#676869',
        textColor06: '#828282',
        borderColor: '#EDEDED'
      },
      lineHeight: {
        '11': '35px',
        '12': '45px',
        '13': '23px',
        '14': '20px'
      },
      boxShadow: {
        'shadow00': '0px 3px 10px 0px #00000014',
      }
    },
  },
  plugins: [
    tailwindcss,
    autoprefixer,
  ],
}