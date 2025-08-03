import React from 'react'

import { PAGES_PATHS } from '@/shared/constants/pages-paths'
import { useAnimateOnScroll } from '@/shared/hooks/use-animate-on-scroll'
import { cls } from '@/shared/lib/cls'
import { onToggleModal } from '@/shared/lib/zustands/use-store-modals'
import { ButtonSubmitUI } from '@/shared/ui/button-submit-ui'
import { ButtonUI } from '@/shared/ui/button-ui'
import { InputPhoneUI } from '@/shared/ui/input-phone-ui'
import { InputUI } from '@/shared/ui/input-ui'
import { ModalToastUI } from '@/shared/ui/modal-toast-ui'
import { useModalToastStore } from '@/shared/ui/modal-toast-ui/modal-toast.store'
import { TextareaUI } from '@/shared/ui/textarea-ui'
import Link from 'next/link'

export const RegisterStep = () => {
  const { className, ref } = useAnimateOnScroll()

  const { showModalToast } = useModalToastStore()

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    showModalToast({
      isOpen: true,
      title: 'Спасибо! Скоро с вами свяжется наш менеджер для подтверждения регистрации',

      delay: 5000,
    })
    onToggleModal('auth', false)
  }

  return (
    <>
      <form
        ref={ref}
        className={cls(className, 'modal-auth__register-step fade-in ')}
        onSubmit={handleSubmit}
      >
        <p className="modal-auth__description subtitle">
          С вами свяжется менеджер для подтверждения регистрации
        </p>
        <div className="modal-auth__inputs">
          <InputUI
            classNameWrapper="modal-auth__input input-bottom"
            label="Имя"
            placeholder="Имя"
          />
          <InputUI
            classNameWrapper="modal-auth__input input-bottom"
            label="Фамилия"
            placeholder="Фамилия"
          />
          <InputPhoneUI classNameWrapper="modal-auth__input input-bottom" />
          <TextareaUI
            classNameWrapper="modal-auth__input  input-bottom"
            label="Комментарий"
            placeholder="Комментарий"
          />
        </div>

        <ButtonSubmitUI
          className="modal-auth__button-action"
          hasArrow
          fullWidth
          text="Продолжить"
        />
        <p className="police-text">
          Продолжая, вы принимаете
          <Link href={PAGES_PATHS.POLICY}> политику конфиденциальности</Link>
        </p>
      </form>
    </>
  )
}
