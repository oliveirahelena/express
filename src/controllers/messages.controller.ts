import { Request, Response } from 'express';

export function getMessages(_req: Request, res: Response) {
  res.render('messages', {
    title: 'Messages to my Friends!',
    friend: 'Elon Musk',
  });
}

export function postMessage(_req: Request, _res: Response) {
  console.log('Updating messages...');
}
