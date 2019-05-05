import React, { useEffect, useState } from "react";
import { Card, Button, Fade } from "react-bootstrap";

const FingerprintWarning = ({ open, onClose }) => {
  const [mountWarning, setMountWarning] = useState(false);
  const [mountButton, setMountButton] = useState(false);

  return (
    open && (
      <Fade appear in={open} onEntered={() => setMountWarning(true)}>
        <Card className="fingerprint-warning">
          <h3>Proceed at your own risk</h3>
          <Fade in={mountWarning} onEntered={() => setMountButton(true)}>
            <p className="lead">
              Pressing this button will run a client side script which will
              collect all information available through the browser and through
              packet headers.
            </p>
          </Fade>
          <Fade in={mountButton}>
            <Button onClick={onClose}>Fingerprint Me</Button>
          </Fade>
        </Card>
      </Fade>
    )
  );
};

export default FingerprintWarning;
