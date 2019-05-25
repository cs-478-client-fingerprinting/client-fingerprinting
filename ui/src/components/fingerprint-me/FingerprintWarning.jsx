import React from "react";
import { Card, Button } from "antd";
import { connect } from "react-redux";
import { openFingerprinting } from "../../redux/fingerprint-me/actions";
import { getWarningOpen } from "../../redux/fingerprint-me/selectors";
import { Fade } from "react-reveal";
import { useReveal } from "../../utils";

export const FingerprintWarning = ({ open, openFingerprinting }) => {
  const [reveal, close] = useReveal(open);

  return (
    open && (
      <Fade opposite when={reveal} on>
        <Card className="fingerprint-warning">
          <h3 className="title">This site will fingerprint you</h3>
          <p className="lead">
            Pressing this button will run a client side script which will
            collect all information available through the browser and through
            packet headers.
          </p>

          <Button
            className="button"
            block
            type="primary"
            onClick={close}
          >
            Fingerprint Me
          </Button>
        </Card>
      </Fade>
    )
  );
};

export default connect(
  state => ({ open: getWarningOpen(state) }),
  { openFingerprinting }
)(FingerprintWarning);
