export const TOPIC_NAME = 'my-topic';
export const ALARM_GROUP_ID = 'alarm-group';
export const ALARM_CLIENT_ID = 'alarm-clientId';
export const SLEEPY_HUMAN_GROUP_ID = 'sleepy-human-group';
export const SLEEPY_HUMAN_CLIENT_ID = 'sleepy-human-clientId';

export const BROKERS = ['localhost:9092'];

export const SIGNALS = ['SIGINT', 'SIGTERM', 'SIGQUIT'] as const;

export enum Messages {
  WAKEUP = 'wake-up',
  NO = 'no',
  SNOOZE = 'snooze',
}

export enum SH_MESSAGES {
  NO = 'no',
  SNOOZE = 'snooze',
}

// export enum Topics {
//   ALARM_MESSAGE = 'alarm-api-message',
//   ALARM_RESPONSE = 'alarm-api-response',
//   SH_MESSAGE = 'sleepy-human-api-message',
//   SH_RESPONSE = 'sleepy-human-api-response',
// }
