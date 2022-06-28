import { extendTheme } from "@chakra-ui/react";
import "@fontsource/kreon"
import "@fontsource/quicksand";

const colors = {
  brand: {
    900: "#0B0B61",
    800: "#0404B4",
    700: "#0000FF",
  },
};

const fonts = {
  heading: `'Kreon', serif`,
  body: `'Quicksand', sans-serif`,
};

export const theme = extendTheme({ colors, fonts });