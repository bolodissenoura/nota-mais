import express, { Request, Response } from "express";
import { engProd } from "./utils/data";

const app = express();
const port = 3001;

// precisa do Id curso, IDinstituicao
// Criar collections para representar cursos, outra pra instituicoes e teremos uma model para as materias ( _id )
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
  const somaNotaPeso =
    LP * LPpeso + MAT * MATpeso + CH * CHpeso + CN * CNpeso + RED * REDpeso;
  const somaPeso = LPpeso + MATpeso + CHpeso + LPpeso + CNpeso + REDpeso;
  const mediaPonderada = somaNotaPeso / somaPeso;

  return mediaPonderada;
}
//passar por body
app.get("/engProd/:LP/:MAT/:CH/:CN/:RED", (req: Request, res: Response) => {
  const { LP, MAT, CH, CN, RED } = req.params;
  //logica aqui

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
      approved:
        engProd.UFOP.notaCorte <
        handleMediaPonderada(
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
      approved:
        engProd.UFOP.notaCorte <
        handleMediaPonderada(
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
      LPnote: LP,
      MATnote: MAT,
      CHnote: CH,
      CNnote: CN,
      REDnote: RED,
    },
  ];
  res.send(result);
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
