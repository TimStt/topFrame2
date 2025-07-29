import { ChipUI } from "@/shared/ui/chip-ui";
import React from "react";
import LocationIcon from "@/source/icons/location.svg";
import { cls } from "@/shared/lib/cls";
import { ButtonUI } from "@/shared/ui/button-ui";
import Link from "next/link";
import { PAGES_PATHS } from "@/shared/constants/pages-paths";

export interface ICardVacancy {
  id: number;
  title: string;
  resumeParams: string[];
  children?: React.ReactNode;
  location: string;
  className?: string;
  startPrice: string;
  endPrice: string;
}

export const CardVacancy = ({
  id,
  title,
  resumeParams,
  children,
  location,
  className,
  startPrice,
  endPrice,
}: ICardVacancy) => {
  return (
    <div className={cls("vacancy-card", className)}>
      <Link
        className="vacancy-card__link"
        href={PAGES_PATHS.VACANCY_PAGE(title.toLowerCase().replace(/ /g, "-"))}
      />
      <div className="vacancy-card__info">
        <h3 className="vacancy-card__title">{title}</h3>
        <div className="vacancy-card__params">
          {resumeParams.map((param) => (
            <ChipUI key={param} text={param} />
          ))}
        </div>
        <div className="vacancy-card__location">
          <LocationIcon />
          <span>{location}</span>
        </div>
      </div>
      <div className="vacancy-card__actions">
        <span className="vacancy-card__actions-text">
          {startPrice}&shy; - {endPrice}
        </span>
        <ButtonUI
          size="medium"
          variant="secondary"
          hasArrow
          as="a"
          href={PAGES_PATHS.VACANCY_PAGE(
            title.toLowerCase().replace(/ /g, "-")
          )}
          text="Подробнее"
        />
      </div>
    </div>
  );
};
