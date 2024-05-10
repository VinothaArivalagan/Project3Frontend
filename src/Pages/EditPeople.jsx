import React, { useState, useEffect } from 'react';
import {  useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


const EditVolunteer = () => {
    const navigate = useNavigate()
  const { id } = useParams();
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    phone: '',
    email: ''
  });

  useEffect(() => {
    fetchVolunteer();
  }, []);

  const fetchVolunteer = async () => {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/volunteer/${id}`);
      if (response.ok) {
        const volunteerData = await response.json();
        setFormData(volunteerData);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/volunteer/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      if (response.ok) {
        navigate('/volunteer'); // Redirect to volunteer list after successful edit
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h2>Edit Volunteer</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={formData.name} onChange={handleChange} />
        </label>
        <label>
          Age:
          <input type="number" name="age" value={formData.age} onChange={handleChange} />
        </label>
        <label>
          Phone:
          <input type="text" name="phone" value={formData.phone} onChange={handleChange} />
        </label>
        <label>
          Email:
          <input type="email" name="email" value={formData.email} onChange={handleChange} />
        </label>
        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
};

export default EditVolunteer;