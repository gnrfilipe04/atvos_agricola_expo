import { extendTheme } from 'native-base'

// Define the config
const config = {
  useSystemColorMode: false,
  initialColorMode: 'dark',
}

// extend the theme
export const theme = extendTheme({ 
  config,
  colors: {
    primary: {
      '50': '#C4C4C4',
      '500': '#243745',
    },
    secondary: {
      '500':'#FF681A',
    },
    tertiary: {
      '500': '#96B400',
    },
  },
})

  type MyThemeType = typeof theme;
  
  declare module 'native-base' {
    type ICustomTheme = MyThemeType
  }
