import {
  getDirectionDetail,
  getDirectionOptions,
} from "@/entity/user/api/get-direction/options";
import { getOptionsVacanciesQuery } from "@/entity/vacancy/api/get-catalog/options";
import { WrapperPrefetchQuery } from "@/shared/lib/react-query/wrapper-prefetch-query";
import { ButtonUI } from "@/shared/ui/button-ui";
import { DirectionDetails } from "@/widgets/mainblocks/direction-details";
import { HeadPage } from "@/widgets/mainblocks/head-page";
import Image from "next/image";

export const generateMetadata = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const slug = (await params).slug;
  const direction = await getDirectionDetail(slug);

  return {
    title: direction?.response?.title,
    description: direction?.response?.text,
  };
};

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  return (
    <main>
      <WrapperPrefetchQuery {...getDirectionOptions(slug)}>
        <DirectionDetails />
      </WrapperPrefetchQuery>
    </main>
  );
}
