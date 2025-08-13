import { useGetSpaceDetail } from "@/entity/user/api/get-space-detail";
import {
  getSpaceDetail,
  getSpaceDetailOptions,
} from "@/entity/user/api/get-space-detail/options";
import { Metadata } from "next/types";
import { WrapperPrefetchQuery } from "@/shared/lib/react-query/wrapper-prefetch-query";
import { HrEcosystemArticle } from "@/widgets/mainblocks/hr-ecosystem-article";
import { HrTopFrameBlock } from "@/widgets/mainblocks/hr-top-frame-block";
import { useParams } from "next/navigation";
import { use } from "react";

export const generateMetadata = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const slug = (await params).slug;
  const space = await getSpaceDetail(slug);
  return {
    title: space?.response?.space?.name,
    description: space?.response?.blocks[0]?.description,
  };
};

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
