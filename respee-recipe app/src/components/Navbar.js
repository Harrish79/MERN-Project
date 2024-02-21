import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import styles from "../components/Navbar.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from "../Assets/dough.png"
const NavBar = () => {
  return (
    <Navbar expand="lg" className="navbar">
      <Container className={styles.navbarContainer}>
        <Navbar.Brand as={NavLink} to="/" className="web-name">
          Respee 
          <img src={Logo} alt="" className="logo-img"/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className={`ms-auto ${styles.navLink}`}>
            <Nav.Link as={NavLink} to="/" className="navLink">
              Home
            </Nav.Link>
            <Nav.Link as={NavLink} to="/Desserts" className="navLink">
              Desserts
            </Nav.Link>
            <Nav.Link as={NavLink} to="/Recipes" className="navLink">
              Recipes
            </Nav.Link>
            <Nav.Link as={NavLink} to="/Saved" className="navLink">
              Saved Recipes
            </Nav.Link>
            <Nav.Link as={NavLink} to="/Login" className="navLink">
              Login
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
