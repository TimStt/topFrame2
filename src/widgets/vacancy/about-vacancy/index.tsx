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
export const AboutVacancy: React.FC = () => {
  const slug = useParams<{ slug: string }>().slug;
  const queryVacancy = useGetVacancy(slug);

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
                  Array.isArray(chip.data) ? null : (
                    <ChipUI
                      className="vacancy-page__tag"
                      text={Array.isArray(chip.data) ? chip.data[0] : chip.data}
                      key={chip.data}
                    />
                  )
                )}
              </div>
              <div className="vacancy-page__location">
                <LocationIcon />
                <span>{queryVacancy.vacancy?.city}</span>
              </div>
              <ModalAddResponse />
              <div className="vacancy-page__info">
                {queryVacancy.vacancy?.description.map((item) => (
                  <div className="vacancy-page__info-item" key={item.name}>
                    <h3>{item.name}</h3>
                    {Array.isArray(item.data) ? (
                      <ul>
                        {item.data.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    ) : (
                      <p dangerouslySetInnerHTML={{ __html: item.data }} />
                    )}
                  </div>
                ))}
              </div>
            </>
          )}
        </div>

        {/* {queryVacancy.vacancy?.leftBox.map((benefit) =>
        Array.isArray(benefit.data) ? null : (
          <div className="vacancy-page__benefits">
            <h3>{benefit.name}</h3>
            <p>{benefit.data}</p>
          </div>
        )
      )} */}
        {queryVacancy.isLoading ? (
          <VacancyPageSkeletonBenefits />
        ) : (
          <div className="vacancy-page__benefits">
            <h3>Что мы предлагаем</h3>
            <ul>
              <li>Конкурентная зарплата</li>
              <li>Медицинская страховка</li>
              <li>Гибкий график работы</li>
              <li>Возможность удаленной работы</li>
              <li>Обучение и развитие</li>
              <li>Корпоративные мероприятия</li>
            </ul>
          </div>
        )}
      </div>
    </WrapperNotFoundUI>
  );
};
