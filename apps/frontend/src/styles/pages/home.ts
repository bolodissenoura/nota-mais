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
  fontSize: "$lg",
  lineHeight: "1.2em",

  '@bp1': {
    fontSize: "$xl"
  },

  '@bp3': {
    maxWidth: "720px",
    fontSize: "$2xl"
  }
});

export const Subtitle = styled(TypographyP1, {
  fontSize: "$sm",
  fontWeight: "500",
});

export const Span = styled("span", {
  color: "$text",
  fontWeight: "bold",
  fontSize: "$lg",
  display: "inline",

  variants: {
    color: {
      pink: {
        color: "$primary",
        fontSize: "$md"
      }
    }
  }
});

export const FirstSection = styled("section", {
  width: "100%",
  display: "flex",
  flexWrap: "wrap",
  alignItems: "center",
  justifyContent: "space-around",

  '@bp1': {
    height: "80vh",
    flexDirection: "row-reverse",
    justifyContent: "space-around",
  }
});

export const SecondSection = styled("section", {
  width: "100%",
  minHeight: "80vh",
  display: "flex",
  flexDirection: "column",
  gap: "20px",
  textAlign: "center",
  justifyContent: "center",

  '@bp1': {
    flexDirection: "row-reverse",
    justifyContent: "start"
  }
});

export const ContainerRight = styled("div", {
  width: "100%",
  minWidth: "340px",
  margin: "auto",
  display: "flex",
  flexDirection: "column",
  textAlign: "start",
  justifyContent: "center",
  gap: "10px",

  '@bp1': {
    minWidth: "350px",
    maxWidth: "650px",
    width: "60%",
    margin: "0px"
  }
});

export const ContainerLeft = styled("div", {
  display: "flex",
  alignItems: "end",
  justifyContent: "center",
  width: "100%",

  "@bp1": {
    maxWidth: "40%",
    justifyContent: "start"
  },

});

export const ContainerButtons = styled("div", {
  display: "flex",
  width: "100%",
  margin: "10px 0px",
  textAlign: "center",
  gap: "20px",

  '@bp1': {

  }
});

export const ElementFloating = styled(Image, {
  width: "100%",
  height: "100%",
  maxWidth: "200px",
  zIndex: "-2",
  animation: `${floating} 1s infinite ease-in-out alternate`,

  '@bp1': {
    margin: "0px",
    width: "100%",
    maxWidth: "400px",
  }
});

export const ContainerItems = styled("div", {
  display: "flex",
  width: "100%",
  marginTop: "20px",
  justifyContent: "center",
  alignItems: "end",
  gap: "20px",

  '@bp3': {
    justifyContent: "start",
    fontSize: "22px",
    height: "15vh"
  }
});

export const SpanDivisor = styled("span", {
  border: "1px solid white",
  opacity: "70%",
  height: "30px",

  "@bp3": {
    height: "70px"
  }
});

export const ThirdSection = styled("section", {
  height: "100vh",
})

export const GlassItemsContainer = styled("div", {
  flexDirection: "column",
  justifyContent: "center",
  display: "flex",
  maxWidth: "540px",
  gap: "20px"
})