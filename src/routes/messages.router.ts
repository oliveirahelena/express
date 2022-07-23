import express from 'express';

import { getMessages, postMessage } from '../controllers/messages.controller';

const messagesRouter = express.Router();

messagesRouter.get('/', getMessages);
messagesRouter.post('/', postMessage);

export { messagesRouter };
