import { ChipUI } from "@/shared/ui/chip-ui";
import React from "react";
import LocationIcon from "@/source/icons/location.svg";
import { cls } from "@/shared/lib/cls";
import { ButtonUI } from "@/shared/ui/button-ui";

export interface ICardVacancy {
  id: number;
  title: string;
  resumeParams: string[];
  children: React.ReactNode;
  location: string;
  className?: string;
  diapasonPrices: string;
}

export const CardVacancy = ({
  id,
  title,
  resumeParams,
  children,
  location,
  className,
  diapasonPrices,
}: ICardVacancy) => {
  return (
    <div className={cls("vacancy-card", className)}>
      <div className="vacancy-card__info">
        <span className="vacancy-card__title">{title}</span>
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
        <span className="vacancy-card__actions-text">{diapasonPrices}</span>
        <ButtonUI size="medium" variant="secondary" hasArrow>
          Подробнее
        </ButtonUI>
      </div>
    </div>
  );
};
