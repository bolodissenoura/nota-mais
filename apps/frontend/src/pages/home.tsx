import Head from "next/head"
import Link from "next/link"
import {
  FirstSectionContainer,
  ContainerRight,
  ContainerLeft,
  Subtitle,
  Title,
  ContainerButtons,
  SecondSectionContainer,
  ElementFloating,
  SpanPink,
  ContainerItems
} from "../styles/pages/home"
import { Button } from "../styles/buttons"
import Hero from "../assets/astronauta-flutuando.png"
import Image from "next/image"
import Planet from "../assets/planeta.png"


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
        <ContainerRight>
          <Subtitle>O MELHOR SIMULADOR GRÁTIS DO <SpanPink>SiSU 2023</SpanPink></Subtitle>
          <Title>Simule sua nota em todas universidades federais do país</Title>
          <ContainerButtons>
            <Link href="/simulate">
              <Button btn='primary'>VEJA SUAS APROVAÇÕES</Button>
            </Link>
            <Button btn='secondary'>Como funciona?</Button>
          </ContainerButtons>
          <ContainerItems>

          </ContainerItems>
        </ContainerRight>
        <ContainerLeft>
          <ElementFloating
            src={Hero}
            alt="Mulher segurando livro"
          />
        <Image 
            src={Planet}
            style={{
              position: "absolute",
              right: "0",
              top: "30vh",
              width: "50vw",
              height: "85vw"
            }}
            alt="Planet"
          />
        </ContainerLeft>
      </FirstSectionContainer>
      <SecondSectionContainer>
        <Title>Confira nossas novidades</Title>
        <p>Todo sistema em nuvem pronto pra te atender</p>
      </SecondSectionContainer>
    </>
  )
}

export default Homepage