"use client";
import { Avatar } from "@/entity/user/ui/avatar";
import React, { useId, useState } from "react";
import IconPen from "@/source/icons/pen.svg";
import { FilePickerUI } from "@/shared/lib/file-picker/file-picker-ui";
import { cls } from "@/shared/lib/cls";
import { useChangeAvatar } from "../model/use-change-avatar";
import { useGetUser } from "../model/use-get-user";

export const AvatarWithChange = ({ className }: { className?: string }) => {
  const id = useId();
  const { handleChangeAvatar } = useChangeAvatar();
  const { info } = useGetUser();

  return (
    <FilePickerUI
      className={cls("avatar-with-change", className)}
      typePicker="image"
      multiple={false}
      setFile={handleChangeAvatar}
      title="Изменить аватарку"
    >
      <Avatar
        className="avatar-with-change__avatar"
        userAvatar={info?.user?.photo || ""}
      ></Avatar>
      <span className="avatar-with-change__button" id={id}>
        <IconPen />
      </span>
      <span className="visually-hidden"> Изменить фотографию </span>
    </FilePickerUI>
  );
};
