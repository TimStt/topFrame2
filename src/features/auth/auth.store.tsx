import { create } from "zustand";
import { createSelectors } from "@/shared/lib/zustands/create-selectors";

export type TAuthStep = "login" | "registration";

interface AuthStoreState {
  step: TAuthStep;
  setStep: (step: TAuthStep) => void;
  isAuthTest: boolean;
  setIsAuthTest: (isAuthTest: boolean) => void;
}

const useAuthStoreBase = create<AuthStoreState>((set) => ({
  step: "login",
  isAuthTest: false,
  setStep: (step: TAuthStep) => set({ step }),
  setIsAuthTest: (isAuthTest: boolean) => set({ isAuthTest }),
  resetStep: () => set({ step: "login" }),
}));

export const useAuthStore = createSelectors(useAuthStoreBase);
