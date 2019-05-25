import { useState, useEffect } from "react";

export const useReveal = trigger => {
  const [reveal, setReveal] = useState(trigger);

  useEffect(() => {
    setReveal(trigger);
  }, [trigger]);

  const close = (reveal = false) => {
    setReveal(reveal);
  };

  return [reveal, close];
};
