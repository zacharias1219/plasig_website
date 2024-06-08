// src/pages/dashboard/monitoring.tsx
import Layout from '../../components/layout';
import { Button } from '../../components/ui/button';

const MonitoringPage = () => {
  return (
    <Layout>
      <div className="container">
        <h2 className="text-2xl font-bold mb-4">Live Monitoring</h2>
        <div className="mb-4">
          {/* Placeholder for video stream */}
          <video className="w-full h-64 bg-gray-200"></video>
        </div>
        <Button className="mr-2">Start Feed</Button>
        <Button>Stop Feed</Button>
      </div>
    </Layout>
  );
};

export default MonitoringPage;
