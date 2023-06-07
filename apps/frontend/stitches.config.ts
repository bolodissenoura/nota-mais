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
      primary: "#d62396",
      secondary: "#DE3F49",
      text: "#E1E1E1",
      purple50: "#E6DAFF",
      purple100: "#665C84",
      purple200: "#8E63EE",
      purple300: "#7F45FF",
      purple400: "#2C1363",
      purple900: "#1A132B",
      gray300: "#c4c4cc",
      gray100: "#e1e1e6",
      green500: "#4FE35E",
      green300: "#00b37e",

      gradientPrimary: "linear-gradient(180deg, $primary 0%, #980063 100%)",
    },

    fontSizes: {
      sm: "0.7em",
      md: "1em",
      lg: "2em",
      xl: "3em",
      '2xl': "4em"
    },
  },
  media: {
    bp1: "(min-width: 640px)",
    bp2: "(min-width: 768px)",
    bp3: "(min-width: 1024px)",
  },
});
