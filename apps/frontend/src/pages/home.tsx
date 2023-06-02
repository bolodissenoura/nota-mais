import Head from "next/head"
import NavbarComponent from "../styles/navbar"
import { Container } from "../styles/pages"


const Homepage = () => {
  return (
    <>
      <Head>
          <title>Página Inicial | Nota Mais</title>
          <meta name="description" content="Desccubra sua nota no enem" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
      </Head>
    </>
  )
}

export default Homepage