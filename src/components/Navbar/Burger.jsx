import { useState } from 'react'
import { StyledBurger } from './styles'
import NavList from './NavList'

const Burger = () => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <StyledBurger open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
      </StyledBurger>
      <NavList open={open} action={setOpen} />
    </>
  )
}

export default Burger
