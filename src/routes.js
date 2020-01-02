import { Router } from 'express';
import User from './app/models/User';

const routes = new Router();

routes.get('/', async (req, res) => {
  const user = await User.create({
    name: 'Caio Rodrigues',
    email: 'caio@email.com',
    password_hash: '123123',
  });

  return res.json(user);
});

export default routes;
