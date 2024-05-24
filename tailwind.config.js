import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';

export default {
  // content: ["./src/**/*.{html,js,ts,tsx}"],
  content: [
    "./dist/**/*.{js,ts,jsx,tsx,html}",
    "./src/**/*.{js,ts,jsx,tsx,html}",
  ],
  theme: {
    extend: {
      SuisseInt: ['SuisseInt', 'normal'],
      SuisseIntLight: ['SuisseIntLight', 'normal'],
      SofiaPro: ['SofiaPro', 'normal'],
      colors: {
        neutralColor: '#F9F0E5',
        greenColor: '#1FAD40',
        textColor01: '#01005B',
        textColor04: '#565656',
        textColor05: '#676869',
        textColor06: '#828282',
        borderColor: '#EDEDED',
        borderColor01: '#EAEAEA',
        textColor07: '#868787',
        textColor08: '#6C6C6C',
        textColor09: '#2A2996',
        bgColor01:'#F9F0E6',
        bgColor02:'#F0EEEF',
        bgColor03:'#1C2E58',
        bgColor04:'#C4C4C480',
      },
      lineHeight: {
        '11': '35px',
        '12': '45px',
        '13': '23px',
        '14': '20px',
        '15': '24px',
        '16': '40px',
        '17': '22px',
        '18': '17px',

      },
      boxShadow: {
        shadow00: '0px 3px 10px 0px #00000014',
        shadow01: '0px 3px 10px 1px #00000014',
      }
    },
  },
  plugins: [
    tailwindcss,
    autoprefixer,
  ],
}