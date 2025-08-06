import React, { DetailsHTMLAttributes, Ref, useId } from "react";

import cls from "classnames";

export interface IAccordion extends DetailsHTMLAttributes<HTMLDetailsElement> {
  classNameSummary?: string;
  classNameDetails?: string;
  classNameRoot?: string;
  children: React.ReactNode;
  titleSummary?: string;
  classNameContent?: string;
  summaryContent: React.ReactNode;
  accordionRef?: Ref<HTMLDetailsElement>;
  rootRef?: Ref<HTMLDivElement>;
  rootOnClick?: () => void;
  rootMouseEnter?: () => void;
  rootMouseLeave?: () => void;
}
export const AccordionUI = ({
  classNameRoot,
  classNameSummary,
  children,
  titleSummary,
  summaryContent,
  classNameDetails,
  classNameContent,
  rootRef,
  accordionRef,
  open,
  onClick,
  rootMouseEnter,
  rootMouseLeave,
  rootOnClick,
  ...props
}: IAccordion) => {
  const id = useId();

  return (
    <div
      className={classNameRoot}
      onClick={(e) => {
        // e.stopPropagation();
        rootOnClick?.();
      }}
      onMouseEnter={rootMouseEnter}
      onMouseLeave={rootMouseLeave}
      ref={rootRef}
    >
      <details
        className={cls("accordion", classNameDetails)}
        open={open}
        onClick={(e) => {
          e.preventDefault();
          onClick?.(e);
        }}
        ref={accordionRef}
        {...props}
      >
        <summary
          className={cls("accordion__summary", classNameSummary)}
          role="term"
          aria-details={id}
          title={titleSummary}
        >
          {summaryContent}
        </summary>
      </details>
      <div
        className={cls("accordion__content", classNameContent)}
        id={id}
        role="definition"
      >
        <div className="accordion__wrapper">{children}</div>
      </div>
    </div>
  );
};
