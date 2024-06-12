// src/pages/dashboard/devices.tsx
import Layout from '../../components/layout';
import { Input } from '../../components/ui/input';
import { Button } from '../../components/ui/button';

const DevicesPage = () => {
  return (
    <Layout>
      <div className="container">
        <h2 className="text-2xl font-bold mb-4">Devices</h2>
        <div className="mb-4">
          <Input placeholder="Device IP Address" className="mb-4" />
          <Input placeholder="Device Name" className="mb-4" />
          <Button>Connect</Button>
        </div>
      </div>
    </Layout>
  );
};

export default DevicesPage;
