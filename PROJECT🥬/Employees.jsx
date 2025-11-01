import React, { useState } from 'react';
import Card from '../components/common/Card';
import { useAuth } from '../hooks/useAuth.jsx';

const Employees = () => {
  const { user } = useAuth();
  
  // Mock data - in real app, fetch from API
  const [employees] = useState([
    { id: 1, name: 'Sarah Johnson', position: 'Head Baker', email: 'sarah@bakery.com', phone: '555-0101', status: 'Active' },
    { id: 2, name: 'Mike Chen', position: 'Pastry Chef', email: 'mike@bakery.com', phone: '555-0102', status: 'Active' },
    { id: 3, name: 'Emma Davis', position: 'Sales Associate', email: 'emma@bakery.com', phone: '555-0103', status: 'On Leave' },
    { id: 4, name: 'Tom Wilson', position: 'Junior Baker', email: 'tom@bakery.com', phone: '555-0104', status: 'Active' }
  ]);

  if (user?.role !== 'admin') {
    return (
      <div className="p-6">
        <Card>
          <h2 className="text-2xl font-semibold text-center">Access Denied</h2>
          <p className="text-center">You don't have permission to access this page.</p>
        </Card>
      </div>
    );
  }

  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-3xl mb-2">Employee Management</h1>
        <p className="text-lg">Manage bakery staff and roles</p>
      </div>

      <Card>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-semibold">Employee List</h2>
          <button className="btn-rounded">+ Add Employee</button>
        </div>

        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Position</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {employees.map(employee => (
              <tr key={employee.id}>
                <td>{employee.name}</td>
                <td>{employee.position}</td>
                <td>{employee.email}</td>
                <td>{employee.phone}</td>
                <td>
                  <span className={`px-2 py-1 rounded-full text-sm ${
                    employee.status === 'Active' ? 'pastel-bg-green' : 'pastel-bg-pink'
                  }`}>
                    {employee.status}
                  </span>
                </td>
                <td>
                  <button className="btn-rounded mr-2" style={{padding: '4px 8px', fontSize: '12px'}}>
                    Edit
                  </button>
                  <button className="btn-rounded btn-secondary" style={{padding: '4px 8px', fontSize: '12px'}}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
    </div>
  );
};

export default Employees;