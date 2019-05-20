import React from "react";
import { Fade, ProgressBar } from "react-bootstrap";
import { openShowName } from "../redux/actions";
import { connect } from "react-redux";
import {
  getFingerprintingOpen,
  getFingerprintingShow,
  getProgress
} from "../redux/selectors";

export const Fingerprinting = ({ open, openShowName, progress, show }) => {
  return (
    open && (
      <Fade in={show} onExited={openShowName}>
        <div>
          <h1>Fingerprinting...</h1>
          <ProgressBar now={progress} />
        </div>
      </Fade>
    )
  );
};

export default connect(
  state => ({
    open: getFingerprintingOpen(state),
    show: getFingerprintingShow(state),
    progress: getProgress(state)
  }),
  { openShowName }
)(Fingerprinting);
