import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchRequests, deleteRequest } from '../api/api';
import './styles/Dashboard.css';

function Dashboard() {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    const loadRequests = async () => {
      const data = await fetchRequests();
      setRequests(data);
    };
    loadRequests();
  }, []);

  const handleDelete = async (id) => {
    await deleteRequest(id);
    setRequests(requests.filter((req) => req.id !== id));
  };

  return (
    <div className="dashboard">
      <h1>Training Requests</h1>
      <Link to="/create-request" className="button">Create New Request</Link>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Program</th>
            <th>Position</th>
            <th>Status</th>
            <th>Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {requests.map((request) => (
            <tr key={request.id}>
              <td>{request.id}</td>
              <td>{request.program}</td>
              <td>{request.position}</td>
              <td>{request.status}</td>
              <td>{request.date}</td>
              <td>
                <Link to={`/edit-request/${request.id}`}>Edit</Link>
                <button onClick={() => handleDelete(request.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Dashboard;
