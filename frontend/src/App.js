import React from 'react';
import Login from './components/login';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Admin_dashboard from './components/dashboard/admin_dashboard';
import Staff_dashboard from './components/dashboard/staff_dashboard';
import Student_dashboard from './components/dashboard/student_dashboard';
import Dashboard from './components/dashboard/dashboard';
import Support from './components/table/support';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard/admin_dashboard" element={<Admin_dashboard />} />
        <Route path="/dashboard/staff_dashboard" element={<Staff_dashboard />} />
        <Route path="/dashboard/student_dashboard" element={<Student_dashboard/>} />

        <Route path="/dashboard/admin_dashboard/attendance" element={<Dashboard />} />
        <Route path="/dashboard/student_dashboard/attendance" element={<Dashboard />} />
        <Route path="/dashboard/staff_dashboard/attendance" element={<Dashboard />} />
        <Route path="/dashboard/admin_dashboard/review" element={<Dashboard />} />
        <Route path="/dashboard/student_dashboard/complaint" element={<Dashboard />} />
        <Route path="/dashboard/staff_dashboard/complaint" element={<Dashboard />} />
        <Route path="/dashboard/admin_dashboard/special_request" element={<Dashboard />} />
        <Route path="/dashboard/admin_dashboard/complaint" element={<Dashboard />} />
        <Route path="/dashboard/admin_dashboard/notice" element={<Dashboard />} />
        <Route path="/dashboard/staff_dashboard/notice" element={<Dashboard />} />
        <Route path="/dashboard/student_dashboard/notice" element={<Dashboard />} />
        <Route path="/dashboard/admin_dashboard/support" element={<Dashboard />} />
        <Route path="/dashboard/staff_dashboard/support" element={<Dashboard />} />
        <Route path="/dashboard/student_dashboard/support" element={<Dashboard />} />
        <Route path="/support" element={<Support />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
