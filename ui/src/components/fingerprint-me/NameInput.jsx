import React from "react";
import { Form } from "react-bootstrap";

const NameInput = ({ onChange }) => (
  <Form.Group controlId="formBasicEmail">
    <Form.Control
      type="name"
      placeholder="Enter your name"
      onChange={onChange}
    />
  </Form.Group>
);

export default NameInput;
