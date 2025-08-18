"use client";

/**
 * @file: Footer section
 * @description: Main footer with navigation, contacts and company info
 * @dependencies: React, Next.js Link
 * @created: 2024-01-15
 */
import React from "react";

import { BACKGROUND_IMAGE_BLUE } from "@/shared/constants/other";
import { PAGES_PATHS } from "@/shared/constants/pages-paths";
import ArrowIcon from "@/source/icons/arrow.svg";
import EmailIcon from "@/source/icons/email.svg";
import LogoIsArt from "@/source/icons/logo-is-art.svg";

import EllipseBg2 from "@/source/icons/ellipse-bg2.svg";
import Image from "next/image";
import Link from "next/link";

import { companyInfo, footerContacts, footerNavigation } from "./footer.data";
import { useGetContacts } from "@/entity/user/api/get-contacts";
import { AnimationEllipses } from "@/shared/ui/animation-ellipses-ui";

export const Footer: React.FC = () => {
  const { contacts } = useGetContacts();

  return (
    <footer
      className="footer"
      style={{
        backgroundImage: `url(${BACKGROUND_IMAGE_BLUE})`,
      }}
    >
      {/* Основная часть футера */}
      <div className="footer__content container transform-ellipses">
        {/* Левая колонка - Логотип и описание */}
        <EllipseBg2 className="footer__ellipse-1" />
        <EllipseBg2 className="footer__ellipse-2" />
        <div className="footer__top">
          <div className="footer__brand">
            <Link className="footer__logo logo" href="/">
              <Image
                src="/icons/logo.svg"
                width={102}
                height={24}
                alt="TopFrame"
                className="header__logo-image"
              />
            </Link>
            <p
              className="footer__description"
              dangerouslySetInnerHTML={{ __html: companyInfo.description }}
            />
            <Link className="footer__button" href="/" target="_blank">
              <span className="footer__button-text">Посетить главный сайт</span>
              <ArrowIcon />
            </Link>
          </div>
          {/* Центральная колонка - Навигация */}
          <div className="footer__nav">
            <ul className="footer__nav-list">
              {footerNavigation[0].links.map((link) => (
                <li key={link.id} className="footer__nav-item">
                  <Link href={link.href} className="footer__nav-link">
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {/* Правая колонка - Контакты */}
          <div className="footer__contacts">
            {contacts?.emails.map((email) => (
              <a
                className="footer__contacts__email"
                href={`mailto:${email.value}`}
                key={email.id}
              >
                <span className="visually-hidden">Посмотреть почту</span>
                <EmailIcon />
              </a>
            ))}
            {contacts?.phones.map((phone) => (
              <a
                href={`tel:${phone.value}`}
                className="footer__contacts-phone"
                key={phone.id}
              >
                {phone.value}
              </a>
            ))}
          </div>
        </div>
        <div className="footer__bottom">
          <div className="footer__bottom-content">
            <p className="footer__copyright">
              © 2001 - {new Date().getFullYear()} TOPFRAME. Все права защищены.
            </p>

            {contacts?.documents.map((document) => (
              <Link
                href={PAGES_PATHS.DOCUMENTS(document.slug)}
                key={document.slug}
              >
                {document.title}
              </Link>
            ))}

            <Link href={PAGES_PATHS.IS_ART} target="_blank">
              <LogoIsArt />
            </Link>
          </div>
        </div>
      </div>

      {/* Нижняя часть футера */}
    </footer>
  );
};

export default Footer;
