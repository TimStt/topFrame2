/**
 * Базовые типы для API схемы
 */

import { IImage } from "../types";

export type webhooks = Record<string, never>;
export type $defs = Record<string, never>;

// Переэкспорт внешних типов для удобства
export type { IImage };
