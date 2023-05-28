import React, { Component } from 'react';
import '../css/Login.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import Cookies from 'universal-cookie';
import { useHistory } from "react-router-dom";

const baseUrl='http://localhost:3000/api/v1/ethnic-groups';
const cookies = new Cookies();


class GrupoEthnic extends Component {
    state={
        form:{
            name: ''
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

    registerEthnic=async()=>{
       await axios.post(baseUrl,{name: this.state.form.name})
        .then(response=>{
            return response.data;
          
        })
        .then(response=>{
            if(response.length>0){
                alert('Se creo el grupo');
             
                
            }else{
                alert('Error al crear el grupo');
                //window.location = '/RegisterPacient';
            }
        })
        .catch(error=>{
            console.log(error);
        }) 
    }


    render() {
        return (
    <div className="containerPrincipal">
        <div className="containerSecundario">
          <div className="form-group">
            <h1>Crear Grupo Etnico</h1>
            <label>name: </label>
            <br />
            <input
              type="text"
              className="form-control"
              name="name"
              onChange={this.handleChange}
            />
            <br />
            <button className="btn btn-primary" onClick={()=> this.registerEthnic()}>Crear Grupo</button>
          </div>
        </div>
      </div>
        );
    }
}

export default GrupoEthnic;