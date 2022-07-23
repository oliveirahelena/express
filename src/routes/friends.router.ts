import express, { NextFunction, Request, Response } from 'express';

import {
  postFriend,
  getFriends,
  getFriend,
} from '../controllers/friends.controller';

const friendsRouter = express.Router();

friendsRouter.use((req: Request, res: Response, next: NextFunction) => {
  console.log('ip address:', req.ip);
  next();
});
friendsRouter.post('/', postFriend);
friendsRouter.get('/', getFriends);
friendsRouter.get('/:friendId', getFriend);

export { friendsRouter };
