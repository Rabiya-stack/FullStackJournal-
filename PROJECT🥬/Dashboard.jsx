import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth.jsx';
import Card from '../components/common/Card';
import { FaChartLine, FaBox, FaUsers, FaClipboardList } from 'react-icons/fa';

const Dashboard = () => {
  const { user } = useAuth();

  // Mock data - in real app, fetch from API
  const dashboardData = {
    sales: { today: 1250, thisWeek: 8750, growth: 12.5 },
    inventory: { totalItems: 156, lowStock: 8, outOfStock: 2 },
    orders: { pending: 15, completed: 42, today: 8 },
    employees: { total: 12, active: 11, onLeave: 1 }
  };

  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-3xl mb-2">Welcome back, {user?.name}!</h1>
        <p className="text-lg">Here's your bakery overview for today</p>
      </div>

      <div className="dashboard-grid">
        {/* Sales Card */}
        <Link to="/orders" className="no-underline">
          <Card className="pastel-bg-pink h-full flex-col text-center cursor-pointer">
            <FaChartLine className="text-3xl mb-2" style={{color: 'var(--text-dark)'}} />
            <h2 className="text-xl font-semibold mb-2">Sales</h2>
            <p className="text-lg mb-1">Today: ${dashboardData.sales.today}</p>
            <p className="text-lg mb-1">This Week: ${dashboardData.sales.thisWeek}</p>
            <p className="text-sm" style={{color: 'var(--pastel-green)'}}>
              ↑ {dashboardData.sales.growth}% growth
            </p>
          </Card>
        </Link>

        {/* Inventory Card */}
        <Link to="/inventory" className="no-underline">
          <Card className="pastel-bg-green h-full flex-col text-center cursor-pointer">
            <FaBox className="text-3xl mb-2" style={{color: 'var(--text-dark)'}} />
            <h2 className="text-xl font-semibold mb-2">Inventory</h2>
            <p className="text-lg mb-1">Total Items: {dashboardData.inventory.totalItems}</p>
            <p className="text-lg mb-1">Low Stock: {dashboardData.inventory.lowStock}</p>
            <p className="text-sm" style={{color: 'var(--pastel-pink)'}}>
              {dashboardData.inventory.outOfStock} out of stock
            </p>
          </Card>
        </Link>

        {/* Orders Card */}
        <Link to="/orders" className="no-underline">
          <Card className="pastel-bg-lavender h-full flex-col text-center cursor-pointer">
            <FaClipboardList className="text-3xl mb-2" style={{color: 'var(--text-dark)'}} />
            <h2 className="text-xl font-semibold mb-2">Orders</h2>
            <p className="text-lg mb-1">Pending: {dashboardData.orders.pending}</p>
            <p className="text-lg mb-1">Completed: {dashboardData.orders.completed}</p>
            <p className="text-lg">Today: {dashboardData.orders.today}</p>
          </Card>
        </Link>

        {/* Employees Card (Admin only) */}
        {user?.role === 'admin' && (
          <Link to="/employees" className="no-underline">
            <Card className="pastel-bg-blue h-full flex-col text-center cursor-pointer">
              <FaUsers className="text-3xl mb-2" style={{color: 'var(--text-dark)'}} />
              <h2 className="text-xl font-semibold mb-2">Employees</h2>
              <p className="text-lg mb-1">Total: {dashboardData.employees.total}</p>
              <p className="text-lg mb-1">Active: {dashboardData.employees.active}</p>
              <p className="text-lg">On Leave: {dashboardData.employees.onLeave}</p>
            </Card>
          </Link>
        )}
      </div>

      {/* Quick Actions */}
      <Card className="mt-8">
        <h3 className="text-xl font-semibold mb-4">Quick Actions</h3>
        <div className="flex gap-4 flex-wrap">
          <Link to="/orders/new">
            <button className="btn-rounded">Create New Order</button>
          </Link>
          <Link to="/inventory/add">
            <button className="btn-rounded btn-secondary">Add Inventory</button>
          </Link>
          {user?.role === 'admin' && (
            <Link to="/employees/add">
              <button className="btn-rounded">Add Employee</button>
            </Link>
          )}
        </div>
      </Card>
    </div>
  );
};

export default Dashboard;