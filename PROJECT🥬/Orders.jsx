import React, { useState } from 'react';
import Card from '../components/common/Card';
import { useAuth } from '../hooks/useAuth.jsx';

const Orders = () => {
  const { user } = useAuth();
  
  // Mock data - in real app, fetch from API
  const [orders] = useState([
    { id: 1, customer: 'John Doe', items: 'Chocolate Cake x2', total: 45.00, status: 'Pending', date: '2024-01-15' },
    { id: 2, customer: 'Jane Smith', items: 'Croissants x6, Bread x1', total: 28.50, status: 'Completed', date: '2024-01-14' },
    { id: 3, customer: 'Bob Johnson', items: 'Custom Wedding Cake', total: 250.00, status: 'In Progress', date: '2024-01-16' },
    { id: 4, customer: 'Alice Brown', items: 'Cookies x12, Muffins x4', total: 32.00, status: 'Pending', date: '2024-01-15' }
  ]);

  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-3xl mb-2">Order Management</h1>
        <p className="text-lg">Manage and track bakery orders</p>
      </div>

      <Card>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-semibold">Recent Orders</h2>
          <button className="btn-rounded">+ New Order</button>
        </div>

        <table className="table">
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Customer</th>
              <th>Items</th>
              <th>Total</th>
              <th>Status</th>
              <th>Date</th>
              {user?.role === 'admin' && <th>Actions</th>}
            </tr>
          </thead>
          <tbody>
            {orders.map(order => (
              <tr key={order.id}>
                <td>#{order.id}</td>
                <td>{order.customer}</td>
                <td>{order.items}</td>
                <td>${order.total}</td>
                <td>
                  <span className={`px-2 py-1 rounded-full text-sm ${
                    order.status === 'Completed' ? 'pastel-bg-green' : 
                    order.status === 'In Progress' ? 'pastel-bg-blue' : 'pastel-bg-pink'
                  }`}>
                    {order.status}
                  </span>
                </td>
                <td>{order.date}</td>
                {user?.role === 'admin' && (
                  <td>
                    <button className="btn-rounded" style={{padding: '4px 8px', fontSize: '12px'}}>
                      Edit
                    </button>
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
    </div>
  );
};

export default Orders;