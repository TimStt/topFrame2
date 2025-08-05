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
    console.log("values", values);
    const filterSelected = isActiveFilters?.findIndex(
      (f) => f.name === values.name
    );
    if (filterSelected && filterSelected !== -1 && values.options.length > 0) {
      const newFilters = [...(isActiveFilters || [])];
      newFilters[filterSelected] = {
        ...values,
      };
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
  console.log("isCurrentActiveFilters", currentActiveFilters);

  const isEmptyActiveFilters =
    currentActiveFilters && currentActiveFilters.length === 0;

  const isActiveQuickFilters = useMemo(() => {
    return filters?.filter((f) => quickFilter?.find((q) => q.slug === f.slug));
  }, [filters, quickFilter]);

  const isEmptyQuickFilters =
    isActiveQuickFilters && isActiveQuickFilters.length === 0;

  const resetAllFilters = () => {
    if (!isActiveFilters && queryActionsParams) {
      isActiveFilterQuery?.forEach((f) => {
        queryActionsParams.remove(f.name);
      });
      return;
    }

    if (isActiveFilters && isActiveFilters.length > 0) {
      setIsActiveFilters([]);
      return;
    }

    queryActionsParams.cleanAllParams();
  };

  const resetQuickFilters = () => {
    if (!isActiveQuickFilters && queryActionsParams) {
      isActiveFilterQuery
        ?.filter(
          (f) => f.name !== quickFilter?.find((q) => q.slug === f.name)?.slug
        )
        .forEach((f) => {
          queryActionsParams.remove(f.name);
        });
      return;
    }

    if (isActiveQuickFilters && isActiveQuickFilters.length > 0) {
      setIsActiveFilters(
        isActiveFilters?.filter(
          (f) => f.name !== quickFilter?.find((q) => q.slug === f.name)?.slug
        )
      );
      return;
    }

    queryActionsParams.cleanAllParams();
  };

  const acceptAllFilters = () => {
    isActiveFilters?.forEach((f) => {
      f.options.forEach((o) => {
        queryActionsParams.set(f.name, o.value.toString());
      });
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
