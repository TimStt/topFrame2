/**
 * API для HR пространства TopFrame
 */
import { IResponse } from "../../types";
import { components } from "../components";

// Операции HR пространства
export interface SpaceOperations {
  "/api/space": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Список разделов */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": IResponse<{
            space: components["schemas"]["SpaceDto"][];
          }>;
        };
      };
    };
  };

  "/api/space/{slug}": {
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
      /** @description Информация о разделе и его блоках */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": IResponse<
            components["schemas"]["SpaceDetailDto"]
          >;
        };
      };
    };
  };
}

// Пути HR пространства с HTTP методами
export interface SpacePaths {
  "/api/space": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** Получить все разделы */
    get: SpaceOperations["/api/space"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };

  "/api/space/{slug}": {
    parameters: {
      query?: never;
      header?: never;
      path: {
        slug: string;
      };
      cookie?: never;
    };
    /** Получить блоки раздела по slug */
    get: SpaceOperations["/api/space/{slug}"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
}
