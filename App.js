import React from "react";
import { Provider } from "react-redux";
import store from "./src/reducer/store/store";

import MainScreen from "./src/pages/mainScreen";

export default function App() {
  return (
    <Provider store={store}>
      <MainScreen />
    </Provider>
  );
}
