import { useAnimateOnScroll } from "@/shared/hooks/use-animate-on-scroll";
import { cls } from "@/shared/lib/cls";
import { ButtonSubmitUI } from "@/shared/ui/button-submit-ui";
import { ButtonUI } from "@/shared/ui/button-ui";
import { InputPhoneUI } from "@/shared/ui/input-phone-ui";
import { InputUI } from "@/shared/ui/input-ui";
import { TextareaUI } from "@/shared/ui/textarea-ui";
import Link from "next/link";
import React from "react";

export const RegisterStep = () => {
  const { className, ref } = useAnimateOnScroll();
  return (
    <div
      ref={ref}
      className={cls(className, "modal-auth__register-step fade-in ")}
    >
      <p className="modal-auth__description subtitle">
        С вами свяжется менеджер для подтверждения регистрации
      </p>
      <div className="modal-auth__inputs">
        <InputUI
          classNameWrapper="modal-auth__input input-bottom"
          label="Имя"
          placeholder="Имя"
        />
        <InputUI
          classNameWrapper="modal-auth__input input-bottom"
          label="Фамилия"
          placeholder="Фамилия"
        />
        <InputPhoneUI classNameWrapper="modal-auth__input input-bottom" />
        <TextareaUI
          classNameWrapper="modal-auth__input input-bottom"
          label="Комментарий"
          placeholder="Комментарий"
        />
      </div>

      <ButtonSubmitUI className="modal-auth__button-action" hasArrow fullWidth>
        Продолжить
      </ButtonSubmitUI>
      <p className="modal-auth__police-text">
        Продолжая, вы принимаете 
        <Link href="/">политику конфиденциальности</Link>
      </p>
    </div>
  );
};
