import { Router } from 'express';
import { getUser, getUsers } from '../controller/user.controller.js';
import authorize from '../middleware/auth.middleware.js';
import errorMiddleware from '../middleware/error.middleware.js';

const userRouter = Router();

userRouter.get('/', getUsers);

userRouter.get('/:id', authorize, getUser);

userRouter.post('/', (req, res) => res.send({ title: 'CREATE all users' }));

userRouter.put('/:id', (req, res) => res.send({ title: 'UPDATE all users' }));

userRouter.delete('/:id', (req, res) =>
  res.send({ title: 'DELETE all users' })
);

export default userRouter;
