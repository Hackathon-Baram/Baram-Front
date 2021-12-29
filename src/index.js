import App from "./App";
import React from "react";
import ReactDOM from "react-dom";
import { RecoilRoot } from "recoil";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'

ReactDOM.render(
  <RecoilRoot>
    <ToastContainer />
    <App />
  </RecoilRoot>,
  document.getElementById("root")
);
