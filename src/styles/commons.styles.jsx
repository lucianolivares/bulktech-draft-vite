import styled from 'styled-components'

export const PageContainer = styled.div`
  display: grid;
  min-height: 80vh;
  background-color: white;
  padding-top: 48px;
  .working {
    text-align: center;
  }
`
export const LargeWidth = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 2rem; 
  gap: 2rem;
  background: ${({ dark, theme }) =>
    dark ? theme.colors.gradient : theme.colors.white};
  margin-top: ${(props) => (props.marginTop ? '0.8rem' : '0')};
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr; 
    padding-inline: 0.5rem;
  }
  p {
    text-align: center;
    color: ${({ theme }) => theme.colors.white};
    max-width: 38ch;
  }
  .flex {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    justify-content: center;
  }
  .leftside {
    align-items: flex-end;
    @media screen and (max-width: 768px) {
      align-items: center;
    }
  }
  .rightside {
    align-items: flex-start;
    @media screen and (max-width: 768px) {
      align-items: center;
    }
  }
  img {
    order: ${props => props.imgFirst ? 0 : 4};
    height: 280px;
    object-fit: scale-down;
    @media screen and (max-width: 768px) {
      height: 200px;
      width: 250px;
    }
  }
`

export const Title = styled.h1`
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-image: linear-gradient(90deg,#2ca2b4,#5598de 24%,#7f87ff 45%,#f65aad 76%,#ec3d43); 
  font-weight: 500;
  font-size: clamp(1.5rem, 8vw, 3.5rem);
  padding: 1rem;
  line-height: 100%;
  text-align: center;
`
export const RevertTitle = styled.h2`
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-image: linear-gradient(90deg,#ec3d43, #f65aad 24%,#7f87ff 45%,#5598de 76%,#2ca2b4); 
  font-weight: 500;
  font-size: clamp(1.5rem, 8vw, 3.5rem);
  padding: 1rem;
  line-height: 100%;
  text-align: center;
`
