import React from "react";
import { HeadPage } from "@/widgets/mainblocks/head-page";

import { PAGES_PATHS } from "@/shared/constants/pages-paths";
import { redirect } from "next/dist/client/components/navigation";
import { WrapperPrefetchQuery } from "@/shared/lib/react-query/wrapper-prefetch-query";
import { DocumentDetails } from "@/widgets/mainblocks/document-details";
import { getContactDetailOptions } from "@/entity/user/api/get-contact-detail/options";

export default async function DocumentPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;
  return (
    <main className="policy">
      <WrapperPrefetchQuery {...getContactDetailOptions(slug)}>
        <DocumentDetails />
      </WrapperPrefetchQuery>
    </main>
  );
}
