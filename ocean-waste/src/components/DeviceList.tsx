// src/components/DeviceList.tsx
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Button } from '@shadcn/ui';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface Device {
  id: string;
  name: string;
  ipAddress: string;
}

const DeviceList = () => {
  const [devices, setDevices] = useState<Device[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchDevices = async () => {
    setLoading(true);
    try {
      const response = await axios.get('/api/devices/list');
      setDevices(response.data);
    } catch (error) {
      toast.error('Error fetching devices');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDevices();
  }, []);

  const handleRemove = async (deviceId: string) => {
    try {
      await axios.post('/api/devices/remove', { id: deviceId });
      toast.success('Device removed successfully');
      fetchDevices();
    } catch (error) {
      toast.error('Error removing device');
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Connected Devices</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {devices.map((device) => (
            <li key={device.id} className="mb-4">
              <span>{device.name} ({device.ipAddress})</span>
              <Button className="ml-4" onClick={() => handleRemove(device.id)}>Remove</Button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DeviceList;
