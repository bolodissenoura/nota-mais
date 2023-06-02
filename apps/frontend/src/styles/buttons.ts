import { styled } from ".";

export const ButtonCTA = styled("button", {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
  gap: "4px",
  width: "100%",
  height: "3.5rem",
  borderRadius: "2.18rem",
  border: "none",
  background: "linear-gradient(90deg, #8E63EE 2.32%, #8C71C9 107.7%)",
  color: "$purple400",
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
  height: "3.5rem",
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
