import { Autoplay, Navigation } from 'swiper/modules'
import { SwiperOptions } from 'swiper/types'

export const sliderConfig: SwiperOptions = {
  spaceBetween: 20,
  slidesPerView: 4,
  modules: [Navigation, Autoplay],
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
      centeredSlides: true,
    },
    500: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    700: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    1280: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
  },
}
