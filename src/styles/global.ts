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

  "body, input, textarea": {
    fontFamily: "Outfit",
    fontWeight: 400,
  },

  button: {
    fontFamily: "Outfit",
    fontWeight: 600,
    lineHeight: "57.6px",
    letterSpacing: "-2%",
  },
});
