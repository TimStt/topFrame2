import React from 'react'

import '@/styles/home-page.scss'

interface ZeroHeroProps {
  className?: string
  children?: React.ReactNode
}

export const ZeroHero: React.FC<ZeroHeroProps> = ({ className = '', children }) => {
  return (
    <section className={`zero-hero ${className}`}>
      {children && <div className="zero-hero__content">{children}</div>}
    </section>
  )
}

export default ZeroHero
