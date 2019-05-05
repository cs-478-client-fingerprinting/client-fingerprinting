import React, { useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { FingerprintMe, Navigation, FingerprintCollection } from "./components";
import { request } from "./utils";

const App = () => {
  useEffect(() => {
    (async () => {
      const res = await request("/fingerprint");
      console.log(res);
    })();
  }, []);

  return (
    <Router>
      <Navigation />
      <Route exact path="/" component={FingerprintMe} />
      <Route path="/collection" component={FingerprintCollection} />
    </Router>
  );
};

export default App;
