import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./style.sass";

const Navigation = () => (
  <Navbar variant="dark" expand="lg">
    <Navbar.Brand as={NavLink} to="/">
      Client Fingerprinting
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link as={NavLink} to="/">
          Fingerprint Me
        </Nav.Link>
        <Nav.Link as={NavLink} to="/collection">
          Fingerprint Collection
        </Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default Navigation;
