import { useState, useEffect } from "react";

export const useMount = open => {
  const [mount, setMount] = useState(true);
  const exit = () => setMount(false);

  useEffect(() => {
    setMount(open);
  }, [open]);

  return [mount, exit];
};
