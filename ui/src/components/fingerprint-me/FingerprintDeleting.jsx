import React, { useEffect } from "react";
import { Progress } from "antd";
import { connect } from "react-redux";
import {
  getDeleteProgress,
  getDeleteOpen
} from "../../redux/fingerprint-me/selectors";
import { deleteFingerprint } from "../../redux/fingerprint-me/actions";
import { useReveal } from "../../utils";
import { Fade } from "../fade";

export const FingerprintDeleting = ({ open, progress, deleteFingerprint }) => {
  const [reveal, close] = useReveal(open);

  useEffect(() => {
    open === true && deleteFingerprint(close);
  }, [open]);

  return (
    open && (
      <Fade when={reveal}>
        <div className="fingerprinting-fingerprinting">
          <h1>Deleting Fingerprint...</h1>
          <Progress
            percent={progress}
            strokeColor={{
              from: "#108ee9",
              to: "#87d068"
            }}
          />
        </div>
      </Fade>
    )
  );
};

export default connect(
  state => ({
    open: getDeleteOpen(state),
    progress: getDeleteProgress(state)
  }),
  { deleteFingerprint }
)(FingerprintDeleting);
