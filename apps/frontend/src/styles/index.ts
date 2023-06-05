import { createStitches } from "@stitches/react";

export const {
  config,
  styled,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  css,
} = createStitches({
  theme: {
    colors: {
      purple50: "#E6DAFF",
      purple100: "#665C84",
      purple200: "#8E63EE",
      purple300: "#7F45FF",
      purple400: "#2C1363",
      purple900: "#1A132B",

      gradientPrimary: "linear-gradient(180deg, rgba(149,0,173,1) 0%, rgba(119,0,138,1) 100%)",

      white: "#fff",
      
      gray300: "#c4c4cc",
      gray100: "#e1e1e6",

      green500: "#4FE35E",
      green300: "#00b37e",
    },

    fontSizes: {
      sm: "0.857em",
      md: "1em",
      lg: "1.5em",
      xl: "2em",
      "2xl": "3.5em",
    },

    media: {
      sm: "(min-width: 640px)",
      md: "(min-width: 768px)",
      lg: "(min-width: 1024px)",
    },
  },
});
