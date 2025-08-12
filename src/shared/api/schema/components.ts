/**
 * Схемы компонентов API
 */
import { TRating } from "@/shared/api/types";

import type {
  IImage,
  ILinksPaginationDto,
  IMetaPaginationInfoDto,
} from "../types";

export interface components {
  schemas: {
    // Авторизация
    AuthDto: {
      login: string;
      password: string;
    };

    AuthRegisterDto: {
      name: string;
      surname: string;
      phone: string;
      comment?: string;
    };

    RefreshTokenDto: {
      refreshToken: string;
    };

    AuthResponseDto: {
      user: components["schemas"]["AccountResponseDto"];
      token: string;
    };

    // Профиль
    AccountResponseDto: {
      id: number;
      name: string;
      surname: string;
      phone: string;
      photo?: string;
      city?: string;
      jobTitle?: string;
      role: "recruiter" | "freelancer";
    };

    // Общие
    SuccessMessageDto: {
      message: string;
    };

    // Вакансии
    CreateResponseDto: {
      name: string;
      surname: string;
      phone: string;
      comment?: string;
      vacancyId: number;
    };

    FilterValueDto: {
      value: number;
      label: string;
    };

    FilterDto: {
      name: string;
      slug: string;
      type: string;
      arr: components["schemas"]["FilterValueDto"][];
    };

    VacancyInfoDto: {
      data: string | string[];
      location: string;
      name: string;
      showTitle: boolean;
      type: "text" | "file" | "image";
    };

    VacancyDto: {
      id: number;
      name: string;
      slug: string;
      price: string | null;
      city: string | null;
      chip: string[];
    };

    VacancyDetailsDto: {
      id: number;
      name: string;
      button?: {
        role: "recruiter" | "freelancer";
        label: string;
        value: string;
      };
      leftBox: components["schemas"]["VacancyInfoDto"][];
      price: string;
      city: string;
      description: components["schemas"]["VacancyInfoDto"][];
      chip: components["schemas"]["VacancyInfoDto"][];
    };
    UserDto: {
      id: number;
      name: string;
      surname: string;
      role: "recruiter" | "freelancer" | "admin" | "bot" | "applicant";
      phone: string;
      photo: string | null;
      city: string | null;
      jobTitle: string | null;
    };

    VacancyListResponseDto: {
      filters: components["schemas"]["FilterDto"][];
      quickFilter: components["schemas"]["FilterDto"][];
      vacancies: components["schemas"]["VacancyDto"][];
      countPage: number;
      count: number;
    };

    LinkItemDto: {
      name: string;
      id: number;
      allowedRoles: (
        | "recruiter"
        | "freelancer"
        | "admin"
        | "bot"
        | "applicant"
      )[];
      link: string;
      icon: string;
      isQuickLink: boolean;
    };

    VacancyListLkResponseDto: {
      filters: components["schemas"]["FilterDto"][];
      quickFilter: components["schemas"]["FilterDto"][];
      quickLinks: components["schemas"]["LinkItemDto"][];
      instructions: components["schemas"]["LinkItemDto"][];
      vacancies: components["schemas"]["VacancyDto"][];
      countPage: number;
      count: number;
      user: components["schemas"]["UserDto"];
    };

    VacancyListFilerResponseDto: {
      vacancies: components["schemas"]["VacancyDto"][];
      countPage: number;
      count: number;
    };

    // Пространство и направления
    SpaceDto: {
      slug: string;
      name: string;
      image?: string;
      text?: string;
      link?: {
        label: string;
        value: string;
      };
    };
    SpaceDetailsBlockDto: {
      titleIsBlue: boolean;
      title: string;
      position: number;
    };

    SpaceDetailsSpaceDto: {
      image: string;
      slug: string;
      name: string;
      link?: {
        label: string;
        value: string;
      };
    };

    SpaceDetailDto:
      | {
          space: components["schemas"]["SpaceDetailsSpaceDto"];

          blocks: Array<
            components["schemas"]["SpaceDetailsBlockDto"] & {
              description: string;

              descriptionType: "text";
            }
          >;
        }
      | {
          space: components["schemas"]["SpaceDetailsSpaceDto"];
          blocks: Array<
            {
              description: {
                name: string;
              }[];
              descriptionType: "step";
            } & components["schemas"]["SpaceDetailsBlockDto"]
          >;
        }
      | {
          space: components["schemas"]["SpaceDetailsSpaceDto"];
          blocks: Array<
            {
              description: { title: string; description: string }[];
              descriptionType: "block";
            } & components["schemas"]["SpaceDetailsBlockDto"]
          >;
        };

    DirectionDto: {
      title: string;
      description?: string | null;
      slug: string;
      image?: string | null;

      filterValue: string;
      link: {
        slug: string;
        value: string;
      };
    };

    DirectionDetailsDto: {
      filterSlug: string;
      filterValue: string;
      image: string;
      slug: string;
      text: string;
      title: string;
    };

    // Главная страница
    AboutUsDto: {
      id: number;
      title: string;
      description: string;
    };

    SpaceItemDto: {
      hasSeparatePage: boolean;
      slug: string;
      name: string;
      icon: string;
      inCenter: boolean;
    };

    VacancyPreviewDto: {
      id: number;
      name: string;
      price: Record<string, unknown>;
      city: Record<string, unknown>;
      chip: string[];
    };

    TeamMemberDto: {
      id: number;
      title: string;
      description: string;
      preview: string;
      video: string;
    };

    // Контакты
    ContactItemDto: {
      id: number;
      value: string;
      isEmail?: boolean;
    };

    ContactDocumentDto: {
      title: string;
      description: string;
      slug: string;
    };
  };
  responses: never;
  parameters: never;
  requestBodies: never;
  headers: never;
  pathItems: never;
}
