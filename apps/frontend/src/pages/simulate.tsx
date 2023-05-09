import Head from "next/head";

import { ButtonForm } from "../styles/buttons";
import { TypographyH2, TypographyP1, TypographyP2 } from "../styles/typography";
import { InputNota, SimulateContainer } from "../styles/pages/simulate";
import { FlexGrid } from "../styles/grid";

import Image from "next/image";
import unlockICO from "../assets/unlock.svg";
import Select from "react-select";

export default function Simulate() {
  const options = [
    { value: "1", label: "Engenharia de Computação" },
    { value: "2", label: "Engenharia de Produção" },
    { value: "3", label: "Engenharia Elétrica" },
  ];
  const CustomStyle = {
    option: (base: any, state: { isSelected: any }) => ({
      ...base,
      background: "#1A132B",
      padding: 16,
    }),
  };

  return (
    <>
      <Head>
        <title>Nota Mais</title>
        <meta name="description" content="Desccubra sua nota no enem" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SimulateContainer>
        <TypographyH2>Selecione seu curso</TypographyH2>
        <Select styles={CustomStyle} className="mt select" options={options} />
        <TypographyH2 className="mt">Digite suas notas</TypographyH2>
        <FlexGrid>
          <TypographyP2>Linguagens e Códigos</TypographyP2>
          <InputNota />
        </FlexGrid>
        <FlexGrid>
          <TypographyP2>Ciências Humanas</TypographyP2>
          <InputNota />
        </FlexGrid>
        <FlexGrid>
          <TypographyP2>Ciências da Natureza</TypographyP2>
          <InputNota />
        </FlexGrid>
        <FlexGrid>
          <TypographyP2>Matemática</TypographyP2>
          <InputNota />
        </FlexGrid>
        <FlexGrid>
          <TypographyP2>Redação</TypographyP2>
          <InputNota />
        </FlexGrid>
        <ButtonForm css={{ margin: "50px auto 0 12px" }}>
          <Image src={unlockICO} alt="" />
          Prosseguir
        </ButtonForm>
      </SimulateContainer>
    </>
  );
}
