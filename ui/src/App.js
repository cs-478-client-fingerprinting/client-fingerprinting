import React, { useEffect } from "react";
import { Header, FingerprintCard } from "./components";
import { request } from "./utils";
import "./style.sass";

const App = () => {
  useEffect(() => {
    (async () => {
      const res = await request("/fingerprint");
      console.log(res);
    })();
  }, []);

  return (
    <div className="App">
      <Header />
      <FingerprintCard />
    </div>
  );
};

export default App;
