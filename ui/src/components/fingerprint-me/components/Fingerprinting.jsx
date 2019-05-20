import React from "react";
import { Progress } from "antd";
import { connect } from "react-redux";
import { getFingerprintingOpen, getProgress } from "../redux/selectors";

export const Fingerprinting = ({ open, progress }) =>
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
    </div>
  );

export default connect(state => ({
  open: getFingerprintingOpen(state),
  progress: getProgress(state)
}))(Fingerprinting);
