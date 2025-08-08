import { useGetSpaceDetail } from "@/entity/user/api/get-space-detail";
import { getSpaceDetailOptions } from "@/entity/user/api/get-space-detail/options";
import { WrapperPrefetchQuery } from "@/shared/lib/react-query/wrapper-prefetch-query";
import { HrEcosystemArticle } from "@/widgets/mainblocks/hr-ecosystem-article";
import { HrTopFrameBlock } from "@/widgets/mainblocks/hr-top-frame-block";
import { useParams } from "next/navigation";
import { use } from "react";

export default function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  return (
    <WrapperPrefetchQuery {...getSpaceDetailOptions(slug)}>
      <HrEcosystemArticle />
    </WrapperPrefetchQuery>
  );
}
