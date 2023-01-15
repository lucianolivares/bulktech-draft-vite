import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding-inline: 4rem;
  padding-top: 1rem;

  background: ${({ dark, theme }) =>
    dark ? theme.colors.gradient : theme.colors.white};

  margin-top: ${(props) => (props.marginTop ? '0.8rem' : '0')};

  :last-of-type {
    padding-bottom: 2rem;
  };
  
  @media screen and (max-width: 768px) {
    padding-inline: 2rem;
  }
`

export const Title = styled.h1`
  order: 1;
  display: inline-block;
  max-width: 35rem;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-image: linear-gradient(
    90deg,
    #2ca2b4,
    #5598de 24%,
    #7f87ff 45%,
    #f65aad 76%,
    #ec3d43
  );
  font-weight: 500;
  font-size: clamp(1.5rem, 8vw, 3.5rem);
  padding: 1rem;
  line-height: 100%;
  text-align: center;
`

export const Description = styled.p`
  order: 2;
  display: flex;
  font-size: clamp(0.8rem, 4vw, 1rem);
  max-width: 25rem;
  font-weight: 400;
  text-align: start;
  padding-bottom: 0.8rem;;
  color: ${({ dark, theme }) => (dark ? theme.colors.white : 'black')};
`

export const LinkLabel = styled(NavLink)`
  order: 3;
  color: ${({ theme }) => theme.colors.links};
  text-decoration: none;
  font-size: 1rem;
  cursor: pointer;
  display: ${props => props.to ? 'flex' : 'none'};
  padding-bottom: ${props => props.imgFirst ? '2rem' : 0};
  &:hover {
    text-decoration:underline;
  }
  `

export const Img = styled.img`
    order: ${props => props.imgFirst ? 0 : 4};
    height: 320px;
    object-fit: scale-down;
    @media screen and (max-width: 768px) {
      height: 150px;
      width: 260px;
    }
  `
