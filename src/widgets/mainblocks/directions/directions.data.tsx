export interface IDirectionButtons {
  id: number
  title: string
  description: string
  icon?: React.ReactNode
  idCard: number
}

export interface IDirectionCards {
  id: number
  title: string
  description: string
  image: string
}

export const directionsData: IDirectionButtons[] = [
  {
    id: 1,
    title: 'Административное направление',
    description: 'Управление административными процессами и документооборотом',
    idCard: 1,
  },
  {
    id: 2,
    title: 'Аутсорсинг складских процессов',
    description: 'Оптимизация складских операций и логистических процессов',
    idCard: 2,
  },
  {
    id: 3,
    title: 'Аудит гостиничного сервиса',
    description: 'Комплексная оценка качества гостиничных услуг',
    idCard: 3,
  },
  {
    id: 4,
    title: 'Оценка эффективности руководства и административного УК',
    description: 'Анализ работы управленческого звена и административных структур',
    idCard: 4,
  },
  {
    id: 5,
    title: 'Специальные инструкции',
    description: 'Разработка и внедрение специализированных процедур',
    idCard: 5,
  },
  {
    id: 6,
    title: 'Экспертиза фруктов и овощей',
    description: 'Профессиональная оценка качества сельскохозяйственной продукции',
    idCard: 6,
  },
]

export const directionsCardsData: IDirectionCards[] = [
  {
    id: 1,
    title: 'Административное направление',
    description: 'Управление административными процессами и документооборотом',
    image: '/images/directions-1.jpg',
  },
  {
    id: 2,
    title: 'Аутсорсинг складских процессов',
    description: 'Оптимизация складских операций и логистических процессов',
    image: '/images/directions-2.jpg',
  },
  {
    id: 3,
    title: 'Аудит гостиничного сервиса',
    description: 'Комплексная оценка качества гостиничных услуг',
    image: '/images/directions-1.jpg',
  },
  {
    id: 4,
    title: 'Оценка эффективности руководства и административного УК',
    description: 'Анализ работы управленческого звена и административных структур',
    image: '/images/directions-2.jpg',
  },
  {
    id: 5,
    title: 'Специальные инструкции',
    description: 'Разработка и внедрение специализированных процедур',
    image: '/images/directions-1.jpg',
  },
  {
    id: 6,
    title: 'Экспертиза фруктов и овощей',
    description: 'Профессиональная оценка качества сельскохозяйственной продукции',
    image: '/images/directions-2.jpg',
  },
]
