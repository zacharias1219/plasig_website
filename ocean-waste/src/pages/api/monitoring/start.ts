// src/pages/api/monitoring/start.ts
import { NextApiRequest, NextApiResponse } from 'next';
import { wss } from '../../../lib/websocketServer';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    wss.clients.forEach(client => {
      client.send('start-feed');
    });
    res.status(200).end();
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
};

export default handler;
