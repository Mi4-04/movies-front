import { Suspense } from "react";
import ReactDOM from "react-dom";
import "./index.css";

import "./i18n/config";

ReactDOM.render(
  <Suspense fallback={<div>Loading...</div>}>asd</Suspense>,
  document.getElementById("root")
);
