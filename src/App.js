import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import CreateRequest from './components/CreateRequest';
import EditRequest from './components/EditRequest';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/create-request" element={<CreateRequest />} />
        <Route path="/edit-request/:id" element={<EditRequest />} />
      </Routes>
    </Router>
  );
}

export default App;
