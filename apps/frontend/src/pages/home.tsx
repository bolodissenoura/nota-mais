import Head from "next/head";
import Link from "next/link";
import {
  FirstSection,
  ContainerRight,
  ContainerLeft,
  Subtitle,
  Title,
  ContainerButtons,
  SecondSection,
  ElementFloating,
  Span,
  ContainerItems,
  SpanDivisor,
  ThirdSection,
  GlassItemsContainer,
} from "../styles/pages/home";
import { Button } from "../styles/buttons";
import Hero from "../assets/astronauta-flutuando.png";
import Image from "next/image";
import Planet from "../assets/planeta.png";
import HeroItem from "../styles/HeroItem";
import IconStar from '../assets/star.png'
import IconBaloon from "../assets/balao-aprovacoes.png"
import Mockup from "../assets/notamais-aplicativo-mockup.png"
import GlassCard from "../styles/GlassCard";
import ItemComponent from "../styles/ItemComponent";

const Homepage = () => {
  return (
    <>
      <Head>
        <title>Página Inicial | Nota Mais</title>
        <meta name="description" content="Desccubra sua nota no enem" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <FirstSection>
        <ContainerLeft>
          <ElementFloating src={Hero} alt="Astronauta flutuando no espaço" />
          <Image
            src={Planet} alt="Planet" style={{
              position: "absolute",
              right: "0",
              top: "250px",
              width: "50vw",
              height: "85vw",
              zIndex: "-1"
            }}
          />
        </ContainerLeft>
        <ContainerRight>
          <Subtitle>
            SIMULADOR GRÁTIS DO <Span>SiSU 2023</Span>
          </Subtitle>
          <Title>Veja em quantas universidades você passaria no ENEM</Title>
          <ContainerButtons>
            <Link href="/simulate">
              <Button btn="primary">VER MINHAS APROVAÇÕES AGORA</Button>
            </Link>
            <Button btn="secondary">Oque é?</Button>
          </ContainerButtons>
          <ContainerItems>
            <HeroItem title="4.7" description="Avaliações" icon={IconStar} />
            <SpanDivisor />
            <HeroItem title="927" description="Aprovações" icon={IconBaloon} />
          </ContainerItems>
        </ContainerRight>
      </FirstSection>

      <SecondSection>
        <GlassItemsContainer>
          <GlassCard title="Nota Mais" description="A melhor plataforma para estudantes simularem suas aprovações no Enem 2023 em apenas alguns segundos" />
          <GlassCard title="Cálculo Imediato" description="Através do simulador você terá uma noção mais realista das chances de ser selecionado para seu curso desejado" />
        </GlassItemsContainer>

        <div style={{
          width: "100%",
          maxWidth: "540px",
        }}>
          <Image src={Mockup} alt="Mockup do aplicativo do Nota Mais" sizes="100vw" style={{
            width: '90%',
            height: 'auto',
            maxWidth: '400px'
          }}
          />
        </div>

      </SecondSection>

      <ThirdSection>
          <ItemComponent title="Sim" description="description" />
      </ThirdSection>
    </>
  );
};

export default Homepage;
