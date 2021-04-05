import type { NextApiRequest, NextApiResponse } from 'next';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const contact = JSON.parse(req.body);
  } catch (err) {
    res.status(400).json({ message: 'Something went wrong' });
  }
};
