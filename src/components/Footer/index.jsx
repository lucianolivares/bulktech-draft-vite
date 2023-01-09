
import {
  FooterContainer,
  Text,
  Title,
  LogoStyled,
  RightSide
} from './styles'

function Footer () {
  return (
    <FooterContainer>
      <LogoStyled />
      <RightSide>
        <Title>BulkTech</Title>
        <Text>La Serena, Chile</Text>

      </RightSide>
    </FooterContainer>
  )
}

export default Footer
