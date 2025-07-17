import React from "react";
import { ArrowIconUI } from "../arrow-icon-ui";
import { ButtonUI } from "../button-ui";

export interface IPagination {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  className?: string;
}

export const PaginationUI = ({
  currentPage,
  totalPages,
  onPageChange,
  className = "",
}: IPagination) => {
  const generatePageNumbers = () => {
    const pages = [];
    const showPages = 5; // Количество видимых страниц

    if (totalPages <= showPages) {
      // Если страниц мало, показываем все
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      // Логика для большого количества страниц
      let startPage = Math.max(1, currentPage - Math.floor(showPages / 2));
      let endPage = Math.min(totalPages, startPage + showPages - 1);

      if (endPage - startPage < showPages - 1) {
        startPage = Math.max(1, endPage - showPages + 1);
      }

      for (let i = startPage; i <= endPage; i++) {
        pages.push(i);
      }

      // Добавляем многоточие и первую/последнюю страницы если нужно
      if (startPage > 1) {
        if (startPage > 2) {
          pages.unshift("...");
        }
        pages.unshift(1);
      }

      if (endPage < totalPages) {
        if (endPage < totalPages - 1) {
          pages.push("...");
        }
        pages.push(totalPages);
      }
    }

    return pages;
  };

  const pages = generatePageNumbers();

  return (
    <div className={`pagination ${className}`}>
      <button
        className="pagination__button"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        <ArrowIconUI style={{ transform: "rotate(180deg)" }} />
      </button>

      {pages.map((page, index) => (
        <React.Fragment key={`${page}-${index}`}>
          {page === "..." ? (
            <span className="pagination__ellipsis">...</span>
          ) : (
            <button
              className={`pagination__button ${
                page === currentPage ? "pagination__button--active" : ""
              }`}
              onClick={() => onPageChange(page as number)}
            >
              {page}
            </button>
          )}
        </React.Fragment>
      ))}

      <button
        className="pagination__button"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        <ArrowIconUI />
      </button>
    </div>
  );
};

export interface IShowMoreButton {
  onClick: () => void;
  disabled?: boolean;
  loading?: boolean;
  className?: string;
  children?: React.ReactNode;
}

export const ShowMoreButtonUI = ({
  onClick,
  disabled = false,
  loading = false,
  className = "",
  children = "Показать ещё",
}: IShowMoreButton) => {
  return (
    <ButtonUI
      variant="primary"
      size="medium"
      onClick={onClick}
      disabled={disabled}
      loading={loading}
      className={className}
      hasArrow
    >
      {children}
    </ButtonUI>
  );
};
