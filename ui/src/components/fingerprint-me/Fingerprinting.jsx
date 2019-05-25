import React, { useEffect, useRef } from "react";
import { Progress } from "antd";
import { connect } from "react-redux";
import {
  getFingerprintingOpen,
  getProgress
} from "../../redux/fingerprint-me/selectors";
import { startFingerprinting } from "../../redux/fingerprint-me/actions";
import { useReveal } from "../../utils";
import { Fade } from "../fade";

export const Fingerprinting = ({ open, progress, startFingerprinting }) => {
  const canvasRef = useRef(null);
  const [reveal, close] = useReveal(open);

  useEffect(() => {
    open === true && startFingerprinting(canvasRef, close);
  }, [open, startFingerprinting]);

  return (
    open && (
      <Fade when={reveal}>
        <div className="fingerprinting-fingerprinting">
          <h1>Fingerprinting...</h1>
          <Progress
            percent={progress}
            strokeColor={{
              from: "#108ee9",
              to: "#87d068"
            }}
          />
          <canvas id="canvas" ref={canvasRef} />
        </div>
      </Fade>
    )
  );
};

export default connect(
  state => ({
    open: getFingerprintingOpen(state),
    progress: getProgress(state)
  }),
  { startFingerprinting }
)(Fingerprinting);
