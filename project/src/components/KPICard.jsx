import React from 'react';

const KPICard = ({ title, value, icon }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow duration-300">
      <div className="flex items-center justify-between mb-2">
        <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
          <span className="text-blue-600">{icon}</span>
        </div>
        <h3 className="text-gray-600 text-sm font-medium">{title}</h3>
      </div>
      <p className="text-2xl font-bold text-gray-900">{value}</p>
    </div>
  );
};

export default KPICard;