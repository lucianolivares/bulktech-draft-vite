import React from 'react'
import camara from '../../assets/camara.png'
import seguridad from '../../assets/seguridad.png'
import {
  Column, HeroContainer,
  ImgWrapper,
  Img,
  TextWrapper,
  Title,
  Description
} from './styles'

function Seguridad () {
  return (
    <HeroContainer>
      <Column>
        <TextWrapper>
          <Title>Seguridad</Title>
          <Description>
            En Bulktech Solutions, estamos comprometidos a ofrecer siempre el mejor servicio a nuestros clientes. Nos esforzamos por mantenernos a la vanguardia de las últimas tecnologías y por ofrecer soluciones innovadoras que ayuden a nuestros clientes a conectarse y aprovechar al máximo las oportunidades que ofrece la tecnología.
          </Description>
          <ImgWrapper>
            <Img src={seguridad} alt='cameras schematic' />
          </ImgWrapper>
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
