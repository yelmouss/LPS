import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import logoBlank from "../../logoBlank.png";
import logoDark from "../../LogoDark.png";
import { BsFillSunFill, BsMoonStarsFill } from "react-icons/bs";

import { TfiShoppingCartFull } from "react-icons/tfi";


const Header = ({ dark, updateDark }) => {
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"

        className=" bg-opacity-75 bg-success  text-light"
      >
        <Container>

          <Nav className="me-auto">
            <h2 className="text-center fs-5  text-light">Bienvenue Chez Panier Express</h2>
          </Nav>
          <Navbar.Collapse>
          <Nav>
            <Nav.Link href="#features" className="text-light">Suivi de commande</Nav.Link>
            <Nav.Link href="#features" className="text-light">Ma liste d'envies.</Nav.Link>
            <Nav.Link href="#features" className="text-light">récemment consultés</Nav.Link>

          </Nav>
          </Navbar.Collapse>

        </Container>

      </Navbar><Navbar
        collapseOnSelect
        expand="lg"
        bg={`${dark ? "dark" : "light"}`}
        variant={`${dark ? "dark" : "light"}`}
        sticky="top"
        className="bg-opacity-50"
      >
        <Container>
          <Navbar.Brand href="/">
            {dark ? (
              <img src={logoBlank} width="80" height="50" alt="React logo" />
            ) : (
              <img src={logoDark} width="80" height="50" alt="React logo" />
            )}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav">Menu</Navbar.Toggle>
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#features">Accueil</Nav.Link>
              <Nav.Link href="#pricing">Facturation</Nav.Link>
              <NavDropdown title="Services" id="collasible-nav-dropdown">
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
              <Nav.Link>
                {" "}
                {dark ? (
                  <BsFillSunFill
                    onClick={() => updateDark(!dark, localStorage.setItem("dark", !dark))} />
                ) : (
                  <BsMoonStarsFill
                    onClick={() => updateDark(!dark, localStorage.setItem("dark", !dark))} />
                )}
              </Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                <TfiShoppingCartFull /> Panier
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
