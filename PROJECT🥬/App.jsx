import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from './hooks/useAuth.jsx';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Orders from './pages/Orders';
import Inventory from './pages/Inventory';
import Employees from './pages/Employees';
import Reports from './pages/Reports';
import Navbar from './components/common/Navbar';

function App() {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="flex-center min-h-screen">
        <div className="text-2xl">Loading...</div>
      </div>
    );
  }

  return (
    <Router>
      <div className="min-h-screen pastel-bg-yellow">
        {user && <Navbar />}
        <div className="container">
          <Routes>
            <Route 
              path="/login" 
              element={!user ? <Login /> : <Navigate to="/dashboard" />} 
            />
            <Route 
              path="/dashboard" 
              element={user ? <Dashboard /> : <Navigate to="/login" />} 
            />
            <Route 
              path="/orders" 
              element={user ? <Orders /> : <Navigate to="/login" />} 
            />
            <Route 
              path="/inventory" 
              element={user ? <Inventory /> : <Navigate to="/login" />} 
            />
            <Route 
              path="/employees" 
              element={user?.role === 'admin' ? <Employees /> : <Navigate to="/dashboard" />} 
            />
            <Route 
              path="/reports" 
              element={user ? <Reports /> : <Navigate to="/login" />} 
            />
            <Route 
              path="/" 
              element={<Navigate to={user ? "/dashboard" : "/login"} />} 
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;