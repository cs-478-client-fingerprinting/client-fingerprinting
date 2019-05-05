import React from "react";
import { Card, Button } from "react-bootstrap";

const FingerprintPrompt = ({ open, onClose }) =>
  open && (
    <Card className="fingerprint-card">
      <h3>Proceed at your own risk</h3>
      <p className="lead">
        Pressing this button will run a client side script which will collect
        all information available through the browser and through packet
        headers.
      </p>
      <Button onClick={onClose}>Fingerprint Me</Button>
    </Card>
  );

export default FingerprintPrompt;
