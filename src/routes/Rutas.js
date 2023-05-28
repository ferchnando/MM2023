import React from "react";
import { BrowserRouter as Router, Switch, Route,  } from "react-router-dom";
import Inicio from "../pages/Inicio";
//import Menu from "../pages/Menu";
//import RegistrarPaciente from "../pages/RegistrarPaciente";
import RegisterPacient from "../pages/RegisterPacient";


function Rutas() {
  return (
    
    <Router>
      <Switch>
        <Route exact path="/" component={Inicio}/>
        <Route exact path="../RegisterPacient" component={RegisterPacient}/>
      </Switch>
    </Router>
  );
}

export default Rutas;
