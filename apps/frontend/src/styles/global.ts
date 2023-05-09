import { globalCss } from ".";

export const globalStyles = globalCss({
  "*": {
    margin: 0,
    padding: 0,
  },

  body: {
    "-webkit-font-smoothing": "antialiasad",
    backgroundColor: "$purple900",
    color: "$gray100",
  },

  "body, input, textarea,": {
    fontFamily: "Outfit",
    fontWeight: 400,
  },

  "button, h1, h2": {
    fontFamily: "Outfit",
    fontWeight: 600,
    letterSpacing: "-2%",
  },

  p: {
    fontFamily: "Outfit",
    fontWeight: 300,
  },
  ".select": {
    fontFamily: "Outfit",
    fontWeight: 400,
  },
});
