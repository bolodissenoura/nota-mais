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
      mediaGeral: handleMediaPonderada(
        // @ts-ignore
        LP,
        engProd.UFOP.LP,
        MAT,
        engProd.UFOP.MAT,
        CH,
        engProd.UFOP.CH,
        CN,
        engProd.UFOP.CN,
        RED,
        engProd.UFOP.RED
      ),
      approved: passou,
      LPnote: LP,
      MATnote: MAT,
      CHnote: CH,
      CNnote: CN,
      REDnote: RED,
    },
    {
      nameCollege: "UFRJ",
      mediaGeral: handleMediaPonderada(
        // @ts-ignore
        LP,
        engProd.UFRJ.LP,
        MAT,
        engProd.UFRJ.MAT,
        CH,
        engProd.UFRJ.CH,
        CN,
        engProd.UFRJ.CN,
        RED,
        engProd.UFRJ.RED
      ),
      approved: passou,
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
