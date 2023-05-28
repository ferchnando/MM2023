
import React, { Component, useState } from 'react';
import '../css/RegisterPacient.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import Modal from 'react-modal';
import AddressForm from './Address';
import { API_BASE_URL } from '../config';
//import {Routes, Route, useNavigate} from 'react-router-dom';
import { Link } from "react-router-dom";
const baseUrl = API_BASE_URL+'Person';

const Button = ({ handleShowForm }) => (
  <div>
    <button className="btn btn-primary" onClick={handleShowForm}>Create New Address</button>
  </div>
);

class RegisterPacient extends Component {
  state = {
    form: {
      identification: '',
      firstname: '',
      secondname: '',
      paternallastname: '',
      maternalLastname: '',
      gender: '',
      ethnicGroup: [],
      occupation: '',
      birthdate: '',
      maritalStatus: '',
      phonenumber: '',
      address: [],
      educationalLevel: '',
      related: '',
      relationship: '',
      image: ''
    },
    isModalOpen: false
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState((prevState) => ({
      form: {
        ...prevState.form,
        [name]: value
      }
    }));
  };

  registPerson = async () => {
    try {
      const response = await axios.post(baseUrl, this.state.form);
      if (response.data.length > 0) {
        // Success
      } else {
        alert('No se registró el Paciente');
      }
    } catch (error) {
      console.log(error);
    }
  };

  openModal = () => {
    this.setState({ isModalOpen: true });
  };

  closeModal = () => {
    this.setState({ isModalOpen: false });
  };

    render() {
    return (
      <div className="form-group">
        <h1>CREAR PACIENTE</h1>
        <label>Identification: </label>
        <br />
        <input
          type="text"
          className="form-control"
          name="identification"
          onChange={this.handleChange}
        />
            <br />
            <label>firstname: </label>
            <br />
            <input
              type="text"
              className="form-control"
              name="firstname"
              onChange={this.handleChange}
            />
            <br />
            <label>SecondName: </label>
            <br />
            <input
              type="text"
              className="form-control"
              name="secondname"
              onChange={this.handleChange}
            />
            <br />
            <label>paternallastname: </label>
            <br />
            <input
              type="text"
              className="form-control"
              name="paternallastname:"
              onChange={this.handleChange}
            />
            <br />

            <br />
            <label>maternalLastname: </label>
            <br />
            <input
              type="text"
              className="form-control"
              name="paternallastname:"
              onChange={this.handleChange}
            />
            <br />

            <br />
            <label>gender:</label>
            <br />
            <select 
            type="text"  required>
            <option name=" ">M</option>
            <option name="">F</option>
            onChange={this.handleChange}
            </select>
            <br />

            <br />
            <label>ethnicGroup:</label>
            <button className="btn btn-primary" >Crear Grupo etnico</button>
            <br />
            <input
              type="text"
              className="form-control"
              name="paternallastname:"
              onChange={this.handleChange}
            />
            <br />

            <br />
            <label>OCUPATION:</label>
            <br />
            <input
              type="text"
              className="form-control"
              name="paternallastname:"
              onChange={this.handleChange}
            />
            <br />

            <br />
            <label>birthdate::</label>
            <br />
            <input
              type="date"
              className="form-control"
              name="paternallastname:"
              onChange={this.handleChange}
            />
            <br />

            <br />
            <div>
            <label>DIRECCION:</label>
          {this.state.isModalOpen && <AddressForm />}
          <Button handleShowForm={this.openModal} />

          <Modal
            isOpen={this.state.isModalOpen}
            onRequestClose={this.closeModal}
            contentLabel="Address Form Modal"
          >
            <h2>Address Form</h2>
            <AddressForm />
            <button onClick={this.closeModal}>Close</button>
          </Modal>
            <br />
            <label>calle </label>
            <input
              type="text"
              className="form-control"
              name="mainstreet:"
              onChange={this.handleChange}
            />
            <label>district: </label>
            <input
              type="text"
              className="form-control"
              name="district"
              onChange={this.handleChange}
            />
            <label>region: </label>
            <input
              type="text"
              className="form-control"
              name="region"
              onChange={this.handleChange}
            />
            <br />
            </div>
            <button className="btn btn-primary" onClick={()=> this.registPerson()}>Registrar Persona</button>
          </div>
        );
    }
}



export default RegisterPacient;