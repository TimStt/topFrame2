'use client'

/**
 * @file: Footer section
 * @description: Main footer with navigation, contacts and company info
 * @dependencies: React, Next.js Link
 * @created: 2024-01-15
 */
import React from 'react'

import ArrowIcon from '@/source/icons/arrow.svg'
import EmailIcon from '@/source/icons/email.svg'
import LogoIsArt from '@/source/icons/logo-is-art.svg'
import Image from 'next/image'
import Link from 'next/link'

import { companyInfo, footerContacts, footerNavigation } from './footer.data'

export const Footer: React.FC = () => {
  return (
    <footer
      className="footer"
      style={{
        backgroundImage: `url("/icons/bg-main.svg")`,
      }}
    >
      {/* Основная часть футера */}
      <div className="footer__content container">
        {/* Левая колонка - Логотип и описание */}
        <div className="footer__top">
          <div className="footer__brand">
            <Link className="footer__logo" href="/">
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
            <a className="footer__contacts__email" href="mailto:info@topframe.ru">
              <span className="visually-hidden">Посмотреть почту</span>
              <EmailIcon />
              <span className="footer__contacts__email-text">написать на почту</span>
            </a>
            <a href="tel:+79636843639" className="footer__contacts-phone">
              +7 963 684 36 39
            </a>

            <a href="tel:+79636843641" className="footer__contacts-phone">
              +7 963 684 36 41
            </a>
          </div>
        </div>
        <div className="footer__bottom">
          <div className="footer__bottom-content">
            <p className="footer__copyright">
              © 2001 - {new Date().getFullYear()} TOPFRAME. Все права защищены.
            </p>

            <Link href={''}>Политика конфиденциальности</Link>

            <LogoIsArt />
          </div>
        </div>
      </div>

      {/* Нижняя часть футера */}
    </footer>
  )
}

export default Footer
