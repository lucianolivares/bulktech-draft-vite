import React from 'react'
import conectividad from '../../assets/conectividad.png'
import {
  Column, HeroContainer,
  ImgWrapper,
  Img,
  TextWrapper,
  Title,
  Description
} from './styles'

function Conectividad () {
  return (
    <HeroContainer>
      <Column>
        <ImgWrapper>
          <Img src={conectividad} alt='casas conectadas' />
        </ImgWrapper>
      </Column>
      <Column>
        <TextWrapper>
          <Title>Conectividad</Title>
          <Description>
            Nuestro objetivo es ayudar a nuestros clientes a conectarse y aprovechar al máximo las oportunidades que ofrece la tecnología. Ofrecemos un servicio de internet satelital de alta calidad, con modalidad de suscripción, latencias bajas para aplicaciones que lo requieran y ancho de banda fijo.
          </Description>
        </TextWrapper>
      </Column>
    </HeroContainer>
  )
}

export default Conectividad
