import React, { Fragment } from "react";
import Header from "./Header";
import "./style.sass";
import FingerprintTable from "./FingerprintTable";

const FingerprintCollection = () => (
  <Fragment>
    <Header />
    <FingerprintTable />
  </Fragment>
);

export default FingerprintCollection;
