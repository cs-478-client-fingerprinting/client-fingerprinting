import React from "react";
import FingerprintWarning from "./FingerprintWarning";
import FingerprintEnterName from "./FingerprintEnterName";
import Fingerprinting from "./Fingerprinting";
import { connect } from "react-redux";
import "../style.sass";
import FingerprintShowName from "./FingerprintShowName";
import Animate from "rc-animate";

export const FingerprintMe = ({ history }) => (
  <div className="fingerprint-me">
    <Animate transitionName="fade">
      <FingerprintWarning key="1" />
      <FingerprintEnterName key="2" />
      <Fingerprinting key="3" />
      <FingerprintShowName key="4" />
    </Animate>
  </div>
);

export default connect()(FingerprintMe);
