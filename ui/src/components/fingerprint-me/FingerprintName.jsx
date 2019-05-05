import React, { useState } from "react";
import { Fade, Form, Button } from "react-bootstrap";

const FingerprintName = ({ open, onClose }) => {
  const [textFieldMounted, setTextFieldMounted] = useState(false);
  const [name, setName] = useState("");

  const postFingerprint = () => {
    onClose(name);
  };

  return (
    open && (
      <Form className="fingerprint-name">
        <Form.Group controlId="formBasicEmail">
          <Form.Control
            type="name"
            placeholder="Enter your name"
            onChange={e => setName(e.target.value)}
            value={name}
          />
        </Form.Group>
        <Button onClick={postFingerprint}>Rememeber Me</Button>
      </Form>
    )
  );
};

export default FingerprintName;
