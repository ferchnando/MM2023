import React from "react";
import { BrowserRouter as Router, Switch, Route,  } from "react-router-dom";
import Inicio from "../pages/Inicio";
import Menu from "../pages/Menu";


function Rutas() {
  return (
    
    <Router>
      <Switch>
        <Route exact path="/" component={Inicio}/>
        <Route exact path="/menu" component={Menu}/>
      </Switch>
    </Router>
  );
}

export default Rutas;
