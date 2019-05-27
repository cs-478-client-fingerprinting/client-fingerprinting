import React from "react";
import { Card, Button } from "antd";
import { useReveal } from "../../utils";
import {
  openShowName,
  openEnterName
} from "../../redux/fingerprint-me/actions";
import {
  getMatchFoundOpen,
  getName
} from "../../redux/fingerprint-me/selectors";
import { connect } from "react-redux";
import { Fade } from "../fade";

const FingerprintMatchFound = ({ open, name, openShowName, openEnterName }) => {
  const [reveal, close] = useReveal(open);

  return (
    open && (
      <Fade when={reveal}>
        <Card className="delete">
          <h3>Are You {name}?</h3>
          <div className="fingerprint-buttons-container">
            <Button
              block
              type="primary"
              className="fingerprint-button"
              onClick={close(openShowName)}
            >
              Yes
            </Button>
            <Button
              block
              type="danger"
              className="fingerprint-button"
              onClick={close(openEnterName)}
            >
              No
            </Button>
          </div>
        </Card>
      </Fade>
    )
  );
};

export default connect(
  state => ({ open: getMatchFoundOpen(state), name: getName(state) }),
  { openEnterName, openShowName }
)(FingerprintMatchFound);
