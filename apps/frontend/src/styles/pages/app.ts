import { styled, keyframes } from "..";

export const ShadowBlurTop = styled("span", {
  position: "absolute",
  width: "700px",
  height: "600px",
  left: "0px",
  top: "-0px",
  background: "#4C1AEE",
  opacity: 0.5,
  filter: "blur(150px)",
  zIndex: "-1",
});