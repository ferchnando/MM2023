import React, { useState, useEffect } from 'react';
import '../css/RegisterPacient.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import Modal from 'react-modal';
import AddressForm from './Address';
import OccupationForm from './Occupation';
import { API_BASE_URL } from '../config';
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { useAuth } from "../context/Auth";

// Define el elemento de la aplicación principal
Modal.setAppElement('#root');

const baseUrl = API_BASE_URL + 'Person';
const ethnicGroupsUrl = API_BASE_URL + 'ethnic-groups';
const occupationsUrl = API_BASE_URL + 'occupations';
const countriesUrl = API_BASE_URL + 'countries';
const regionsUrl = API_BASE_URL + 'regions';
const addressesUrl = API_BASE_URL + 'addresses';

const Button = ({ handleShowForm }) => (
  <div>
    <button className="btn btn-primary" onClick={handleShowForm}>Create Address</button>
  </div>
);

const RegisterPacient = () => {
  const { user } = useAuth();
  const [ethnicGroupform, ethnicGroupsetForm] = useState({
    id: '',
    name: ''
  });

  const [form, setForm] = useState({
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
  });
  
  const [isAddressModalOpen, setIsAddressModalOpen] = useState(false);
  const [isOccupationModalOpen, setIsOccupationModalOpen] = useState(false);
  const [occupationForm, setOccupationForm] = useState({
    name: ''
  });
  const [ethnicGroups, setEthnicGroups] = useState([]);
  const [selectedEthnicGroup, setSelectedEthnicGroup] = useState(null);
  
  const [occupations, setOccupations] = useState([]);
  const [selectedOccupation, setSelectedOccupation] = useState(null);

  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(null);

  const [regions, setRegions] = useState([]);
  const [selectedRegion, setSelectedRegion] = useState(null);

  const [addresses, setAddresses] = useState([]);
  const [selectedAddress, setSelectedAddress] = useState(null);

  useEffect(() => {
    const fetchEthnicGroups = async () => {
      try {
        const response = await axios.get(ethnicGroupsUrl, {
          headers: {
            Authorization: user
          }
        });
        console.log(response.data);
        setEthnicGroups(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    const fetchOcupations = async () => {
      try {
        const response = await axios.get(occupationsUrl, {
          headers: {
            Authorization: user
          }
        });
        console.log(response.data);
        setOccupations(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    const fetchCountries = async () => {
      try {
        const response = await axios.get(countriesUrl, {
          headers: {
            Authorization: user
          }
        });
        console.log(response.data);
        setCountries(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    const fetchRegions = async () => {
      try {
        const response = await axios.get(regionsUrl, {
          headers: {
            Authorization: user
          }
        });
        console.log(response.data);
        setRegions(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    const fetchAddresses = async () => {
      try {
        const response = await axios.get(addressesUrl, {
          headers: {
            Authorization: user
          }
        });
        console.log(response.data);
        setAddresses(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchCountries();
    fetchRegions();
    fetchAddresses();
    fetchEthnicGroups();
    fetchOcupations();
  }, [isOccupationModalOpen, isAddressModalOpen]);

  const handleEthnicGroupChange = (event, value) => {
    setSelectedEthnicGroup(value);
  };
  const handleOccupationChange = (event, value) => {
    setSelectedOccupation(value);
  };

  const handleCountryChange = (event, value) => {
    setSelectedCountry(value);
  };

  const handleRegionChange = (event, value) => {
    setSelectedRegion(value);
  };

  const handleAddressChange = (event, value) => {
    setSelectedAddress(value);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const registPerson = async () => {
    try {
      const response = await axios.post(baseUrl, form);
      if (response.data.length > 0) {
        // Success
      } else {
        alert('No se registró el Paciente');
      }
    } catch (error) {
      console.log(error);
    }
  };

  /*const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };*/

  const openAddressModal = () => {
    setIsAddressModalOpen(true);
  };
  
  const closeAddressModal = () => {
    setIsAddressModalOpen(false);
  };
  
  const openOccupationModal = () => {
    setIsOccupationModalOpen(true);
  };
  
  const closeOccupationModal = () => {
    setIsOccupationModalOpen(false);
  };

  const handleOccupationFormSubmit = async (formData) => {
    // Realizar las acciones necesarias con los datos del formulario
    closeOccupationModal();
  };

  return (
    <div className="form-group">
      <h1>Person and Appointments</h1>
      <label>Identification: </label>
      <input
        type="text"
        className="form-control"
        name="identification"
        onChange={handleChange}
      />
      <br />
      <label>Firstname: </label>
      <input
        type="text"
        className="form-control"
        name="firstname"
        onChange={handleChange}
      />
      <br />
      <label>Secondname: </label>
      <input
        type="text"
        className="form-control"
        name="secondname"
        onChange={handleChange}
      />
      <br />
      <label>Paternal Lastname: </label>
      <input
        type="text"
        className="form-control"
        name="paternallastname"
        onChange={handleChange}
      />
      <br />
      <label>Maternal Lastname: </label>
      <input
        type="text"
        className="form-control"
        name="maternalLastname"
        onChange={handleChange}
      />
      <br />
      <label>Gender:</label>
      <select
        className="form-control"
        name="gender"
        onChange={handleChange}
      >
        <option value="" disabled>Select Gender</option>
        <option value="M">Male</option>
        <option value="F">Female</option>
      </select>
      <br />
      <label>Ethnic Group:</label>
      <Autocomplete
        options={ethnicGroups}
        getOptionLabel={(ethnicGroup) => ethnicGroup.name}
        value={selectedEthnicGroup}
        onChange={handleEthnicGroupChange}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Ethnic Group"
            variant="outlined"
          />
        )}
      />
      <label>Occupation:</label>
      <Autocomplete
        options={occupations}
        getOptionLabel={(occupation) => occupation.name}
        value={selectedOccupation}
        onChange={handleOccupationChange}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Occupation"
            variant="outlined"
          />
        )}
      />
      <button className="btn btn-primary" onClick={openOccupationModal}>Add Occupation</button>
      <Modal
        isOpen={isOccupationModalOpen}
        onRequestClose={closeOccupationModal}
        contentLabel="Occupation Modal"
        ariaHideApp={false}
      >
        <h2>Add Occupation</h2>
        <OccupationForm onSubmit={handleOccupationFormSubmit} />
        <button onClick={closeOccupationModal}>Cancel</button>
      </Modal>
      <br />
      <label>Birthdate:</label>
      <input
        type="date"
        className="form-control"
        name="birthdate"
        onChange={handleChange}
      />
      <br />
      <div>
        <h4>Address</h4>
        <label>Country:</label>
        <Autocomplete
        options={countries}
        getOptionLabel={(country) => country.name}
        value={selectedCountry}
        onChange={handleCountryChange}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Country"
            variant="outlined"
          />
        )}
      />
        <label>Region:</label>
        <Autocomplete
          options={regions}
          getOptionLabel={(region) => region.name}
          value={selectedRegion}
          onChange={handleRegionChange}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Region"
              variant="outlined"
              required />
          )}
        />
        <label>Address:</label>
        <Autocomplete
          options={addresses}
          getOptionLabel={(address) => address.mainStreet}
          value={selectedAddress}
          onChange={handleAddressChange}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Address"
              variant="outlined"
              required />
          )}
        required />
        {isAddressModalOpen && <AddressForm />}
          <Button handleShowForm={openAddressModal} />

          <Modal
            isOpen={isAddressModalOpen}
            onRequestClose={closeAddressModal}
            contentLabel="Address Form Modal"
          >
            <h2>Address Form</h2>
            <AddressForm />
            <button onClick={closeAddressModal}>Close</button>
          </Modal>
        <br />
      </div>
      <button className="btn btn-primary" onClick={registPerson}>Create</button>
    </div>
  );
};

export default RegisterPacient;
