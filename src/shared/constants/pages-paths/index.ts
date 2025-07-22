export const PAGES_PATHS = {
  PROFILE: '/profile',
  VACANCIES: '/vacancies',
  VACANCY: (slug: string) => `/vacancies/${slug}`,
  ADMIN_DIRECTION: '/admin-direction',
  HR_TOPFRAME: '/hr-topframe',
  FREELANCE: '/freelance',
  HOME: '/',
}

export const PAGES_WITH_BLUE_HEAD = [PAGES_PATHS.HOME, PAGES_PATHS.VACANCIES]
