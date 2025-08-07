import { PAGES_PATHS } from "@/shared/constants/pages-paths";
import { redirect } from "next/navigation";

export const WrapperNotFoundUI = ({
  data,
  children,
  isLoading,
}: {
  data?: Record<string, unknown> | unknown[];
  children: React.ReactNode;
  isLoading?: boolean;
}) => {
  if (((Array.isArray(data) && !data.length) || !data) && !isLoading) {
    return redirect(PAGES_PATHS.NOT_FOUND);
  }
  return <>{children}</>;
};
