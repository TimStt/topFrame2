"use client";

import React, { useState } from "react";

import useOnClickOutside from "@/shared/hooks/use-on-click-outside";
import { useScrollHidden } from "@/shared/hooks/use-scroll-hidden";

import { navigationItems } from "../../nav.data";

export const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  useScrollHidden(isOpen);

  return (
    <div className="mobile-menu">
      <input
        className="mobile-menu__icon"
        type="checkbox"
        id="mobile-menu-icon"
        name="mobile-menu-icon"
        title="Открыть меню"
        checked={isOpen}
        onChange={() => setIsOpen(!isOpen)}
      />

      <label
        htmlFor="mobile-menu-icon"
        className="mobile-menu__label"
        aria-label="Открыть меню"
        tabIndex={0}
      >
        <span className="visually-hidden">Открыть меню сайта </span>
        <span className="mobile-menu__bar mobile-menu__bar--top" />
        <span className="mobile-menu__bar mobile-menu__bar--middle" />
        <span className="mobile-menu__bar mobile-menu__bar--bottom" />
      </label>
      <nav className="mobile-menu__nav" aria-label="Меню">
        <ul className="mobile-menu__list">
          {navigationItems.map((item, idx) => (
            <li key={item.href} className="mobile-menu__item">
              <a href={item.href} className="mobile-menu__link">
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};
