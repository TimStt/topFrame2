import { TAuthStep, useAuthStore, useAuthStoreBase } from "./auth.store";

export const changeStepAuth = (step: TAuthStep) => {
  useAuthStoreBase.getState().setStep(step);
};
