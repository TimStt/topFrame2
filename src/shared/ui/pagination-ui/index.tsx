import React from "react";
import { ArrowIconUI } from "../arrow-icon-ui";
import { ButtonUI } from "../button-ui";
import { getPageNumbersPagination } from "@/shared/utils/get-page-numbers";
import { IMetaPaginationInfoDto } from "@/shared/api/types";
import { useQueryParamAction } from "@/shared/hooks/use-query-param-action";
import { cls } from "@/shared/lib/cls";
import { LinkWithQueryUI } from "../link-with-query-ui";

export interface IPagination {
  meta: IMetaPaginationInfoDto;
  className?: string;
  hasMore?: boolean;
}

export const PaginationUI = ({ meta, className, hasMore }: IPagination) => {
  const nextPage = meta?.current_page ? meta.current_page + 1 : 1;
  const prevPage = meta?.current_page ? meta.current_page - 1 : 1;
  const pages = getPageNumbersPagination(
    meta?.last_page || 1,
    meta?.current_page || 1
  );

  const isLastPage = meta?.current_page === meta?.last_page;

  const { set } = useQueryParamAction();

  if (!meta || meta.last_page === 1) return;

  return (
    <>
      <ul className={cls("pagination", className)}>
        {meta.current_page !== 1 && (
          <LinkWithQueryUI
            className="pagination__button"
            queries={{ page: prevPage.toString() }}
          >
            <ArrowIconUI style={{ transform: "rotate(180deg)" }} />
          </LinkWithQueryUI>
        )}

        {pages?.map((pageNumber, i) => (
          <li
            key={i}
            className={cls(`pagination__button`, {
              active: pageNumber === meta.current_page,
            })}
          >
            {pageNumber === "..." ? (
              <span className="pagination__button__ellipsis">...</span>
            ) : (
              <LinkWithQueryUI queries={{ page: pageNumber.toString() }}>
                {pageNumber}
              </LinkWithQueryUI>
            )}
          </li>
        ))}

        {meta.current_page !== meta.last_page && (
          <LinkWithQueryUI
            className="pagination__button"
            queries={{ page: nextPage.toString() }}
          >
            <ArrowIconUI />
          </LinkWithQueryUI>
        )}
      </ul>
      {hasMore && (
        <ShowMoreButtonUI
          onClick={() => set("page", nextPage.toString())}
          text="Показать ещё"
        />
      )}
    </>
  );
};

export interface IShowMoreButton {
  onClick: () => void;
  disabled?: boolean;
  loading?: boolean;
  className?: string;
  text?: string;
}

export const ShowMoreButtonUI = ({
  onClick,
  disabled = false,
  loading = false,
  className = "",
  text = "Показать ещё",
}: IShowMoreButton) => {
  return (
    <ButtonUI
      className="pagination__show-more"
      onClick={onClick}
      disabled={disabled}
      loading={loading}
      hasArrow
      text={text}
    />
  );
};
