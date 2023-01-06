import { ThemeProvider } from 'styled-components'
import GlobalStyle from '../styles/globalStyles'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'

const theme = {
  colors: {
    primary: '#0554F2',
    accent: '#fb8500',
    black: '#000f16',
    white: '#f5f5f7',
    navcolor: '#424245',
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
    </ThemeProvider>
  )
}

export default Root
