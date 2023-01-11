
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
          <Title>Nosotros</Title>
          <Link>Instagram</Link>
          <Link>Twitter</Link>
          <Link>LinkedIn</Link>
          <Link>mail</Link>
        </Row>
        <Row>
          <Title>Conectividad</Title>
          <NavLinkStyled>Kits StarLink</NavLinkStyled>
          <NavLinkStyled>Ejemplos</NavLinkStyled>
          <NavLinkStyled>Hogar Wifi</NavLinkStyled>
          <NavLinkStyled>Wifi Mesh</NavLinkStyled>
        </Row>
        <Row>
          <Title>Seguridad</Title>
          <NavLinkStyled>Hogar Wifi</NavLinkStyled>
          <NavLinkStyled>Comercial Lite</NavLinkStyled>
          <NavLinkStyled>Comercial IP 3B</NavLinkStyled>
          <NavLinkStyled>Comercial IP Pro</NavLinkStyled>
        </Row>
      </FooterContainer>
      <ImgWrapper>
        <LogoStyled />
      </ImgWrapper>
      <Label>BulkTech © - La Serena, Chile</Label>
    </FooterStyled>
  )
}

export default Footer
