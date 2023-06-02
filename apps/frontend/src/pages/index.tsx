import Head from "next/head";
import router from "next/router";
import { ButtonCTA } from "../styles/buttons";
import { TypographyH1 } from "../styles/typography";
import { SectionContainer } from "../styles/pages";

export default function Home() {

  return (
    <>
      <Head>
        <title>Nota Mais</title>
        <meta name="description" content="Desccubra sua nota no enem" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SectionContainer>
        <TypographyH1>
          Veja em quais universidades você seria aprovado!
        </TypographyH1>
        <ButtonCTA onClick={() => router.push("/simulate")}>
          Simular minha nota agora
        </ButtonCTA>
      </SectionContainer>
    </>
  );
}
