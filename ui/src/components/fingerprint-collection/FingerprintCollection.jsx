import React, { Fragment, useEffect } from "react";
import Header from "./Header";
import "./style.sass";
import FingerprintTable from "./FingerprintTable";

const FingerprintCollection = ({ history }) => {
  useEffect(() => {
    console.log(history.location.state.name);
  }, []);

  return (
    <Fragment>
      <Header />
      <FingerprintTable />
    </Fragment>
  );
};

export default FingerprintCollection;
