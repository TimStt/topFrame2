import { ModalAuth } from "@/widgets/auth/modal-auth";
import Footer from "@/widgets/mainblocks/footer";
import { Header } from "@/widgets/mainblocks/header";
import { MobileMenu } from "@/widgets/mainblocks/header/ui/mobile-menu";
import type { Metadata } from "next";

import "../../styles/index.scss";
import { ModalToastUI } from "@/shared/ui/modal-toast-ui";
import { Suspense } from "react";
import LoaderUI from "@/shared/ui/loader-ui";
import { QueryProvider } from "@/shared/api/provider";
import { WrapperPrefetchQuery } from "@/shared/lib/react-query/wrapper-prefetch-query";
import { getContactsOptions } from "@/entity/user/api/get-contacts/options";

import localFont from "next/font/local";

// Font files can be colocated inside of `app`

// ===== INTER =====
export const interRegular = localFont({
  src: [
    {
      path: "../../public/fonts/inter-regular.woff2",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--third-family",
  display: "swap",
});

// ===== LATO =====

export const lato = localFont({
  src: [
    {
      path: "../../public/fonts/lato-bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/lato-semibold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/fonts/lato-medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/lato-extrabold.woff2",
      weight: "800",
      style: "normal",
    },
  ],
  preload: true,
  variable: "--font-family",
  display: "swap",
});

// ===== OPEN SANS =====
export const openSans = localFont({
  src: [
    {
      path: "../../public/fonts/openSans-regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/openSans-semiBold.woff2",
      weight: "600",
      style: "normal",
    },
  ],
  variable: "--second-family",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Главная | TopFrame",
  description: "TopFrame - строим будущее России вместе",
  icons: {
    icon: "/images/favicon.ico",
    apple: "/images/favicon.png",
  },

  // Предзагрузка критических ресурсов
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${interRegular.variable} ${lato.variable} ${openSans.variable}`}
    >
      <body>
        <QueryProvider>
          <Suspense
            fallback={
              <div className="loader-wrapper">
                <LoaderUI className="position-center-loader" />
              </div>
            }
          >
            <Header />
            <MobileMenu />
            {children}
            <WrapperPrefetchQuery {...getContactsOptions()}>
              <Footer />
            </WrapperPrefetchQuery>
            <WrapperPrefetchQuery {...getContactsOptions()}>
              <ModalAuth />
            </WrapperPrefetchQuery>
            <ModalToastUI />
          </Suspense>
        </QueryProvider>
      </body>
    </html>
  );
}
