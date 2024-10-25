import React, { useState } from 'react';

function LandingPage({ onLogin }) {
  const [isLoginPage, setIsLoginPage] = useState(true); // Toggle between login and signup

  const handleSwitch = () => {
    setIsLoginPage(!isLoginPage); // Switch between login and signup
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const role = e.target.role.value;
    onLogin(role); // Handle login/signup
  };

  return (
    <div className="landing-page">
      <nav className="navbar">
        <h1>Learning & Development</h1>
        <div>
          <button className="nav-btn" onClick={handleSwitch}>
            {isLoginPage ? "Signup" : "Login"}
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

          {/* If it is signup, show additional fields */}
          {!isLoginPage && (
            <>
              <input type="text" placeholder="Full Name" required />
              <input type="email" placeholder="Email" required />
              <input type="password" placeholder="Password" required />
              <input type="password" placeholder="Confirm Password" required />
              
            </>
          )}

          {isLoginPage && (
            <>
              <input type="text" placeholder="Username" required />
              <input type="password" placeholder="Password" required />
            </>
          )}

          <select name="role">
            <option value="admin">Admin</option>
            <option value="employee">Employee</option>
            <option value="accountManager">Account Manager</option>
          </select>

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
