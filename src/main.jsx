import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { StudentContextProvider } from "./context/StudentContext.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <StudentContextProvider>
      <App />
    </StudentContextProvider>
  </React.StrictMode>
);
