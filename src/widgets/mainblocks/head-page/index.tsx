import { cls } from '@/shared/lib/cls'
import { BreadcrumbsUI } from '@/shared/ui/breadcrumbs-ui'

export const HeadPage = ({ className, title }: { className?: string; title: string }) => {
  return (
    <div className={cls('head-page container', className)}>
      <BreadcrumbsUI
        items={[
          {
            label: 'Главная',
            href: '/',
          },
          {
            label: 'Личный кабинет',
            href: '/profile',
          },
        ]}
      />
      <h1 className="title-h1">{title}</h1>
    </div>
  )
}
