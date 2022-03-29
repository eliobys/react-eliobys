import React from "react";
import ReactDOM from "react-dom";

import { App } from "./App.jsx";
import reportWebVitals from "./reportWebVitals";
import { Usuario } from "./componentes/Usuario.jsx";
import { NavU } from "./componentes/NavU.jsx";
import { Tiposervicio } from "./componentes/Tiposervicio";
import { Servicio } from "./componentes/Servicio";
import { Aceptarservicio } from "./componentes/aceptar-servicio";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <ToastContainer />
     <NavU />
      <Routes>
        <Route path="/*" element={<App />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
