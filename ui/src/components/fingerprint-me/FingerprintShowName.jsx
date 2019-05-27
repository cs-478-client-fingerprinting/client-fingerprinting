import React from "react";
import {
  openShowName,
  openDeleting,
  openFingerprinting
} from "../../redux/fingerprint-me/actions";
import { connect } from "react-redux";
import {
  getName,
  getShowNameOpen,
  getFingerprintArray
} from "../../redux/fingerprint-me/selectors";
import { Button, Card, Table, Progress } from "antd";
import { Fade } from "../fade";
import { useReveal } from "../../utils";
import { ANTD_RED, ANTD_GREEN } from "./constants";

const columns = [
  {
    title: "Metric",
    dataIndex: "name"
  },
  {
    title: "Value",
    dataIndex: "value",
    className: "table-value-col"
  },
  {
    title: "Uniqueness",
    dataIndex: "uniqueness",
    render: val => (
      <Progress
        percent={val}
        successPercent={0}
        size="small"
        strokeColor={val < 50 ? ANTD_RED : ANTD_GREEN}
      />
    )
  }
];

export const FingerprintShowName = ({
  open,
  name,
  fingerprint,
  openFingerprinting,
  openDeleting
}) => {
  const [reveal, close] = useReveal(open);
  return (
    open && (
      <Fade when={reveal}>
        <div className="fingerprint-container">
          <h1>Your Fingerprint</h1>
          <Card bordered={false} className="fingerprint-card">
            <div className="fingerprint-rows">
              <Table
                dataSource={fingerprint}
                columns={columns}
                pagination={{ pageSize: 5 }}
              />
            </div>
            <div className="fingerprint-buttons-container">
              <Button
                block
                type="primary"
                className="fingerprint-button"
                onClick={close(openFingerprinting)}
              >
                Try Again
              </Button>
              <Button
                block
                type="danger"
                className="fingerprint-button"
                onClick={close(openDeleting)}
              >
                Delete Fingerprint
              </Button>
            </div>
          </Card>
        </div>
      </Fade>
    )
  );
};

FingerprintShowName.defaultProps = {
  name: "",
  fingerprintData: []
};

export default connect(
  state => ({
    open: getShowNameOpen(state),
    name: getName(state),
    fingerprint: getFingerprintArray(state)
  }),
  { openShowName, openFingerprinting, openDeleting }
)(FingerprintShowName);
