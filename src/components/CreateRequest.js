import React, { useState } from 'react';
import { createRequest } from '../api/api';
import './styles/CreateRequest.css';

const CreateRequest = () => {
  const [formData, setFormData] = useState({
    program: '',
    position: '',
    status: 'PENDING',
    date: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createRequest(formData);
      alert('Request created successfully!');
      setFormData({ program: '', position: '', status: 'PENDING', date: '' });
    } catch (error) {
      console.error(error);
      alert('Failed to create request');
    }
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <h2>Create New Request</h2>
      <label>
        Program:
        <input
          type="text"
          name="program"
          value={formData.program}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Position:
        <input
          type="text"
          name="position"
          value={formData.position}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Date:
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          required
        />
      </label>
      <button type="submit" className="btn-submit">
        Submit
      </button>
    </form>
  );
};

export default CreateRequest;
