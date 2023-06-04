import { globalCss } from ".";

export const globalStyles = globalCss({
  "*": {
    margin: 0,
    padding: 0,
    fontFamily: "Outfit",
  },

  body: {
    "-webkit-font-smoothing": "antialiasad",
    backgroundColor: "$purple900",
    color: "$gray100",
    padding: " 0px 5%",
    minHeight: "100vh",
    fontWeight: "300",
    fontFamily: "Outfit",
    fontSize: "22px",
    overflowX: "hidden",
  },

  "button, h1, h2": {
    letterSpacing: "-2%",
  },

  a: {
    textDecoration: "none",
    color: "inherit"
  },

  p: {
    
  }
  
});
