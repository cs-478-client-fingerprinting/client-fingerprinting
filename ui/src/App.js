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
    <Navigation>
      <Router>
        <Route exact path="/" component={FingerprintMe} />
        <Route path="/collection" component={FingerprintCollection} />
      </Router>
    </Navigation>
  </Provider>
);

export default App;
