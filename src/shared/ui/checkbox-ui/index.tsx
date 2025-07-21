import React, { ComponentPropsWithoutRef, forwardRef, useId } from "react";
import { cls } from "@/shared/lib/cls";

export type ICheckbox = ComponentPropsWithoutRef<"input"> & {
  /** Текст лейбла */
  label?: string;
  /** Тип чекбокса */
  type?: "checkbox" | "radio";
  /** Дополнительные классы для враппера */
  wrapperClassName?: string;
  /** Дополнительные классы для лейбла */
  labelClassName?: string;
};

export const CheckboxUI = forwardRef<HTMLInputElement, ICheckbox>(
  (
    {
      label,
      type = "checkbox",
      className,
      wrapperClassName,
      labelClassName,
      children,
      checked,
      onChange,
      ...rest
    },
    ref
  ) => {
    const controlClasses = cls("control", `control-${type}`, wrapperClassName);

    const inputClasses = cls("control__input", className);

    const labelClasses = cls("control__label", labelClassName);

    const id = useId();

    return (
      <label className={controlClasses} htmlFor={id} id={id + "-label"}>
        <input
          ref={ref}
          type={type}
          className={inputClasses}
          id={id}
          name={id}
          checked={checked}
          onChange={onChange}
          {...rest}
        />
        <div className="control__indicator"></div>
        {(label || children) && (
          <span className={labelClasses}>{label || children}</span>
        )}
      </label>
    );
  }
);

CheckboxUI.displayName = "CheckboxUI";
