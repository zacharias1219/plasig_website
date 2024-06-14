// src/pages/api/devices/add.ts
import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const { ipAddress, deviceName } = req.body;

    if (!ipAddress || !deviceName) {
      return res.status(400).json({ error: 'Missing IP address or device name' });
    }

    try {
      const newDevice = await prisma.device.create({
        data: {
          ipAddress,
          name: deviceName,
        },
      });

      res.status(200).json(newDevice);
    } catch (error) {
      res.status(500).json({ error: 'Failed to add device' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
};

export default handler;
