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

      white: "#fff",
      
      gray300: "#c4c4cc",
      gray100: "#e1e1e6",

      green500: "#4FE35E",
      green300: "#00b37e",
    },

    fontSizes: {
      sm: "0.857rem",
      md: "1.25rem",
      lg: "1.5rem",
      xl: "3rem",
      "2xl": "2rem",
    },
    media: {
      bp1: "(min-width: 640px)",
      bp2: "(min-width: 768px)",
      bp3: "(min-width: 1024px)",
    },
  },
});
