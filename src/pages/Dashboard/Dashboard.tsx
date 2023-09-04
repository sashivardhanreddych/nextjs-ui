// pages/dashboard.js
import React from 'react';

const DashboardPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <header className="bg-white shadow-md p-4">
        <h1 className="text-2xl font-semibold text-gray-800">Dashboard</h1>
      </header>
      <main className="container mx-auto mt-4 p-4">
        {/* Dashboard content */}
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">Welcome to your dashboard!</h2>
          <p className="text-gray-600">This is where you can manage your dashboard content.</p>
        </div>
      </main>
    </div>
  );
};

export default DashboardPage;
