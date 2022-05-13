import React from "react";
import { registerRootComponent } from "expo";
import { Provider } from "react-redux";
import store from "./state/store/store";

import App from "./App";

window.store = store;

const ConnectedApp = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

registerRootComponent(ConnectedApp);
