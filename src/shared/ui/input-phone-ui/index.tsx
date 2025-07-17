import { ErrorMessage, FastField, Field } from "formik";

import React, { HTMLAttributes, InputHTMLAttributes } from "react";

import { format, useMask } from "@react-input/mask";

import { IInput, InputUI } from "../input-ui";
import { cls } from "@/shared/lib/cls";
import { useMaskInput } from "@/shared/lib/mask/use-mask-input";
import { clearingNumbers } from "@/shared/utils/clearing-numbers";

interface IInputPhoneProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const InputPhoneUI = ({
  value,
  className,

  onChange,
  ...props
}: IInput) => {
  const { defaultValue, inputRef, options } = useMaskInput({
    mask: "+_ (___) ___-__-__",
    value,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formattedValue = clearingNumbers(e.target.value);
    e.target.value = formattedValue?.toString() || "";
    onChange?.(e);
  };

  return (
    <>
      <InputUI
        type="tel"
        rootRef={inputRef}
        className={cls("input_phone", className)}
        onChange={handleChange}
        label="Телефон"
        placeholder="Телефон"
        value={defaultValue}
        {...props}
      />
    </>
  );
};
