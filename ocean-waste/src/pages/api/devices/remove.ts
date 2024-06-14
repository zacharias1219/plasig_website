// src/pages/api/devices/remove.ts
import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const { id } = req.body;

    if (!id) {
      return res.status(400).json({ error: 'Missing device ID' });
    }

    try {
      await prisma.device.delete({
        where: { id },
      });

      res.status(200).json({ message: 'Device removed successfully' });
    } catch (error) {
      res.status(500).json({ error: 'Failed to remove device' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
};

export default handler;
