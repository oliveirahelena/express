import { Request, Response } from 'express';

import { friends } from '../models/friends.model';

export function postFriend(req: Request, res: Response) {
  if (!req.body.name) {
    return res.status(400).json({
      error: 'Missing friend name',
    });
  }

  const newFriend = {
    name: req.body.name,
    id: friends.length,
  };
  friends.push(newFriend);

  res.json(newFriend);
}

export function getFriends(_req: Request, res: Response) {
  res.json(friends);
}

export function getFriend(req: Request, res: Response) {
  const friendId = Number(req.params.friendId);
  const friend = friends[friendId];

  if (friend) {
    res.status(200).json(friend);
  } else {
    res.status(404).json({
      error: 'Friend does not exist',
    });
  }
}
