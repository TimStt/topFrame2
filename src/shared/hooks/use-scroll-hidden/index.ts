'use client';

import { useEffect } from 'react';

export const useScrollHidden = (state: boolean, notBlocked?: boolean) => {
  useEffect(() => {
    if (typeof window === 'undefined' || notBlocked) return;
    if (state) {
      document.querySelector('html')!.style.overflow = 'hidden';

      return;
    }
    document.querySelector('html')!.style.overflow = 'auto';
    // setTimeout(() => {
    //   const listModals = Array.from(
    //     document.getElementsByTagName("dialog")
    //   ) as HTMLDialogElement[];

    //   const hasStateIsOpenmodal = listModals.some(
    //     (modal) => modal.style.display !== "none"
    //   );

    //   if (!hasStateIsOpenmodal) {
    //     document.body.style.overflow = "auto";
    //     document.body.style.marginRight = "0px";
    //   }
    // }, 500);
  }, [notBlocked, state]);
};
