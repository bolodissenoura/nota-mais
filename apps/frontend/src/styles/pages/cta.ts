import { styled } from ".."

export const SectionContainer = styled("section", {
  width: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  maxWidth: "620px",
  margin: "auto",
  gap: "30px"
}) 

export const GlassMorphism = styled("div", {
  padding: "30px",
  background: "rgba(255, 255, 255, 0.1)",
  borderRadius: "1rem",
  boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
  backdropFilter: "blur(25px)",
  border: "1px solid rgba(255, 255, 255, 0.3)",
  margin: "auto",
  marginBottom: "-100px",
});

export const GlassNotification = styled("div", {
  columncount:"2",
  background: "rgba(255, 255, 255, 0.1)",
  borderRadius: "1rem",
  boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
  backdropFilter: "blur(25px)",
  border: "1px solid rgba(255, 255, 255, 0.3)",
  height: "auto",
  padding: "1em",
  animation: "go-back 1s",
});