import * as KafkaService from './kakfa-service';

export const handleWakeUpMessage = async () => {
  const response = Math.random() > 0.5 ? 'snooze' : 'no';
  await KafkaService.produceResponse(response);
};
