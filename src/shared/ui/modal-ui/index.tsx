import React from "react";
import Popup from "reactjs-popup";
import { PopupProps } from "reactjs-popup/dist/types";
import { ButtonCloseUI } from "./button-close-ui";
import { cls } from "@/shared/lib/cls";

export const ModalUI = ({
  className,
  children,
  handleClose,
  modal = true,
  closeOnDocumentClick = true,

  ...props
}: Omit<PopupProps, "closeOnEscape"> & {
  classNameInner?: string;
  handleClose?: () => void;
}) => {
  return (
    <Popup
      modal={modal}
      closeOnDocumentClick={closeOnDocumentClick}
      closeOnEscape
      onClose={handleClose}
      {...props}
    >
      <div className={cls("modal", className)}>
        {children}
        <ButtonCloseUI onClick={handleClose} />
      </div>
    </Popup>
  );
};
