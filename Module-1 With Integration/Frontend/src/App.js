import React, { useState } from 'react';
import './styles.css';
import LandingPage from './components/LandingPage';
import AdminDashboard from './components/AdminDashboard';
import EmployeeDashboard from './components/EmployeeDashboard';
import AccountManagerDashboard from './components/AccountManagerDashboard';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Tracks if the user is logged in
  const [userRole, setUserRole] = useState(null); // Tracks the role of the logged-in user

  const handleLogin = (role) => {
    setIsAuthenticated(true);
    setUserRole(role); // Set the role (admin, employee, account manager) after login/signup
  };

  return (
    <div className="App">
      {!isAuthenticated ? (
        // Show the landing page with the login/signup form
        <LandingPage onLogin={handleLogin} />
      ) : (
        // After authentication, show the appropriate dashboard based on the role
        <>
          {userRole === 'ADMIN' && <AdminDashboard />}
          {userRole === 'employee' && <EmployeeDashboard />}
          {userRole === 'accountManager' && <AccountManagerDashboard />}
        </>
      )}
    </div>
  );
}

export default App;
