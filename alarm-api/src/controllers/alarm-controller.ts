import * as AlarmService from '../services/alarm.service';

export const sendWakeUpMessage = async () => {
  return await AlarmService.sendWakeUpMessage();
};

export const handleResponse = async (response: any) => {
  return await AlarmService.handleResponse(response);
};
