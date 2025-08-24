import { createRoot } from "react-dom";
import { StrictMode } from "react";
import "./index.css";
import App from "./App.jsx";

/* eslint-disable-next-line react/no-deprecated */
// ReactDOM.render(<App />, document.getElementById("root"));

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
