import { useQueryParamAction } from "@/shared/hooks/use-query-param-action";
import { useState } from "react";

export const useSearch = () => {
  const queryActions = useQueryParamAction();
  const q = queryActions.get<string>("search");

  const [isSearchValue, setIsSearchValue] = useState<string>(q || "");

  const handleSearch = () => {
    if (isSearchValue) {
      queryActions.set("search", isSearchValue, false, false);
    } else {
      queryActions.remove("search");
    }
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
