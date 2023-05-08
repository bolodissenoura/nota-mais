import Head from "next/head";
import { styled } from "../styles";
import { HomeContainer } from "../styles/pages/home";

import "keen-slider/keen-slider.min.css";
import { ButtonCTA } from "../styles/buttons";
import { TypographyH1 } from "../styles/typography";

export default function Home() {
  return (
    <>
      <Head>
        <title>Nota Mais</title>
        <meta name="description" content="Desccubra sua nota no enem" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomeContainer>
        <TypographyH1>
          Veja em quais universidades você seria aprovado!
        </TypographyH1>
        <ButtonCTA>Simular minha nota agora</ButtonCTA>
      </HomeContainer>
    </>
  );
}
