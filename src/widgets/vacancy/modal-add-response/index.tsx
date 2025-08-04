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

export const ModalAddResponse = () => {
  const { isOpenModal, handleCloseModal, handleOpenModal } =
    useInitialModal("addResponse");

  const { showModalToast } = useModalToastStore();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleCloseModal();
    showModalToast({
      isOpen: true,
      title: "Ваш отклик успешно отправлен!",

      delay: 3000,
    });
  };

  return (
    <>
      <ButtonUI
        className="vacancy-page__button"
        variant="secondary"
        text="Откликнуться"
        hasArrow
        onClick={handleOpenModal}
      />
      <ModalUI
        className="modal-add-response"
        handleClose={handleCloseModal}
        open={isOpenModal}
      >
        <h2 className="modal-add-response__title modal__title">
          Отклик на вакансию
        </h2>
        <form className="modal-add-response__form" onSubmit={handleSubmit}>
          <div className="modal-add-response__inputs">
            <InputUI
              classNameWrapper="modal-add-response__input input-bottom"
              label="Имя"
              placeholder="Имя"
            />
            <InputUI
              classNameWrapper="modal-add-response__input input-bottom"
              label="Фамилия"
              placeholder="Фамилия"
            />
            <InputPhoneUI classNameWrapper="modal-add-response__input input-bottom" />
            <TextareaUI
              classNameWrapper="modal-add-response__input input-bottom"
              label="Комментарий"
              placeholder="Комментарий"
            />
          </div>

          <ButtonSubmitUI
            className="modal-add-response__button-action"
            hasArrow
            fullWidth
            text="Продолжить"
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
