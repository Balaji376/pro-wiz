import React from 'react';
import { BarChart as RechartsBarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const BarChart = ({ data }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h3 className="text-gray-600 text-sm font-medium mb-4">Split of Units Processed Today</h3>
      <RechartsBarChart width={500} height={300} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis domain={[0, 100]} />
        <Tooltip />
        <Legend />
        <Bar dataKey="passed" fill="#1a56db" name="Passed" />
        <Bar dataKey="rejected" fill="#4ade80" name="Rejected" />
      </RechartsBarChart>
    </div>
  );
};

export default BarChart;