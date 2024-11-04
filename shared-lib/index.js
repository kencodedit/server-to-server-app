"use strict";
exports.__esModule = true;
exports.SH_MESSAGES = exports.Messages = exports.SIGNALS = exports.BROKERS = exports.SLEEPY_HUMAN_CLIENT_ID = exports.SLEEPY_HUMAN_GROUP_ID = exports.ALARM_CLIENT_ID = exports.ALARM_GROUP_ID = exports.TOPIC_NAME = void 0;
exports.TOPIC_NAME = 'my-topic';
exports.ALARM_GROUP_ID = 'alarm-group';
exports.ALARM_CLIENT_ID = 'alarm-clientId';
exports.SLEEPY_HUMAN_GROUP_ID = 'sleepy-human-group';
exports.SLEEPY_HUMAN_CLIENT_ID = 'sleepy-human-clientId';
exports.BROKERS = ['localhost:9092'];
exports.SIGNALS = ['SIGINT', 'SIGTERM', 'SIGQUIT'];
var Messages;
(function (Messages) {
    Messages["WAKEUP"] = "wake-up";
    Messages["NO"] = "no";
    Messages["SNOOZE"] = "snooze";
})(Messages = exports.Messages || (exports.Messages = {}));
var SH_MESSAGES;
(function (SH_MESSAGES) {
    SH_MESSAGES["NO"] = "no";
    SH_MESSAGES["SNOOZE"] = "snooze";
})(SH_MESSAGES = exports.SH_MESSAGES || (exports.SH_MESSAGES = {}));
// export enum Topics {
//   ALARM_MESSAGE = 'alarm-api-message',
//   ALARM_RESPONSE = 'alarm-api-response',
//   SH_MESSAGE = 'sleepy-human-api-message',
//   SH_RESPONSE = 'sleepy-human-api-response',
// }
