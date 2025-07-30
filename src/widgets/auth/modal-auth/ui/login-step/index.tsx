import React from 'react'

import { TRole, useAuthStore, useAuthStoreBase } from '@/features/auth/auth.store'
import { changeStepAuth } from '@/features/auth/change-step-auth'
import { PAGES_PATHS } from '@/shared/constants/pages-paths'
import { useAnimateOnScroll } from '@/shared/hooks/use-animate-on-scroll'
import { cls } from '@/shared/lib/cls'
import { onToggleModal } from '@/shared/lib/zustands/use-store-modals'
import { ButtonSubmitUI } from '@/shared/ui/button-submit-ui'
import { ButtonUI } from '@/shared/ui/button-ui'
import { InputPasswordUI } from '@/shared/ui/input-password-ui'
import { InputPhoneUI } from '@/shared/ui/input-phone-ui'
import { InputUI } from '@/shared/ui/input-ui'
import { TextareaUI } from '@/shared/ui/textarea-ui'
import Link from 'next/link'

export const LoginStep = () => {
  const { className, ref } = useAnimateOnScroll()

  const handleTestAuth = (type: TRole) => {
    useAuthStoreBase.getState().setIsAuthTest(true)
    useAuthStoreBase.getState().setRole(type)
    onToggleModal('auth', false)
  }

  return (
    <form ref={ref} className={cls(className, 'modal-auth__login-step fade-in ')}>
      <div className="modal-auth__inputs">
        <InputUI
          classNameWrapper="modal-auth__input input-bottom"
          label="Ваш логин"
          placeholder="Логин"
        />
        <InputPasswordUI
          classNameWrapper="modal-auth__input input-bottom"
          label="Ваш пароль"
          placeholder="Пароль"
        />
      </div>

      <ButtonSubmitUI className="modal-auth__button-action" hasArrow fullWidth>
        Продолжить
      </ButtonSubmitUI>
      <ButtonSubmitUI
        className="modal-auth__button-action"
        hasArrow
        fullWidth
        variant="secondary"
        onClick={() => changeStepAuth('registration')}
      >
        Заявка на регистрацию
      </ButtonSubmitUI>

      <ButtonSubmitUI
        className="modal-auth__button-action"
        hasArrow
        onClick={() => handleTestAuth('freelancer')}
        fullWidth
        type="button"
      >
        ТЕСТ ЛК ФРИЛАНСЕРА
      </ButtonSubmitUI>
      <ButtonSubmitUI
        className="modal-auth__button-action"
        hasArrow
        onClick={() => handleTestAuth('recruiter')}
        fullWidth
        type="button"
      >
        ТЕСТ ЛК РЕКРУТЕРА
      </ButtonSubmitUI>
      <p className="police-text">
        Продолжая, вы принимаете
        <Link href={PAGES_PATHS.POLICY}> политику конфиденциальности</Link>
      </p>
    </form>
  )
}
