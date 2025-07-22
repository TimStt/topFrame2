import React, { Ref } from 'react'

import { cls } from '@/shared/lib/cls'

import { ButtonFiltersUI } from '../button-filters-ui'
import { ButtonCloseUI } from '../modal-ui/button-close-ui'

export const FilterSideBarUI = ({
  renderResetFilters,
  renderFilters,
  isOpen,
  onCloseFilter,
  rootRef,
  renderApplyFilters,
}: {
  renderResetFilters: React.ReactNode

  renderFilters: React.ReactNode
  onCloseFilter: () => void
  rootRef?: Ref<HTMLDivElement>
  renderApplyFilters?: React.ReactNode
  isOpen: boolean
}) => {
  return (
    <>
      <aside className={cls('filter__side-bar', isOpen && 'is-open')} ref={rootRef}>
        <div className="filter__side-bar__inner">
          <ButtonCloseUI onClick={onCloseFilter} />
          <div className="filter__side-bar__head">
            <span className="filter__side-bar__title">Фильтры</span>
            {renderResetFilters}
          </div>
          <div className="filter__side-bar__content">{renderFilters}</div>
          {renderApplyFilters}
        </div>
      </aside>
    </>
  )
}
