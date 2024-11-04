import express from 'express';
import { Request, Response } from 'express';
import http from 'http';
import * as alarmController from './controllers/alarm-controller';
import * as kafkaService from './services/kakfa-service';

// const alarmProducer = kafka.producer();
// const alarmConsumer = kafka.consumer({ groupId: ALARM_GROUP_ID });

//IIFE-Immediately invoked function expression
(async function main() {
  const app = express();
  const PORT = 3000;
  const server = http.createServer(app);
  app.get('/', (req: Request, res: Response) => {
    res.send('Alarm API works!');
  });

  server.listen(PORT, () => {
    console.log(`Alarm Server listening on port ${PORT}`);
  });

  kafkaService.consumeResponse();
  alarmController.sendWakeUpMessage();
})().catch((err) => {
  console.error('Error starting the Alarm server:', err);
});
