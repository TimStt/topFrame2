import { cls } from "@/shared/lib/cls";

export const TotalResultsUI = ({
  className,
  total,
  searchEntity = "вакансий",
}: {
  className?: string;
  total?: number;
  searchEntity?: string;
}) => {
  return (
    <span className={cls("search-box__total-results", className)}>
      Найдено {total || 0} {searchEntity || "вакансий"}
    </span>
  );
};
