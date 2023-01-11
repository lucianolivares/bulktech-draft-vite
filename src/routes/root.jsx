import { ThemeProvider } from 'styled-components'
import GlobalStyle from '../styles/globalStyles'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'

const theme = {
  colors: {
    primary: '#0554F2',
    accent: '#fb8500',
    black: '#000f16',
    white: '#f5f5f7',
    navcolor: '#1d1d1f',
    links: '#2997ff'
  },
  media: {
    medium: '768px'
  }
}

function Root () {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Navbar />
      <Outlet />
      <Footer />
    </ThemeProvider>
  )
}

export default Root
