"use client";

/**
 * @file: Header component
 * @description: Main website header with navigation and logo
 * @dependencies: Next.js Image, Button component
 * @created: 2024-01-15
 */
import React, { useEffect, useMemo, useRef, useState } from "react";

import {
  PAGES_PATHS,
  PAGES_WITH_BLUE_HEAD,
} from "@/shared/constants/pages-paths";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { navigationItems } from "./nav.data";
import { ButtonAuth } from "./ui/button-auth";
import { MobileMenu } from "./ui/mobile-menu";

export const Header = () => {
  const pathname = usePathname();
  const isBlueHead = PAGES_WITH_BLUE_HEAD.includes(pathname);

  const colorTextHeader = {
    "--colorMainHeader": isBlueHead
      ? "var(--color-light)"
      : "var(--color-main)",
  } as React.CSSProperties;

  // useEffect(() => {
  //   if (!ref.current) {
  //     return
  //   }

  //   console.log(isBlueHead, 'isBlueHead')
  //   setColorTextHeader(
  //     isBlueHead
  //       ? { '--colorMainHeader': 'var(--color-light);' }
  //       : { '--colorMainHeader': 'var(--color-main)' },
  //   )
  //   ref.current.style.setProperty(
  //     '--colorMainHeader',
  //     isBlueHead ? 'var(--color-light);' : 'var(--color-main)',
  //   )
  // }, [])

  return (
    <header
      className="header"
      style={colorTextHeader as React.CSSProperties}
      key={pathname + isBlueHead}
    >
      <div className="header__inner container">
        <Link className="header__logo logo" href="/">
          <Image
            src={
              PAGES_WITH_BLUE_HEAD.includes(pathname)
                ? "/icons/logo.svg"
                : "/icons/logo2.svg"
            }
            width={120}
            height={24}
            alt="TopFrame"
            className="header__logo-image"
          />
        </Link>

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
        <ButtonAuth />
        {/* Мобильное меню только для мобильных устройств */}
      </div>
    </header>
  );
};
