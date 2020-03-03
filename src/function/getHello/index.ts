import { HEROES } from '../service/mock-hero';

// import { HelloService } from '../service/hello-service';
const express = require('express');

export const app = express();
const serverless = require('serverless-http');

export const handler = serverless(app, {
  request: async function (request: any) {
  },
});

app.use('/', async (req: any, res: any) => {
  // const event = Buffer.isBuffer(req.body) ? JSON.parse(req.body.toString()) : req.body;
  //let status: number = 200;
  // res.status(status).send(JSON.stringify(HelloService.getHello(event)));
  // res.send(JSON.stringify(HEROES));
  res.send(HEROES);
});
