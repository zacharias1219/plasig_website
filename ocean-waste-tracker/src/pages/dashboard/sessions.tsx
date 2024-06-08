// src/pages/dashboard/sessions.tsx
import Layout from '../../components/layout';
import { Button } from '../../components/ui/button';

const SessionsPage = () => {
  return (
    <Layout>
      <div className="container">
        <h2 className="text-2xl font-bold mb-4">Session Management</h2>
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
    </Layout>
  );
};

export default SessionsPage;
