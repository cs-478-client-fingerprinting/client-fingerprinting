import React from "react";
import {
  openShowName,
  openFingerprinting
} from "../../redux/fingerprint-me/actions";
import { connect } from "react-redux";
import {
  getName,
  getShowNameOpen,
  getFingerprint
} from "../../redux/fingerprint-me/selectors";
import { Button, Card, Table } from "antd";

const columns = [
  {
    title: "Component",
    dataIndex: "name"
  },
  {
    title: "Value",
    dataIndex: "value"
  },
  {
    title: "Uniqueness",
    dataIndex: "stat"
  }
];

const formatFingerprint = fingerprint =>
  Object.keys(fingerprint).map((key, idx) => ({
    name: key,
    value: fingerprint[key],
    stat: "0%",
    key: idx
  }));

export const FingerprintShowName = ({
  open,
  name,
  fingerprint,
  stats,
  openFingerprinting
}) => {
  return (
    open && (
      <div className="fingerprint-container">
        <h1>Your Fingerprint</h1>
        <Card bordered={false} className="fingerprint-card">
          {console.log(formatFingerprint(fingerprint))}
          <div className="fingerprint-rows">
            <Table
              dataSource={formatFingerprint(fingerprint)}
              columns={columns}
              pagination={false}
              size="middle"
              style={{ width: "100%" }}
            />
          </div>
          <div className="fingerprint-buttons-container">
            <Button
              block
              type="primary"
              className="fingerprint-button"
              onClick={openFingerprinting}
            >
              Try Again
            </Button>
            <Button block type="danger" className="fingerprint-button">
              Delete Fingerprint
            </Button>
          </div>
        </Card>
      </div>
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
    fingerprint: getFingerprint(state)
  }),
  { openShowName, openFingerprinting }
)(FingerprintShowName);
