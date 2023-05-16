import express from 'express';
import cursoRouter from './routers/curso.router';

const app = express();

app.use(express.json());
app.use(cursoRouter)

export default app;