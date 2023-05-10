import express, { Request, Response } from "express";
import { engProd } from "./utils/data";

const app = express();
const port = 3001;

function handleMediaPonderada(
  LP: number,
  LPpeso: number,
  MAT: number,
  MATpeso: number,
  CH: number,
  CHpeso: number,
  CN: number,
  CNpeso: number,
  RED: number,
  REDpeso: number
) {
  const mediaPonderada =
    LP * LPpeso +
    MAT * MATpeso +
    CH * CHpeso +
    CN * CNpeso +
    (RED * REDpeso) / (LPpeso + MATpeso + CHpeso + LPpeso + CNpeso + REDpeso);

  return mediaPonderada;
}

app.get("/engProd/:LP/:MAT/:CH/:CN/:RED", (req: Request, res: Response) => {
  const { LP, MAT, CH, CN, RED } = req.params;
  //logica aqui
  const passou = true;
  const result = [
    {
      nameCollege: "UFOP",
      // @ts-ignore
      mediaGeral: handleMediaPonderada(LP, 1, MAT, 3, CH, 2, CN, 2, RED, 1),
      approved: passou,
      LPnote: LP,
      MATnote: MAT,
      CHnote: CH,
      CNnote: CN,
      REDnote: RED,
    },
    {
      nameCollege: "UFRJ",
      approved: !passou,
      LPnote: LP,
      MATnote: MAT,
      CHnote: CH,
      CNnote: CN,
      REDnote: RED,
    },
  ];
  res.send(result);
});

app.get("/oi", (req: Request, res: Response) => {
  res.send(`oiiii`);
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
