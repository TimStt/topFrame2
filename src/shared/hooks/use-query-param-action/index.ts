"use client";

import { useRouter } from "next/navigation";
import { ZodSchema } from "zod";

import { useCallback } from "react";

import { filteredQueries } from "@/shared/utils/filtered-queries";

import { usePathnameURL } from "../use-pathname-URL";

type QueryValue = string | null;
type QueryParams = Record<string, unknown>;

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
        const values = currentValue?.split(",") || [];
        values.push(value);
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
    <T extends QueryParams>(zodSchema?: ZodSchema<T>): T | undefined => {
      const currentAllParams = Object.fromEntries(params.entries()) as T;

      if (Object.keys(currentAllParams).length === 0) {
        return undefined;
      }

      return zodSchema
        ? filteredQueries<T>(currentAllParams, zodSchema)
        : currentAllParams;
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
