"use client";

import Link, { LinkProps } from "next/link";
import { usePathname } from "next/navigation";
import { UrlObject } from "url";

import React, { HTMLAttributes } from "react";

import { useQueryParamAction } from "@/shared/hooks/use-query-param-action";
import { transformObjectByParams } from "@/shared/utils/transform-object-by-param";

export const LinkWithQueryUI = ({
  slug,

  href,
  className,
  children,
  queries,
  ...props
}: {
  slug?: string;
  queries?: Record<string, string | undefined>;
  href?: string;
} & HTMLAttributes<HTMLAnchorElement>) => {
  const currentQueries = useQueryParamAction().getAllParams();

  const pathname = usePathname();

  const currentHref = href || pathname;

  return (
    <Link
      href={{
        pathname: currentHref + (slug ? "/" + slug : ""),
        query: transformObjectByParams(
          queries ? { ...currentQueries, ...queries } : currentQueries
        ),
      }}
      className={className}
      {...props}
    >
      {children}
    </Link>
  );
};
