import { cls } from "@/shared/lib/cls";
import { BreadcrumbsUI } from "@/shared/ui/breadcrumbs-ui";
import Skeleton from "react-loading-skeleton";

export const HeadPage = ({
  className,
  title,
  isLoading,
}: {
  className?: string;
  title?: string;
  isLoading?: boolean;
}) => {
  return (
    <div className={cls("head-page", className)}>
      <BreadcrumbsUI />
      {isLoading ? (
        <Skeleton className="title-h1" height={48} width={450} />
      ) : (
        <h1 className="title-h1">{title}</h1>
      )}
    </div>
  );
};
