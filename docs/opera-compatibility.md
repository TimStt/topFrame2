# Совместимость с браузером Opera

## Проблемы и решения

### 1. Автовоспроизведение видео

**Проблема**: Opera блокирует автоматическое воспроизведение видео по hover.

**Решение**:

- Добавлена проверка браузера Opera
- Для Opera требуется клик пользователя для первого воспроизведения
- После первого клика автовоспроизведение становится доступным

### 2. Обновленная логика воспроизведения

**Изменения в `useVideo` хуке**:

- Добавлена функция `isOpera()` для определения браузера
- Проверка политик автовоспроизведения
- Таймаут загрузки 5 секунд для Opera
- Специальная обработка ошибок для Opera
- Метод `handleForcePlay()` для принудительного запуска

**Изменения в компоненте `TeamMemberCard`**:

- Отключен hover для автовоспроизведения в Opera
- Требуется клик для запуска видео
- Показ подсказки "Нажмите для воспроизведения"
- Улучшенная обработка ошибок

### 3. CSS улучшения для Opera

**Добавлены стили**:

- `.opera-browser` класс для специфичных стилей
- Улучшенная видимость кнопки воспроизведения
- Анимация подсказки `pulse`
- Лучшие стили для сообщений об ошибках

### 4. Рекомендации для тестирования

1. **Откройте страницу в Opera**
2. **Наведите на карточку команды** - видео не должно запускаться автоматически
3. **Кликните на карточку или кнопку** - видео должно начать воспроизведение
4. **После первого клика** - hover должен работать нормально

### 5. Дополнительные улучшения

- Используется `preload="metadata"` для Opera (экономия трафика)
- Отключены нативные контролы видео в Opera для избежания конфликтов
- Добавлены события `onWaiting` и `onTimeUpdate` для лучшего UX

## Диагностика проблем

Если видео не работает в Opera, проверьте консоль на наличие сообщений:

- `"Opera: автовоспроизведение отключено для совместимости"`
- `"Opera: Автоматическое воспроизведение заблокировано"`
- `"Opera: Воспроизведение прервано браузером"`

Эти сообщения помогут понять причину проблемы.
