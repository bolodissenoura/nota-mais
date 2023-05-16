import { Router, Request, Response } from 'express';


const cursoRouter = Router();

cursoRouter.get('/engProd', (req: Request, res: Response ) => {
  res.send('Hello, World!');
});

export default cursoRouter;