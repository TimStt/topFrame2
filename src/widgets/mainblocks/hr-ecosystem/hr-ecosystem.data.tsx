import BookIcon from '@/source/icons/book.svg'
import BrainIcon from '@/source/icons/brain.svg'
import BriefcaseIcon from '@/source/icons/briefcase.svg'
import ChatIcon from '@/source/icons/chat.svg'
import GlobeIcon from '@/source/icons/globe.svg'
import HeadphonesIcon from '@/source/icons/headphones.svg'
import SettingsIcon from '@/source/icons/settings.svg'
import StarIcon from '@/source/icons/star.svg'

export interface IHRElement {
  id: number
  title: string
  icon?: React.ReactNode
  layer: 'outer' | 'inner'
  highlighted?: boolean
  link: string
}

export const hrEcosystemData: IHRElement[] = [
  {
    id: 1,
    title: 'Горячая линия',
    layer: 'outer',
    icon: <HeadphonesIcon />,
    link: '/',
  },
  {
    id: 2,
    title: 'Блог Джен',
    layer: 'outer',
    icon: <BrainIcon />,
    link: '/',
  },
  {
    id: 3,
    title: 'Клиенты',
    layer: 'outer',
    icon: <StarIcon />,
    link: '/',
  },
  {
    id: 4,
    title: 'Бот обратной связи',
    layer: 'inner',
    icon: <ChatIcon />,
    link: '/',
  },
  {
    id: 5,
    title: 'Институт',
    layer: 'inner',
    icon: <BookIcon />,
    link: '/',
  },
  {
    id: 6,
    title: 'Бот LinkedIn',
    layer: 'inner',
    icon: <GlobeIcon />,
    link: '/',
  },
  {
    id: 7,
    title: 'Корпоративная культура',
    layer: 'outer',
    icon: <SettingsIcon />,
    link: '/',
  },
  {
    id: 8,
    title: 'Битрикс',
    layer: 'outer',
    icon: <BriefcaseIcon />,
    link: '/',
  },
  {
    id: 9,
    title: 'Welcome book',
    layer: 'outer',
    icon: <BookIcon />,
    link: '/',
  },
  {
    id: 10,
    title: 'Фриланс',
    layer: 'inner',
    icon: <BriefcaseIcon />,
    link: '/',
  },
  {
    id: 11,
    title: 'TT COIN',
    layer: 'outer',
    highlighted: true,
    link: '/',
  },
]

export const centralElement = {
  title: 'HR пространство TopFrame',
  subtitle: 'Центр управления человеческими ресурсами',
}
