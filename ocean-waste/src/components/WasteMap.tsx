// src/components/WasteMap.tsx
import { useEffect } from 'react';
import L from 'leaflet';

const WasteMap = () => {
  useEffect(() => {
    const map = L.map('map').setView([51.505, -0.09], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors',
    }).addTo(map);

    // Example marker
    L.marker([51.5, -0.09]).addTo(map).bindPopup('A waste location').openPopup();

    return () => {
      map.remove();
    };
  }, []);

  return <div id="map" className="w-full h-96"></div>;
};

export default WasteMap;
