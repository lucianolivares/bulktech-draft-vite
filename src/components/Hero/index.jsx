import React from 'react'
import world from '../../assets/world.svg'
import {
  Column, HeroContainer,
  ImgWrapper,
  Img,
  TextWrapper,
  Title,
  Description,
  LinksContainer,
  LinkLabel,
  Icon
} from './styles'
import * as FaIcons from 'react-icons/fa'

function Hero () {
  return (
    <HeroContainer>
      <Column>
        <TextWrapper>
          <Title>BulkTech</Title>
          <Description>
            Somos una empresa dedicada a ofrecer servicios de internet
            satelital, desarrollo de aplicaciones web y plataformas de gestión,
            domótica para la automatización de IoT en el hogar.
          </Description>
          <LinksContainer>
            <LinkLabel target='_blank' href=''>
              <Icon>
                <FaIcons.FaLinkedin />
              </Icon>
            </LinkLabel>
            <LinkLabel target='_blank' href=''>
              <Icon>
                <FaIcons.FaInstagram />
              </Icon>
            </LinkLabel>
          </LinksContainer>
        </TextWrapper>
      </Column>
      <Column>
        <ImgWrapper>
          <Img src={world} alt='world-internet' />
        </ImgWrapper>
      </Column>
    </HeroContainer>
  )
}

export default Hero
