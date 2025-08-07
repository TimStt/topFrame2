"use client";

import { useRouter } from "next/navigation";
import { ZodSchema } from "zod";

import { useCallback } from "react";

import { filteredQueries } from "@/shared/utils/filtered-queries";

import { usePathnameURL } from "../use-pathname-URL";
import { ISelectOption } from "@/shared/ui/select-ui";

type QueryValue = string | null;
type QueryParams = Record<string, string | number>;

export const useQueryParamAction = () => {
  const { params, pathname } = usePathnameURL();
  const router = useRouter();

  /**
   * Получает значение параметра из URL
   */
  const get = useCallback(
    <T>(paramName: string): T | undefined =>
      params.get(paramName) as T | undefined,
    [params]
  );

  /**
   * Удаляет параметр или его значение из URL
   */
  const remove = useCallback(
    (paramName: string, value?: string) => {
      const currentValue = get<string>(paramName);

      if (value && !!currentValue?.split(",").length) {
        const newValue = currentValue
          .split(",")
          .filter((v) => v !== value)
          .join(",");

        params.set(paramName, newValue);
      } else {
        params.delete(paramName);
      }

      router.replace(`${pathname}?${params}`, { scroll: false });
    },
    [get, params, pathname, router]
  );

  /**
   * Устанавливает значение параметра в URL
   */
  const set = useCallback(
    (
      paramName: string,
      value: QueryValue,
      isDelete = true,
      isMultiple = true
    ) => {
      const currentValue = get<string>(paramName);

      // Если значение уже существует и установлен флаг удаления - удаляем

      if (
        isDelete &&
        value &&
        (currentValue?.includes(value) || currentValue === value)
      ) {
        remove(paramName, isMultiple ? value : undefined);
        return;
      }

      // Если значение пустое - удаляем параметр
      if (!value) {
        remove(paramName);
        return;
      }

      // Обработка массива значений

      if (isMultiple) {
        const values = currentValue
          ? currentValue?.includes(",")
            ? currentValue?.split(",")
            : [currentValue]
          : [];

        console.log("currentValue", values);

        console.log("value query", value);
        if (!values.includes(value)) {
          values.push(value);
        } else {
          values.filter((v) => v !== value);
        }
        params.set(paramName, values.join(","));
      } else {
        params.set(paramName, value);
      }

      router.replace(`${pathname}?${params}`, { scroll: false });
    },
    [get, remove, params, pathname, router]
  );

  /**
   * Очищает все параметры из URL
   */
  const cleanAllParams = useCallback(() => {
    params.forEach((_, key) => params.delete(key));
    router.replace(`${pathname}?${params}`, { scroll: false });
  }, [params, pathname, router]);

  /**
   * Получает все параметры из URL в виде объекта
   */
  const getAllParams = useCallback(
    <T extends QueryParams>(
      zodSchema?: ZodSchema
    ):
      | {
          normalized: {
            options: string[];
            name: string;
          }[];
          original: T;
        }
      | undefined => {
      const currentAllParams = Object.fromEntries(params.entries()) as T;

      if (Object.keys(currentAllParams).length === 0) {
        return undefined;
      }

      const normalizedParams = Object.entries(currentAllParams).map(
        ([key, value]) => ({
          options: value?.toString().split(",") || [value],
          name: key,
        })
      );

      return {
        normalized: normalizedParams,
        original: currentAllParams,
      };
    },
    [params]
  );

  /**
   * Устанавливает несколько параметров в URL
   */
  const setAllParams = useCallback(
    <T extends QueryParams>(currentParams: T) => {
      Object.entries(currentParams).forEach(([key, value]) => {
        if (typeof value === "string") {
          params.set(key, value);
        }
      });

      router.replace(`${pathname}?${params}`, { scroll: false });
    },
    [params, pathname, router]
  );

  return {
    get,
    set,
    remove,
    cleanAllParams,
    getAllParams,
    setAllParams,
    pathname,
    params,
    router,
  };
};
