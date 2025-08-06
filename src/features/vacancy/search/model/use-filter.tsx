import { IApiSchemas } from "@/shared/api/schema";
import { useQueryParamAction } from "@/shared/hooks/use-query-param-action";
import { ISelectOption, ISelectOptions } from "@/shared/ui/select-ui";
import { useMemo, useState } from "react";

export const useFilter = ({
  quickFilter,
  filters,
}: {
  quickFilter?: IApiSchemas["FilterDto"][];
  filters?: IApiSchemas["FilterDto"][];
}) => {
  const queryActionsParams = useQueryParamAction();

  const getFilterLabel = (filterName: string, filterValue: string) => {
    return (
      filters
        ?.find((f) => f.slug === filterName)
        ?.arr.find((a) => a.value === Number(filterValue))?.label || filterValue
    );
  };

  const isActiveFilterQuery: Omit<ISelectOption, "label">[] | undefined =
    useMemo(() => {
      const queryParams = queryActionsParams.getAllParams()?.normalized;

      const normalizedQueryParams = queryParams?.map((filterItem) => ({
        ...filterItem,
        options: filterItem.options.map((optionItem) => ({
          value: optionItem,
          label: getFilterLabel(filterItem.name, optionItem),
        })),
      }));

      return normalizedQueryParams;
    }, [queryActionsParams, filters]);

  // активные ВРЕМЕННЫЕ фильтры
  const [isActiveFilters, setIsActiveFilters] = useState<
    Omit<ISelectOption, "label">[] | undefined
  >(isActiveFilterQuery || undefined);

  const handleChangeFilter = (label: string, values: ISelectOption) => {
    const filterSelected = isActiveFilters?.findIndex(
      (f) => f.name === values.name
    );

    console.log("handleChangeFilter", values);
    console.log("filterSelected", filterSelected);
    if (filterSelected !== -1 && filterSelected !== undefined) {
      const newFilters = [...(isActiveFilters || [])];
      // if (!values.options.length) {
      //   setIsActiveFilters(newFilters.filter((f) => f.name !== values.name));
      //   return;
      // }
      newFilters[filterSelected!] = {
        ...values,
        options: values.options.length > 0 ? values.options : [],
      };
      console.log("newFilters", newFilters);
      setIsActiveFilters(newFilters);
    } else {
      setIsActiveFilters([
        ...(isActiveFilters || []),
        {
          ...values,
        },
      ]);
    }
    console.log(isActiveFilters);
  };

  // активные фильтры из query

  // активные быстрые фильтры

  const currentActiveFilters = isActiveFilters;

  const isEmptyActiveFilters =
    currentActiveFilters && currentActiveFilters.length === 0;

  const isActiveQuickFilters = useMemo(() => {
    return isActiveFilterQuery?.filter((f) =>
      quickFilter?.find((q) => q.slug === f.name && f.options.length > 0)
    );
  }, [isActiveFilterQuery, quickFilter]);

  const isEmptyQuickFilters =
    !isActiveQuickFilters || isActiveQuickFilters.length === 0;

  const resetAllFilters = () => {
    if (isActiveFilters && isActiveFilters.length > 0) {
      setIsActiveFilters(
        isActiveFilters.map((f) => ({
          ...f,
          options: [],
        }))
      );
      return;
    }

    queryActionsParams.cleanAllParams();
  };

  const resetQuickFilters = () => {
    if (isActiveQuickFilters && isActiveQuickFilters.length > 0) {
      setIsActiveFilters(
        isActiveFilters?.map((f) => {
          if (f.name === quickFilter?.find((q) => q.slug === f.name)?.slug) {
            return {
              ...f,
              options: [],
            };
          }
          return f;
        })
      );
      return;
    }

    queryActionsParams.cleanAllParams();
  };

  const acceptAllFilters = () => {
    console.log("isActiveFilters acceptAllFilters", isActiveFilters);

    isActiveFilters?.forEach((f) => {
      if (!f.options.length) {
        queryActionsParams.remove(f.name);
        setIsActiveFilters(isActiveFilters?.filter((f) => f.name !== f.name));
        return;
      }

      const isThisActiveFilters = isActiveFilterQuery?.find(
        (q) => q.name === f.name
      );
      console.log("isThisActiveFilters", isThisActiveFilters);
      console.log("f", f);

      const isThisFilters =
        isThisActiveFilters?.options.every((o) =>
          f.options.some((q) => q.value === o.value)
        ) && f.options.length === isThisActiveFilters?.options.length;

      if (isThisFilters) {
        return;
      }

      const string = f.options.map((o) => o.value).join(",");

      console.log("string", string);

      queryActionsParams.set(f.name, string, false, false);
    });
  };

  return {
    isActiveFilters,
    handleChangeFilter,
    resetAllFilters,
    resetQuickFilters,
    acceptAllFilters,
    currentActiveFilters,
    isEmptyActiveFilters,
    isEmptyQuickFilters,
  };
};

export type TFilter = ReturnType<typeof useFilter>;
