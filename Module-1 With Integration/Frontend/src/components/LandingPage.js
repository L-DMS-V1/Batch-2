import React, { useState } from 'react';
import axios from 'axios'; // Import axios for making API calls

function LandingPage({ onLogin }) {
  const [isLoginPage, setIsLoginPage] = useState(true); // Toggle between login and signup
  const [error, setError] = useState(''); // To handle and display errors

  const handleSwitch = () => {
    setIsLoginPage(!isLoginPage); // Switch between login and signup
    setError(''); // Clear error on page switch
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const username = e.target.username?.value;
    const password = e.target.password?.value;
    const confirmPassword = e.target.confirmPassword ? e.target.confirmPassword.value : '';
    const fullName = e.target.fullName ? e.target.fullName.value : '';
    const email = e.target.email ? e.target.email.value : '';

    if (!username || !password) {
      setError('Please fill out all required fields');
      return;
    }

    // If it's signup, check password confirmation
    if (!isLoginPage && password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    try {
      if (isLoginPage) {
        // Login request
        const response = await axios.post('http://localhost:8081/api/auth/login', {
          username,
          password,
        });
        const { jwt, role } = response.data;

        // Redirect to corresponding page based on role
        if (role === 'ADMIN') {
          window.location.href = '/AdminDashboard';
        } else if (role === 'EMPLOYEE') {
          window.location.href = '/EmployeeDashboard';
        } else if (role === 'MANAGER') {
          window.location.href = '/AccountManagerDashboard';
        }

        onLogin(jwt); // Handle successful login (store JWT or user info)
        alert('Login successful');
      } else {
        // Signup request
        await axios.post('http://localhost:8081/api/auth/register', {
          username,
          password,
          fullName,
          email,
          role: e.target.role.value.toUpperCase(),
        });
        alert('Signup successful');
        setIsLoginPage(true); // After signup, show login page
      }
      setError(''); // Clear any previous error
    } catch (error) {
      setError(isLoginPage ? 'Login failed. Please check your credentials.' : 'Signup failed. Please try again.');
    }
  };

  return (
    <div className="landing-page">
      <nav className="navbar">
        <h1>Learning & Development</h1>
        <div>
          <button className="nav-btn" onClick={handleSwitch}>
            {isLoginPage ? 'Signup' : 'Login'}
          </button>
        </div>
      </nav>

      <div className="center-content">
        <h1 className="welcome-title">Welcome to Learning and Development</h1>
        <p className="bio-text">
          Our Learning and Development Management platform is designed to empower employees and managers alike.
          We believe that continuous growth and education are the keys to success in today's dynamic work environment.
        </p>

        <form onSubmit={handleSubmit} className="login-signup-form">
          <h2>{isLoginPage ? 'Login' : 'Sign Up'}</h2>

          {error && <p className="error-message">{error}</p>}

          {!isLoginPage && (
            <>
              <input type="text" name="fullName" placeholder="Full Name" required />
              <input type="email" name="email" placeholder="Email" required />
              <input type="text" name="username" placeholder="Username" required />
              <input type="password" name="password" placeholder="Password" required />
              <input type="password" name="confirmPassword" placeholder="Confirm Password" required />
              <select name="role" required>
                <option value="ADMIN">Admin</option>
                <option value="EMPLOYEE">Employee</option>
                <option value="MANAGER">Manager</option>
              </select>
            </>
          )}

          {isLoginPage && (
            <>
              <input type="text" name="username" placeholder="Username" required />
              <input type="password" name="password" placeholder="Password" required />
            </>
          )}

          <button type="submit" className="btn">
            {isLoginPage ? 'Login' : 'Sign Up'}
          </button>
        </form>

        <div className="button-container">
          <button className="btn" onClick={handleSwitch}>
            {isLoginPage ? "Don't have an account? Sign Up" : "Already have an account? Login"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
