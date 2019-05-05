import React, { Fragment, useState } from "react";
import FingerprintPrompt from "./FingerprintPrompt";
import "./style.sass";
import FingerprintName from "./FingerprintName";

const FingerprintMe = () => {
  const [openPrompt, setOpenPrompt] = useState("prompt");

  const changePrompt = nextPrompt => () => setOpenPrompt(nextPrompt);

  const promptIsOpen = status => status === "prompt";

  const nameIsOpen = status => status === "name";

  return (
    <div className="fingerprint-card">
      <FingerprintPrompt
        open={promptIsOpen(openPrompt)}
        onClose={changePrompt("name")}
      />
      <FingerprintName open={nameIsOpen(openPrompt)} />
    </div>
  );
};

export default FingerprintMe;
