import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
  Container
} from 'reactstrap';


const PageNavbar = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false)

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="_navbar">
        <Navbar color="faded"  light expand="md">
          <Container>
            <NavbarBrand href="/" className="logo">Hoplist</NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink href="/">Feedback / Support</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/">FAQs</NavLink>
                </NavItem>
              </Nav>

              {/* <NavbarText>Simple Text</NavbarText> */}

            </Collapse>
          </Container>
        </Navbar>

    </div>
  );
}

export default PageNavbar;