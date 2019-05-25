import { useState, useEffect } from "react";
import { sleep } from "./sleep";
import { DURATION } from "../components/fingerprint-me/constants";

export const useReveal = trigger => {
  const [reveal, setReveal] = useState(false);

  useEffect(() => {
    setReveal(trigger);
  }, [trigger]);

  const close = callback => async e => {
    e && e.preventDefault();
    e && e.stopPropagation();
    setReveal(false);
    await sleep(DURATION);
    callback();
  };

  return [reveal, close];
};
