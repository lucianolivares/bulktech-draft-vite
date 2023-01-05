import React from 'react'
import conectividad from '../../assets/conectividad.png'

import {
  Column, HeroContainer,
  ImgWrapper,
  Img,
  TextWrapper,
  Title,
  Description,
  LinkLabel
} from './styles'

function Conectividad () {
  return (
    <HeroContainer>
      <Column>
        <ImgWrapper>
          <Img src={conectividad} alt='conectividad simbol' />
        </ImgWrapper>
      </Column>
      <Column>
        <TextWrapper>
          <Title>Conectividad</Title>
          <Description>
            Soluciones de conectividad a internet en lugares remotos,
            con facilidades para implementar conexión comunitaria para reducir costos.
          </Description>
          <LinkLabel to='/conectividad'>Ver más...</LinkLabel>
        </TextWrapper>
      </Column>
    </HeroContainer>
  )
}

export default Conectividad
