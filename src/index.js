import React from 'react';
import {createRoot} from 'react-dom/client';
import ReactDOM from 'react-dom';
import Rutas from './routes/Rutas';
import RegisterUser from './pages/RegisterUser';
import ListaPacientes from './pages/ListaPacientes';
import RegistrarPaciente from './pages/RegistrarPaciente';
import Menu from './pages/Menu';
import Inicio from './pages/Inicio';
import RegisterPacient from './pages/RegisterPacient';
import GrupoEthnic from './pages/GrupoEthnic';
import AddressForm from './pages/Address';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <Inicio />
  </React.StrictMode>
);

