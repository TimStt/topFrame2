import { BreadcrumbsUI } from "@/shared/ui/breadcrumbs-ui";

export const HeadPage = ({ title }: { title: string }) => {
  return (
    <div className="head-page container">
      <BreadcrumbsUI
        items={[
          {
            label: "Главная",
            href: "/",
          },
          {
            label: "Личный кабинет",
            href: "/profile",
          },
        ]}
      />
      <h1 className="title-h1">{title}</h1>
    </div>
  );
};
