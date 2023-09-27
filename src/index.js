import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import App from "./Componets/App/App.jsx";
import "./Styles/index.css";
import { store } from "./features/store";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
  <BrowserRouter>
  
  <App />
  
  </BrowserRouter>
  </Provider>
  );
