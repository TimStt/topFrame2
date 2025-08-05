import React from "react";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { PAGES_PATHS } from "@/shared/constants/pages-paths";
import { useAnimateOnScroll } from "@/shared/hooks/use-animate-on-scroll";
import { cls } from "@/shared/lib/cls";
import { onToggleModal } from "@/shared/lib/zustands/use-store-modals";
import { ButtonSubmitUI } from "@/shared/ui/button-submit-ui";
import { ButtonUI } from "@/shared/ui/button-ui";
import { InputPhoneUI } from "@/shared/ui/input-phone-ui";
import { InputUI } from "@/shared/ui/input-ui";
import { ModalToastUI } from "@/shared/ui/modal-toast-ui";
import { useModalToastStore } from "@/shared/ui/modal-toast-ui/modal-toast.store";
import { TextareaUI } from "@/shared/ui/textarea-ui";
import Link from "next/link";
import { useRegister } from "../model/use-register";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { IApiSchemas } from "@/shared/api/schema";

const RegisterSchema = z.object({
  name: z.string().min(1, "Имя обязательно для заполнения"),
  surname: z.string().min(1, "Фамилия обязательна для заполнения"),
  phone: z.string().min(10, "Номер должен содержать 10 цифр"),
  comment: z.string().optional(),
});

export const RegisterStep = () => {
  const { className, ref } = useAnimateOnScroll();

  const { registerMutation, handleRegister } = useRegister();

  const {
    formState: { errors: errorsRegister },
    ...validateForm
  } = useForm({
    resolver: zodResolver(RegisterSchema),
    mode: "onChange",
  });

  return (
    <>
      <form
        ref={ref}
        className={cls(className, "modal-auth__register-step fade-in ")}
        onSubmit={validateForm.handleSubmit(handleRegister)}
      >
        <p className="modal-auth__description subtitle">
          С вами свяжется менеджер для подтверждения регистрации
        </p>
        <div className="modal-auth__inputs">
          <InputUI
            classNameWrapper="modal-auth__input input-bottom"
            label="Имя"
            placeholder="Имя"
            error={errorsRegister.name?.message}
            {...validateForm.register("name")}
          />
          <InputUI
            classNameWrapper="modal-auth__input input-bottom"
            label="Фамилия"
            placeholder="Фамилия"
            error={errorsRegister.surname?.message}
            {...validateForm.register("surname")}
          />
          <Controller
            name="phone"
            control={validateForm.control}
            render={({ field }) => (
              <InputPhoneUI
                classNameWrapper="modal-auth__input input-bottom"
                error={errorsRegister.phone?.message}
                value={field.value}
                onChange={field.onChange}
              />
            )}
          />
          <TextareaUI
            classNameWrapper="modal-auth__input  input-bottom"
            label="Комментарий"
            placeholder="Комментарий"
            {...validateForm.register("comment")}
            error={errorsRegister.comment?.message}
          />
        </div>

        <ButtonSubmitUI
          className="modal-auth__button-action"
          hasArrow
          fullWidth
          text="Продолжить"
          isLoading={registerMutation.isPending}
        />
        <p className="police-text">
          Продолжая, вы принимаете
          <Link href={PAGES_PATHS.POLICY}> политику конфиденциальности</Link>
        </p>
      </form>
    </>
  );
};
