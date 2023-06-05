import Head from "next/head";

import { ButtonForm } from "../styles/buttons";
import { TypographyH2, TypographyP2 } from "../styles/typography";
import { InputNota, SimulateContainer } from "../styles/pages/simulate";
import { FlexGrid } from "../styles/grid";

import Select from "react-select";
import { useForm, Controller } from "react-hook-form";
import React from "react";
import Router from "next/router";

export default function Simulate() {
  const { register, handleSubmit, control, formState } = useForm({
    mode: "onChange",
  });
  function registerLead(data: any) {
    console.log(data);
  }

  const options = [
    { value: "1", label: "Engenharia de Computação" },
    { value: "2", label: "Engenharia de Produção" },
    { value: "3", label: "Engenharia Elétrica" },
    { value: "4", label: "Fármacia" },
    { value: "5", label: "Quimica" },
    { value: "6", label: "Zootecnia" },
  ];

  const CustomStyle = {
    option: (base: any, state: { isSelected: any }) => ({
      ...base,
      background: "#1A132B",
      padding: 16,
    }),
  };

  return (
    <>
      <Head>
        <title>Nota Mais</title>
        <meta name="description" content="Desccubra sua nota no enem" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SimulateContainer onSubmit={handleSubmit(registerLead)}>
        <TypographyH2>Selecione seu curso</TypographyH2>
        <Controller
          control={control}
          defaultValue={[]}
          name="options"
          render={({ field: { onChange, value, ref } }: any) => (
            <Select
              // @ts-ignore
              inputRef={ref}
              styles={CustomStyle}
              value={options.filter((c) => value.includes(c.value))}
              onChange={(val) => onChange(val.map((c) => c.value))}
              options={options}
              isMulti
            />
          )}
        />
        <TypographyH2 className="mt">Digite suas notas</TypographyH2>
        <FlexGrid>
          <TypographyP2>Linguagens e Códigos</TypographyP2>
          <InputNota {...register("LC")} />
        </FlexGrid>
        <FlexGrid>
          <TypographyP2>Ciências Humanas</TypographyP2>
          <InputNota {...register("CH")} />
        </FlexGrid>
        <FlexGrid>
          <TypographyP2>Ciências da Natureza</TypographyP2>
          <InputNota {...register("CN")} />
        </FlexGrid>
        <FlexGrid>
          <TypographyP2>Matemática</TypographyP2>
          <InputNota {...register("MT")} />
        </FlexGrid>
        <FlexGrid>
          <TypographyP2>Redação</TypographyP2>
          <InputNota {...register("RD")} />
        </FlexGrid>
        {formState.errors.firstName && <p>This is required</p>}
        <ButtonForm
          onClick={() => Router.push("/cta")}
          disabled={!formState.isValid}>
          Prosseguir
        </ButtonForm>
      </SimulateContainer>
    </>
  );
}
