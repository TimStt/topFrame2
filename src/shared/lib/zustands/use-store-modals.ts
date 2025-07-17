"use client";

import { create } from "zustand";
import { devtools } from "zustand/middleware";

import { createSelectors } from "./create-selectors";

export interface IInitialStateModals {
  auth?: boolean;
  setIsOpenModal: (name: keyof IInitialStateModals, value: boolean) => void;
  filter?: boolean;
}

export const useStoreModalsBase = create<IInitialStateModals>()(
  devtools(
    (set) => ({
      setIsOpenModal: (name: keyof IInitialStateModals, value: boolean) => {
        {
          set((state) => ({
            ...state,
            [name]: value,
          }));
        }
      },
    }),
    {
      name: "modals",
    }
  )
);

export type TAllModals = keyof Exclude<IInitialStateModals, "setIsOpenModal">;

export const onToggleModal = (name: TAllModals, value: boolean) =>
  useStoreModalsBase.getState().setIsOpenModal(name, value);
