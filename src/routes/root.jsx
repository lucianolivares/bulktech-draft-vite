import { ThemeProvider } from 'styled-components'
import GlobalStyle from '../styles/globalStyles'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'

const theme = {
  colors: {
    primary: '#219ebc',
    secondary: '#fb8500',
    bg_color: '#f2f2f2',
    dark: '#001824',
    black: '#000f16'
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
      <div id='detail'>
        <Outlet />
      </div>
    </ThemeProvider>
  )
}

export default Root
