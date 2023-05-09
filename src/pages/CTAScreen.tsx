import Head from "next/head";
import { styled } from "../styles";
import { HomeContainer } from "../styles/pages/home";

import "keen-slider/keen-slider.min.css";
import { ButtonCTA } from "../styles/buttons";
import { TypographyH1 } from "../styles/typography";
import { GlassMorphism, GlassNotification } from "../styles/pages/CTAScreen";
import Image from "next/image"
import logoNota from "../assets/logo.svg"
import { serialize } from "v8";

export default function CTAScreen() {
  return (
    <>
      <Head>
        <title>Nota Mais</title>
        <meta name="description" content="Desccubra sua nota no enem" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomeContainer>
        <GlassMorphism>
          <TypographyH1>
          Parabéns!
          </TypographyH1>
        </GlassMorphism>
        <Image src={logoNota} alt="" height={300} width={300} />
        <br/>
          <GlassNotification>
            <p>NOTA+</p>
            <p>Você acabou de ser aprovado na Universidade Federal de São Paulo no curso de Ciências da C...</p>
          </GlassNotification>
        <br />
        <ButtonCTA css={{background:"linear-gradient(90deg, #4FE35E 2.32%, #30E74D 107.7%);"}} > Ver todas universidades </ButtonCTA>
      </HomeContainer>
    </>
  );
}