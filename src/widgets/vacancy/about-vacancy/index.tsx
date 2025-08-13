/**
 * @file: AboutVacancy.tsx
 * @description: Компонент AboutVacancy
 * @created: 2025-08-05
 */
"use client";
import { ChipUI } from "@/shared/ui/chip-ui";
import { HeadPage } from "@/widgets/mainblocks/head-page";
import React from "react";
import { ModalAddResponse } from "../modal-add-response";
import LocationIcon from "@/source/icons/location.svg";
import { useGetVacancy } from "@/entity/vacancy/api/get-vacancy";
import { notFound, redirect, useParams } from "next/navigation";
import { VacancyPageSkeleton } from "./skeleton";
import { PAGES_PATHS } from "@/shared/constants/pages-paths";
import { VacancyPageSkeletonBenefits } from "./skeleton-benifits";
import { WrapperNotFoundUI } from "@/shared/ui/wrapper-not-found-ui";
import { ButtonUI } from "@/shared/ui/button-ui";
import { onToggleModal } from "@/shared/lib/zustands/use-store-modals";
export const AboutVacancy: React.FC = () => {
  const slug = useParams<{ slug: string }>().slug;
  const queryVacancy = useGetVacancy(slug);

  console.log("queryVacancy", queryVacancy.vacancy);
  const hasButton = !!queryVacancy.vacancy?.button;

  return (
    <WrapperNotFoundUI
      data={queryVacancy.vacancy}
      isLoading={queryVacancy.isLoading}
    >
      <div className="vacancy-page__content container">
        <div className="vacancy-page__main">
          <HeadPage
            title={queryVacancy.vacancy?.name}
            isLoading={queryVacancy.isLoading}
          />
          {queryVacancy.isLoading ? (
            <VacancyPageSkeleton />
          ) : (
            <>
              <span className="vacancy-page__salary">
                {queryVacancy.vacancy?.price}
              </span>
              <div className="vacancy-page__tags">
                {queryVacancy.vacancy?.chip.map((chip) =>
                  chip.type === "text" && !Array.isArray(chip.data) ? (
                    <ChipUI
                      className="vacancy-page__tag"
                      text={Array.isArray(chip.data) ? chip.data[0] : chip.data}
                      key={chip.data}
                    />
                  ) : null
                )}
              </div>
              <div className="vacancy-page__location">
                <LocationIcon />
                <span>{queryVacancy.vacancy?.city}</span>
              </div>
              <ButtonUI
                className="vacancy-page__button"
                variant="secondary"
                text="Откликнуться"
                hasArrow
                as={hasButton ? "a" : "button"}
                href={queryVacancy.vacancy?.button?.value}
                target={hasButton ? "_blank" : undefined}
                onClick={
                  !hasButton
                    ? () => onToggleModal("addResponse", true)
                    : undefined
                }
              />
              <ModalAddResponse idResponse={queryVacancy.vacancy?.id} />
              <div className="vacancy-page__info">
                {queryVacancy.vacancy?.description.map((item) => (
                  <div className="vacancy-page__info-item" key={item.name}>
                    <h3>{item.name}</h3>
                    {item.type === "text" && Array.isArray(item.data) ? (
                      <ul>
                        {item.data.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    ) : item.type === "text" ? (
                      <p dangerouslySetInnerHTML={{ __html: item.data }} />
                    ) : (item.type === "file" || item.type === "image") &&
                      Array.isArray(item.data) ? (
                      item.data.map((item) => (
                        <a href={item as string} target="_blank" key={item}>
                          {item}
                        </a>
                      ))
                    ) : (
                      <a
                        href={item.data as string}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {item.data}
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </>
          )}
        </div>

        {queryVacancy.isLoading ? (
          <VacancyPageSkeletonBenefits />
        ) : (
          queryVacancy.vacancy?.leftBox.map((benefit) =>
            Array.isArray(benefit.data) ? null : (
              <div className="vacancy-page__benefits" key={benefit.name}>
                <h3>{benefit.name}</h3>
                <p>{benefit.data}</p>
              </div>
            )
          )
        )}
      </div>
    </WrapperNotFoundUI>
  );
};
