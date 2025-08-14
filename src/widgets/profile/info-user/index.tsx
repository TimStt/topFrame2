"use client";
import { useAuthStore } from "@/features/user/auth/model/auth.store";
import { AvatarWithChange } from "@/features/user/auth/ui/avatar-with-change";
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
import { useGetUser } from "@/features/user/auth/model/use-get-user";
import { URL_FILE_API } from "@/shared/constants/other";
import Image from "next/image";
import { InfoUserSkeleton } from "./skeleton";

export const InfoUser = () => {
  const { info, isLoading } = useGetUser();

  if (isLoading) return <InfoUserSkeleton />;
  return (
    <section className="profile__info-user">
      <div className="profile__info-user__about">
        <AvatarWithChange className="profile__info-user__avatar" />
        <span className="profile__info-user__name">{info?.user?.name}</span>
        <span className="profile__info-user__role">
          {
            {
              freelancer: "Фрилансер",
              recruiter: "Рекрутер",
            }[info?.user?.role || "freelancer"]
          }
        </span>

        {
          <ButtonUI
            className="profile__info-user__button"
            fullWidth
            as="a"
            href="https://yandex.ru/maps/?text=Москва"
            target="_blank"
          >
            <IconLocation />
            {<span>{info?.user?.city || "Москва"}</span>}
          </ButtonUI>
        }
        {info?.user?.role === "recruiter" && (
          <ButtonUI
            className="profile__info-user__button"
            fullWidth
            text={info?.user?.jobTitle}
          />
        )}
      </div>

      <div className="profile__info-user__links ">
        <label className="profile__info-user__links-label">
          Быстрые ссылки
        </label>
        <div className="profile__info-user__links-list">
          {info?.quickLinks?.map((link) => (
            <a
              className="profile__info-user__links-item"
              href={link.link}
              target="_blank"
              key={link.id}
            >
              <Image
                src={URL_FILE_API + link.icon}
                alt="icon"
                width={16}
                height={16}
              />
              <span className="profile__info-user__links-item-value">
                {link.name}
              </span>
            </a>
          ))}
        </div>
      </div>
      <div className="profile__info-user__links instructions">
        <label className="profile__info-user__links-label">Инструкции</label>
        {info?.instructions?.map((instruction) => (
          <a
            className="profile__info-user__links-item"
            href={instruction.link}
            target="_blank"
            key={instruction.id}
          >
            <Image
              src={URL_FILE_API + instruction.icon}
              alt="icon"
              width={16}
              height={16}
            />
            <span className="profile__info-user__links-item-value">
              {instruction.name}
            </span>
          </a>
        ))}
      </div>
      <ButtonLogout />
    </section>
  );
};
