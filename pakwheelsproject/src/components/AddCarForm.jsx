import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { AddCar } from '../features/cars/carsSlice';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';

function AddCarForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    model: '',
    year: '',
    color: '',
    price: '',
    location: '',
    image: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(AddCar(formData));
    setFormData({
      name: '',
      model: '',
      year: '',
      color: '',
      price: '',
      location: '',
      image: ''
    });
    navigate('/cars');
  };

  return (
    <>
      <Navbar />

      <div className="max-w-xl mx-auto mt-10 bg-white shadow-md p-6 rounded-xl">
      <h2 className="text-2xl font-semibold mb-6 text-center text-gray-800">Add New Car</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
        type="text"
        name="name"
        placeholder="Car Name"
        value={formData.name}
        onChange={handleChange}
        className="w-full border p-3 rounded"
        required
      />

    <input
      type="text"
      name="model"
      placeholder="Model"
      value={formData.model}
      onChange={handleChange}
      className="w-full border p-3 rounded"
  
    />

    <input
      type="number"
      name="year"
      placeholder="Year"
      value={formData.year}
      onChange={handleChange}
      className="w-full border p-3 rounded"
      
    />

  <input
    type="text"
    name="color"
    placeholder="Color"
    value={formData.color}
    onChange={handleChange}
    className="w-full border p-3 rounded"
    
  />

<input
  type="number"
  name="price"
  placeholder="Price"
  value={formData.price}
  onChange={handleChange}
  className="w-full border p-3 rounded"
/>

 <input
  type="text"
  name="location"
  placeholder="Location"
  value={formData.location}
  onChange={handleChange}
  className="w-full border p-3 rounded"
/>

<input
type="url"
name="image"
placeholder="Image URL (optional)"
value={formData.image}
onChange={handleChange}
className="w-full border p-3 rounded"
  />

  <button
  type="submit"
  className="w-full bg-blue-600 text-white py-3 font-bold rounded hover:bg-blue-700 transition"
  >
    Add Car
  </button>
</form>
</div>
</>
);
}

export default AddCarForm;
