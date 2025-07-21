import { ButtonUI } from '@/shared/ui/button-ui'
import { ChipUI } from '@/shared/ui/chip-ui'
import { HeadPage } from '@/widgets/mainblocks/head-page'
import Image from 'next/image'

const tabs = [
  'TF COIN',
  'Корпоративная культура',
  'Блог Linkedin',
  'Клиенты',
  'Бот обратной связи',
  'Горячая линия',
  'Блог Дзен',
  'Welcome book',
  'Институт',
  'Битрикс',
]

export default function Page() {
  return (
    <main>
      <HeadPage title="HR пространство TopFrame" />
      <div className="container hr-topframe-page">
        <div className="hr-topframe-tabs">
          {tabs.map((tab, idx) => (
            <ChipUI key={tab} text={tab} className={idx === 0 ? 'chip-active' : undefined} />
          ))}
        </div>
        <div className="hr-topframe-content">
          <div className="hr-topframe-info">
            <h2 className="hr-h2">TF COIN</h2>
            <div className="hr-main-text">
              <p>
                Добро пожаловать в наше приложение — ваш личный портал к новым возможностям и
                приятным бонусам! Здесь вас ждёт увлекательный мир внутренней валюты, которую можно
                зарабатывать и тратить в любой момент.
              </p>
              <p>
                Зарабатывайте валюту, выполняя интересные задания, пользуясь нашим приложением,
                которое также имеет схожесть с кликером. Чем активнее вы будете, тем больше бонусов
                получите! Собранную валюту можно обменять на уникальные подарки в нашем внутреннем
                магазине — от стильных аксессуаров до полезных гаджетов и развлечений. Мы
                постарались подобрать ассортимент, который точно понравится каждому, — разнообразие
                товаров охватывает все интересы наших сотрудников.
              </p>
              <p>
                Наше приложение постоянно обновляется: новые задания, свежие подарки и интересные
                акции — всё для того, чтобы процесс был не только выгодным, но и увлекательным!
                Заходите чаще, участвуйте активнее и получайте максимум удовольствия и бонусов.
                Делайте работу ещё приятнее и вдохновляйтесь новыми возможностями с нашим внутренним
                приложением!
              </p>
            </div>
          </div>

          <div className="hr-topframe-img-wrap">
            <Image
              src="/images/hr-topframe.jpg"
              alt="HR пространство TopFrame"
              width={480}
              height={320}
              className="hr-topframe-img"
            />
            <ButtonUI variant="primary" hasArrow>
              ТГ Бот
            </ButtonUI>
          </div>
        </div>
      </div>
    </main>
  )
}
