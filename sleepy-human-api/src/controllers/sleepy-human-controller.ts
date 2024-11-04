import * as sleepyHumanService from '../services/sleepy-human-service';

export const handleWakeUpMessage = async () => {
  return await sleepyHumanService.handleWakeUpMessage()
};
