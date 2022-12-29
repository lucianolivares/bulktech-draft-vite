import React from 'react'
import smarthome from '../../assets/smarthome.png'
import domotica from '../../assets/domotica.png'
import {
  Column, HeroContainer,
  ImgWrapper,
  Img,
  TextWrapper,
  Title,
  Description
} from './styles'

function Domotica () {
  return (
    <HeroContainer>
      <Column hide>
        <ImgWrapper>
          <Img src={smarthome} alt='casa inteligente' />
        </ImgWrapper>
      </Column>
      <Column>
        <TextWrapper>
          <Title>Domótica</Title>
          <Description>
            También ofrecemos soluciones de domótica para automatizar el hogar y hacer la vida más cómoda y sencilla. Nuestros sistemas de IoT son fáciles de usar y se integran perfectamente en cualquier hogar.
          </Description>
          <ImgWrapper>
            <Img src={domotica} alt='domotica' />
          </ImgWrapper>
        </TextWrapper>
      </Column>
    </HeroContainer>
  )
}

export default Domotica
