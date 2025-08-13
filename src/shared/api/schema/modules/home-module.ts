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

  "/api/contact": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Список email, телефонов и документов */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": IResponse<{
            emails: components["schemas"]["ContactItemDto"][];
            phones: components["schemas"]["ContactItemDto"][];
            documents: components["schemas"]["ContactDocumentDto"][];
            privacyPolicy: {
              isPrivacyPolicy: boolean;
              slug: string;
              title: string;
            };
          }>;
        };
      };
    };
  };

  "/api/contact/{slug}": {
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
      /** @description Документ */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": IResponse<
            components["schemas"]["ContactDocumentDto"]
          >;
        };
      };
      /** @description Документ не найден */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
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

  "/api/contact": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** Получить контакты и документы */
    get: HomeOperations["/api/contact"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };

  "/api/contact/{slug}": {
    parameters: {
      query?: never;
      header?: never;
      path: { slug: string };
      cookie?: never;
    };
    /** Получить документ по slug */
    get: HomeOperations["/api/contact/{slug}"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
}
