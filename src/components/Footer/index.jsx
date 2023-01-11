
import {
  FooterStyled,
  FooterContainer,
  ImgWrapper,
  LogoStyled,
  Row,
  Title,
  Link,
  NavLinkStyled,
  Label
} from './styles'

function Footer () {
  return (
    <FooterStyled>
      <FooterContainer>
        <Row>
          <Title to='/conectividad'>Conectividad</Title>
          <NavLinkStyled preventScrollReset>Kits StarLink</NavLinkStyled>
          <NavLinkStyled preventScrollReset>Ejemplos</NavLinkStyled>
          <NavLinkStyled preventScrollReset>Hogar Wifi</NavLinkStyled>
          <NavLinkStyled preventScrollReset>Wifi Mesh</NavLinkStyled>
        </Row>
        <Row>
          <Title to='/seguridad'>Seguridad</Title>
          <NavLinkStyled preventScrollReset>Hogar Wifi</NavLinkStyled>
          <NavLinkStyled preventScrollReset>Comercial Lite</NavLinkStyled>
          <NavLinkStyled preventScrollReset>Comercial IP 3B</NavLinkStyled>
          <NavLinkStyled preventScrollReset>Comercial IP Pro</NavLinkStyled>
        </Row>
        <Row>
          <Title to='/domotica'>Domótica</Title>
          <NavLinkStyled preventScrollReset>Kits</NavLinkStyled>
          <NavLinkStyled preventScrollReset>Asistentes</NavLinkStyled>
          <NavLinkStyled preventScrollReset>Home Assistant</NavLinkStyled>
          <NavLinkStyled preventScrollReset>SmartHome</NavLinkStyled>
        </Row>
        <Row>
          <Title to='/nosotros'>Nosotros</Title>
          <Link>Instagram</Link>
          <Link>Twitter</Link>
          <Link>LinkedIn</Link>
          <Link>mail</Link>
        </Row>
      </FooterContainer>
      <ImgWrapper>
        <LogoStyled />
      </ImgWrapper>
      <Label><b>BulkTech ©</b> La Serena, Chile</Label>
    </FooterStyled>
  )
}

export default Footer
