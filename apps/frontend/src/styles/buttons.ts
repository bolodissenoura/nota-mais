import { styled } from ".";

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
    transform: "scale(1.1)"
  },
});

export const ButtonForm = styled("button", {
  width: "100%",
  padding: "20px",
  borderRadius: "2.18rem",
  border: "none",
  marginTop: "15px",
  background: "linear-gradient(90deg, #15D15B 2.32%, #07A442 107.7%)",
  color: "$purple400",
  textAlign: "center",
  fontSize: "$md",
  display: "flex",
  gap: "10px",
  justifyContent: "center",
  alignItems: "center",
  "&:hover": {
    cursor: "pointer",
  },
});

export const Button = styled("p", {
  padding: "20px 50px",
  borderRadius: "50px",
  transition: "0.3s ease-out",
  textTransform: "uppercase",
  textDecoration: "none",

  "&:hover": {
    cursor: "pointer",
    transform: "scale(1.05)"
  },

  variants: {
    btn: {
      primary: {
        background: "$gradientPrimary",
        boxShadow: "0 4px 30px rgba(44, 0, 66, 0.5)"
      },
      secondary: {
        border: "1px solid white",
      },
      cta: {
        background: "$gradientPrimary",
        boxShadow: "0 4px 30px rgba(44, 0, 66, 0.5)"
      }
    }
  }
})
