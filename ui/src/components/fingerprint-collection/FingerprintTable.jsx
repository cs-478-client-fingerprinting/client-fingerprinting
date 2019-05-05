import React from "react";
import { Table } from "react-bootstrap";
import FingerprintTableHead from "./FingerprintTableHead";
import FingerprintTableBody from "./FingerprintTableBody";
import FingerprintTableRow from "./FingerprintTableRow";

const data = [1, 2, 3, 4, 5];

const FingerprintTable = () => {
  return (
    <div className="FingerprintTable-container">
      <Table striped bordered hover>
        <FingerprintTableHead />
        <FingerprintTableBody>
          {data.map(rowData => (
            <FingerprintTableRow data={rowData} />
          ))}
        </FingerprintTableBody>
      </Table>
    </div>
  );
};

export default FingerprintTable;
