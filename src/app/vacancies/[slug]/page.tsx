import React from "react";
import { HeadPage } from "@/widgets/mainblocks/head-page";
import { ChipUI } from "@/shared/ui/chip-ui";
import { ButtonUI } from "@/shared/ui/button-ui";
import LocationIcon from "@/source/icons/location.svg";
import { ModalAddResponse } from "@/widgets/vacancy/modal-add-response";
import { AboutVacancy } from "@/widgets/vacancy/about-vacancy";
import { WrapperPrefetchQuery } from "@/shared/lib/react-query/wrapper-prefetch-query";
import { getOptionsVacanciesQuery } from "@/entity/vacancy/api/get-catalog/options";
import { getOptionsVacancyQuery } from "@/entity/vacancy/api/get-vacancy/options";
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
        <AboutVacancy />
      </WrapperPrefetchQuery>
    </main>
  );
}
