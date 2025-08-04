// Объединенные типы для обратной совместимости
import { components } from "./components";

import { AuthOperations, AuthPaths } from "./modules/auth-module";
import { AccountOperations, AccountPaths } from "./modules/account-module";
import { VacancyOperations, VacancyPaths } from "./modules/vacancy-module";
import { SpaceOperations, SpacePaths } from "./modules/space-module";
import {
  DirectionOperations,
  DirectionPaths,
} from "./modules/direction-module";

// Экспорт базовых типов
export type { webhooks, $defs, IImage } from "./types";

// Экспорт модулей по логическим группам
export type { AuthOperations, AuthPaths } from "./modules/auth-module";
export type { AccountOperations, AccountPaths } from "./modules/account-module";
export type { VacancyOperations, VacancyPaths } from "./modules/vacancy-module";
export type { SpaceOperations, SpacePaths } from "./modules/space-module";
export type {
  DirectionOperations,
  DirectionPaths,
} from "./modules/direction-module";

/**
 * Объединение всех путей API
 */
export type paths = AuthPaths &
  AccountPaths &
  VacancyPaths &
  SpacePaths &
  DirectionPaths;

/**
 * Объединение всех операций API
 */
export type operations = AuthOperations &
  AccountOperations &
  VacancyOperations &
  SpaceOperations &
  DirectionOperations;

export type IApiSchemas = components["schemas"];
