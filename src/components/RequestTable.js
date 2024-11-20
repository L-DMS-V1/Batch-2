import React, { useEffect, useState } from 'react';
import { fetchRequests, deleteRequest } from '../api/api';
import './styles/RequestTable.css';

const RequestTable = ({ onEdit }) => {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    fetchRequests()
      .then((data) => setRequests(data))
      .catch((error) => console.error(error));
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this request?')) {
      try {
        await deleteRequest(id);
        setRequests((prev) => prev.filter((req) => req.id !== id));
        alert('Request deleted successfully!');
      } catch (error) {
        console.error(error);
        alert('Failed to delete request');
      }
    }
  };

  return (
    <div className="table-container">
      <h2>Training Requests</h2>
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
          {requests.length > 0 ? (
            requests.map((request) => (
              <tr key={request.id}>
                <td>{request.id}</td>
                <td>{request.program}</td>
                <td>{request.position}</td>
                <td>{request.status}</td>
                <td>{request.date}</td>
                <td>
                  <button
                    onClick={() => onEdit(request.id)}
                    className="btn-edit"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(request.id)}
                    className="btn-delete"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6" style={{ textAlign: 'center' }}>
                No requests found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default RequestTable;
