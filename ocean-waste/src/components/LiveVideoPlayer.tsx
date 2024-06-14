// src/components/LiveVideoPlayer.tsx
import { Button } from './ui/button';

const LiveVideoPlayer = () => {
  return (
    <div>
      <div className="mb-4">
        <video className="w-full h-64 bg-gray-200"></video>
      </div>
      <Button className="mr-2">Start Feed</Button>
      <Button>Stop Feed</Button>
    </div>
  );
};

export default LiveVideoPlayer;
