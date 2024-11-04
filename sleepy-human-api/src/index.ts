import express from 'express';
import { Request, Response } from 'express';
import http from 'http';
import * as kafkaService from './services/kakfa-service';


async function main() {
  const app = express();
  const PORT = 3001;
  const server = http.createServer(app);
  app.get('/', (req: Request, res: Response) => {
    res.send('Sleepy Human API works!');
  });

  server.listen(PORT, () => {
    console.log(`SH Server listening on port ${PORT}`);
  });

  kafkaService.consumeWakeUp();
}


// Call the main function
main().catch((err) => {
  console.error('Error starting the SH server:', err);
});
