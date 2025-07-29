import React from "react";
import { HeadPage } from "@/widgets/mainblocks/head-page";
import { ChipUI } from "@/shared/ui/chip-ui";
import { ButtonUI } from "@/shared/ui/button-ui";
import LocationIcon from "@/source/icons/location.svg";
export default function VacanciesPage() {
  return (
    <main className="vacancy-page">
      <div className="vacancy-page__content container">
        <div className="vacancy-page__main">
          <HeadPage title="Software Engineer " />
          <span className="vacancy-page__salary">120 000 - 150 000 Р</span>
          <div className="vacancy-page__tags">
            <ChipUI className="vacancy-page__tag" text="Полная занятость" />
            <ChipUI className="vacancy-page__tag" text="Опыт 3-6 лет" />
            <ChipUI className="vacancy-page__tag" text="Гибкий график" />
          </div>

          <div className="vacancy-page__location">
            <LocationIcon />
            <span>Москва</span>
          </div>

          <ButtonUI
            className="vacancy-page__button"
            variant="secondary"
            text="Откликнуться"
            hasArrow
          />

          <div className="vacancy-page__info">
            <div className="vacancy-page__info-item">
              <h3>Описание позиции</h3>
              <p>
                Компания ищет талантливого Software Engineer для присоединения к
                нашей динамичной команде разработчиков. Вы будете создавать
                инновационные решения, которые помогут TopFrame строить будущее
                российского бизнеса.
              </p>
              <p>
                Инженер будет отвечать за разработку высококачественного
                программного обеспечения, участие в архитектурных решениях и
                тесное сотрудничество с кросс-функциональными командами для
                создания продуктов мирового класса.
              </p>
            </div>
            <div className="vacancy-page__info-item">
              <h3>Основные обязанности</h3>
              <ul>
                <li>
                  Разработка и поддержка веб-приложений с использованием
                  современных технологий
                </li>
                <li>
                  Участие в проектировании системной архитектуры и принятии
                  технических решений
                </li>
                <li>
                  Написание чистого, тестируемого и хорошо документированного
                  кода
                </li>
                <li>Проведение код-ревью и менторинг младших разработчиков</li>
                <li>
                  Оптимизация производительности приложений и решение
                  технических проблем
                </li>
              </ul>
            </div>
            <div className="vacancy-page__info- ">
              <h3>Требования</h3>
              <ul>
                <li>Опыт разработки на JavaScript/TypeScript от 3+ лет</li>
                <li>Знание React, Next.js и современных frontend технологий</li>
                <li>Опыт работы с Node.js и базами данных</li>
                <li>Понимание принципов REST API и GraphQL</li>
                <li>Знание Git и опыт работы в команде</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="vacancy-page__benefits">
          <h3>Что мы предлагаем</h3>
          <ul>
            <li>Конкурентная зарплата</li>
            <li>Медицинская страховка</li>
            <li>Гибкий график работы</li>
            <li>Возможность удаленной работы</li>
            <li>Обучение и развитие</li>
            <li>Корпоративные мероприятия</li>
          </ul>
        </div>
      </div>
    </main>
  );
}
