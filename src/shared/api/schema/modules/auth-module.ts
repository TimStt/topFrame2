/**
 * API для авторизации
 */
import { IResponse } from "../../types";
import { components } from "../components";

// Операции авторизации
export interface AuthOperations {
  "/api/auth/login": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody: {
      content: {
        "application/json": components["schemas"]["AuthDto"];
      };
    };
    responses: {
      /** @description Успешный вход, возвращает токены и данные пользователя */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": IResponse<
            components["schemas"]["AuthResponseDto"]
          >;
        };
      };

      400: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": IResponse;
        };
      };
      /** @description Неверный логин или пароль */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": IResponse;
        };
      };
    };
  };

  "/api/auth/login/access-token": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody: {
      content: {
        "application/json": components["schemas"]["RefreshTokenDto"];
      };
    };
    responses: {
      /** @description Новые токены и данные пользователя */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": IResponse<
            components["schemas"]["AuthResponseDto"]
          >;
        };
      };
      /** @description Неверный или просроченный refresh токен */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
    };
  };

  "/api/auth/register": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody: {
      content: {
        "application/json": components["schemas"]["AuthRegisterDto"];
      };
    };
    responses: {
      /** @description Успешная регистрация */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": IResponse<
            components["schemas"]["SuccessMessageDto"]
          >;
        };
      };
      /** @description Пользователь с таким телефоном уже существует */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": IResponse;
        };
      };
    };
  };
}

// Пути авторизации с HTTP методами
export interface AuthPaths {
  "/api/auth/login": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get?: never;
    put?: never;
    /** Логин пользователя */
    post: AuthOperations["/api/auth/login"];
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };

  "/api/auth/login/access-token": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get?: never;
    put?: never;
    /** Получение нового access/refresh токена по refresh токену */
    post: AuthOperations["/api/auth/login/access-token"];
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };

  "/api/auth/register": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get?: never;
    put?: never;
    /** Регистрация нового пользователя */
    post: AuthOperations["/api/auth/register"];
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
}
