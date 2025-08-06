import { useQueryParamAction } from "@/shared/hooks/use-query-param-action";
import { useState } from "react";

export const useSearch = () => {
  const queryActions = useQueryParamAction();
  const q = queryActions.get<string>("search");

  const [isSearchValue, setIsSearchValue] = useState<string>(q || "");

  const handleSearch = () => {
    queryActions.set("search", isSearchValue);
    setIsSearchValue(isSearchValue);
  };

  const handleChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsSearchValue(e.target.value);
  };

  return {
    isSearchValue,
    handleSearch,

    handleChangeSearch,
  };
};
