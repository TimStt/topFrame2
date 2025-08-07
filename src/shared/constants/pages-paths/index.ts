import { QUERY_KEYS } from '../queries'

export const PAGES_PATHS = {
  PROFILE: '/profile',
  VACANCIES: '/vacancies',
  VACANCY: (slug: string) => `/vacancies/${slug}`,
  DIRECTIONS: (direction: string) => `/directions/${direction}`,
  HR_TOPFRAME: (slug?: string) => `/hr-topframe/${slug ? `${QUERY_KEYS.SPACE_TAB}=${slug}` : ''}`,
  FREELANCE: '/freelance',
  HOME: '/',
  VACANCY_PAGE: (slug: string) => `/vacancies/${slug}`,
  NOT_FOUND: '/not-found',
  POLICY: '/privacy-policy',
  IS_ART: 'https://is-art.ru/?ysclid=mdom0dx2dm721100143',
}

export const PAGES_WITH_BLUE_HEAD = [PAGES_PATHS.HOME, PAGES_PATHS.VACANCIES]
