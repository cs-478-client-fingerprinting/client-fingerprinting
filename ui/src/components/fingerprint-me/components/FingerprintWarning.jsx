import React from "react";
import { Card, Button } from "antd";

import { connect } from "react-redux";
import { startFingerprinting } from "../redux/actions";
import { getWarningOpen } from "../redux/selectors";

export const FingerprintWarning = ({ open, startFingerprinting }) => {
  return (
    open && (
      <Card className="fingerprint-warning">
        <h3 className="title">This site will fingerprint you</h3>
        <p className="lead">
          Pressing this button will run a client side script which will collect
          all information available through the browser and through packet
          headers.
        </p>

        <Button
          className="button"
          block
          type="primary"
          onClick={startFingerprinting}
        >
          Fingerprint Me
        </Button>
      </Card>
    )
  );
};

export default connect(
  state => ({ open: getWarningOpen(state) }),
  { startFingerprinting }
)(FingerprintWarning);
