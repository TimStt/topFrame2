import React from 'react'

import '@/styles/index.scss'
import { Button } from '@shared/ui'

// Простые иконки для демонстрации
const ArrowIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path
      d="M6 12L10 8L6 4"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

const PlusIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path d="M8 2V14M2 8H14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
)

export default function Page() {
  const handleClick = (buttonType: string) => {
    console.log(`Clicked ${buttonType} button`)
  }

  return (
    <main style={{ padding: '40px', maxWidth: '1200px', margin: '0 auto' }}>
      <h1 style={{ marginBottom: '40px', color: 'var(--dark)' }}>Демонстрация компонента Button</h1>

      {/* Варианты стилей */}
      <section style={{ marginBottom: '40px' }}>
        <h2 style={{ marginBottom: '20px', color: 'var(--dark)' }}>Варианты стилей</h2>
        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
          <Button variant="primary" onClick={() => handleClick('primary')}>
            Primary Button
          </Button>
          <Button variant="secondary" onClick={() => handleClick('secondary')}>
            Secondary Button
          </Button>
          <Button variant="outline" onClick={() => handleClick('outline')}>
            Outline Button
          </Button>
          <Button variant="success" onClick={() => handleClick('success')}>
            Success Button
          </Button>
          <Button variant="ghost" onClick={() => handleClick('ghost')}>
            Ghost Button
          </Button>
          <Button variant="light" onClick={() => handleClick('light')}>
            Light Button
          </Button>
        </div>
      </section>

      {/* Размеры */}
      <section style={{ marginBottom: '40px' }}>
        <h2 style={{ marginBottom: '20px', color: 'var(--dark)' }}>Размеры</h2>
        <div style={{ display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap' }}>
          <Button size="small" onClick={() => handleClick('small')}>
            Small Button
          </Button>
          <Button size="medium" onClick={() => handleClick('medium')}>
            Medium Button
          </Button>
          <Button size="large" onClick={() => handleClick('large')}>
            Large Button
          </Button>
        </div>
      </section>

      {/* С иконками */}
      <section style={{ marginBottom: '40px' }}>
        <h2 style={{ marginBottom: '20px', color: 'var(--dark)' }}>С иконками</h2>
        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
          <Button leftIcon={<PlusIcon />} onClick={() => handleClick('left-icon')}>
            Добавить
          </Button>
          <Button rightIcon={<ArrowIcon />} onClick={() => handleClick('right-icon')}>
            Подробнее
          </Button>
          <Button
            variant="secondary"
            leftIcon={<PlusIcon />}
            rightIcon={<ArrowIcon />}
            onClick={() => handleClick('both-icons')}
          >
            Присоединиться к компании
          </Button>
        </div>
      </section>

      {/* Состояния */}
      <section style={{ marginBottom: '40px' }}>
        <h2 style={{ marginBottom: '20px', color: 'var(--dark)' }}>Состояния</h2>
        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
          <Button loading onClick={() => handleClick('loading')}>
            Loading Button
          </Button>
          <Button disabled onClick={() => handleClick('disabled')}>
            Disabled Button
          </Button>
          <Button variant="outline" loading onClick={() => handleClick('outline-loading')}>
            Показать ещё
          </Button>
        </div>
      </section>

      {/* Полная ширина */}
      <section style={{ marginBottom: '40px' }}>
        <h2 style={{ marginBottom: '20px', color: 'var(--dark)' }}>Полная ширина</h2>
        <Button
          fullWidth
          size="large"
          rightIcon={<ArrowIcon />}
          onClick={() => handleClick('full-width')}
        >
          Присоединиться к компании
        </Button>
      </section>

      {/* Примеры из дизайна */}
      <section>
        <h2 style={{ marginBottom: '20px', color: 'var(--dark)' }}>Примеры из дизайна</h2>
        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
          <Button
            variant="secondary"
            rightIcon={<ArrowIcon />}
            onClick={() => handleClick('design-1')}
          >
            Подробнее
          </Button>
          <Button
            variant="primary"
            rightIcon={<ArrowIcon />}
            onClick={() => handleClick('design-2')}
          >
            Присоединиться к компании
          </Button>
          <Button
            variant="primary"
            rightIcon={<ArrowIcon />}
            onClick={() => handleClick('design-3')}
          >
            Показать ещё
          </Button>
        </div>
      </section>
    </main>
  )
}
