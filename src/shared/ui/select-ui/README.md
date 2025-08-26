# Select UI Components

В этой папке находятся два компонента Select:

## SelectUI (Оригинальный)

- Кастомная реализация select компонента
- Файл: `index.tsx`
- Стили: `styles/components/select.scss`

## SelectUI_RS (React Select)

- Реализация на базе библиотеки react-select
- Файл: `react-select.tsx`
- Стили: `react-select-styles.ts` (объект стилей)
- Экспорт: `react-select-index.tsx`

## API Совместимость

Оба компонента имеют одинаковый API:

```typescript
interface ISelect {
  value: ISelectOption;
  activeValue: ISelectOptions[];
  type: "checkbox" | "radio";
  onChange?: (name: string, value: ISelectOption) => void;
  placeholder?: string;
  disabled?: boolean;
  className?: string;
  label?: string;
  error?: string;
  fullWidth?: boolean;
}
```

## Миграция

Для перехода с SelectUI на SelectUI_RS достаточно изменить импорт:

```typescript
// Было
import { SelectUI } from "@/shared/ui/select-ui";

// Стало
import { SelectUI_RS as SelectUI } from "@/shared/ui/select-ui/react-select-index";
```

## Особенности React Select версии

1. **Лучшая производительность** - оптимизированная библиотека
2. **Встроенная доступность** - полная поддержка ARIA
3. **Кастомные стили** - полностью совместимы с дизайн-системой
4. **Дополнительные возможности**:
   - Поиск по опциям
   - Виртуализация больших списков
   - Кастомные индикаторы
   - Группировка опций

## Стилизация

React Select использует объект `styles` для кастомизации. Стили вынесены в отдельный файл `react-select-styles.ts` для лучшей организации кода. Все стили адаптированы под существующий дизайн:

- Скругленные углы (50px)
- Цветовая схема из CSS переменных
- Анимации и переходы
- Responsive дизайн
- Кастомные скроллбары

### Кастомизация стилей

```typescript
import { reactSelectStyles } from '@/shared/ui/select-ui/react-select-index';

// Можно переопределить отдельные стили
const customStyles = {
  ...reactSelectStyles,
  control: (provided, state) => ({
    ...reactSelectStyles.control(provided, state),
    borderColor: 'red', // кастомный цвет границы
  }),
};
```

## Использование

```typescript
import { SelectUI_RS } from '@/shared/ui/select-ui/react-select-index';

const MyComponent = () => {
  const [selectedValue, setSelectedValue] = useState<ISelectOption>({
    options: [],
    name: 'filter',
    label: 'Фильтр'
  });

  const handleChange = (name: string, value: ISelectOption) => {
    setSelectedValue(value);
  };

  return (
    <SelectUI_RS
      value={selectedValue}
      activeValue={selectedValue.options}
      onChange={handleChange}
      type="checkbox"
      label="Выберите опции"
      placeholder="Начните вводить..."
    />
  );
};
```
