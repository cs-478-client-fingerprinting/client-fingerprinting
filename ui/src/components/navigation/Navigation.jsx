import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import "./style.sass";

const Navigation = () => (
  <Navbar variant="dark" expand="lg">
    <Navbar.Brand href="/">Client Fingerprinting</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link href="/">Fingerprint Me</Nav.Link>
        <Nav.Link href="/collection">Fingerprint Collection</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default Navigation;
