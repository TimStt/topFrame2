import { ChipUI } from "@/shared/ui/chip-ui";
import React from "react";
import LocationIcon from "@/source/icons/location.svg";
import { cls } from "@/shared/lib/cls";
import { ButtonUI } from "@/shared/ui/button-ui";
import Link from "next/link";
import { PAGES_PATHS } from "@/shared/constants/pages-paths";
import { IApiSchemas } from "@/shared/api/schema";

export const CardVacancy = ({
  id,
  name,
  price,
  slug,
  city,
  chip,
  className,
}: IApiSchemas["VacancyDto"] & { className?: string }) => {
  return (
    <div className={cls("vacancy-card", className)}>
      <Link
        className="vacancy-card__link"
        href={PAGES_PATHS.VACANCY_PAGE(slug)}
      />
      <div className="vacancy-card__info">
        <h3 className="vacancy-card__title">{name}</h3>
        {!!chip.length && (
          <div className="vacancy-card__params">
            {chip?.map((param) => (
              <ChipUI key={param} text={param} />
            ))}
          </div>
        )}
        <div className="vacancy-card__location">
          <LocationIcon />
          <span>{city}</span>
        </div>
      </div>
      <div className="vacancy-card__actions">
        <span className="vacancy-card__actions-text">{price}</span>
        <ButtonUI
          size="medium"
          variant="secondary"
          hasArrow
          as="a"
          href={PAGES_PATHS.VACANCY_PAGE(slug)}
          text="Подробнее"
        />
      </div>
    </div>
  );
};
