import { globalCss } from ".";
import Background from "../../public/background.jpg"

export const globalStyles = globalCss({
  "*": {
    margin: 0,
    padding: 0,
  },

  body: {
    "-webkit-font-smoothing": "antialiasad",
    backgroundColor: "$purple900",
    color: "$text",
    minHeight: "100vh",
    fontWeight: "300",
    fontFamily: "Montserrat",
    fontSize: "18px",
    overflowX: "hidden",
    backgroundImage: `url("https://i.imgur.com/7nerf0E_d.webp?maxwidth=760&fidelity=grand")`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover"
  },

  a: {
    textDecoration: "none",
    color: "inherit"
  },

  "#__next": {
    padding: "0px 10%"
  },
  
});
