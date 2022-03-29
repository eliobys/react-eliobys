import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Usuario } from "./componentes/Usuario.jsx";
import { Tiposervicio } from "./componentes/Tiposervicio";
import { Servicio } from "./componentes/Servicio";
import { Aceptarservicio } from "./componentes/aceptar-servicio";


 export function App() {
  return (
    <Routes>
  
      <Route path="/usuario" element={<Usuario />} />
      <Route path="/tipo_servicio" element={<Tiposervicio />} />
      <Route path="/servicio" element={<Servicio />} />
      <Route path="/aceptar-servicio" element={<Aceptarservicio />} />
     
    </Routes>
  );
}


