import { styled, keyframes } from "..";

const move = keyframes({
  "0%": {
    transform: "translateX(0)"
  },

  "100%": {
    transform: "translateX(150vw)"
  }
})

export const ShadowBlurTop = styled("span", {
  position: "absolute",
  width: "700px",
  height: "600px",
  left: "-1000px",
  top: "-500px",
  background: "#4C1AEE",
  opacity: 0.5,
  filter: "blur(150px)",
  animation: `${move} 15s linear infinite`
});