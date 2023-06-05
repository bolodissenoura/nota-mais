import React from 'react'
import Icon from '../assets/star.png'
import Image from 'next/image'
import { styled } from '@stitches/react'

type Props = {
    title: string;
    description: string;
}

const HeroItem = (props: Props) => {

  const ContainerFlexItem = styled("div", {
    width: "320px",
    height: "120px",
    display: "flex",
    
  })

  const ContainerLeft = styled("div", {

  })

  const ContainerRight = styled("div", {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column"
  })

  const Title = styled("p", {
    fontSize: '$lg',
    fontWeight: 'bold'
  })

  return (
    <ContainerFlexItem>
      <ContainerLeft>
        <Image 
          src={Icon}
          alt='Estrela'
          width='100'
        />
      </ContainerLeft>
      <ContainerRight>
        <Title>{props.title}</Title>
        <p>{props.description}</p>
      </ContainerRight>
    </ContainerFlexItem>
  )
}

export default HeroItem