// 1. Import the extendTheme function
import { extendTheme } from "@chakra-ui/react";
// 2. Extend the theme to include custom colors, fonts, etc
const colors = {
  primary: {
    50: "#fff3e0",
    100: "#f2e0bc",
    200: "#e7cb96",
    300: "#dcb56f",
    400: "#d2a147",
    500: "#b9872d",
    600: "#906921",
    700: "#684b16",
    800: "#3f2d09",
    900: "#1a0e00",
  },
  brand: {
    primary: "#A47828",
  },
};

const styles = {
  global: {
    "html, body": {
      fontFamily: "'Nunito', sans-serif",
    },
  },
};

const customTheme = extendTheme({ colors, styles });

export { customTheme };
