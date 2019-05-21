import React from "react";
import { openShowName, openEnterName } from "../redux/actions";
import { connect } from "react-redux";
import { getName, getShowNameOpen } from "../redux/selectors";
import Fingerprint from "./Fingerprint";

export const FingerprintShowName = ({ open, name, fingerprintData }) => {
  return (
    open && (
      <div>
        <h1>Hello {name}</h1>
        <h2>Your Fingerprint</h2>
        <Fingerprint data={fingerprintData} />
      </div>
    )
  );
};

export default connect(
  state => ({
    open: getShowNameOpen(state),
    name: getName(state)
  }),
  { openShowName, openEnterName }
)(FingerprintShowName);
