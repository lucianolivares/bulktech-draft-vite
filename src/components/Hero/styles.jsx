import styled from 'styled-components'

export const HeroContainer = styled.div`
  display: grid;
  min-height: 50vh;
  padding: 0 4rem;
  grid-template-columns: 50% 50%;
  z-index: 1;
  @media screen and (max-width: 920px) {
    grid-template-columns: 100%;
  }
`

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
`

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-self: flex-start;
  padding-top: 0;
  @media screen and (max-width: 920px) {
    padding-left: 0;
  }
`

export const ImgWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 920px) {
    justify-content: flex-start;
  }
`
export const Img = styled.img`
  border-radius: 100px;
  max-height: 25rem;
  max-width: 100%;
  object-fit: scale-down;
`
export const TopLine = styled.p`
  color: ${({ lightTopLine }) => (lightTopLine ? '#white' : '#4B59F7')};
  font-size: 1.3rem;
  font-weight: 600;
  letter-spacing: 0.1rem;
`

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 400;
  font-size: clamp(2rem, 10vw, 3rem);
  padding-bottom: 1rem;
  padding-top: 1rem;
  line-height: 100%;
`

export const Description = styled.p`
  display: flex;
  font-size: 1.2rem;
  padding-bottom: 1rem;
  max-width: 30rem;
`

export const Info = styled(Description)`
  word-break: break-all;
  padding-bottom: 0.3rem;
`
export const LinkLabel = styled.a`
  color: white;
  text-decoration: none;
  font-size: 2rem;
  cursor: pointer;
  &:hover {
    transform: scale(1.05);
    color: ${({ theme }) => theme.colors.secondary};
  }
`

export const Icon = styled.div`
  display: flex;
  align-items: center;
  padding-right: 1rem;
`

export const LinksContainer = styled.div`
  display: flex;
  padding-top: 1rem;
  padding-bottom: 3rem;
`
