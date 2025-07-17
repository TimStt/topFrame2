import React from "react";
import { PaginationUI } from "@/shared/ui/pagination-ui";

// Моковый компонент пагинации для демонстрации
export const PaginationMock = () => {
  // Пустая функция для демонстрации
  const handlePageChange = (page: number) => {
    console.log(`Выбрана страница: ${page}`);
  };

  return (
    <PaginationUI
      currentPage={1}
      totalPages={12}
      onPageChange={handlePageChange}
    />
  );
};

// Пагинация с большим количеством страниц
export const PaginationMockLarge = () => {
  const handlePageChange = (page: number) => {
    console.log(`Выбрана страница: ${page}`);
  };

  return (
    <PaginationUI
      currentPage={5}
      totalPages={50}
      onPageChange={handlePageChange}
    />
  );
};

// Пагинация с текущей страницей в середине
export const PaginationMockMiddle = () => {
  const handlePageChange = (page: number) => {
    console.log(`Выбрана страница: ${page}`);
  };

  return (
    <PaginationUI
      currentPage={6}
      totalPages={12}
      onPageChange={handlePageChange}
    />
  );
};

// Пагинация с последней страницей
export const PaginationMockLast = () => {
  const handlePageChange = (page: number) => {
    console.log(`Выбрана страница: ${page}`);
  };

  return (
    <PaginationUI
      currentPage={12}
      totalPages={12}
      onPageChange={handlePageChange}
    />
  );
};

// Пагинация с малым количеством страниц
export const PaginationMockSmall = () => {
  const handlePageChange = (page: number) => {
    console.log(`Выбрана страница: ${page}`);
  };

  return (
    <PaginationUI
      currentPage={2}
      totalPages={3}
      onPageChange={handlePageChange}
    />
  );
};

// Компонент для демонстрации всех вариантов пагинации
export const PaginationShowcase = () => {
  return (
    <div
      style={{
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        gap: "40px",
      }}
    >
      <div>
        <h3>Первая страница (1 из 12)</h3>
        <PaginationMock />
      </div>

      <div>
        <h3>Средняя страница (6 из 12)</h3>
        <PaginationMockMiddle />
      </div>

      <div>
        <h3>Последняя страница (12 из 12)</h3>
        <PaginationMockLast />
      </div>

      <div>
        <h3>Много страниц (5 из 50)</h3>
        <PaginationMockLarge />
      </div>

      <div>
        <h3>Мало страниц (2 из 3)</h3>
        <PaginationMockSmall />
      </div>
    </div>
  );
};
