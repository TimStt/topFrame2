import { TAuthStep, useAuthStore } from "./auth.store";

export const changeStepAuth = (step: TAuthStep) => {
  useAuthStore().setStep(step);
};
