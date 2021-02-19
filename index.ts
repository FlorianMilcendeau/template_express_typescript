import { Request, Response } from 'express';

const express = require('express');

const PORT = process.env.PORT || 8080;
const app = express();
const logger = require('morgan');

/** Middleware */
app.use(logger('dev'));
app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.status(200).send('Express + TypeScript Server');
});

app.listen(PORT, (err: Error) => {
  if (err) {
    console.error(err);
  } else {
    console.log(`Express server listening on ${PORT}`);
  }
});
