import { NavMenu, LinksLabel } from './styles'

const NavList = ({ open, setOpen }) => {
  return (
    <NavMenu open={open} onClick={() => setOpen(!open)}>
      <li>
        <LinksLabel to='/conectividad'>Conectividad</LinksLabel>
      </li>
      <li>
        <LinksLabel to='/seguridad'>Seguridad</LinksLabel>
      </li>
      <li>
        <LinksLabel to='/domotica'>Domótica</LinksLabel>
      </li>
      <li>
        <LinksLabel to='/nosotros'>Nosotros</LinksLabel>
      </li>
    </NavMenu>
  )
}

export default NavList
