import React from "react";
import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import Signup from "./component/signup/signup.js";
import App from "./layout/App.js";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <Routes>
      <Route path="/" element={<Signup />}/>
      <Route path="/app" element={<App />}/>
      </Routes>
    </React.StrictMode>
  </BrowserRouter>
);
