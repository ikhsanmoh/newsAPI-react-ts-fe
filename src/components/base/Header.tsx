import React, { useState } from 'react';
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
import { APP_NAME } from '../../constants'

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Navbar color="dark" dark expand="md" className="p-3">
      <Container>
        <NavbarBrand href="/">{APP_NAME}</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="#">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">My Repo</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  )
}
