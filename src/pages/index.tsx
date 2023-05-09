// import de components NextJS
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import { styled } from "../styles";
import { HomeContainer } from "../styles/pages/home";

// import de components
import { styled } from "../styles";
import { HomeContainer } from "../styles/pages/home";
import { ButtonCTA } from "../styles/buttons";
import { TypographyH1 } from "../styles/typography";
import { NavbarMobile, UnorderedList, ListItems } from "../styles/navbar";

// import de icones para navbar
import navFirstIcon from "../assets/mdi_user-circle-outline.png";
import navSecondIcon from "../assets/mdi_map-check-outline.png";
import navThirteenIcon from "../assets/material-symbols_check-circle-outline.png";
import navFourIcon from "../assets/uil_setting.png";

import "keen-slider/keen-slider.min.css";

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
