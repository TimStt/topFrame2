import React from "react";
import { PaginationUI } from "@/shared/ui/pagination-ui";
import { useQueryParamAction } from "@/shared/hooks/use-query-param-action";

// Моковый компонент пагинации для демонстрации
export const PaginationMock = () => {
  // Пустая функция для демонстрации
  const handlePageChange = (page: number) => {
    console.log(`Выбрана страница: ${page}`);
  };

  return (
    <PaginationUI
      meta={{
        current_page: 1,
        last_page: 12,
        per_page: 10,
        total: 120,
        links: [],
        path: "",
      }}
      hasMore={true}
    />
  );
};
