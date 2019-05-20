import React from "react";
import { Card, Button, Fade } from "react-bootstrap";
import { useMount } from "../../../utils";
import { connect } from "react-redux";
import { startFingerprinting } from "../redux/actions";
import { getWarningOpen } from "../redux/selectors";

export const FingerprintWarning = ({ open, startFingerprinting }) => {
  const [mount, exit] = useMount(open);

  return (
    open && (
      <Fade appear in={mount} onExited={startFingerprinting}>
        <Card className="fingerprint-warning">
          <h3>Proceed at your own risk</h3>

          <Fade appear in={mount}>
            <p className="lead">
              Pressing this button will run a client side script which will
              collect all information available through the browser and through
              packet headers.
            </p>
          </Fade>
          <Fade appear in={mount}>
            <Button onClick={exit}>Fingerprint Me</Button>
          </Fade>
        </Card>
      </Fade>
    )
  );
};

export default connect(
  state => ({ open: getWarningOpen(state) }),
  { startFingerprinting }
)(FingerprintWarning);
