import { styled } from ".."

export const GlassMorphism = styled("div", {
  width: "80%",
  height: "6rem",
  margin: '-5.5rem',
  background: "rgba(255, 255, 255, 0.1)",
  borderRadius: "1rem",
  boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
  backdropFilter: "blur(25px)",
  border: "1px solid rgba(255, 255, 255, 0.3)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

export const GlassNotification = styled("div", {
  columncount:"2",
  background: "rgba(255, 255, 255, 0.2)",
  borderRadius: "1em",
  width: "80%",
  height: "auto",
  padding: "1em",
  animation: "go-back 1s",
});