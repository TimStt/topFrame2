import { create } from "zustand";
import { createSelectors } from "@/shared/lib/zustands/create-selectors";

export type TAuthStep = "login" | "registration";

export type TRole = "freelancer" | "recruiter";

interface AuthStoreState {
  step: TAuthStep;
  role?: TRole;
  setStep: (step: TAuthStep) => void;
  setRole: (role: TRole) => void;
  isAuthTest: boolean;
  setIsAuthTest: (isAuthTest: boolean) => void;
}

export const useAuthStoreBase = create<AuthStoreState>((set) => ({
  step: "login",
  role: "freelancer",
  isAuthTest: false,
  setStep: (step: TAuthStep) => set({ step }),
  setRole: (role: TRole) => set({ role }),
  setIsAuthTest: (isAuthTest: boolean) => set({ isAuthTest }),
  resetStep: () => set({ step: "login" }),
}));

export const useAuthStore = createSelectors(useAuthStoreBase);
