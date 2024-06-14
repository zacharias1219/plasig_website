// src/components/SessionControls.tsx
import { Button } from './ui/button';

const SessionControls = () => {
  return (
    <div>
      <Button className="mb-4">Start New Session</Button>
      <div>
        <h3 className="text-md font-semibold mb-2">Past Sessions</h3>
        <ul>
          {/* Placeholder for session list */}
          <li className="mb-2">Session 1 - [Details]</li>
          <li className="mb-2">Session 2 - [Details]</li>
          <li className="mb-2">Session 3 - [Details]</li>
        </ul>
      </div>
    </div>
  );
};

export default SessionControls;
