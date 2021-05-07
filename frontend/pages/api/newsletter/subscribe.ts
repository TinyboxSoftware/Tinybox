import { NextApiRequest, NextApiResponse } from 'next';
import fetch from 'node-fetch';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const { email } = JSON.parse(req.body);
    const buttondownUrl = 'https://api.buttondown.email/v1/subscribers';
    const bdwnRes = await fetch(buttondownUrl, {
      method: 'POST',
      headers: {
        Authorization: `Token ${process.env.BUTTONDOWN_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email,
        tags: ['tinybox-website'],
      }),
    });
    if (bdwnRes.status === 201) {
      res.status(201).json({ message: 'new subscriber created!' });
    } else {
      console.log(await bdwnRes.json());
      res
        .status(400)
        .json({ message: 'already subscribed, or email is invalid' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} is not allowed`);
  }
};

export default handler;
