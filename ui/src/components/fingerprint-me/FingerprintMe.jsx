import React, { useState } from "react";
import FingerprintWarning from "./FingerprintWarning";
import "./style.sass";
import FingerprintName from "./FingerprintName";

const FingerprintMe = () => {
  const [openPrompt, setOpenPrompt] = useState("warning");

  const changePrompt = nextPrompt => () => setOpenPrompt(nextPrompt);

  const promptIsOpen = status => status === "warning";

  const nameIsOpen = status => status === "name";

  return (
    <div className="fingerprint-me">
      <FingerprintWarning
        open={promptIsOpen(openPrompt)}
        onClose={changePrompt("name")}
      />
      <FingerprintName open={nameIsOpen(openPrompt)} />
    </div>
  );
};

export default FingerprintMe;
