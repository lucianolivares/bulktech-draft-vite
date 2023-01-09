import {
  Column,
  HeroContainer,
  ImgWrapper,
  Img,
  TextWrapper,
  Description,
  LinkLabel
} from './styles'

import { Title } from '../../styles/commons.styles'
import domotica from '../../assets/domotica.webp'

function Domotica () {
  return (
    <HeroContainer>
      <Column>
        <TextWrapper>
          <Title>Domótica</Title>
          <Description>
            También ofrecemos soluciones de domótica para automatizar el hogar y hacer la vida más cómoda y sencilla. Nuestros sistemas de IoT son fáciles de usar y se integran perfectamente en cualquier hogar.
          </Description>
          <LinkLabel to='/domotica'>Ver más...</LinkLabel>
        </TextWrapper>
      </Column>
      <Column>
        <ImgWrapper>
          <Img src={domotica} alt='casa inteligente' />
        </ImgWrapper>
      </Column>
    </HeroContainer>
  )
}

export default Domotica
