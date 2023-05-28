import React, { useState } from 'react';

const AddressForm = () => {
  const [formData, setFormData] = useState({
    mainStreet: '',
    numbering: '',
    intersection: '',
    reference: '',
    postalCode: '',
    city: '',
    district: '',
    region: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Resetear el formulario
    setFormData({
      mainStreet: '',
      numbering: '',
      intersection: '',
      reference: '',
      postalCode: '',
      city: '',
      district: '',
      region: ''
    });
  };

  return (
    <div>
      <h2>Ingresar información de dirección</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="mainStreet">Calle principal:</label>
        <input type="text" id="mainStreet" name="mainStreet" value={formData.mainStreet} onChange={handleChange} required />

        <label htmlFor="numbering">Número:</label>
        <input type="text" id="numbering" name="numbering" value={formData.numbering} onChange={handleChange} />

        <label htmlFor="intersection">Intersección:</label>
        <input type="text" id="intersection" name="intersection" value={formData.intersection} onChange={handleChange} />

        <label htmlFor="reference">Referencia:</label>
        <input type="text" id="reference" name="reference" value={formData.reference} onChange={handleChange} />

        <label htmlFor="postalCode">Código postal:</label>
        <input type="text" id="postalCode" name="postalCode" value={formData.postalCode} onChange={handleChange} />

        <label htmlFor="city">Ciudad:</label>
        <input type="text" id="city" name="city" value={formData.city} onChange={handleChange} required />

        <label htmlFor="district">Distrito:</label>
        <input type="text" id="district" name="district" value={formData.district} onChange={handleChange} required />

        <label htmlFor="region">Región:</label>
        <input type="text" id="region" name="region" value={formData.region} onChange={handleChange} required />

        <button type="submit">Guardar</button>
      </form>
    </div>
  );
};

export default AddressForm;
