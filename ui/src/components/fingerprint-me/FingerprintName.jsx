import React from "react";
import { Fade } from "react-bootstrap";

const FingerprintName = ({ open }) =>
  open && (
    <Fade in={open} appear>
      <div> What is your name </div>
    </Fade>
  );

export default FingerprintName;
