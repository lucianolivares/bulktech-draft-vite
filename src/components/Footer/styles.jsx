import styled from 'styled-components'

export const FooterContainer = styled.div`
  width: 100%;
  padding: 0.5rem 4vw;
  display: flex;
  height: 10rem;
  flex-direction: column;
  margin-top: 0.8rem;
  justify-content: flex-end;
  opacity: 0.95;
  background-color: ${({ theme }) => theme.colors.navcolor};
`

export const Text = styled.p`
  color: white;
  width: 100%;
  text-align: center;
`
