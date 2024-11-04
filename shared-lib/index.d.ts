export declare const TOPIC_NAME = "my-topic";
export declare const ALARM_GROUP_ID = "alarm-group";
export declare const ALARM_CLIENT_ID = "alarm-clientId";
export declare const SLEEPY_HUMAN_GROUP_ID = "sleepy-human-group";
export declare const SLEEPY_HUMAN_CLIENT_ID = "sleepy-human-clientId";
export declare const BROKERS: string[];
export declare const SIGNALS: readonly ["SIGINT", "SIGTERM", "SIGQUIT"];
export declare enum Messages {
    WAKEUP = "wake-up",
    NO = "no",
    SNOOZE = "snooze"
}
export declare enum SH_MESSAGES {
    NO = "no",
    SNOOZE = "snooze"
}
