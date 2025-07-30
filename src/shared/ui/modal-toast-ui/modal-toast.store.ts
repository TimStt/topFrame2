import { createSelectors } from "@/shared/lib/zustands/create-selectors";
import { onToggleModal } from "@/shared/lib/zustands/use-store-modals";
import { create } from "zustand";

interface ModalToastStore {
  isOpen: boolean;
  title: string;
  description?: string;
  delay: number;
  showModalToast: ({
    isOpen,
    title,
    description,
    delay,
  }: {
    isOpen: boolean;
    title: string;
    description?: string;
    delay: number;
  }) => void;
}

export const useModalToastStoreBase = create<ModalToastStore>((set) => ({
  isOpen: false,
  title: "",
  description: "",
  delay: 0,
  showModalToast: ({ isOpen, title, description, delay }) => {
    onToggleModal("toast", isOpen);
    if (isOpen) {
      set({ isOpen, title, description, delay });
    } else {
      set({ isOpen: false, title: "", description: "", delay: 0 });
    }
  },
}));

export const useModalToastStore = createSelectors(useModalToastStoreBase);
