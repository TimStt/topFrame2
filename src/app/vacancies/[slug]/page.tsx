import React from "react";
import { HeadPage } from "@/widgets/mainblocks/head-page";
import { ChipUI } from "@/shared/ui/chip-ui";
import { ButtonUI } from "@/shared/ui/button-ui";
import LocationIcon from "@/source/icons/location.svg";
import { ModalAddResponse } from "@/widgets/vacancy/modal-add-response";
import { AboutVacancy } from "@/widgets/vacancy/about-vacancy";
import { WrapperPrefetchQuery } from "@/shared/lib/react-query/wrapper-prefetch-query";
import { getOptionsVacanciesQuery } from "@/entity/vacancy/api/get-catalog/options";
import {
  getOptionsVacancyQuery,
  getVacancy,
} from "@/entity/vacancy/api/get-vacancy/options";
import { Metadata } from "next/types";
import { getContactsOptions } from "@/entity/user/api/get-contacts/options";

export const generateMetadata = async ({
  params,
}: {
  params: Promise<{
    slug: string;
  }>;
}) => {
  const slug = (await params).slug;
  const vacancy = await getVacancy(slug);
  return {
    title: `${vacancy?.response?.vacancy?.name}`,
    description: vacancy?.response?.vacancy?.description?.join(" "),
  };
};
export default async function VacanciesPage({
  params,
}: {
  params: Promise<{
    slug: string;
  }>;
}) {
  const slug = (await params).slug;

  return (
    <main className="vacancy-page">
      <WrapperPrefetchQuery
        {...getOptionsVacancyQuery({
          slug,
        })}
      >
        <WrapperPrefetchQuery {...getContactsOptions()}>
          <AboutVacancy />
        </WrapperPrefetchQuery>
      </WrapperPrefetchQuery>
    </main>
  );
}
