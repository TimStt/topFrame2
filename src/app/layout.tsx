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

export const metadata: Metadata = {
  title: "Главная | TopFrame",
  description: "TopFrame - строим будущее России вместе",
  icons: {
    icon: "/images/favicon.ico",
    apple: "/images/favicon.png",
  },
  // Оптимизация для производительности
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#0066CC",
  // Предзагрузка критических ресурсов
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
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
