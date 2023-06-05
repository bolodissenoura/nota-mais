import Image from "next/image";
import { styled, keyframes } from "..";
import { TypographyH1, TypographyP1 } from "../typography";

const floating = keyframes({
    "0%": {
        transform: "translateY(20px)"
    },
    "100%": {
        transform: "translateY(0px)"
    }
})

export const Title = styled(TypographyH1, {
    fontSize: "$2xl",
})

export const Subtitle = styled(TypographyP1, {
    fontSize: "$md",
    fontWeight: "500"
})

export const SpanPink = styled("span", {
    color: "$primary",
    fontWeight: "bold"
})

export const FirstSectionContainer = styled("section", {
    width: "100%",
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    gap: "40px"
})

export const SecondSectionContainer = styled("section", {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    marginBottom: "150px",
})

export const ContainerRight = styled("div", {
    maxWidth: "700px",
    display: "flex",
    flexDirection: "column",
    textAlign: "start",
    justifyContent: "center",
    gap: "20px"
})

export const ContainerLeft = styled("div", {
    width: "40%",
    display: "flex",
    alignContent: "end"
})

export const ContainerButtons = styled("div", {
    display: "flex",
    gap: "20px",
    textAlign: "center",
    marginTop: "30px",
})

export const ElementFloating = styled(Image, {
    width: "65%",
    height: "100%",
    animation: `${floating} 1s infinite ease-in-out alternate`,
})

export const ContainerItems = styled("div", {
    display: "flex",
})