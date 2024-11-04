
import { kafka, topics } from '../config/kafka';
import { handleWakeUpMessage } from '../controllers/sleepy-human-controller';

const producer = kafka.producer();
const consumer = kafka.consumer({ groupId: 'sleepy-human-group' });

//produce wake-up

export const produceResponse = async (response:any) => {
  await producer.connect();
  await producer.send({
    topic: topics.response,
    messages: [{ value: response }],
  });
  console.log(`SH SERVICE IS RESPONDS: ${response}`);
  await producer.disconnect();
  //disconnect producer so that we dont have a infinite loop
};

//consume response
 export const consumeWakeUp = async () => {
  await consumer.connect();
  await consumer.subscribe({ topic: topics.wakeUp, fromBeginning: true });
  await consumer.run({
    eachMessage: async ({ message }: any) => {
      const response = message.value.toString();
      await handleWakeUpMessage();
      console.log({
        value: `SH SERVICE Received wake-up message: ${response}`,
      });
    },
  });
};
