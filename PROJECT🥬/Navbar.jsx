import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth.jsx';

const Navbar = () => {
  const { user, logout } = useAuth();

  return (
    <nav className="navbar">
      <div className="text-xl font-semibold">🍰 SweetBakery ERP</div>
      <ul className="nav-links">
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li><Link to="/orders">Orders</Link></li>
        <li><Link to="/inventory">Inventory</Link></li>
        {user?.role === 'admin' && <li><Link to="/employees">Employees</Link></li>}
        <li><Link to="/reports">Reports</Link></li>
        <li>
          <span className="text-lg">Welcome, {user?.email}</span>
        </li>
        <li>
          <button onClick={logout} className="btn-rounded btn-secondary">
            Logout
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;