// src/pages/index.tsx
import React from 'react';
import Layout from '../components/layout';

const HomePage = () => {
  return (
    <Layout>
      <div className="container">
        <h1 className="text-2xl font-bold mb-4">Welcome to Ocean Waste Tracker</h1>
        <p>This is the home page of the Ocean Waste Tracker application.</p>
      </div>
    </Layout>
  );
};

export default HomePage;
