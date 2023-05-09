import Head from "next/head";
import { styled } from "../styles";
import { HomeContainer } from "../styles/pages/home";

import "keen-slider/keen-slider.min.css";
import { ButtonCTA } from "../styles/buttons";
import { TypographyH1, TypographyP1 } from "../styles/typography";
import { GlassMorphism, GlassNotification } from "../styles/pages/cta";
import Image from "next/image";
import logoNota from "../assets/logo.svg";
import { NavbarMobile, UnorderedList, ListItems } from "../styles/navbar";

// import de icones para navbar
import navFirstIcon from "../assets/mdi_user-circle-outline.png";
import navSecondIcon from "../assets/mdi_map-check-outline.png";
import navThirteenIcon from "../assets/material-symbols_check-circle-outline.png";
import navFourIcon from "../assets/uil_setting.png";

export default function Cta() {
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
          <TypographyH1>Parabéns!</TypographyH1>
        </GlassMorphism>
        <Image src={logoNota} alt="" height={200} width={200} />
        <GlassNotification>
          <TypographyP1>NOTA+</TypographyP1>
          <TypographyP1>
            Você acabou de ser aprovado em 30 universidades
          </TypographyP1>
        </GlassNotification>
        <ButtonCTA
          css={{
            background:
              "linear-gradient(90deg, #4FE35E 2.32%, #30E74D 107.7%);"
          }}
        >
          Ver todas universidades
        </ButtonCTA>
      </HomeContainer>
      <NavbarMobile>
        <UnorderedList>
          <ListItems>
            <Image
              src={navFirstIcon}
              alt="Minha Conta"
              width={40}
              height={40}
            />
          </ListItems>
          <ListItems>
            <Image
              src={navSecondIcon}
              alt="Minha Conta"
              width={40}
              height={40}
            />
          </ListItems>
          <ListItems>
            <Image
              src={navThirteenIcon}
              alt="Minha Conta"
              width={40}
              height={40}
            />
          </ListItems>
          <ListItems>
            <Image src={navFourIcon} alt="Minha Conta" width={40} height={40} />
          </ListItems>
        </UnorderedList>
      </NavbarMobile>
    </>
  );
}
