import React, { useState } from "react";
import FingerprintWarning from "./FingerprintWarning";
import "./style.sass";
import FingerprintName from "./FingerprintName";

const Prompt = { NAME: "NAME", WARNING: "WARNING" };

const FingerprintMe = ({ history }) => {
  const [openPrompt, setOpenPrompt] = useState(Prompt.WARNING);

  const changePrompt = nextPrompt => () => setOpenPrompt(nextPrompt);

  const promptIsOpen = status => status === Prompt.WARNING;

  const nameIsOpen = status => status === Prompt.NAME;

  const navigateToCollection = name => history.push("/collection", { name });

  return (
    <div className="fingerprint-me">
      <FingerprintWarning
        open={promptIsOpen(openPrompt)}
        onClose={changePrompt(Prompt.NAME)}
      />
      <FingerprintName
        open={nameIsOpen(openPrompt)}
        onClose={navigateToCollection}
      />
    </div>
  );
};

export default FingerprintMe;
