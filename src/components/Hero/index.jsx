import React from 'react'
import hero from '../../assets/Hero.webp'
import {
  Column, HeroContainer,
  ImgWrapper,
  Img,
  TextWrapper,
  Description,
  LinkLabel
} from './styles'
import { Title } from '../../styles/commons.styles'

function Hero () {
  return (
    <HeroContainer>
      <Column>
        <TextWrapper>
          <Title>BulkTech</Title>
          <Description>
            Especialistas en brindar soluciones tecnológicas
            modernas a hogares e industrias, ya sea en conectividad
            a internet en lugares remotos, sistema de seguridad o automatización.
          </Description>
          <LinkLabel to='/nosotros'>Saber más...</LinkLabel>
        </TextWrapper>
      </Column>
      <Column>
        <ImgWrapper>
          <Img src={hero} alt='world-internet' />
        </ImgWrapper>
      </Column>
    </HeroContainer>
  )
}

export default Hero
