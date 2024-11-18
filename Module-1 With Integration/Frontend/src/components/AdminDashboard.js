// components/AdminDashboard.js
import React, { useState } from 'react';

function AdminDashboard() {
  const [course, setCourse] = useState('');
  const [employees, setEmployees] = useState([]);
  const [progress, setProgress] = useState({});
 // Removed setFeedback as it's unused

  const handleAssignCourse = (e) => {
    e.preventDefault();
    const selectedEmployees = e.target.employees.value.split(',');
    const newProgress = { ...progress };

    selectedEmployees.forEach((employee) => {
      newProgress[employee] = { course: course, status: 'Not Started' };
    });

    setProgress(newProgress);
    setCourse('');
  };

  const handleAddEmployee = (e) => {
    e.preventDefault();
    const newEmployee = e.target.employeeName.value;
    setEmployees([...employees, newEmployee]);
    e.target.employeeName.value = '';
  };

  const handleUpdateProgress = (employee, status) => {
    const updatedProgress = { ...progress };
    updatedProgress[employee].status = status;
    setProgress(updatedProgress);
  };

  const handleViewFeedback = (employee) => {
    alert(`Feedback from ${employee}: No feedback yet`);
  };

  return (
    <div className="dashboard">
      <h2>Admin Dashboard</h2>

      {/* Add Employee */}
      <form onSubmit={handleAddEmployee}>
        <input type="text" name="employeeName" placeholder="Add Employee" required />
        <button type="submit">Add Employee</button>
      </form>

      {/* Assign Course */}
      <form onSubmit={handleAssignCourse}>
        <input
          type="text"
          value={course}
          onChange={(e) => setCourse(e.target.value)}
          placeholder="Course Name"
          required
        />
        <select name="employees" multiple>
          {employees.map((employee, index) => (
            <option key={index} value={employee}>
              {employee}
            </option>
          ))}
        </select>
        <button type="submit">Assign Course</button>
      </form>

      {/* Track Progress */}
      <h3>Track Employee Progress</h3>
      <ul>
        {employees.map((employee, index) => (
          <li key={index}>
            {employee}: {progress[employee]?.course || 'No course assigned'} -{' '}
            {progress[employee]?.status || 'No progress'}
            <button onClick={() => handleUpdateProgress(employee, 'In Progress')}>Start</button>
            <button onClick={() => handleUpdateProgress(employee, 'Completed')}>Complete</button>
            <button onClick={() => handleViewFeedback(employee)}>View Feedback</button>
          </li>
        ))}
      </ul>
    </div>
  );
}




export default AdminDashboard;
