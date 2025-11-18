import { extendTheme } from "@chakra-ui/react";

const colors = {
  brand: {
    50:  "#fdf7f2",
    100: "#f9ebdf",
    200: "#f4d6bb",
    300: "#eebc92",
    400: "#e8a16a",
    500: "#df884f",
    600: "#c46c3e",
    700: "#a15332",
    800: "#7c3e26",
    900: "#512818",
  },
};

const fonts = {
  heading: "'Nunito', sans-serif",
  body: "'Nunito', sans-serif",
};

const theme = extendTheme({
  colors,
  fonts,
  styles: {
    global: {
      body: {
        bg: "#fffaf5",
        color: "#3b2f2f",
      },
    },
  },
});

export default theme;

