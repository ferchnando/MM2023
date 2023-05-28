import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Inicio from '../pages/Inicio';
import RegisterPacient from '../pages/RegisterPacient';
import { AuthProvider, RequireAuth } from "../context/Auth";

function Rutas() {
  return (
    <Routes>
      <Route path="/" element={<Inicio />} />
      <Route element={<RequireAuth />}>
        <Route path="/NewPatient" element={<RegisterPacient />} />
      </Route>
    </Routes>
  );
}

export default Rutas;
