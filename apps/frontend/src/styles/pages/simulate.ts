import { styled } from "../../../stitches.config";

export const SimulateContainer = styled("form", {
  height: "100%",
  width: "100%",
  maxWidth: "440px",
  margin: "auto",
  display: "flex",
  flexDirection: "column",
  gap: "20px",
});

export const InputNota = styled("input", {
  width: "120px",
  height: "44px",
  fontSize: "1.2em",
  background: "none",
  border: "1px solid #15D15B",
  color: "$purple50",
  textAlign: "center",
  borderRadius: "8px",
  transition: "0.5s ease-out",
  fontWeight: "300",
});
