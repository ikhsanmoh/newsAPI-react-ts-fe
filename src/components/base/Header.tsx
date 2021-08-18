import { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container
} from 'reactstrap';
import { APP_NAME, GITHUB_REPO_LINK } from '../../constants'
import { Link } from 'react-router-dom'

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Navbar color="dark" dark expand="md" className="p-3">
      <Container>
        <NavbarBrand>
          <Link style={{ textDecoration: 'inherit', color: 'inherit' }} to="/">
            {APP_NAME}
          </Link>
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <Link style={{ textDecoration: 'inherit', color: 'inherit' }} to="/">
                <NavLink>Home</NavLink>
              </Link>
            </NavItem>
            <NavItem>
              <NavLink href={GITHUB_REPO_LINK} target="_blank">My Repo</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  )
}
