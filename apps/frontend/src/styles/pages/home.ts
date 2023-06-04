import { styled } from "..";
import { TypographyH1, TypographyP1 } from "../typography";

export const Title = styled(TypographyH1, {
    fontSize: "$2xl"
})

export const Subtitle = styled(TypographyP1, {
    textTransform: "uppercase",
    color: "$purple100",
    fontSize: "$md",
    fontWeight: "500"
})

export const FirstSectionContainer = styled("section", {
    width: "100%",
    minHeight: "80vh",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center"
})

export const SecondSectionContainer = styled("section", {
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    gap: "20px",
})

export const ContainerRight = styled("div", {
    maxWidth: "720px",
    minWidth: "280px",
    display: "flex",
    flexDirection: "column",
    textAlign: "start",
    justifyContent: "center",
    gap: "20px",
})

export const ContainerLeft = styled("div", {
    width: "40%",
    minWidth: "280px",
})

export const ContainerButtons = styled("div", {
    display: "flex",
    gap: "20px",
    textAlign: "center", 
    marginTop: "20px",
})

export const ContainerFlex = styled("div", {
    display: "flex",

})

export const FirstCard = styled("div", {
    display: "flex",
    padding: "30px",
    flexDirection: "column",
    maxWidth: "550px",
    width: "100%",
    minWidth: "280px",
    height: "230px",
    background: "$gradientPrimary",
    borderRadius: "30px",
    boxShadow: "0 4px 30px rgba(44, 0, 66, 0.5)"
})

export const CardTitle = styled("p", {
    fontSize: "$xl",
    fontWeight: "bold"
})

export const CardParagraph = styled("p", {

})

export const CardFlex = styled("div", {
    
})