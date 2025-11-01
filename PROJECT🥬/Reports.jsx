import React from 'react';
import Card from '../components/common/Card';

const Reports = () => {
  // Mock data for charts - in real app, use Recharts with actual data
  const salesData = [
    { day: 'Mon', sales: 1200 },
    { day: 'Tue', sales: 1900 },
    { day: 'Wed', sales: 1500 },
    { day: 'Thu', sales: 2200 },
    { day: 'Fri', sales: 2800 },
    { day: 'Sat', sales: 3500 },
    { day: 'Sun', sales: 1800 }
  ];

  const popularItems = [
    { name: 'Chocolate Cake', sales: 45 },
    { name: 'Croissants', sales: 38 },
    { name: 'Blueberry Muffins', sales: 32 },
    { name: 'Baguette', sales: 28 },
    { name: 'Cookies', sales: 25 }
  ];

  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-3xl mb-2">Reports & Analytics</h1>
        <p className="text-lg">Bakery performance insights</p>
      </div>

      <div className="dashboard-grid">
        <Card className="pastel-bg-lavender">
          <h3 className="text-xl font-semibold mb-4">Weekly Sales</h3>
          <div className="space-y-2">
            {salesData.map((item, index) => (
              <div key={index} className="flex justify-between items-center">
                <span>{item.day}</span>
                <div className="flex items-center">
                  <div 
                    className="pastel-bg-blue rounded-full h-4 mr-2" 
                    style={{ width: `${(item.sales / 3500) * 100}%` }}
                  ></div>
                  <span>${item.sales}</span>
                </div>
              </div>
            ))}
          </div>
        </Card>

        <Card className="pastel-bg-green">
          <h3 className="text-xl font-semibold mb-4">Popular Items</h3>
          <div className="space-y-3">
            {popularItems.map((item, index) => (
              <div key={index}>
                <div className="flex justify-between mb-1">
                  <span>{item.name}</span>
                  <span>{item.sales} sold</span>
                </div>
                <div className="pastel-bg-blue rounded-full h-2">
                  <div 
                    className="pastel-bg-pink rounded-full h-2" 
                    style={{ width: `${(item.sales / 45) * 100}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </Card>

        <Card className="pastel-bg-pink">
          <h3 className="text-xl font-semibold mb-4">Quick Stats</h3>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span>Total Revenue</span>
              <span className="font-semibold">$15,400</span>
            </div>
            <div className="flex justify-between">
              <span>Orders This Month</span>
              <span className="font-semibold">128</span>
            </div>
            <div className="flex justify-between">
              <span>Customer Satisfaction</span>
              <span className="font-semibold">94%</span>
            </div>
            <div className="flex justify-between">
              <span>Inventory Value</span>
              <span className="font-semibold">$8,200</span>
            </div>
          </div>
        </Card>
      </div>

      <Card className="mt-6">
        <h3 className="text-xl font-semibold mb-4">Export Reports</h3>
        <div className="flex gap-4 flex-wrap">
          <button className="btn-rounded">Sales Report</button>
          <button className="btn-rounded btn-secondary">Inventory Report</button>
          <button className="btn-rounded">Employee Report</button>
          <button className="btn-rounded btn-secondary">Financial Report</button>
        </div>
      </Card>
    </div>
  );
};

export default Reports;