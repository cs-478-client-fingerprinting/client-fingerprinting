import React from "react";

const FingerprintRow = ({ label, value, stat }) => (
  <div className="fingerprint-row">
    <b>{label}</b>
    <p>{value}</p>
    <p>{stat}</p>
  </div>
);

export default FingerprintRow;
