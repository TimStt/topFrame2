import { AccordionUI } from "@/shared/ui/accordion-ui";
import React, { useRef, useState } from "react";
import { IFeatureCard } from "../..";
import cls from "classnames";
import useOnClickOutside from "@/shared/hooks/use-on-click-outside";
import { useIsNotHover } from "@/shared/hooks/use-is-not-hover";

export const AccordionInfo = ({ card }: { card: IFeatureCard }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { isHover } = useIsNotHover();
  const refAccordion = useRef<HTMLDivElement>(null);

  const toggleAccordion = () => {
    if (refAccordion.current) {
      setIsOpen(!isOpen);
    }
  };

  useOnClickOutside(refAccordion, () => {
    setIsOpen(false);
  });
  return (
    <AccordionUI
      open={isOpen}
      rootMouseEnter={!isHover ? () => toggleAccordion() : undefined}
      rootMouseLeave={!isHover ? () => setIsOpen(false) : undefined}
      rootOnClick={() => toggleAccordion()}
      rootRef={refAccordion}
      classNameRoot={"zero-hero__feature-card"}
      classNameDetails={"zero-hero__feature-details"}
      classNameSummary="zero-hero__card-title"
      summaryContent={
        <div className="zero-hero__card-head">
          <h3 className="zero-hero__card-title">{card.title}</h3>
          {card.icon}
        </div>
      }
    >
      <p className="zero-hero__card-description">{card.description}</p>
    </AccordionUI>
  );
};
