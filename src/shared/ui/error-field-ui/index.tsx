/**
 * @file: ErrorField.tsx
 * @description: Компонент ErrorField
 * @created: 2025-08-14
 */
import React from "react";

export const ErrorFieldUI = ({ id, error }: { id: string; error: string }) => {
  return (
    <span className="input-error" aria-live="polite" aria-describedby={id}>
      {error}
    </span>
  );
};
