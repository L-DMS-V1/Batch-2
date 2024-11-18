import React from 'react';
import './App.css';
import EmployeeList from './components/EmployeeList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Employee Progress Tracker</h1>
      </header>
      <main>
        <EmployeeList />
      </main>
    </div>
  );
}

export default App;
