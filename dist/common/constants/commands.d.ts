export declare const Commands: {
    readonly REGISTER: "register";
    readonly LOGIN: "login";
    readonly RESET_PASSWORD: "reset-password";
    readonly GET_PROFILE: "get-profile";
    readonly UPDATE_PROFILE: "update-profile";
    readonly COMPLETE_ONBOARDING: "complete-onboarding";
};
export type Command = (typeof Commands)[keyof typeof Commands];
