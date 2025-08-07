/**
 * API для главной страницы
 */
import { IResponse } from "../../types";
import { components } from "../components";

// Операции главной страницы
export interface HomeOperations {
  "/api/home": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Данные для главной страницы */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": IResponse<{
            directions: components["schemas"]["DirectionDto"][];
            aboutUs: components["schemas"]["AboutUsDto"][];
            spaceCenter: components["schemas"]["SpaceItemDto"][];
            spaceOuter: components["schemas"]["SpaceItemDto"][];
            vacancies: components["schemas"]["VacancyDto"][];
            count: number;
            ourTeam: components["schemas"]["TeamMemberDto"][];
          }>;
        };
      };
    };
  };
}

// Пути главной страницы с HTTP методами
export interface HomePaths {
  "/api/home": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** Получить данные для главной страницы */
    get: HomeOperations["/api/home"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
}
