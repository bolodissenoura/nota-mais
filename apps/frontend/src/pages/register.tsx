import Head from "next/head";

import { ButtonCTA } from "../styles/buttons";
import {
  TypographyBtn,
  TypographyH2,
  TypographyP1,
} from "../styles/typography";
import { FlexGrid } from "../styles/grid";

import {
  Form,
  InputDDD,
  InputNome,
  InputPhone,
  RegisterContainer,
} from "../styles/pages/register";
import ArrowIcon from "../assets/icons/arrowIcon";
import { useForm } from "react-hook-form";
import { useState } from "react";

export default function Register() {
  const [output, setOutput] = useState("");
  const { register, handleSubmit } = useForm();

  function registerLead(data: any) {
    setOutput(JSON.stringify(data, null, 2));
    console.log(data);
  }

  return (
    <>
      <Head>
        <title>Nota Mais</title>
        <meta name="description" content="Desccubra sua nota no enem" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <RegisterContainer>
        <TypographyH2>
          Gostariamos de te conhecer antes de te mostrar suas aprovações
        </TypographyH2>
        <TypographyP1 style={{ marginTop: 18 }}>
          Insira os campos para prosseguir
        </TypographyP1>
        <Form onSubmit={handleSubmit(registerLead)}>
          <div>
            <FlexGrid>
              <InputNome placeholder="Nome" {...register("name")} />
            </FlexGrid>
            <FlexGrid>
              <InputDDD placeholder="DDD" {...register("ddd")} />
              <InputPhone
                placeholder="Digite seu número"
                {...register("phone")}
              />
            </FlexGrid>
            <FlexGrid>
              <InputNome
                placeholder="Digite seu melhor e-mail"
                {...register("email")}
              />
            </FlexGrid>
          </div>
          <ButtonCTA
            type="submit"
            css={{
              background:
                "linear-gradient(90deg, #4FE35E 2.32%, #30E74D 107.7%);",
            }}>
            <TypographyBtn>Ver todas universidades</TypographyBtn>
            <ArrowIcon size={22} color="#1A132B" />
          </ButtonCTA>
        </Form>
      </RegisterContainer>
    </>
  );
}
