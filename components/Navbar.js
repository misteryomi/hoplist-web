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
            <NavbarBrand href="/" className="logo"><img src="https://hoplist.co/assets/img/footer-logo.png" width="100px" alt="Hoplist" /></NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink href="https://www.notion.so/1d9cd72f8504451eadd6341ec6a23006?v=729996da6fec4b009a2e0ef2fa3d8b48" target="_blank">Community</NavLink>
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