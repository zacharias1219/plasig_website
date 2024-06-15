// src/components/SessionControls.tsx
import { Button } from './ui/button';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import useWebSocket from 'react-use-websocket';

interface Session {
  id: string;
  name: string;
  createdAt: string;
}

const SessionControls = () => {
  const [sessions, setSessions] = useState<Session[]>([]);
  const [loading, setLoading] = useState(false);
  const { sendMessage, lastMessage } = useWebSocket('ws://localhost:8080');

  const fetchSessions = async () => {
    setLoading(true);
    try {
      const response = await axios.get<Session[]>('/api/sessions');
      setSessions(response.data);
    } catch (error) {
      toast.error('Error fetching sessions');
    } finally {
      setLoading(false);
    }
  };

  const startSession = async () => {
    try {
      await axios.post('/api/sessions/start');
      toast.success('Session started');
      sendMessage('start-session');
      fetchSessions();
    } catch (error) {
      toast.error('Error starting session');
    }
  };

  useEffect(() => {
    fetchSessions();
  }, []);

  useEffect(() => {
    if (lastMessage !== null) {
      // Handle incoming messages
      fetchSessions();
    }
  }, [lastMessage]);

  return (
    <div>
      <Button className="mb-4" onClick={startSession}>Start New Session</Button>
      <div>
        <h3 className="text-md font-semibold mb-2">Past Sessions</h3>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <ul>
            {sessions.map((session) => (
              <li key={session.id} className="mb-2">
                {session.name} - {new Date(session.createdAt).toLocaleString()}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default SessionControls;
