import { HeadPage } from '@/widgets/mainblocks/head-page'
import { InfoUser } from '@/widgets/profile/info-user'
import { SearchVacancies } from '@/widgets/vacancy/search-vacancies'

export default function Page() {
  return (
    <main className="profile">
      <HeadPage title="Личный кабинет" />
      Hea
      <div className="profile__inner container">
        <InfoUser />
        <SearchVacancies />
      </div>
    </main>
  )
}
