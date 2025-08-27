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

  // так как в query мы не сохраняем label на русском, то находим его в данных от бека
  const getFilterLabel = useMemo(
    () => (filterName: string, filterValue: string) => {
      return (
        filters
          ?.find((f) => f.slug === filterName)
          ?.arr.find((a) => a.value === Number(filterValue))?.label ||
        filterValue
      );
    },
    [filters]
  );

  // активные фильтры из query приводим к нужному формату
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
    }, [filters, getFilterLabel]);

  // активные ВРЕМЕННЫЕ фильтры
  const [isActiveFilters, setIsActiveFilters] = useState<
    Omit<ISelectOption, "label">[] | undefined
  >(
    isActiveFilterQuery?.filter(
      (f) => f.name !== "search" && f.name !== "page"
    ) || undefined
  );

  // изменение фильтра
  const handleChangeFilter = (label: string, values: ISelectOption) => {
    const filterSelected = isActiveFilters?.findIndex(
      (f) => f.name === values.name
    );

    if (filterSelected !== -1 && filterSelected !== undefined) {
      const newFilters = [...(isActiveFilters || [])];

      newFilters[filterSelected!] = {
        ...values,
        options: values.options.length > 0 ? [...values.options] : [],
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
  };

  // активные фильтры из query

  // активные быстрые фильтры

  const currentActiveFilters = isActiveFilters;

  const getCurrentActiveFilterBySlug = (slug: string) => {
    return currentActiveFilters?.find((f) => f.name === slug);
  };

  const isActiveQuickFilters = isActiveFilters?.filter((f) =>
    quickFilter?.find((q) => q.slug === f.name)
  );

  const isEmptyQuickFilters =
    !isActiveQuickFilters?.length ||
    (isActiveQuickFilters?.every((f) => !f.options.length) &&
      !isActiveFilterQuery?.length);

  const isEmptyAllFilters =
    !isActiveFilters?.length ||
    (isActiveFilters?.every((f) => !f.options.length) &&
      !isActiveFilterQuery?.length);

  // ПЕРЕДЕЛАЙ В ФУНКЦИЮ

  const checkFilterIsApplied = (
    filterSelected: Omit<ISelectOption, "label">
  ) => {
    const activeFilter = isActiveFilterQuery?.find(
      (q) => q.name === filterSelected.name
    );

    return (
      activeFilter?.options.every((o) =>
        filterSelected.options.some((q) => q.value === o.value)
      ) && activeFilter?.options.length === filterSelected.options.length
    );
  };

  const resetActiveFilterBySlug = (slug: string) => {
    setIsActiveFilters(
      isActiveFilters?.map((f) => (f.name === slug ? { ...f, options: [] } : f))
    );
  };

  const isAllQuickFilterApplied = isActiveQuickFilters?.every((f) =>
    checkFilterIsApplied(f)
  );

  const isAllFilterApplied = isActiveFilters?.every((f) =>
    checkFilterIsApplied(f)
  );

  // сбрасываем все фильтры
  const resetAllFilters = () => {
    // если есть временные фильтры, то сбрасываем их
    if (isActiveFilters && isActiveFilters.length > 0) {
      setIsActiveFilters(
        isActiveFilters.map((f) => ({
          ...f,
          options: [],
        }))
      );
      return;
    }
    // если нет временных фильтров, то сбрасываем все активные фильтры
    queryActionsParams.cleanAllParams();
  };

  // сбрасываем быстрые фильтры
  const resetQuickFilters = () => {
    // если есть быстрые временные фильтры, то сбрасываем их
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
    // если нет быстрых временных фильтров, то сбрасываем все активные фильтры
    queryActionsParams.cleanAllParams();
  };

  // принимаем все фильтры
  const acceptAllFilters = () => {
    isActiveFilters?.forEach((isActiveFilterItem) => {
      // если фильтр не выбран, то удаляем его из query
      if (!isActiveFilterItem.options.length) {
        queryActionsParams.remove(isActiveFilterItem.name);
        setIsActiveFilters(
          isActiveFilters?.filter((f) => f.name !== isActiveFilterItem.name)
        );
        return;
      }

      // проверяем, есть ли фильтр в query
      const isThisActiveFilters = checkFilterIsApplied(isActiveFilterItem);

      if (isThisActiveFilters) {
        return;
      }

      // если фильтры не совпадают, то добавляем их в query
      const string = isActiveFilterItem.options.map((o) => o.value).join(",");

      queryActionsParams.set(isActiveFilterItem.name, string, false, false);
    });
  };

  return {
    isActiveFilters,
    handleChangeFilter,
    resetAllFilters,
    resetQuickFilters,
    acceptAllFilters,
    currentActiveFilters,
    isEmptyAllFilters,
    isEmptyQuickFilters,
    isAllQuickFilterApplied,
    getCurrentActiveFilterBySlug,
    resetActiveFilterBySlug,
    isAllFilterApplied,
  };
};

export type TFilter = ReturnType<typeof useFilter>;
