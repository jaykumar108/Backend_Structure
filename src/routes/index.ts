import { Router, Request, Response } from 'express';

const router = Router();

router.get('/health', (_req: Request, res: Response) => {
  res.json({ status: 'ok', message: 'Server is running' });
});



router.get('/', (_req: Request, res: Response) => {
  res.json({ message: 'Welcome to the API' });
});

export default router;
