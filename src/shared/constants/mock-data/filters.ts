import { IQuickFilters } from "@/shared/ui/search-ui-kit/quick-filters-ui";

export const mockFilters: IQuickFilters[] = [
  {
    title: "Подразделение",
    options: [
      { value: "all", label: "Все подразделения", type: "checkbox" },
      { value: "it", label: "IT отдел", type: "checkbox" },
      { value: "hr", label: "HR департамент", type: "checkbox" },
      { value: "sales", label: "Отдел продаж", type: "checkbox" },
      { value: "marketing", label: "Маркетинг", type: "checkbox" },
      { value: "finance", label: "Финансовый отдел", type: "checkbox" },
      { value: "support", label: "Служба поддержки", type: "checkbox" },
    ],
  },
  {
    title: "Город",
    options: [
      { value: "moscow", label: "Москва", type: "checkbox" },
      { value: "spb", label: "Санкт-Петербург", type: "checkbox" },
      { value: "ekaterinburg", label: "Екатеринбург", type: "checkbox" },
      { value: "novosibirsk", label: "Новосибирск", type: "checkbox" },
      { value: "kazan", label: "Казань", type: "checkbox" },
      { value: "nizhniy", label: "Нижний Новгород", type: "checkbox" },
      { value: "remote", label: "Удаленно", type: "checkbox" },
    ],
  },
  {
    title: "Опыт",
    options: [
      { value: "no_experience", label: "Без опыта", type: "radio" },
      { value: "1-3", label: "1-3 года", type: "radio" },
      { value: "3-6", label: "3-6 лет", type: "radio" },
      { value: "6+", label: "Более 6 лет", type: "radio" },
    ],
  },
  {
    title: "Уровень дохода",
    options: [
      { value: "30-50", label: "30 000 - 50 000", type: "radio" },
      { value: "50-80", label: "50 000 - 80 000", type: "radio" },
      { value: "80-120", label: "80 000 - 120 000", type: "radio" },
      { value: "120-200", label: "120 000 - 200 000", type: "radio" },
      { value: "200+", label: "Свыше 200 000", type: "radio" },
      { value: "negotiable", label: "По договоренности", type: "radio" },
    ],
  },
  {
    title: "Занятость",
    options: [
      { value: "full_time", label: "Полная занятость", type: "radio" },
      { value: "part_time", label: "Частичная занятость", type: "radio" },
      { value: "project", label: "Проектная работа", type: "radio" },
      { value: "internship", label: "Стажировка", type: "radio" },
      { value: "freelance", label: "Фриланс", type: "radio" },
    ],
  },
];

// Отдельные фильтры для удобства использования
export const departmentFilter = mockFilters[0];
export const cityFilter = mockFilters[1];
export const experienceFilter = mockFilters[2];
export const salaryFilter = mockFilters[3];
export const employmentFilter = mockFilters[4];
