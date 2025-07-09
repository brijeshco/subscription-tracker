import { Router } from 'express';
import authorize from '../middleware/auth.middleware.js';
import {
  createSubscription,
  getUserSubscription,
} from '../controller/subscription.controller.js';

const subscriptionRouter = Router();

subscriptionRouter.get('/', (req, res) =>
  res.send({ title: 'Get all subscriptions' })
);

subscriptionRouter.get('/:id', (req, res) =>
  res.send({ title: 'Get  subscriptions details' })
);
subscriptionRouter.post('/', authorize, createSubscription);
subscriptionRouter.post('/', (req, res) =>
  res.send({ title: 'CREATE subscriptions' })
);
subscriptionRouter.put('/:id', (req, res) =>
  res.send({ title: 'UPDATE subscriptions' })
);
subscriptionRouter.delete('/:id', (req, res) =>
  res.send({ title: 'DELETE subscriptions' })
);
subscriptionRouter.get('/user/:id', authorize, getUserSubscription);
subscriptionRouter.put('/:id/cancel', (req, res) =>
  res.send({ title: 'CANCEL subscriptions' })
);
subscriptionRouter.get('/upcoming-renewals', (req, res) =>
  res.send({ title: 'Get all upcoming renewals0' })
);

export default subscriptionRouter;
