"use client";
import { Avatar } from "@/entity/user/ui/avatar";
import React, { useId, useState } from "react";
import IconPen from "@/source/icons/pen.svg";
import { FilePickerUI } from "@/shared/lib/file-picker/file-picker-ui";
import { cls } from "@/shared/lib/cls";

export const AvatarWithChange = ({ className }: { className?: string }) => {
  const id = useId();

  const [isNewAvatar, setIsNewAvatar] = useState<string | null>(null);
  return (
    <FilePickerUI
      className={cls("avatar-with-change", className)}
      typePicker="image"
      multiple={false}
      setURL={setIsNewAvatar}
    >
      <Avatar
        className="avatar-with-change__avatar"
        userAvatar={isNewAvatar || ""}
      >
        <span className="avatar-with-change__button" id={id}>
          <IconPen />
        </span>
      </Avatar>
      <span className="visually-hidden"> Изменить фотографию </span>
    </FilePickerUI>
  );
};
