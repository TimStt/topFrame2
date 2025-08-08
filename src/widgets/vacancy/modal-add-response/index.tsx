"use client";

import { useInitialModal } from "@/shared/lib/zustands/use-initial-modal";
import { ModalUI } from "@/shared/ui/modal-ui";
import React from "react";
import { ButtonSubmitUI } from "@/shared/ui/button-submit-ui";
import { InputUI } from "@/shared/ui/input-ui";
import { InputPhoneUI } from "@/shared/ui/input-phone-ui";
import { TextareaUI } from "@/shared/ui/textarea-ui";
import Link from "next/link";
import { PAGES_PATHS } from "@/shared/constants/pages-paths";
import { ButtonUI } from "@/shared/ui/button-ui";
import { useModalToastStore } from "@/shared/ui/modal-toast-ui/modal-toast.store";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { useAddResponse } from "@/features/vacancy/search/model/use-add-response";

export const SchemaAddResponse = z.object({
  name: z.string().min(1, "Имя обязательно"),
  phone: z.string().min(10, "Номер должен содержать 10 цифр"),

  surname: z.string().min(1, "Фамилия обязательна"),
  comment: z.string().optional(),
});

export const ModalAddResponse = ({ idResponse }: { idResponse: number }) => {
  const { isOpenModal, handleCloseModal, handleSubmit, mutationAddResponse } =
    useAddResponse(idResponse);

  const {
    formState: { errors: errorsForm },
    ...form
  } = useForm<z.infer<typeof SchemaAddResponse>>({
    resolver: zodResolver(SchemaAddResponse),
  });

  return (
    <>
      <ModalUI
        className="modal-add-response"
        handleClose={handleCloseModal}
        open={isOpenModal}
      >
        <h2 className="modal-add-response__title modal__title">
          Отклик на вакансию
        </h2>
        <form
          className="modal-add-response__form"
          onSubmit={form.handleSubmit(handleSubmit)}
        >
          <div className="modal-add-response__inputs">
            <InputUI
              classNameWrapper="modal-add-response__input input-bottom"
              label="Имя"
              placeholder="Имя"
              error={errorsForm.name?.message}
              {...form.register("name")}
            />
            <InputUI
              classNameWrapper="modal-add-response__input input-bottom"
              label="Фамилия"
              placeholder="Фамилия"
              error={errorsForm.surname?.message}
              {...form.register("surname")}
            />
            <Controller
              name="phone"
              control={form.control}
              render={({ field }) => (
                <InputPhoneUI
                  classNameWrapper="modal-add-response__input input-bottom"
                  error={errorsForm.phone?.message}
                  value={field.value}
                  onChange={field.onChange}
                />
              )}
            />
            <TextareaUI
              classNameWrapper="modal-add-response__input input-bottom"
              label="Комментарий"
              placeholder="Комментарий"
              error={errorsForm.comment?.message}
              {...form.register("comment")}
            />
          </div>

          <ButtonSubmitUI
            className="modal-add-response__button-action"
            hasArrow
            fullWidth
            text="Продолжить"
            isLoading={mutationAddResponse.isPending}
          />
          <p className="police-text">
            Продолжая, вы принимаете
            <Link href={PAGES_PATHS.POLICY}> политику конфиденциальности</Link>
          </p>
        </form>
      </ModalUI>
    </>
  );
};
