import { useAuthStore } from "@/features/auth/auth.store";
import { AvatarWithChange } from "@/features/change-pofile/avatar-with-change";
import { ButtonUI } from "@/shared/ui/button-ui";
import React from "react";
import { useStore } from "zustand";
import IconLocation from "@/sources/icons/location.svg";
import Link from "next/link";
import IconEllipse from "@/sources/icons/ellipse.svg";
import IconGearWheele from "@/sources/icons/gear-wheele.svg";
import IconBook from "@/sources/icons/book2.svg";
import IconLink from "@/sources/icons/link.svg";
import { ButtonLogout } from "@/features/auth/button-logout";

export const InfoUser = () => {
  const role = useAuthStore().role;
  return (
    <section className="info-user">
      <div className="info-user__about">
        <AvatarWithChange />
        <span className="info-user__name">Петр Петров Иванович</span>
        <span className="info-user__role">
          {
            {
              freelancer: "Фрилансер",
              recruiter: "Рекрутер",
            }[role || "freelancer"]
          }
        </span>

        <ButtonUI className="info-user__button" fullWidth>
          <IconLocation />
          <span>Москва</span>
        </ButtonUI>
        <ButtonUI className="info-user__button" fullWidth>
          HR департамент
        </ButtonUI>
      </div>

      <div className="info-user__links instructions">
        <label className="info-user__links-label">Быстрые ссылки</label>
        <div className="info-user__links-list">
          <Link className="info-user__links-item" href="">
            <IconEllipse />
            <span className="info-user__links-item-value">Портал TopFrame</span>
          </Link>
          <Link className="info-user__links-item" href="">
            <IconGearWheele />
            <span className="info-user__links-value">Битрикс24</span>
          </Link>
          <Link className="info-user__links-item" href="">
            <IconBook />
            <span className="info-user__links-item-value">Таблица СБ</span>
          </Link>
        </div>
      </div>
      <div className="info-user__links">
        <label className="info-user__links-label">Быстрые ссылки</label>
        <div className="info-user__links-list">
          <Link className="info-user__links-item" href="">
            <IconLink />
            <span className="info-user__links-item-value">PDF файл</span>
          </Link>
          <Link className="info-user__links-item" href="">
            <IconLink />
            <span className="info-user__links-value">Инструкция</span>
          </Link>
          <Link className="info-user__links-item" href="">
            <IconLink />
            <span className="info-user__links-item-value">Обучалка</span>
          </Link>
        </div>
      </div>
      <ButtonLogout />
    </section>
  );
};
