// components/AccountManagerDashboard.js
import React, { useState } from 'react';

function AccountManagerDashboard() {
  const [requests, setRequests] = useState([]);
  const [request, setRequest] = useState('');

  const handleSubmitRequest = (e) => {
    e.preventDefault();
    const newRequest = {
      details: request,
      status: 'Pending',
      id: requests.length + 1,
    };
    setRequests([...requests, newRequest]);
    setRequest('');
  };

  const handleUpdateStatus = (id, status) => {
    const updatedRequests = requests.map((req) =>
      req.id === id ? { ...req, status: status } : req
    );
    setRequests(updatedRequests);
  };

  return (
    <div className="dashboard">
      <h2>Account Manager Dashboard</h2>

      {/* Submit Training Request */}
      <form onSubmit={handleSubmitRequest}>
        <textarea
          value={request}
          onChange={(e) => setRequest(e.target.value)}
          placeholder="Enter training request details"
          required
        ></textarea>
        <button type="submit">Submit Training Request</button>
      </form>

      {/* List of Training Requests */}
      <h3>Training Requests</h3>
      <ul>
        {requests.map((req) => (
          <li key={req.id}>
            Request {req.id}: {req.details} - Status: {req.status}
            {req.status === 'Pending' && (
              <button onClick={() => handleUpdateStatus(req.id, 'Approved')}>
                Approve
              </button>
            )}
            {req.status === 'Approved' && (
              <button onClick={() => handleUpdateStatus(req.id, 'Completed')}>
                Mark as Completed
              </button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AccountManagerDashboard;
