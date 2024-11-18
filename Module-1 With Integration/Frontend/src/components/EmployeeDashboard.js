// components/EmployeeDashboard.js
import React, { useState } from 'react';

function EmployeeDashboard() {
  const [feedback, setFeedback] = useState('');
  const course = 'React Basics'; // Removed setCourse

  const [status, setStatus] = useState('Not Started');

  const handleSubmitFeedback = (e) => {
    e.preventDefault();
    // Submit feedback to the backend
    alert('Feedback submitted successfully!');
    setFeedback('');
  };

  const handleStartCourse = () => {
    setStatus('In Progress');
  };

  const handleCompleteCourse = () => {
    setStatus('Completed');
  };

  return (
    <div className="dashboard">
      <h2>Employee Dashboard</h2>
      <h3>Assigned Course: {course}</h3>
      <p>Status: {status}</p>

      <button onClick={handleStartCourse} disabled={status !== 'Not Started'}>
        Start Course
      </button>
      <button onClick={handleCompleteCourse} disabled={status !== 'In Progress'}>
        Complete Course
      </button>

      {status === 'Completed' && (
        <div>
          <h3>Submit Feedback</h3>
          <form onSubmit={handleSubmitFeedback}>
            <textarea
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              placeholder="Enter your feedback"
              required
            ></textarea>
            <button type="submit">Submit Feedback</button>
          </form>
        </div>
      )}
    </div>
  );
}

export default EmployeeDashboard;
