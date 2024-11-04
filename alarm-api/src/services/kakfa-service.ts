
import { kafka, topics } from '../config/kafka';
import { handleResponse } from '../controllers/alarm-controller';

const producer = kafka.producer();
const consumer = kafka.consumer({ groupId: 'alarm-group' });


export const produceWakeUp = async () => {
  await producer.connect();
  await producer.send({
    topic: topics.wakeUp,
    messages: [{ value: 'wake-up' }],
  });
  console.log('ALARM SERVICE PRODUCED: WAKEUP MESSAGE PRODUCED');
  await producer.disconnect();
  //disconnect producer so that we dont have a infinite loop
  //clean short down of the producer instance(consuming system resources if its still on)
  //we dont want unneccsary producer connection
};

//consume response
export const consumeResponse = async () => {
  await consumer.connect();
  await consumer.subscribe({ topic: topics.response, fromBeginning: true });
  await consumer.run({
    eachMessage: async ({ message }: any) => {
      const response = message.value.toString();
      await handleResponse(response);
      console.log({
        value: `ALARM SERVICE Received response: ${response}`,
      });
    },
  });
};
