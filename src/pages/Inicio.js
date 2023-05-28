
import React, { Component } from 'react';
import '../css/Login.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import Cookies from 'universal-cookie';
import { useHistory } from "react-router-dom";

const baseUrl='http://localhost:3000/api/v1/loginUser';
const cookies = new Cookies();


class Inicio extends Component {

    
    state={
        form:{
            email: '',
            password: '',
            gethash:'x'
       
        }
    }

    handleChange=async e=>{
        await this.setState({
            form:{
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        });
    }

    iniciarSesion=async()=>{
       await axios.post(baseUrl,{email: this.state.form.email, password:this.state.form.password, gethash:this.state.form.gethas})
        .then(response=>{
            return response.data;
          
        })
        .then(response=>{
            if(response.length>0){
                var respuesta=response[0];
                cookies.set('name', respuesta.name, {path: "/"});
                cookies.set('surname', respuesta.surname, {path: "/"});
                cookies.set('email', respuesta.email, {path: "/"});
                alert(`Bienvenido ${respuesta.nombre} ${respuesta.email}`);
                
            }else{
                alert('El usuario o la contraseña no son correctos');
                window.location = '/RegisterPacient';
            }
        })
        .catch(error=>{
            console.log(error);
        }) 
    }

    componentDidMount() {
        if(cookies.get('email')){
          //window.location.href="../menu";
        }
    }
    

    render() {
        return (
    <div className="containerPrincipal">
        <div className="containerSecundario">
          <div className="form-group">
            <label>Email: </label>
            <br />
            <input
              type="text"
              className="form-control"
              name="email"
              onChange={this.handleChange}
            />
            <br />
            <label>Contraseña: </label>
            <br />
            <input
              type="password"
              className="form-control"
              name="password"
              onChange={this.handleChange}
            />
            <br />
            <button className="btn btn-primary" onClick={()=> this.iniciarSesion()}>Iniciar Sesión</button>
          </div>
        </div>
      </div>
        );
    }
}

export default Inicio;