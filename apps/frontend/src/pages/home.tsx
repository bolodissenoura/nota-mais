import Head from "next/head";
import Link from "next/link";
import {
  FirstSectionContainer,
  ContainerRight,
  ContainerLeft,
  Subtitle,
  Title,
  ContainerButtons,
  SecondSectionContainer,
  ElementFloating,
  Span,
  ContainerItems,
  SpanDivisor,
} from "../styles/pages/home";
import { Button } from "../styles/buttons";
import Hero from "../assets/astronauta-flutuando.png";
import Image from "next/image";
import Planet from "../assets/planeta.png";
import HeroItem from "../styles/HeroItem";
import IconStar from '../assets/star.png'
import IconBaloon from "../assets/balao-aprovacoes.png"

const Homepage = () => {
  return (
    <>
      <Head>
        <title>Página Inicial | Nota Mais</title>
        <meta name="description" content="Desccubra sua nota no enem" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <FirstSectionContainer>
        <ContainerLeft>
          <ElementFloating
            src={Hero}
            alt="Mulher segurando livro"
            style={{ margin: "auto" }}
          />
          <Image
            src={Planet}
            style={{
              position: "absolute",
              right: "0",
              top: "250px",
              width: "50vw",
              height: "85vw",
              zIndex: "-1"
            }}
            alt="Planet"
          />
        </ContainerLeft>
        <ContainerRight>
          <Subtitle>
            O MELHOR SIMULADOR GRÁTIS DO <Span>SiSU 2023</Span>
          </Subtitle>
          <Title>Simule sua nota em todas universidades federais do país</Title>
          <ContainerButtons>
            <Link href="/simulate">
              <Button btn="primary">SIMULAR AGORA</Button>
            </Link>
            <Button btn="secondary">Como funciona?</Button>
          </ContainerButtons>
          <ContainerItems>
            <HeroItem title="4.7" description="Avaliações" icon={IconStar} />
            <SpanDivisor />
            <HeroItem title="927" description="Aprovações" icon={IconBaloon} />
          </ContainerItems>
        </ContainerRight>
      </FirstSectionContainer>
      <SecondSectionContainer>
        <Title>Confira nossas novidades</Title>
        <p>Todo sistema em nuvem pronto pra te atender</p>
      </SecondSectionContainer>
    </>
  );
};

export default Homepage;
