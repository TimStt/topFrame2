/**
 * API для вакансий
 */
import { IResponse } from "../../types";
import { components } from "../components";

// Операции вакансий
export interface VacancyOperations {
  "/api/vacancy/response": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody: {
      content: {
        "application/json": components["schemas"]["CreateResponseDto"];
      };
    };
    responses: {
      /** @description Отклик успешно создан */
      201: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": IResponse<
            components["schemas"]["SuccessMessageDto"]
          >;
        };
      };
      /** @description Ошибка валидации */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
    };
  };

  "/api/vacancy/catalog": {
    parameters: {
      query?: {
        page?: string;
        search?: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Список вакансий и фильтров */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": IResponse<
            components["schemas"]["VacancyListResponseDto"]
          >;
        };
      };
    };
  };

  "/api/vacancy/lk/catalog": {
    parameters: {
      query?: {
        page?: string;
        search?: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Список вакансий, фильтров и данных для личного кабинета */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": IResponse<
            components["schemas"]["VacancyListLkResponseDto"]
          >;
        };
      };
    };
  };

  "/api/vacancy/catalog/filter": {
    parameters: {
      query?: {
        page?: string;
        search?: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Список вакансий */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content?: {
          "application/json": IResponse<
            components["schemas"]["VacancyListFilerResponseDto"]
          >;
        };
      };
    };
  };

  "/api/vacancy/{slug}": {
    parameters: {
      query?: never;
      header?: never;
      path: {
        slug: string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Детали вакансии */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content?: {
          "application/json": {
            vacancy: components["schemas"]["VacancyDetailsDto"];
          };
        };
      };
    };
  };
}

// Пути вакансий с HTTP методами
export interface VacancyPaths {
  "/api/vacancy/response": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get?: never;
    put?: never;
    /** Создать отклик */
    post: VacancyOperations["/api/vacancy/response"];
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };

  "/api/vacancy/catalog": {
    parameters: {
      query?: {
        page?: string;
        search?: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** Получить список вакансий и фильтры для каталога */
    get: VacancyOperations["/api/vacancy/catalog"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };

  "/api/vacancy/lk/catalog": {
    parameters: {
      query?: {
        page?: string;
        search?: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** Получить список вакансий, фильтры и данные для личного кабинета */
    get: VacancyOperations["/api/vacancy/lk/catalog"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };

  "/api/vacancy/catalog/filter": {
    parameters: {
      query?: {
        page?: string;
        search?: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** Получить список вакансий */
    get: VacancyOperations["/api/vacancy/catalog/filter"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };

  "/api/vacancy/{slug}": {
    parameters: {
      query?: never;
      header?: never;
      path: {
        slug: string;
      };
      cookie?: never;
    };
    /** Получить детали вакансии */
    get: VacancyOperations["/api/vacancy/{slug}"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
}
