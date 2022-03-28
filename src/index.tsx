import { Suspense } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "./i18n/config";

ReactDOM.render(
  <Suspense fallback={<div>Loading...</div>}>
    <App />
  </Suspense>,
  document.getElementById("root")
);
