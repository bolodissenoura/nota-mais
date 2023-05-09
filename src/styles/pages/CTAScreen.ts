import { styled } from ".."

export const GlassMorphism = styled("div", {
  width: "24.5em",
  height: "5.12em",
  margin: '-5.5em',
  marginTop: '5.5em',
  background: "rgba(255, 255, 255, 0.2)",
  borderRadius: "1em",
  boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
  backdropFilter: "blur(5px)",
  border: "1px solid rgba(255, 255, 255, 0.3)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

export const GlassNotification = styled("div", {
  columncount:"2",
  background: "rgba(255, 255, 255, 0.2)",
  borderRadius: "1em",
  width: "20.5em",
  height: "auto",
  padding: "1em",
  animation: "go-back 1s",
});