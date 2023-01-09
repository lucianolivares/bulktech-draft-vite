import styled from 'styled-components'
import Logo from '../Logo/Logo'

export const FooterContainer = styled.footer`
  background-color: ${({ theme }) => theme.colors.navcolor};
  padding-block: 3rem 2rem;
  padding-inline: 2rem;
  display: flex;
  justify-content: center;
  gap: 1rem;
`
export const Title = styled.h2`
  color: ${({ theme }) => theme.colors.white};
  
`
export const Text = styled.p`
  color: ${({ theme }) => theme.colors.white};
  opacity: 0.8;
`

export const RightSide = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`
export const LogoStyled = styled(Logo)`
  height: -webkit-fill-available;
  width: 48px;
  fill: ${({ theme }) => theme.colors.white};
`
