"use client";

import { useRef, useState } from "react";

import useOnClickOutside from "@/shared/hooks/use-on-click-outside";
import { useScrollHidden } from "@/shared/hooks/use-scroll-hidden";

import {
  IInitialStateModals,
  onToggleModal,
  useStoreModalsBase,
} from "./use-store-modals";

export const useInitialModal = (
  name: keyof Exclude<IInitialStateModals, "setIsOpenModal">,
  handleCloseModalOutside?: () => void,
  notBlocked?: boolean,
  ignoreSelectors?: string[]
) => {
  const isOpenModal = !!useStoreModalsBase((state) => state[name]);
  const ref = useRef<HTMLDivElement | null>(null);
  // const innerRef = useRef<HTMLDivElement>(null);

  const handleCloseModal = () => {
    toggle(false);
    if (handleCloseModalOutside) {
      handleCloseModalOutside?.();
    }
  };

  const toggle = (state: boolean) => {
    onToggleModal(name, state);
  };

  const handleOpenModal = () => toggle(true);
  useScrollHidden(!!isOpenModal, notBlocked);
  useOnClickOutside(ref, handleCloseModal, ignoreSelectors);

  // dispatch(setState(false));

  return {
    isOpenModal,
    toggle,
    handleOpenModal,
    handleCloseModal,
    ref,
  };
};
