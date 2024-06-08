// src/pages/dashboard/overview.tsx
import Layout from '../../components/layout';

const OverviewPage = () => {
  return (
    <Layout>
      <div className="container">
        <h2 className="text-2xl font-bold mb-4">Waste Detection Overview</h2>
        <div className="h-96 bg-gray-200">
          {/* Placeholder for map integration */}
          <div id="map" className="w-full h-full"></div>
        </div>
      </div>
    </Layout>
  );
};

export default OverviewPage;
