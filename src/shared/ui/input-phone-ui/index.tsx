import React, { InputHTMLAttributes } from "react";

import { format, useMask } from "@react-input/mask";

import { IInput, InputUI } from "../input-ui";
import { cls } from "@/shared/lib/cls";
import { useMaskInput } from "@/shared/lib/mask/use-mask-input";
import { clearingNumbers } from "@/shared/utils/clearing-numbers";

interface IInputPhoneProps extends IInput {
  className?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const InputPhoneUI = ({
  value,
  className,
  onChange,
  ...props
}: IInputPhoneProps) => {
  const { defaultValue, inputRef } = useMaskInput({
    mask: "+_ (___) ___-__-__",
    value,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Получаем только цифры из введенного значения
    const numbersOnly = clearingNumbers(e.target.value);

    console.log("numbersOnly", numbersOnly);

    // Создаем новое событие с очищенным значением
    const newEvent = {
      ...e,
      target: {
        ...e.target,
        value: numbersOnly,
      },
    };

    console.log("newEvent", newEvent);

    onChange?.(newEvent);
  };

  return (
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
  );
};
