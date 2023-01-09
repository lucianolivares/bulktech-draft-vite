import { StyledBurger } from './styles'
import NavList from './NavList'

const Burger = ({ open, setOpen }) => {
  return (
    <>
      <StyledBurger open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
      </StyledBurger>
      <NavList open={open} setOpen={setOpen} />
    </>
  )
}

export default Burger
