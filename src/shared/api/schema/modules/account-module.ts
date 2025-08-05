/**
 * API для профиля пользователя
 */
import { IResponse } from "../../types";
import { components } from "../components";

// Операции профиля
export interface AccountOperations {
  "/api/account": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Успешно получен пользователь */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": IResponse<{
            user: components["schemas"]["AccountResponseDto"];
            quickLinks: components["schemas"]["LinkItemDto"][];
            instructions: components["schemas"]["LinkItemDto"][];
          }>;
        };
      };
      /** @description Пользователь не найден */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
    };
  };

  "/api/account/update": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody: {
      content: {
        "multipart/form-data": FormData;
      };
    };
    responses: {
      /** @description Успешно получен пользователь */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": IResponse<
            components["schemas"]["AccountResponseDto"]
          >;
        };
      };
      /** @description Ошибка при загрузке файла */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description Пользователь не найден */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
    };
  };
}

// Пути профиля с HTTP методами
export interface AccountPaths {
  "/api/account": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** Получить текущего пользователя */
    get: AccountOperations["/api/account"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };

  "/api/account/update": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get?: never;
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    /** Обновить фото пользователя */
    patch: AccountOperations["/api/account/update"];
    trace?: never;
  };
}
