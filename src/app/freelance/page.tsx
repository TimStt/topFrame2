import { ButtonUI } from "@/shared/ui/button-ui";
import { HeadPage } from "@/widgets/mainblocks/head-page";
import Image from "next/image";
import { Metadata } from "next/types";

export const metadata: Metadata = {
  title: "Фриланс | TopFrame",
  description: "Фриланс | TopFrame",
};

export default function Page() {
  return (
    <main>
      <HeadPage className="container" title="Фриланс" />
      <div className="container freelance-page">
        <div className="freelance-page__content">
          <div className="freelance-page__info">
            <span className="freelance-page__facts">
              Ваш опыт + наш поток вакансий = стабильный доход
            </span>
            <div className="freelance-page__main-text">
              <p>
                HR-платформа для фриланс-рекрутеров и агентств, которые хотят
                меньше искать заказы и больше закрывать вакансий.
              </p>
              <p>
                Мы объединяем рекрутеров с компаниями, которым срочно нужен
                персонал. Вы получаете доступ к активным вакансиям — мы берём на
                себя привлечение клиентов и администрирование.
              </p>
            </div>
            <div className="freelance-page__benefits">
              <h2 className="freelance-page__title">Почему с нами выгодно</h2>
              <div className="freelance-page__benefits__list">
                <div className="freelance-page__benefits__item">
                  <h3 className="freelance-page__benefits__item-title">
                    Постоянный поток вакансий
                  </h3>
                  <div className="freelance-page__benefits__item-desc">
                    Только живые и актуальные заявки от работодателей, готовых
                    нанимать.
                  </div>
                </div>
                <div className="freelance-page__benefits__item">
                  <h3 className="freelance-page__benefits__item-title">
                    Никаких задержек
                  </h3>
                  <div className="freelance-page__benefits__item-desc">
                    Выплаты по графику, всё прозрачно и по договору.
                  </div>
                </div>
                <div className="freelance-page__benefits__item">
                  <h3 className="freelance-page__benefits__item-title">
                    Рост возможностей
                  </h3>
                  <div className="freelance-page__benefits__item-desc">
                    Мы активно расширяем пул клиентов, а значит — у вас всегда
                    будут объёмы по заявкам на вакансии.
                  </div>
                </div>
                <div className="freelance-page__benefits__item">
                  <h3 className="freelance-page__benefits__item-title">
                    Оплата за результат
                  </h3>
                  <div className="freelance-page__benefits__item-desc">
                    Вознаграждение выплачивается за адаптированных кандидатов —
                    тех, кто успешно прошёл испытательный срок или отработал
                    оговорённый период.
                  </div>
                </div>
                <div className="freelance-page__benefits__item">
                  <h3 className="freelance-page__benefits__item-title">
                    Максимум гибкости
                  </h3>
                  <div className="freelance-page__benefits__item-desc">
                    Подходит как для агентств, так и для самостоятельных
                    рекрутеров.
                  </div>
                </div>
              </div>
            </div>
            <div className="freelance-page__how">
              <h2 className="freelance-page__title">Как начать</h2>
              <ol className="freelance-page__how__list">
                <li>
                  <span className="freelance-page__how__item-text">
                    Зарегистрируйтесь на платформе, с помощью наших
                    координаторов;
                  </span>
                </li>
                <li>
                  <span className="freelance-page__how__item-text">
                    Получите доступ к вакансиям;
                  </span>
                </li>
                <li>
                  <span className="freelance-page__how__item-text">
                    Работайте с своим темпом и получайте оплату за результат!
                  </span>
                </li>
              </ol>
            </div>
            <div className="freelance-page__pay">
              <span className="freelance-page__facts">
                Здесь платят за тех, кого действительно нашли
              </span>
              <div className="freelance-page__main-text">
                Присоединяйтесь к платформе, где ценят вашу экспертизу и платят
                за адаптированных специалистов.
              </div>
            </div>
            <ButtonUI variant="primary" hasArrow text="Присоединиться" />
          </div>

          <Image
            src="/images/freelance.jpg"
            alt="Фриланс"
            width={480}
            height={320}
            className="freelance-page__img"
          />
        </div>
      </div>
    </main>
  );
}
