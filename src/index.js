import React from 'react';
import ReactDOM from 'react-dom';
import Rutas from './routes/Rutas';
import RegisterUser from './pages/RegisterUser';
import ListaPacientes from './pages/ListaPacientes';
import RegistrarPaciente from './pages/RegistrarPaciente';
import Menu from './pages/Menu';
import Inicio from './pages/Inicio';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Rutas />
  </React.StrictMode>
);

