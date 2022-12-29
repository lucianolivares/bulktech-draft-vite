import { ThemeProvider } from 'styled-components'
import GlobalStyle from '../styles/globalStyles'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'

const theme = {
  colors: {
    conectividad: '#219ebc',
    seguridad: '#fb8500',
    domotica: '#8ecae6 ',
    dark: '#023047 ',
    black: '#000f16',
    gray: '#f2f2f2'
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
