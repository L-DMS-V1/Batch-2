import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchRequests, updateRequest } from '../api/api';
import './styles/EditRequest.css';

function EditRequest() {
  const { id } = useParams();
  const [formData, setFormData] = useState({ program: '', position: '', status: '', date: '' });
  const navigate = useNavigate();

  useEffect(() => {
    const loadRequest = async () => {
      const request = (await fetchRequests()).find((req) => req.id === parseInt(id, 10));
      setFormData(request);
    };
    loadRequest();
  }, [id]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateRequest(id, formData);
    navigate('/');
  };

  return (
    <div className="edit-request">
      <h1>Edit Request</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Program:
          <input type="text" name="program" value={formData.program} onChange={handleChange} required />
        </label>
        <label>
          Position:
          <input type="text" name="position" value={formData.position} onChange={handleChange} required />
        </label>
        <label>
          Status:
          <select name="status" value={formData.status} onChange={handleChange}>
            <option value="PENDING">PENDING</option>
            <option value="COMPLETED">COMPLETED</option>
          </select>
        </label>
        <label>
          Date:
          <input type="date" name="date" value={formData.date} onChange={handleChange} required />
        </label>
        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
}

export default EditRequest;
