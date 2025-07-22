import { ISelectOption } from "@/shared/ui/select-ui";

export const mockFilters: ISelectOption[] = [
  {
    label: "Подразделение",
    options: [
      { value: "all", label: "Все подразделения" },
      { value: "it", label: "IT отдел" },
      { value: "hr", label: "HR департамент" },
      { value: "sales", label: "Отдел продаж" },
      { value: "marketing", label: "Маркетинг" },
      { value: "finance", label: "Финансовый отдел" },
      { value: "support", label: "Служба поддержки" },
    ],
    type: "checkbox",
  },
  {
    label: "Город",
    options: [
      { value: "moscow", label: "Москва" },
      { value: "spb", label: "Санкт-Петербург" },
      { value: "ekaterinburg", label: "Екатеринбург" },
      { value: "novosibirsk", label: "Новосибирск" },
      { value: "kazan", label: "Казань" },
      { value: "nizhniy", label: "Нижний Новгород" },
      { value: "remote", label: "Удаленно" },
    ],
    type: "checkbox",
  },
  {
    label: "Опыт",
    options: [
      { value: "no_experience", label: "Без опыта" },
      { value: "1-3", label: "1-3 года" },
      { value: "3-6", label: "3-6 лет" },
      { value: "6+", label: "Более 6 лет" },
    ],
    type: "radio",
  },
  {
    label: "Уровень дохода",
    options: [
      { value: "30-50", label: "30 000 - 50 000" },
      { value: "50-80", label: "50 000 - 80 000" },
      { value: "80-120", label: "80 000 - 120 000" },
      { value: "120-200", label: "120 000 - 200 000" },
      { value: "200+", label: "Свыше 200 000" },
      { value: "negotiable", label: "По договоренности" },
    ],
    type: "radio",
  },
  {
    label: "Занятость",
    options: [
      { value: "full_time", label: "Полная занятость" },
      { value: "part_time", label: "Частичная занятость" },
      { value: "project", label: "Проектная работа" },
      { value: "internship", label: "Стажировка" },
      { value: "freelance", label: "Фриланс" },
    ],
    type: "radio",
  },
];

// Отдельные фильтры для удобства использования
export const departmentFilter = mockFilters[0];
export const cityFilter = mockFilters[1];
export const experienceFilter = mockFilters[2];
export const salaryFilter = mockFilters[3];
export const employmentFilter = mockFilters[4];
