import Image from "next/image";
import { styled, keyframes } from "../../../stitches.config";
import { TypographyH1, TypographyP1 } from "../typography";

const floating = keyframes({
  "0%": {
    transform: "translateY(10px)",
  },
  "100%": {
    transform: "translateY(0px)",
  },
});

export const Title = styled(TypographyH1, {
  fontSize: "$xl",
  lineHeight: "1.4em"
});

export const Subtitle = styled(TypographyP1, {
  fontSize: "$sm",
  fontWeight: "500",
});

export const Span = styled("span", {
  color: "$text",
  fontWeight: "bold",
  fontSize: "$lg"
});

export const FirstSectionContainer = styled("section", {
  width: "100%",
  display: "flex",
  flexWrap: "wrap",
  alignItems: "center",
});

export const SecondSectionContainer = styled("section", {
  width: "100%",
  display: "flex",
  flexDirection: "column",
  gap: "20px",
  marginBottom: "150px",
});

export const ContainerRight = styled("div", {
  width: "100%",
  display: "flex",
  flexDirection: "column",
  textAlign: "start",
  justifyContent: "center",
  gap: "10px"
});

export const ContainerLeft = styled("div", {
  display: "flex",
  width: "100%",
  alignItems: "end",
});

export const ContainerButtons = styled("div", {
  display: "flex",
  width: "100%",
  gap: "20px",
  textAlign: "center",
  marginTop: "15px"
});

export const ElementFloating = styled(Image, {
  maxWidth: "200px",
  height: "100%",
  animation: `${floating} 1s infinite ease-in-out alternate`,
});

export const ContainerItems = styled("div", {
  display: "flex",
  width: "100%",
  margin: "25px 0px 50px 0px",
  justifyContent: "space-between",
  alignItems: "center"
});

export const SpanDivisor = styled("span", {
  border: "1px solid white",
  opacity: "30%",
  height: "30px"
})