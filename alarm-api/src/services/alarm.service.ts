import * as KafkaService from './kakfa-service';

export const sendWakeUpMessage = async () => {
  console.log('Sending wake-up message');
  await KafkaService.produceWakeUp();
};

export const handleResponse = async (response: any) => {
  console.log('Alarm received:', response);
  if (response === 'snooze') {
    setTimeout(() => {
      sendWakeUpMessage();
      console.log('Alarm: says wakeup after 5 seconds');
    }, 5000);
  } else if (response === 'no') {
    sendWakeUpMessage();
    console.log('Alarm: says wakeup');
  }
};
