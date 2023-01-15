import { ThemeProvider } from 'styled-components'
import GlobalStyle from '../styles/globalStyles'
import Navbar from '../components/Navbar'
import { Outlet, ScrollRestoration } from 'react-router-dom'
import Footer from '../components/Footer'

const theme = {
  colors: {
    primary: '#0554F2',
    accent: '#fb8500',
    black: '#000f16',
    white: '#f5f5f7',
    navcolor: '#1d1d1f',
    links: '#2997ff',
    gradient: 'linear-gradient(90deg, rgba(1,2,26,1) 0%, rgba(2,6,86,1) 50%, rgba(1,2,26,1) 100%)'
  },
  media: {
    medium: '768px'
  }
}

function Root () {
  return (
    <ThemeProvider theme={theme}>
      <ScrollRestoration />
      <GlobalStyle />
      <Navbar />
      <Outlet />
      <Footer />
    </ThemeProvider>
  )
}

export default Root
