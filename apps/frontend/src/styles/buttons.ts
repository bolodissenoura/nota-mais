import { styled, keyframes } from "../../stitches.config";

const FloatingFrame = keyframes({
  "0%": {
    transform: "translateY(0px)",
  },
  "100%": {
    transform: "translateY(20px)",
  },
});

export const ButtonCTA = styled("button", {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
  gap: "4px",
  padding: "20px",
  height: "3.5rem",
  borderRadius: "2.18rem",
  border: "none",
  background: "linear-gradient(90deg, #8E63EE 2.32%, #8C71C9 107.7%)",
  color: "white",
  fontSize: "$md",
  textDecoration: "none",
  transition: "0.3s ease-out",

  "&:hover": {
    cursor: "pointer",
    transform: "scale(1.1)",
  },
});

export const ButtonForm = styled("button", {
  width: "100%",
  color: "white",
  padding: "20px",
  borderRadius: "2.18rem",
  border: "none",
  marginTop: "15px",
  textAlign: "center",
  fontSize: "$md",
  display: "flex",
  gap: "10px",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "$primary",

  "&:hover": {
    cursor: "not-allowed",
  },
});

export const Button = styled("p", {
  padding: "30px 50px",
  borderRadius: "20px",
  transition: "0.3s ease-out",
  textDecoration: "none",
  animation: "${FloatingFrame} 1s infinite ease-in-out alternate",

  "&:hover": {
    cursor: "pointer",
    transform: "scale(1.05)",
  },

  variants: {
    btn: {
      primary: {
        background: "$gradientPrimary",
        boxShadow: "0px 0px 70px 10px rgba(255,0,136,0.3)",
        fontWeight: "bold",
      },
      secondary: {
        border: "1px solid white",
      },
      cta: {
        background: "$gradientPrimary",
        boxShadow: "0 4px 30px rgba(44, 0, 66, 0.5)",
      },
    },
  },
});
