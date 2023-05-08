import { styled } from "..";

export const Container = styled("div", {
  width: "100%",
  height: "100vh",
  overflow: "hidden",
});

export const ShadowBlurTop = styled("div", {
  position: "absolute",
  width: "694px",
  height: "577px",
  left: "-431px",
  top: "-443px",
  background: "#4C1AEE",
  opacity: 0.5,
  filter: "blur(150px)",
});

export const ShadowBlurBottom = styled("div", {
  position: "relative",
  width: "694px",
  height: "577px",
  left: "141px",
  top: "103px",
  background: "#4C1AEE",
  opacity: 0.5,
  filter: "blur(150px)",
});
