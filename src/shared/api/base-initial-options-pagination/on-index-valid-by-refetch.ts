// * Проверяет по индексу, можно ли запросить следующую страницу при достижении выбранного элемента

export const onIndexValidByRefetch = ({
  hasNextPage,
  isFetchingNextPage,

  totalItems,
  totalCurrentLengthItems,
  triggerRefetchItemCount = 1,
}: {
  hasNextPage: boolean;
  isFetchingNextPage: boolean;

  totalItems: number;
  totalCurrentLengthItems?: number;
  triggerRefetchItemCount?: number;
}) => {
  const hasRef = (indexElement: number) => {
    const elementIsNotLast = indexElement !== totalItems - 1;

    const elementIsTruePosition =
      indexElement === (totalCurrentLengthItems || 0) - triggerRefetchItemCount;
    return (
      hasNextPage &&
      !isFetchingNextPage &&
      elementIsTruePosition &&
      elementIsNotLast
    );
  };

  return hasRef;
};
