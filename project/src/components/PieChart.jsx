import React from 'react';
import { PieChart as RechartsPieChart, Pie, Cell, Legend, Tooltip } from 'recharts';

const COLORS = ['#1a56db', '#4ade80'];

const PieChart = ({ data }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h3 className="text-gray-600 text-sm font-medium mb-4">Reasons For Rejection</h3>
      <RechartsPieChart width={400} height={300}>
        <Pie
          data={data}
          cx={200}
          cy={150}
          labelLine={false}
          outerRadius={100}
          fill="#8884d8"
          dataKey="value"
          label={({ percent }) => `${(percent * 100).toFixed(0)}%`}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </RechartsPieChart>
    </div>
  );
};

export default PieChart;