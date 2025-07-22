import { ButtonUI } from '@/shared/ui/button-ui'
import { HeadPage } from '@/widgets/mainblocks/head-page'
import Image from 'next/image'

export default function Page() {
  return (
    <main>
      <HeadPage title="Фриланс" />
      <div className="container freelance-page">
        <div className="freelance-content">
          <div className="freelance-info">
            <div className="freelance-hate">Ваш опыт + наш поток вакансий = стабильный доход</div>
            <div className="freelance-main-text">
              <p>
                HR-платформа для фриланс-рекрутеров и агентств, которые хотят меньше искать заказы и
                больше закрывать вакансий.
              </p>
              <p>
                Мы объединяем рекрутеров с компаниями, которым срочно нужен персонал. Вы получаете
                доступ к активным вакансиям — мы берём на себя привлечение клиентов и
                администрирование.
              </p>
            </div>
            <div className="freelance-benefits">
              <h2 className="freelance-h2">Почему с нами выгодно</h2>
              <div className="freelance-benefits-list">
                <div className="freelance-benefit">
                  <div className="benefit-title">Постоянный поток вакансий</div>
                  <div className="benefit-desc">
                    Только живые и актуальные заявки от работодателей, готовых нанимать.
                  </div>
                </div>
                <div className="freelance-benefit">
                  <div className="benefit-title">Никаких задержек</div>
                  <div className="benefit-desc">
                    Выплаты по графику, всё прозрачно и по договору.
                  </div>
                </div>
                <div className="freelance-benefit">
                  <div className="benefit-title">Рост возможностей</div>
                  <div className="benefit-desc">
                    Мы активно расширяем пул клиентов, а значит — у вас всегда будут объёмы по
                    заявкам на вакансии.
                  </div>
                </div>
                <div className="freelance-benefit">
                  <div className="benefit-title">Оплата за результат</div>
                  <div className="benefit-desc">
                    Вознаграждение выплачивается за адаптированных кандидатов — тех, кто успешно
                    прошёл испытательный срок или отработал оговорённый период.
                  </div>
                </div>
                <div className="freelance-benefit">
                  <div className="benefit-title">Максимум гибкости</div>
                  <div className="benefit-desc">
                    Подходит как для агентств, так и для самостоятельных рекрутеров.
                  </div>
                </div>
              </div>
            </div>
            <div className="freelance-how">
              <h2 className="freelance-h2">Как начать</h2>
              <ol className="freelance-how-list">
                <li>
                  <span className="how-num">1</span>
                  <span className="how-text">
                    Зарегистрируйтесь на платформе, с помощью наших координаторов;
                  </span>
                </li>
                <li>
                  <span className="how-num">2</span>
                  <span className="how-text">Получите доступ к вакансиям;</span>
                </li>
                <li>
                  <span className="how-num">3</span>
                  <span className="how-text">
                    Работайте с своим темпом и получайте оплату за результат!
                  </span>
                </li>
              </ol>
            </div>
            <div className="freelance-pay">
              <div className="pay-title">Здесь платят за тех, кого действительно нашли</div>
              <div className="pay-desc">
                Присоединяйтесь к платформе, где ценят вашу экспертизу и платят за адаптированных
                специалистов.
              </div>
            </div>
            <ButtonUI variant="primary" hasArrow>
              Присоединиться
            </ButtonUI>
          </div>

          <Image
            src="/images/freelance.jpg"
            alt="Фриланс"
            width={480}
            height={320}
            className="freelance-img"
          />
        </div>
      </div>
    </main>
  )
}
