// src/components/WasteMap.tsx
import { useEffect } from 'react';
import L from 'leaflet';
import axios from 'axios';

interface Waste {
  latitude: number;
  longitude: number;
  description: string;
}

const WasteMap = () => {
  useEffect(() => {
    const map = L.map('map').setView([51.505, -0.09], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors',
    }).addTo(map);

    const fetchWasteData = async () => {
      try {
        const response = await axios.get<Waste[]>('/api/waste');
        response.data.forEach((waste: Waste) => {
          L.marker([waste.latitude, waste.longitude]).addTo(map).bindPopup(waste.description).openPopup();
        });
      } catch (error) {
        console.error('Error fetching waste data', error);
      }
    };

    fetchWasteData();

    return () => {
      map.remove();
    };
  }, []);

  return <div id="map" className="w-full h-96"></div>;
};

export default WasteMap;
