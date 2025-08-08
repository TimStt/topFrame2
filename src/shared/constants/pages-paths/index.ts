import { QUERY_KEYS } from "../queries";

export const PAGES_PATHS = {
  PROFILE: "/profile",
  VACANCIES: "/vacancies",
  VACANCY: (slug: string) => `/vacancies/${slug}`,
  DIRECTIONS: (direction?: string) =>
    `/directions${direction ? `/${direction}` : ""}`,
  HR_TOPFRAME: (tab?: string, slug?: string) =>
    `/hr-topframe${tab ? `?${QUERY_KEYS.SPACE_TAB}=${tab}` : ""}${
      slug ? `/${slug}` : ""
    }`,
  FREELANCE: "/freelance",
  HOME: "/",
  VACANCY_PAGE: (slug: string) => `/vacancies/${slug}`,
  NOT_FOUND: "/not-found",
  POLICY: "/privacy-policy",
  IS_ART: "https://is-art.ru/?ysclid=mdom0dx2dm721100143",
  DOCUMENTS: (slug?: string) => `/documents${slug ? `/${slug}` : ""}`,
};

export const PAGES_WITH_BLUE_HEAD = [PAGES_PATHS.HOME, PAGES_PATHS.VACANCIES];

export const PROTECTED_PAGES = [PAGES_PATHS.PROFILE];

export const REDIRECT_PAGES = [
  {
    path: PAGES_PATHS.DIRECTIONS(),
    redirect: PAGES_PATHS.HOME,
  },
  {
    path: PAGES_PATHS.DOCUMENTS(),
    redirect: PAGES_PATHS.HOME,
  },
];
