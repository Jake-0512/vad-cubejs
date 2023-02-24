import type { Application, Request, Response } from 'express';

export function initApp(app: Application) {
  app.get('/', (req: Request, res: Response) => {
    res.sendStatus(404);
  });
}