import React, { useState } from "react";
import FingerprintWarning from "./FingerprintWarning";
import FingerprintEnterName from "./FingerprintEnterName";
import Fingerprinting from "./Fingerprinting";
import { connect } from "react-redux";
import "../style.sass";

export const FingerprintMe = ({ history }) => (
  <div className="fingerprint-me">
    <FingerprintWarning />
    <FingerprintEnterName />
    <Fingerprinting />
  </div>
);

export default connect()(FingerprintMe);
