import React, { useEffect } from "react";
import Header from "./Header";
import "./style.sass";
import FingerprintTable from "./FingerprintTable";

const FingerprintCollection = ({ history }) => {
  useEffect(() => {
    console.log(history.location.state && history.location.state);
  }, [history.location]);

  return (
    <div>
      <Header />
      <FingerprintTable />
    </div>
  );
};

export default FingerprintCollection;
