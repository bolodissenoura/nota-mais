import { globalCss } from "../../stitches.config";

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
    padding: "25px",
    fontWeight: "300",
    fontFamily: "Montserrat, sans-serif",
    fontSize: "16px",
    overflowX: "hidden",
    backgroundImage: `url("https://i.imgur.com/7nerf0E_d.webp?maxwidth=760&fidelity=grand")`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  },

  a: {
    textDecoration: "none",
    color: "inherit",
  },
  "@media (prefers-reduced-motion: reduce)": {
    "html:focus-within": { scrollBehavior: "auto" },
    "*, *::before, *::after": {
      animationDuration: "0.01ms !important",
      animationIterationCount: "1 !important",
      transitionDuration: "0.01ms !important",
      scrollBehavior: "auto !important",
    },
  },
});
