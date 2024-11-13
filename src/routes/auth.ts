import { Router } from 'express';
import { body } from 'express-validator';
import { login, register } from '../controllers/auth';

const router = Router();

router.post('/login', [
  body('email').isEmail(),
  body('password').isLength({ min: 6 }),
], login);

router.post('/register', [
  body('username').isLength({ min: 3 }),
  body('email').isEmail(),
  body('password').isLength({ min: 6 }),
], register);

export { router as authRouter };