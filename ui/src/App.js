import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { FingerprintMe, Navigation, FingerprintCollection } from "./components";
import rootReducer from "./redux";
import { composeWithDevTools } from "redux-devtools-extension";

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

const App = () => (
  <Provider store={store}>
    <Router>
      <Navigation />
      <Route exact path="/" component={FingerprintMe} />
      <Route path="/collection" component={FingerprintCollection} />
    </Router>
  </Provider>
);

export default App;
