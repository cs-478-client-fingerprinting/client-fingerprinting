import React from "react";
import FingerprintWarning from "./FingerprintWarning";
import FingerprintEnterName from "./FingerprintEnterName";
import Fingerprinting from "./Fingerprinting";
import "./style.sass";
import FingerprintShowName from "./FingerprintShowName";
import FingerprintMatchFound from "./FingerprintMatchFound";
import FingerprintDeleting from "./FingerprintDeleting";

export const FingerprintMe = ({ history }) => (
  <div className="fingerprint-me">
    <FingerprintWarning />
    <FingerprintEnterName />
    <Fingerprinting />
    <FingerprintShowName />
    <FingerprintMatchFound />
    <FingerprintDeleting />
  </div>
);

export default FingerprintMe;
