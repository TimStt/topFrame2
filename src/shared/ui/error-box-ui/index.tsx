"use client";

import cls from "classnames";
import React, { useCallback, useEffect, useState } from "react";

export const ErrorBoxUI = ({
  className,
  message,

  width,
  hasReloadPage,
  onClose,
  hasBackButton,
  hasCloseButton,
  delay = 1000,
}: {
  className?: string;
  message?: string;
  onClose?: () => void;

  width?: string;
  hasReloadPage?: boolean;
  hasBackButton?: boolean;
  hasCloseButton?: boolean;
  delay?: number;
}) => {
  const style = {
    "--width": width,
  } as React.CSSProperties;

  const [isVisible, setIsVisible] = useState(false);

  const onCloseCallback = useCallback(() => {
    setIsVisible(false);
    onClose?.();
  }, []);

  useEffect(() => {
    if (!message?.length) return;
    setIsVisible(true);
    setTimeout(() => {
      onCloseCallback();
    }, delay);
  }, [onCloseCallback, message]);

  return (
    <div
      className={cls("error-box", className, { visible: isVisible })}
      role="alert"
      aria-live="assertive"
      aria-atomic="true"
      style={style}
    >
      <div className="error-box__icon">
        <svg
          fill="none"
          height={24}
          viewBox="0 0 24 24"
          width={24}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="m13 13h-2v-6h2zm0 4h-2v-2h2zm-1-15c-1.3132 0-2.61358.25866-3.82683.7612-1.21326.50255-2.31565 1.23915-3.24424 2.16773-1.87536 1.87537-2.92893 4.41891-2.92893 7.07107 0 2.6522 1.05357 5.1957 2.92893 7.0711.92859.9286 2.03098 1.6651 3.24424 2.1677 1.21325.5025 2.51363.7612 3.82683.7612 2.6522 0 5.1957-1.0536 7.0711-2.9289 1.8753-1.8754 2.9289-4.4189 2.9289-7.0711 0-1.3132-.2587-2.61358-.7612-3.82683-.5026-1.21326-1.2391-2.31565-2.1677-3.24424-.9286-.92858-2.031-1.66518-3.2443-2.16773-1.2132-.50254-2.5136-.7612-3.8268-.7612z"
            fill="#393a37"
          />
        </svg>
      </div>
      <p className="error-box__title">{message}</p>
      {hasReloadPage && (
        <button
          className="error-box__reload"
          onClick={() => window.location.reload()}
          type="button"
          title="Попробовать сновау"
        >
          <span>Попробовать снова</span>
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.65 2.35C12.2 0.9 10.21 0 8 0C3.58 0 0 3.58 0 8C0 12.42 3.58 16 8 16C11.73 16 14.84 13.45 15.73 10H13.65C12.83 12.33 10.61 14 8 14C4.69 14 2 11.31 2 8C2 4.69 4.69 2 8 2C9.66 2 11.14 2.69 12.22 3.78L9 7H16V0L13.65 2.35Z"
              fill="currentColor"
            />
          </svg>
        </button>
      )}
      {hasCloseButton && (
        <button
          className="error-box__close"
          onClick={onCloseCallback}
          type="button"
          title="Скрыть ошибку"
        >
          &times;
          <span className="visually-hidden">Скрыть ошибку</span>
        </button>
      )}
    </div>
  );
};
