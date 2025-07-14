/**
 * @file: Header component
 * @description: Main website header with navigation and logo
 * @dependencies: Next.js Image, Button component
 * @created: 2024-01-15
 */

import React from "react";
import Image from "next/image";

export const Header = () => {
  const navigationItems = [
    { label: "Все профессии", href: "/freelance" },
    { label: "Фриланс", href: "/freelance" },
    { label: "Наши вакансии", href: "/vacancies" },
    { label: "Наша компания", href: "/about" },
  ];

  return (
    <header className="header">
      <div className="header__inner container">
        <div className="header__logo">
          <Image
            src="/icons/logo.svg"
            width={120}
            height={24}
            alt="TopFrame"
            className="header__logo-image"
          />
        </div>

        <nav className="header__nav">
          <ul className="header__nav-list">
            {navigationItems.map((item, index) => (
              <li key={index} className="header__nav-item">
                <a href={item.href} className="header__nav-link">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="header__actions">
          <button className="header__login-btn">Войти</button>
        </div>
      </div>
    </header>
  );
};
