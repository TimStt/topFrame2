import { usePathname } from "next/navigation";

import { JSX } from "react";

export interface IBreadcrumbItem {
  path: string;
  title: JSX.Element | ((params: { slug: string }) => JSX.Element);
}

export const useBreadcrumb = (paths: IBreadcrumbItem[]) => {
  const pathname = usePathname().split("/");

  const currentPath = paths.find(
    (item) =>
      pathname[1] === item.path.split("/")[1] &&
      pathname.length === item.path.split("/").length
  );

  const breadcrumbsItems = currentPath?.title instanceof Function
    ? currentPath.title({ slug: pathname[pathname.length - 1] || "" })
    : currentPath?.title;

  return {
    breadcrumbsItems,
  };
};
