import React, { useEffect } from "react";
import Header from "./Header";
import "./style.sass";
import FingerprintTable from "./FingerprintTable";
import { Fade } from "react-bootstrap";
import { useMount } from "../../utils";

const FingerprintCollection = ({ history }) => {
  const [mount, exit] = useMount(true);

  useEffect(() => {
    console.log(history.location.state && history.location.state);
  }, [history.location]);

  return (
    <Fade in={mount} onExited={exit}>
      <div>
        <Header />
        <FingerprintTable />
      </div>
    </Fade>
  );
};

export default FingerprintCollection;
