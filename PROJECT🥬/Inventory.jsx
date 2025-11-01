import React, { useState } from 'react';
import Card from '../components/common/Card';
import { useAuth } from '../hooks/useAuth.jsx';

const Inventory = () => {
  const { user } = useAuth();
  
  // Mock data - in real app, fetch from API
  const [inventory] = useState([
    { id: 1, name: 'Flour', category: 'Baking', quantity: 45, unit: 'kg', minStock: 10, status: 'In Stock' },
    { id: 2, name: 'Sugar', category: 'Baking', quantity: 25, unit: 'kg', minStock: 15, status: 'In Stock' },
    { id: 3, name: 'Butter', category: 'Dairy', quantity: 8, unit: 'kg', minStock: 5, status: 'Low Stock' },
    { id: 4, name: 'Chocolate Chips', category: 'Baking', quantity: 3, unit: 'kg', minStock: 5, status: 'Low Stock' },
    { id: 5, name: 'Vanilla Extract', category: 'Flavoring', quantity: 2, unit: 'liters', minStock: 3, status: 'Out of Stock' }
  ]);

  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-3xl mb-2">Inventory Management</h1>
        <p className="text-lg">Track and manage bakery ingredients</p>
      </div>

      <Card>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-semibold">Current Inventory</h2>
          {user?.role === 'admin' && <button className="btn-rounded">+ Add Item</button>}
        </div>

        <table className="table">
          <thead>
            <tr>
              <th>Item Name</th>
              <th>Category</th>
              <th>Quantity</th>
              <th>Unit</th>
              <th>Min Stock</th>
              <th>Status</th>
              {user?.role === 'admin' && <th>Actions</th>}
            </tr>
          </thead>
          <tbody>
            {inventory.map(item => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.category}</td>
                <td>{item.quantity}</td>
                <td>{item.unit}</td>
                <td>{item.minStock}</td>
                <td>
                  <span className={`px-2 py-1 rounded-full text-sm ${
                    item.status === 'In Stock' ? 'pastel-bg-green' : 
                    item.status === 'Low Stock' ? 'pastel-bg-pink' : 'pastel-bg-blue'
                  }`}>
                    {item.status}
                  </span>
                </td>
                {user?.role === 'admin' && (
                  <td>
                    <button className="btn-rounded" style={{padding: '4px 8px', fontSize: '12px'}}>
                      Update
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

export default Inventory;