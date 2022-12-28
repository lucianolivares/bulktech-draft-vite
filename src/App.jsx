import { ThemeProvider } from 'styled-components'
import { GlobalStyle, PageContainer, Title } from './globalStyles'
import Navbar from './components/Navbar'

const theme = {
  colors: {
    primary: '#20CE65',
    secondary: '#ff5b04',
    bg_color: '#f2f2f2',
    dark: '#001824',
    black: '#000f16'
  },
  media: {
    medium: '768px'
  }
}

function App () {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Navbar />
      <PageContainer>
        <Title>Sitio web en desarrollo</Title>
      </PageContainer>
    </ThemeProvider>
  )
}

export default App
