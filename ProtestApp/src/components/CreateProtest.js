import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createProtest } from '../lib/api';

function CreateProtest() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    location: '',
    date: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newProtest = await createProtest(formData);
      navigate(`/protests/${newProtest.id}`);
    } catch (error) {
      console.error('Failed to create protest:', error);
    }
  };

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="create-protest-form">
      <h2>Create New Protest</h2>
      <div>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          name="title"
          value={formData.title}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="location">Location</label>
        <input
          type="text"
          id="location"
          name="location"
          value={formData.location}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="date">Date</label>
        <input
          type="datetime-local"
          id="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit">Create Protest</button>
    </form>
  );
}

export default CreateProtest; 