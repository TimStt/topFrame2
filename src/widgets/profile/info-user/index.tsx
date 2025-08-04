"use client";
import { useAuthStore } from "@/features/user/auth/model/auth.store";
import { AvatarWithChange } from "@/features/change-pofile/avatar-with-change";
import { ButtonUI } from "@/shared/ui/button-ui";
import React from "react";
import { useStore } from "zustand";
import IconLocation from "@/source/icons/location.svg";
import Link from "next/link";
import IconEllipse from "@/source/icons/ellipse.svg";
import IconGearWheele from "@/source/icons/gear-wheele.svg";
import IconBook from "@/source/icons/book2.svg";
import IconLink from "@/source/icons/link.svg";
import { ButtonLogout } from "@/features/user/auth/ui/button-logout";

export const InfoUser = () => {
  const role = useAuthStore().role;
  return (
    <section className="profile__info-user">
      <div className="profile__info-user__about">
        <AvatarWithChange className="profile__info-user__avatar" />
        <span className="profile__info-user__name">Петр Петров Иванович</span>
        <span className="profile__info-user__role">
          {
            {
              freelancer: "Фрилансер",
              recruiter: "Рекрутер",
            }[role || "freelancer"]
          }
        </span>

        <ButtonUI
          className="profile__info-user__button"
          fullWidth
          as="a"
          href="https://yandex.ru/maps/?text=Москва"
          target="_blank"
        >
          <IconLocation />
          <span>Москва</span>
        </ButtonUI>
        {role === "recruiter" && (
          <ButtonUI
            className="profile__info-user__button"
            fullWidth
            text="HR департамент"
          />
        )}
      </div>

      <div className="profile__info-user__links instructions">
        <label className="profile__info-user__links-label">
          Быстрые ссылки
        </label>
        <div className="profile__info-user__links-list">
          <Link className="profile__info-user__links-item" href="">
            <IconEllipse />
            <span className="profile__info-user__links-item-value">
              Портал TopFrame
            </span>
          </Link>
          <Link className="profile__info-user__links-item" href="">
            <IconGearWheele />
            <span className="profile__info-user__links-value">Битрикс24</span>
          </Link>
          <Link className="profile__info-user__links-item" href="">
            <IconBook />
            <span className="profile__info-user__links-item-value">
              Таблица СБ
            </span>
          </Link>
        </div>
      </div>
      <div className="profile__info-user__links">
        <label className="profile__info-user__links-label">
          Быстрые ссылки
        </label>
        <div className="profile__info-user__links-list">
          <Link className="profile__info-user__links-item" href="">
            <IconLink />
            <span className="profile__info-user__links-item-value">
              PDF файл
            </span>
          </Link>
          <Link className="profile__info-user__links-item" href="">
            <IconLink />
            <span className="profile__info-user__links-value">Инструкция</span>
          </Link>
          <Link className="profile__info-user__links-item" href="">
            <IconLink />
            <span className="profile__info-user__links-item-value">
              Обучалка
            </span>
          </Link>
        </div>
      </div>
      <ButtonLogout />
    </section>
  );
};
