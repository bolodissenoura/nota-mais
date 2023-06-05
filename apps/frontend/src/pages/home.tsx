import Head from "next/head"
import Link from "next/link"
import { FirstSectionContainer, ContainerRight, ContainerLeft, Subtitle, Title, ContainerButtons, SecondSectionContainer, ContainerFlex, FirstCard, CardTitle, CardParagraph, CardFlex } from "../styles/pages/home"
import { Button } from "../styles/buttons"


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
          <Subtitle>simples, rápido e fácil</Subtitle>
          <Title>Um simulador completo, intuitivo e fácil de utilizar</Title>
          <p>Insira suas notas e veja toda a mágica acontecer</p>
          <ContainerButtons>
            <Link href="/">
              <Button btn='cta'>simule sua nota agora</Button>
            </Link>
            <Button btn='secondary'>ler mais</Button>
          </ContainerButtons>
        </ContainerRight>
        <ContainerLeft>
        </ContainerLeft>
      </FirstSectionContainer>
      <SecondSectionContainer>
        <Subtitle>simples</Subtitle>
        <Title>Confira nossas novidades</Title>
        <p>Todo sistema em nuvem pronto pra te atender</p>
        <ContainerFlex>
          <FirstCard>
            <CardFlex>
              <CardTitle>Instant Visa Card</CardTitle>
              <CardParagraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</CardParagraph>
            </CardFlex>
          </FirstCard>
        </ContainerFlex>
      </SecondSectionContainer>
    </>
  )
}

export default Homepage