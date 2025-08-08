/**
 * API для направлений
 */
import { IResponse } from "../../types";
import { components } from "../components";

// Операции направлений
export interface DirectionOperations {
  "/api/direction/{slug}": {
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
      /** @description Найденное направление */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": IResponse<
            components["schemas"]["DirectionDetailsDto"]
          >;
        };
      };
      /** @description Направление не найдено */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
    };
  };
}

// Пути направлений с HTTP методами
export interface DirectionPaths {
  "/api/direction/{slug}": {
    parameters: {
      query?: never;
      header?: never;
      path: {
        slug: string;
      };
      cookie?: never;
    };
    /** Получить направление по slug */
    get: DirectionOperations["/api/direction/{slug}"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
}
