import React from "react";
import FingerprintWarning from "./FingerprintWarning";
import FingerprintEnterName from "./FingerprintEnterName";
import Fingerprinting from "./Fingerprinting";
import { connect } from "react-redux";
import "../style.sass";
import FingerprintShowName from "./FingerprintShowName";

export const FingerprintMe = ({ history }) => (
  <div className="fingerprint-me">
    <FingerprintWarning />
    <FingerprintEnterName />
    <Fingerprinting />
    <FingerprintShowName />
  </div>
);

export default connect()(FingerprintMe);
