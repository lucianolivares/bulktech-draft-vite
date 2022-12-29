import styled from 'styled-components'

export const FooterContainer = styled.div`
  width: 100%;
  padding: 0.5rem 4vw;
  display: flex;
  height: 4rem;
  justify-content: space-between;
  z-index: 999;
  background-color: ${({ theme }) => theme.colors.black};
`

export const Text = styled.p`
  color: white;
`
