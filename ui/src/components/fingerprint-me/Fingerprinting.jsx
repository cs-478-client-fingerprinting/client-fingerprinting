import React, { useEffect, useRef } from "react";
import { Progress } from "antd";
import { connect } from "react-redux";
import {
  getFingerprintingOpen,
  getProgress
} from "../../redux/fingerprint-me/selectors";
import { startFingerprinting } from "../../redux/fingerprint-me/actions";

export const Fingerprinting = ({ open, progress, startFingerprinting }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    open === true && startFingerprinting(canvasRef);
  }, [open, startFingerprinting]);

  return (
    open && (
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
