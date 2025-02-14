import React, { useState } from 'react';
import KPICard from './components/KPICard';
import BarChart from './components/BarChart';
import PieChart from './components/PieChart';
import DataTable from './components/DataTable';
import { ChartBarIcon, CheckCircleIcon, XCircleIcon, ClockIcon, UserCircleIcon } from '@heroicons/react/24/outline';

function App() {
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [filters, setFilters] = useState({
    application: '',
    lineNumber: '',
    reasonForRejection: '',
    dateRange: '',
  });

  const kpiData = {
    unitsProcessed: 2575,
    unitsPassed: 814,
    unitsRejected: 12,
    throughput: 110.41,
  };

  const barChartData = [
    { name: 'Party Pack', passed: 85, rejected: 65 },
    { name: 'Tab', passed: 55, rejected: 75 },
    { name: 'Can', passed: 70, rejected: 45 },
    { name: 'Bottle', passed: 90, rejected: 35 }
  ];

  const pieChartData = [
    { name: 'Incorrect Price', value: 52 },
    { name: 'Missing Coding', value: 48 }
  ];

  const tableData = [
    {
      application: 'Application 1',
      lineNumber: 'Line 1',
      product: 'Party Pack',
      reason: 'Wrong Coding',
      quantity: 10,
      time: '01/02/2024',
    },
    {
      application: 'Application 2',
      lineNumber: 'Line 2',
      product: 'Tab',
      reason: 'Wrong Price',
      quantity: 12,
      time: '01/02/2024',
    },
    {
      application: 'Application 3',
      lineNumber: 'Line 3',
      product: 'Party Pack',
      reason: 'Wrong Factory Code',
      quantity: 8,
      time: '01/02/2024',
    },
    {
      application: 'Application 4',
      lineNumber: 'Line 1',
      product: 'Can',
      reason: 'Missing Date',
      quantity: 15,
      time: '01/02/2024',
    },
    {
      application: 'Application 5',
      lineNumber: 'Line 2',
      product: 'Bottle',
      reason: 'Wrong Batch',
      quantity: 6,
      time: '01/02/2024',
    }
  ];

  const handleFilterChange = (field, value) => {
    setFilters(prev => ({ ...prev, [field]: value }));
  };

  const handleDownload = () => {
    const csvContent = [
      ['Application', 'Line Number', 'Product', 'Reason', 'Quantity', 'Time'],
      ...tableData.map(row => [
        row.application,
        row.lineNumber,
        row.product,
        row.reason,
        row.quantity,
        row.time
      ])
    ].map(row => row.join(',')).join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'kpi-data.csv';
    a.click();
    window.URL.revokeObjectURL(url);
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-md">
        <div className="p-4">
          <div className="flex items-center space-x-2">
            <img src="https://s3-alpha-sig.figma.com/img/0996/ab83/16c447b5c9b902c14889d917f4e93550?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=DcWpkvJlgVsrngvWevtvWo4j1HapeM5GYR6Mv4poc3zND28pDnobbviZ-fAdhmjID-mIxuqwA54Nk1xqVg01GRA8Aj23u7hpJZYIhe1P7Rf9~MxeZTe0IkTF8bVryc8zpJKZIgqxI~V4X~EMSFWHGboneZgzLySF5uQRSLmEYWrZH9EOKJHQ0Fyn7fvCu84avMW1SLSoTF2z-LFnXxeTKS9aBqCiTQ9sr7P4ucgT1ONopt3gVHMLV1Ppb3YlIopt2hiAiTGyOaWf9~QBqw8kdxSMzF8C0BpQrcr~6rwx~J21KO8~RsBTB9BvxFYTLjjm-6CJHbGxDf3Gc2VlWk4mng__" alt="ProWiz Analytics" className="h-10" />

          </div>
        </div>
        <nav className="mt-4">
          <a href="#" className="flex items-center px-4 py-2 bg-blue-600 text-white hover:bg-blue-700 transition-colors">
            <span className="mr-2">📊</span>
            Dashboard
          </a>
          <a href="#" className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors">
            <span className="mr-2">📷</span>
            Camera View
          </a>
          <a href="#" className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors">
            <span className="mr-2">📝</span>
            Event Log
          </a>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1">
        {/* Top Bar */}
        <div className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-4">
              <h1 className="text-2xl font-bold text-gray-900">KPI Tracker</h1>
              <div className="relative">
                <button
                  className="flex items-center space-x-2 text-gray-700 hover:text-gray-900 focus:outline-none"
                  onClick={() => setShowUserMenu(!showUserMenu)}
                >

                  <img
                    src="https://s3-alpha-sig.figma.com/img/d551/de70/601c77d9309ca9857dba4b2aae9b4561?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=ecBu6sj0LmY~IKMN~1M9RBEpvZHtgoK9kJ168z8LGHlXYJIT4PDaPJVKsPOt7pZ6qLtVjhCVGKDOBv3voiA770zlASguF6PIyf3ghUAuXDpbJ54kQBq83xpHXrQS0WD~fiHPEMc7cOIgBzOO5SQ1LQW3UKfEK6M2KmWpZJhgDtwBcMOIaldF6Px0Bu8RWD7qdwG~hzNKD-CiBSB5z4Ko4YLJMxxcrhvB5l-WIXomOxJoh52SMwQGJK2lo02sbsn286kzihR2JeSWb6iosUDLi-4EIbGmGk0yLb5VsfxtV2gImubTQ8ADiJVIUO0iaHwQTfDllR2tYICYutssBVlPGw__"
                    alt="ProWiz Analytics"
                    className="h-8 w-8 rounded-full"
                  />


                  <span>User ▼</span>
                </button>
                {showUserMenu && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10">
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Profile</a>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Settings</a>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Sign out</a>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="mb-8">
            <div className="flex flex-wrap gap-4">
              <select
                className="rounded-md border border-gray-300 px-3 py-2 bg-white hover:border-blue-500 focus:border-blue-500 focus:ring focus:ring-blue-200 transition-colors"
                value={filters.application}
                onChange={(e) => handleFilterChange('application', e.target.value)}
              >
                <option value="">Application</option>
                <option value="1">Application 1</option>
                <option value="2">Application 2</option>
                <option value="3">Application 3</option>
              </select>
              <select
                className="rounded-md border border-gray-300 px-3 py-2 bg-white hover:border-blue-500 focus:border-blue-500 focus:ring focus:ring-blue-200 transition-colors"
                value={filters.lineNumber}
                onChange={(e) => handleFilterChange('lineNumber', e.target.value)}
              >
                <option value="">Line Number</option>
                <option value="1">Line 1</option>
                <option value="2">Line 2</option>
                <option value="3">Line 3</option>
              </select>
              <select
                className="rounded-md border border-gray-300 px-3 py-2 bg-white hover:border-blue-500 focus:border-blue-500 focus:ring focus:ring-blue-200 transition-colors"
                value={filters.reasonForRejection}
                onChange={(e) => handleFilterChange('reasonForRejection', e.target.value)}
              >
                <option value="">Reason for rejection</option>
                <option value="coding">Wrong Coding</option>
                <option value="price">Wrong Price</option>
                <option value="date">Missing Date</option>
              </select>
              <select
                className="rounded-md border border-gray-300 px-3 py-2 bg-white hover:border-blue-500 focus:border-blue-500 focus:ring focus:ring-blue-200 transition-colors"
                value={filters.dateRange}
                onChange={(e) => handleFilterChange('dateRange', e.target.value)}
              >
                <option value="">Select date Range</option>
                <option value="today">Today</option>
                <option value="week">Last 7 days</option>
                <option value="month">Last 30 days</option>
              </select>
              <button
                className="bg-blue-600 text-white px-4 py-2 rounded-md flex items-center hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                onClick={handleDownload}
              >
                <span className="mr-2">⬇️</span>
                Download Data
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <KPICard
              title="Units Processed"
              value={kpiData.unitsProcessed}
              icon={<ChartBarIcon className="h-6 w-6" />}
            />
            <KPICard
              title="Units Passed"
              value={kpiData.unitsPassed}
              icon={<CheckCircleIcon className="h-6 w-6" />}
            />
            <KPICard
              title="Units Rejected"
              value={kpiData.unitsRejected}
              icon={<XCircleIcon className="h-6 w-6" />}
            />
            <KPICard
              title="Throughput (Units/Minute)"
              value={kpiData.throughput}
              icon={<ClockIcon className="h-6 w-6" />}
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            <BarChart data={barChartData} />
            <PieChart data={pieChartData} />
          </div>

          <DataTable data={tableData} />
        </div>
      </div>
    </div>
  );
}

export default App;