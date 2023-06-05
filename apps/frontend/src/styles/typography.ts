import { styled } from ".";

export const TypographyH1 = styled("h1", {
  color: "$textLight",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  fontSize: "$xl",
});

export const TypographyH2 = styled("h2", {
  color: "$purple50",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "left",
  fontSize: "$lg",
  textTransform: "none",

  '@sm': {
    fontSize: "$md"
  }
});

export const TypographyBtn = styled("p", {
  color: "$purple900",
  fontSize: "$md",
  fontWeight: "600",
});

export const TypographyP1 = styled("p", {
  color: "$purple50",
  fontSize: "$sm",
});

export const TypographyP2 = styled("p", {
  color: "$purple50",
  fontSize: "$md",
});
