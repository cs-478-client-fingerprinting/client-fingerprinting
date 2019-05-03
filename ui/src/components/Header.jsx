import React from "react";
import { Jumbotron, Container } from "react-bootstrap";
import "../style.sass";

const Header = () => (
  <Jumbotron className="App-header">
    <Container>
      <h1>Client Fingerprinting</h1>
    </Container>
  </Jumbotron>
);

export default Header;
