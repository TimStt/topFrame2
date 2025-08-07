import { usePathname } from "next/navigation";

import { JSX } from "react";

export interface IBreadcrumbItem {
  path: string;
  title: JSX.Element | ((params: { slug: string }) => JSX.Element);
}

export const useBreadcrumb = (paths: IBreadcrumbItem[]) => {
  const pathname = usePathname().split("/");
  console.log(pathname);

  const currentPath = paths.find(
    (item) =>
      pathname[1] === item.path.split("/")[1] &&
      pathname.length === item.path.split("/").length
  );

  const breadcrumbsItems = (
    currentPath?.title instanceof Function
      ? {
          path: currentPath.path,
          title: currentPath?.title({ slug: pathname.pop() || "" }),
        }
      : (currentPath as { path: string; title: JSX.Element })
  )?.title;

  return {
    breadcrumbsItems,
  };
};
