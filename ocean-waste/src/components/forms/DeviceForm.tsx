import { useState } from 'react';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import axios from 'axios';
import { toast } from 'react-toastify';

const DeviceForm = () => {
  const [ipAddress, setIpAddress] = useState('');
  const [deviceName, setDeviceName] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post('/api/devices/add', {
        ipAddress,
        deviceName,
      });

      if (response.status === 200) {
        toast.success('Device added successfully');
        setIpAddress('');
        setDeviceName('');
      } else {
        toast.error('Failed to add device');
      }
    } catch (error) {
      toast.error('Error adding device');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-4">
        <Input
          value={ipAddress}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setIpAddress(e.target.value)}
          placeholder="Device IP Address"
          className="mb-4"
          required
        />
        <Input
          value={deviceName}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setDeviceName(e.target.value)}
          placeholder="Device Name"
          className="mb-4"
          required
        />
        <Button type="submit" disabled={loading}>
          {loading ? 'Connecting...' : 'Connect'}
        </Button>
      </div>
    </form>
  );
};

export default DeviceForm;
