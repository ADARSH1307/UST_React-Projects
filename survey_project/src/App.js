import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DashboardLayout from './components/DashboardLayout/DashboardLayout';
import Dashboard from './components/Dashboard/Dashboard';
import CreateAssessment from './components/CreateAssessment/CreateAssessment';
import AccessManagement from './components/AccessManagement/AccessManagement';

const App = () => {
  return (
    <Router className="router">
      <DashboardLayout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/create-assessment" element={<CreateAssessment />} />
          <Route path="/access-management" element={<AccessManagement />} />
        </Routes>
      </DashboardLayout>
    </Router>
  );
};

export default App;