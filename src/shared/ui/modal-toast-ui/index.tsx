/**
 * @file: Modal.tsx
 * @description: Компонент Modal
 * @created: 2025-07-30
 */
"use client";
import IconSuccess from "@/source/icons/success.svg";
import { useInitialModal } from "@/shared/lib/zustands/use-initial-modal";
import React, { useEffect, useRef, useState } from "react";
import { ModalUI } from "../modal-ui";
import { cls } from "@/shared/lib/cls";
import { ButtonCloseUI } from "../modal-ui/button-close-ui";
import { useModalToastStore } from "./modal-toast.store";

interface ModalToastUIProps {
  className?: string;
}

export const ModalToastUI: React.FC<ModalToastUIProps> = ({ className }) => {
  const { isOpenModal, handleCloseModal } = useInitialModal("toast", () => {
    setProgress(0);
    refStartTime.current = 0;
    onClose?.();
  });
  const { title, description, delay, onClose } = useModalToastStore();
  const [progress, setProgress] = useState(0);

  const refStartTime = useRef<number>(0);
  useEffect(() => {
    if (isOpenModal) {
      //  начало времени
      const startTime = Date.now();
      if (refStartTime.current === 0) {
        refStartTime.current = startTime;
      }
      const updateProgress = () => {
        //  текущее время
        const currentTime = Date.now();
        //  время прошедшее с начала
        const elapsedTime = currentTime - refStartTime.current;
        //  прогресс

        console.log(" elapsedTime", elapsedTime);
        console.log(" delay", delay);
        const progress = (elapsedTime / delay) * 100;
        console.log("progress", progress);
        setProgress(progress);
        if (elapsedTime < delay) {
          requestAnimationFrame(updateProgress);

          return;
        }
        refStartTime.current = 0;
        setProgress(0);
        handleCloseModal();
        onClose?.();
      };

      const id = requestAnimationFrame(updateProgress);

      return () => {
        cancelAnimationFrame(id);
      };
    }
  }, [isOpenModal, delay]);

  return (
    <ModalUI
      className={cls("modal-toast", className)}
      handleClose={handleCloseModal}
      open={isOpenModal}
    >
      <ButtonCloseUI onClick={handleCloseModal} />
      {/* <IconSuccess /> заменяем на инлайн SVG с анимацией */}
      <svg
        width="64"
        height="64"
        viewBox="0 0 64 64"
        fill="none"
        className="modal-toast__icon"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          className="modal-toast__icon-circle"
          d="M31.9997 58.6667C46.6663 58.6667 58.6663 46.6667 58.6663 32C58.6663 17.3333 46.6663 5.33334 31.9997 5.33334C17.333 5.33334 5.33301 17.3333 5.33301 32C5.33301 46.6667 17.333 58.6667 31.9997 58.6667Z"
          stroke="#242424"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          className="modal-toast__icon-check"
          d="M20.667 32L28.2137 39.5467L43.3337 24.4533"
          stroke="#242424"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      <div className="modal-toast__content">
        <h3 className="modal-toast__title">{title}</h3>
        {description && <p>{description}</p>}
      </div>
      <div className="modal-toast__progress">
        <div
          className="modal-toast__progress-bar"
          style={{ width: `${progress}%` }}
          key={progress}
        />
      </div>
    </ModalUI>
  );
};
