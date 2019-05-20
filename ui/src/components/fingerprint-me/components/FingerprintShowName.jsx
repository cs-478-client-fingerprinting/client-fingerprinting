import React from "react";
import { Fade } from "react-bootstrap";
import { openShowName, openEnterName } from "../redux/actions";
import { connect } from "react-redux";
import { getName, getShowNameOpen } from "../redux/selectors";

export const FingerprintShowName = ({ open, name }) => {
  return (
    open && (
      <div>
        <h1>FingerprintShowName...</h1>
        <h2>{name}</h2>
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
