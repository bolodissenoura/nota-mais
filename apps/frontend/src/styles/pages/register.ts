import { styled } from "..";

export const RegisterContainer = styled("main", {
  height: "90vh",
  padding: "28px",
  ".mt": {
    marginTop: "42px",
  },
});

export const Form = styled("form", {
  marginTop: 64,
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "center",
  height: "400px",
});

export const InputNome = styled("input", {
  width: "100%",
  height: "44px",
  background: "linear-gradient(90deg, #1A132B 2.32%, #1A132B 107.7%);",
  border: "1px solid #15D15B",
  color: "$purple50",
  textAlign: "left",
  paddingLeft: 10,
  borderRadius: "8px",
});

export const InputDDD = styled("input", {
  width: "20%",
  height: "44px",
  background: "linear-gradient(90deg, #1A132B 2.32%, #1A132B 107.7%);",
  border: "1px solid #15D15B",
  color: "$purple50",
  textAlign: "center",
  marginRight: 8,
  borderRadius: "8px",
});

export const InputPhone = styled("input", {
  width: "80%",
  height: "44px",
  background: "linear-gradient(90deg, #1A132B 2.32%, #1A132B 107.7%);",
  border: "1px solid #15D15B",
  color: "$purple50",
  textAlign: "left",
  paddingLeft: 10,
  borderRadius: "8px",
});
