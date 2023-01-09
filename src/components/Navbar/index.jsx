import { useState } from 'react'
import {
  LinksLabel,
  LogoStyled,
  NavbarContainer
} from './styles'
import Burger from './Burger'

function Navbar () {
  const [open, setOpen] = useState(false)

  return (
    <NavbarContainer>
      <LinksLabel to='/' onClick={() => setOpen(false)}>
        <LogoStyled />
      </LinksLabel>
      <Burger open={open} setOpen={setOpen} />
    </NavbarContainer>
  )
}

export default Navbar
