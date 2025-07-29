export const PAGES_PATHS = {
  PROFILE: "/profile",
  VACANCIES: "/vacancies",
  VACANCY: (slug: string) => `/vacancies/${slug}`,
  ADMIN_DIRECTION: "/admin-direction",
  HR_TOPFRAME: "/hr-topframe",
  FREELANCE: "/freelance",
  HOME: "/",
  VACANCY_PAGE: (slug: string) => `/vacancies/vacancy/${slug}`,
  NOT_FOUND: "/not-found",
  POLICY: "/privacy-policy",
  IS_ART: "https://is-art.ru/?ysclid=mdom0dx2dm721100143",
};

export const PAGES_WITH_BLUE_HEAD = [PAGES_PATHS.HOME, PAGES_PATHS.VACANCIES];
