'use client'

import React, { useState } from 'react'

import { ListVacancies } from '@/entity/vacancy/ui/list-vacancies'
import { PaginationMock, mockFilters, mockVacancies } from '@/shared/constants/mock-data'
import { cls } from '@/shared/lib/cls'
import { useInitialModal } from '@/shared/lib/zustands/use-initial-modal'
import { onToggleModal } from '@/shared/lib/zustands/use-store-modals'
import { AccordionFilterUI } from '@/shared/ui/accordion-filter-ui'
import { AccordionUI } from '@/shared/ui/accordion-ui'
import { ButtonFiltersUI } from '@/shared/ui/button-filters-ui'
import { ButtonUI } from '@/shared/ui/button-ui'
import { CheckboxUI } from '@/shared/ui/checkbox-ui'
import { FilterSideBarUI } from '@/shared/ui/filter-side-bar-ui'
import { PaginationUI } from '@/shared/ui/pagination-ui'
import { ButtonSearchUI } from '@/shared/ui/search-ui-kit/button-search-ui'
import { LabelSearchUI } from '@/shared/ui/search-ui-kit/label-search-ui'
import { QuickFiltersUI } from '@/shared/ui/search-ui-kit/quick-filters-ui'
import { SearchBoxUI } from '@/shared/ui/search-ui-kit/search-box-ui'
import { TotalResultsUI } from '@/shared/ui/search-ui-kit/total-results-ui'
import { ISelectOption, SelectUI } from '@/shared/ui/select-ui'
import ArrowIcon from '@/source/icons/arrow2.svg'

export const SearchVacancies = ({
  withQuickFilters = true,
  withHead = true,
  className,
  withApplyFilters = true,
}: {
  withQuickFilters?: boolean
  withApplyFilters?: boolean
  withHead?: boolean
  className?: string
}) => {
  const [isActiveFilters, setIsActiveFilters] = useState<ISelectOption[]>([])

  const handleChangeFilter = (label: string, values: ISelectOption) => {
    const filterSelected = isActiveFilters.findIndex((f) => f.label === label)
    if (filterSelected !== -1) {
      const newFilters = [...isActiveFilters]
      newFilters[filterSelected] = {
        label,
        options: values.options,
        type: values.type,
      }
      setIsActiveFilters(newFilters)
    } else {
      setIsActiveFilters([
        ...(isActiveFilters || []),
        {
          label,
          options: values.options,
          type: values.type,
        },
      ])
    }
    console.log(isActiveFilters)
  }

  const modalFilter = useInitialModal('filter', undefined, false, ['.btn__filter'])

  return (
    <div className={cls('search-vacancies', className)}>
      <SearchBoxUI
        className="search-vacancies__box"
        placeholder="Поиск по названию вакансии, навыкам, ключевым словам"
        renderQuickFilters={
          withQuickFilters && (
            <QuickFiltersUI
              filters={mockFilters.map((filter) => (
                <SelectUI
                  key={filter.label}
                  value={filter}
                  activeValue={isActiveFilters.find((f) => f.label === filter.label)?.options || []}
                  onChange={handleChangeFilter}
                  label={filter.label}
                />
              ))}
              renderActions={
                <>
                  <ButtonUI hasArrow text="Применить фильтры" />
                  <button className="filter__reset-filters">Сбросить</button>
                </>
              }
            />
          )
        }
        renderActions={
          <>
            <ButtonSearchUI />
            <ButtonFiltersUI handleOpenFilters={modalFilter.handleOpenModal} />
          </>
        }
      />
      {withHead && (
        <div className="profile__vacancies-head">
          <LabelSearchUI />
          <TotalResultsUI />
        </div>
      )}

      <ListVacancies vacancies={mockVacancies} />
      <PaginationMock />
      <div style={{ overflow: modalFilter.isOpenModal ? 'auto' : 'hidden' }}>
        <FilterSideBarUI
          isOpen={modalFilter.isOpenModal}
          rootRef={modalFilter.ref}
          renderResetFilters={<button className="filter__reset-filters">Сбросить</button>}
          renderFilters={mockFilters.map((filter) => (
            <AccordionFilterUI
              key={filter.label}
              filter={filter}
              activeValue={isActiveFilters.find((f) => f.label === filter.label)?.options || []}
              onChange={handleChangeFilter}
              renderReset={<button className="filter__reset-filters">Сбросить</button>}
            />
          ))}
          renderApplyFilters={
            withApplyFilters && (
              <ButtonUI className="filter__side-bar__apply" text="Применить фильтры" />
            )
          }
          onCloseFilter={modalFilter.handleCloseModal}
        />
      </div>
    </div>
  )
}
