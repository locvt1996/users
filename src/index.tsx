import React from "react";
import ReactDOM from "react-dom/client";
import store from "./store";
import { Provider } from "react-redux/es/exports";

import "antd/dist/reset.css";
import Routers from "./routers";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  // <React.StrictMode>
  <Provider store={store}>
    <Routers />
  </Provider>
  // </React.StrictMode>
);
