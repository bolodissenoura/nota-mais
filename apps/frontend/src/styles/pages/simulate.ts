import { styled } from "..";

export const SimulateContainer = styled("div", {
  height: "100%",
  width: "100%",
  maxWidth: "440px",
  margin: "auto",
  display: "flex",
  flexDirection: "column",
  gap: "20px"
});

export const InputNota = styled("input", {
  width: "134px",
  height: "44px",
  background: "linear-gradient(90deg, #1A132B 2.32%, #1A132B 107.7%);",
  border: "1px solid #15D15B",
  color: "$purple50",
  textAlign: "center",
  borderRadius: "8px",
  transition: "0.5s ease-out"
});
