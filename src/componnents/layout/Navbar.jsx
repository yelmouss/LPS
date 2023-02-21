import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import logoBlank from "../../logoBlank.png";
import logoDark from "../../LogoDark.png";
import { BsFillSunFill, BsMoonStarsFill } from "react-icons/bs";

import {TfiShoppingCartFull} from 'react-icons/tfi';

const Header = ({ dark, updateDark }) => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">
          <img src={logoBlank} width="100" height="50" alt="React logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link> {dark ? (
                <BsFillSunFill
                  onClick={() =>
                    updateDark(!dark, localStorage.setItem("dark", !dark))
                  }
                />
              ) : (
                <BsMoonStarsFill
                  onClick={() =>
                    updateDark(!dark, localStorage.setItem("dark", !dark))
                  }
                />
              )}</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
            <TfiShoppingCartFull  /> Panier
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
