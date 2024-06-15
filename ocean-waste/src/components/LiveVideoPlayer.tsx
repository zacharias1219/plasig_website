import { Button } from './ui/button';
import { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import useWebSocket, { ReadyState } from 'react-use-websocket';

const LiveVideoPlayer = () => {
  const [isStreaming, setIsStreaming] = useState(false);
  const { sendMessage, lastMessage, readyState } = useWebSocket('ws://localhost:8080');

  const startFeed = async () => {
    try {
      await axios.post('/api/monitoring/start');
      setIsStreaming(true);
      sendMessage('start-feed');
      toast.success('Video feed started');
    } catch (error) {
      toast.error('Error starting video feed');
    }
  };

  const stopFeed = async () => {
    try {
      await axios.post('/api/monitoring/stop');
      setIsStreaming(false);
      sendMessage('stop-feed');
      toast.success('Video feed stopped');
    } catch (error) {
      toast.error('Error stopping video feed');
    }
  };

  return (
    <div>
      <div className="mb-4">
        <video className="w-full h-64 bg-gray-200"></video>
      </div>
      <Button className="mr-2" onClick={startFeed} disabled={isStreaming}>Start Feed</Button>
      <Button onClick={stopFeed} disabled={!isStreaming}>Stop Feed</Button>
      <div>
        {lastMessage ? <span>Last message: {lastMessage.data}</span> : null}
        <span>Connection state: {readyState === ReadyState.OPEN ? 'Open' : 'Closed'}</span>
      </div>
    </div>
  );
};

export default LiveVideoPlayer;
