import { Kafka } from 'kafkajs';

// Fetch the Kafka broker from environment variables
// const kafkaBroker = process.env.KAFKA_BROKER || 'localhost:9092';
const kafkaBroker = 'kafka:9092'

export const kafka = new Kafka({
  clientId: 'alarm-clientId',
  brokers: [kafkaBroker], // Dynamically use the Kafka broker URL
});

export const topics = {
  wakeUp: 'wake-up-topic',
  response: 'response-topic',
};
