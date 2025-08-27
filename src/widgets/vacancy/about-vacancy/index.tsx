/**
 * @file: AboutVacancy.tsx
 * @description: Компонент AboutVacancy
 * @created: 2025-08-05
 */
"use client";
import { ChipUI } from "@/shared/ui/chip-ui";
import { HeadPage } from "@/widgets/mainblocks/head-page";
import React, { Fragment } from "react";
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
              <div className="vacancy-page__tags scroll">
                {queryVacancy.vacancy?.chip.map((chip, index) =>
                  chip.type === "text" && !Array.isArray(chip.data) ? (
                    <ChipUI
                      className="vacancy-page__tag"
                      text={Array.isArray(chip.data) ? chip.data[0] : chip.data}
                      key={`chip-${chip.data}-${index}`}
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
                text={queryVacancy.vacancy?.button?.label || "Откликнуться"}
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
                  <Fragment key={item.name}>
                    {item.type === "text" && Array.isArray(item.data) ? (
                      <div className="vacancy-page__info__list">
                        <span className="vacancy-page__info__name">
                          {item.name} :
                        </span>
                        <ul>
                          {item.data.map((listItem, index) => (
                            <li key={`${item.name}-${listItem}-${index}`}>
                              {listItem}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ) : item.type === "text" ? (
                      <p className="vacancy-page__info__text">
                        <span className="vacancy-page__info__name">
                          {item.name}:
                        </span>{" "}
                        {item.data}
                      </p>
                    ) : (
                      (item.type === "file" || item.type === "image") && (
                        <div className="vacancy-page__info__list">
                          <span className="vacancy-page__info__name">
                            {item.name} :
                          </span>
                          {Array.isArray(item.data) ? (
                            <ul>
                              {item.data.map((fileItem, index) => (
                                <a
                                  href={fileItem as string}
                                  target="_blank"
                                  key={`${item.name}-${fileItem}-${index}`}
                                >
                                  {fileItem}
                                </a>
                              ))}
                            </ul>
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
                      )
                    )}
                  </Fragment>
                ))}
              </div>
            </>
          )}
        </div>

        {queryVacancy.isLoading ? (
          <VacancyPageSkeletonBenefits />
        ) : (
          !!queryVacancy.vacancy?.leftBox.length && (
            <div className="vacancy-page__benefits">
              <h3>Что мы предлагаем</h3>

              <ul>
                {queryVacancy.vacancy?.leftBox.map((benefit, index) =>
                  Array.isArray(benefit.data) ? null : (
                    <li key={`benefit-${benefit.name}-${index}`}>
                      <p>
                        {benefit.name}: {benefit.data}
                      </p>
                    </li>
                  )
                )}
              </ul>
            </div>
          )
        )}
      </div>
    </WrapperNotFoundUI>
  );
};
