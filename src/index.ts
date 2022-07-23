import express, { NextFunction, Request, Response } from 'express';
import path from 'path';

import { friendsRouter } from './routes/friends.router';
import { messagesRouter } from './routes/messages.router';

const app = express();

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

const PORT = 3000;

app.use((req: Request, _res: Response, next: NextFunction) => {
  const start = Date.now();
  next();
  const delta = Date.now() - start;
  console.log(`${req.method} ${req.baseUrl}${req.url} ${delta}ms`);
});

app.use('/site', express.static(path.join(__dirname, 'public')));
app.use(express.json());

app.get('/', (_req: Request, res: Response) => {
  res.render('index', {
    title: 'My Friends Are VERYY Clever',
    caption: "Let's go skiing!",
  });
});
app.use('/friends', friendsRouter);
app.use('/messages', messagesRouter);

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}...`);
});
