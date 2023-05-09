import { styled } from ".";

export const ButtonCTA = styled("button", {
  width: "90%",
  height: "3.5rem",
  borderRadius: "2.18rem",
  border: "none",
  background: "linear-gradient(90deg, #8E63EE 2.32%, #8C71C9 107.7%)",
  color: "$purple400",
  fontSize: "$md",
  "&:hover": {
    cursor: "pointer"
  }
});
