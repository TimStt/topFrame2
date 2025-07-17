import React, { useState } from "react";
import { InputUI, IInput } from "../input-ui";
import EyeClosedIcon from "@/source/icons/eys.svg";
import EyeOpenIcon from "@/source/icons/eye-open.svg";

export type IInputPassword = Omit<IInput, "type"> & {
  /** Показывать ли кнопку переключения видимости */
  showToggle?: boolean;
};

export const InputPasswordUI = ({
  showToggle = true,
  ...rest
}: IInputPassword) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const eyeIcon = showToggle ? (
    <button
      type="button"
      onClick={togglePasswordVisibility}
      className="input-password-toggle"
      aria-label={isPasswordVisible ? "Скрыть пароль" : "Показать пароль"}
    >
      {isPasswordVisible ? <EyeOpenIcon /> : <EyeClosedIcon />}
    </button>
  ) : undefined;

  return (
    <InputUI
      className="input--with-password"
      type={isPasswordVisible ? "text" : "password"}
      {...rest}
    >
      {eyeIcon}
    </InputUI>
  );
};

InputPasswordUI.displayName = "InputPasswordUI";
