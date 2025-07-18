import { cls } from "@/shared/lib/cls";

export const LabelSearchUI = ({ className }: { className?: string }) => {
  return (
    <h2 className={cls("search-box__label", className)}>Результаты поиска</h2>
  );
};
