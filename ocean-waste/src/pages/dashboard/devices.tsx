// src/pages/dashboard/devices.tsx
import Layout from '../../components/layout';
import DeviceForm from '../../components/forms/DeviceForm';
import DeviceList from '../../components/DeviceList';

const DevicesPage = () => {
  return (
    <Layout>
      <div className="container">
        <h2 className="text-2xl font-bold mb-4">Devices</h2>
        <DeviceForm />
        <DeviceList />
      </div>
    </Layout>
  );
};

export default DevicesPage;
