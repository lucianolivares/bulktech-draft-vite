import React from 'react'
import camara from '../../assets/camara.png'
import {
  Column, HeroContainer,
  ImgWrapper,
  Img,
  TextWrapper,
  Description,
  LinkLabel
} from './styles'
import { Title } from '../../styles/commons.styles'

function Seguridad () {
  return (
    <HeroContainer>
      <Column>
        <TextWrapper>
          <Title white>Seguridad</Title>
          <Description>
            Sistemas de vigilancia CCTV adaptables según necesidad e
            implementación de diferentes tecnologías de seguridad, como reconocimiento facial e inteligencia artificial.
          </Description>
          <LinkLabel to='/seguridad'>Ver más...</LinkLabel>
        </TextWrapper>
      </Column>
      <Column hide>
        <ImgWrapper>
          <Img src={camara} alt='smart home' />
        </ImgWrapper>
      </Column>
    </HeroContainer>
  )
}

export default Seguridad
