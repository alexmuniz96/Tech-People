import { Pagination } from 'swiper'

import { Swiper, SwiperSlide } from 'swiper/react';
import styles from './styles.module.scss'
import 'swiper/scss';
import 'swiper/scss/pagination';

import { ReactComponent as ArrowRight } from '../../svgs/arrow-right.svg'
import { ReactComponent as Time } from '../../svgs/time.svg'

export default function Schedule() {
  return (
    <>
      <div className={styles.titleSchedule}>
        <h2>Anota ai na nossa agenda</h2>
        <p>
          Temos um monte de eventos que estamos criando no nosso servidor. Fique de olho que sempre tem coisa boa!
        </p>
      </div>

      <div className={styles.containerSchedule}>

        <Swiper className={styles.containerSwiper}
          modules={[Pagination]}
          pagination={{
            el: '.swiper-pagination',
            clickable: true,
            renderBullet: (index, className) => {
              return '<span class="' + className + ' ">' + "</span>";
            },
          }}
          spaceBetween={50}
          slidesPerView={2}
          breakpoints={{
            300: {
              slidesPerView: 1,
            },
            400: {
              slidesPerView: 1,
            },
            600: {
              slidesPerView: 1,
            },
            800: {
              sliderPerView: 2,
            },
          }}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide className={styles.cardSchedule}>
            <div className={styles.containerDate}>
              <div className={styles.date}>
                <span> 20 </span>
                <span>Jan</span>
              </div>
              <h3>Live: Iniciando com Nuxt por Mateus Ávila Isidoro</h3>
            </div>
            <p>
              Maiores voluptas laboriosam non dolorum perferendis fuga repellat aut. Blanditiis quos in minus. Voluptatum quia quia voluptas voluptatem vero ex possimus. Iure et consectetur
            </p>
            <div className={styles.containerButton}>
              <button>Participar  <ArrowRight /> </button>
              <time> <Time /> 19:00 - 22:00  </time>
            </div>
          </SwiperSlide>

          <SwiperSlide className={styles.cardSchedule}>
            <div className={styles.containerDate}>
              <div className={styles.date}>
                <span> 20 </span>
                <span>Jan</span>
              </div>
              <h3>Live: Iniciando com Nuxt por Mateus Ávila Isidoro</h3>
            </div>
            <p>
              Maiores voluptas laboriosam non dolorum perferendis fuga repellat aut. Blanditiis quos in minus. Voluptatum quia quia voluptas voluptatem vero ex possimus. Iure et consectetur
            </p>
            <div className={styles.containerButton}>
              <button>Participar  <ArrowRight /> </button>
              <time> <Time /> 19:00 - 22:00  </time>
            </div>
          </SwiperSlide>

          <SwiperSlide className={styles.cardSchedule}>
            <div className={styles.containerDate}>
              <div className={styles.date}>
                <span> 20 </span>
                <span>Jan</span>
              </div>
              <h3>Live: Iniciando com Nuxt por Mateus Ávila Isidoro</h3>
            </div>
            <p>
              Maiores voluptas laboriosam non dolorum perferendis fuga repellat aut. Blanditiis quos in minus. Voluptatum quia quia voluptas voluptatem vero ex possimus. Iure et consectetur
            </p>
            <div className={styles.containerButton}>
              <button>Participar  <ArrowRight /> </button>
              <time> <Time /> 19:00 - 22:00  </time>
            </div>
          </SwiperSlide>

          <SwiperSlide className={styles.cardSchedule}>
            <div className={styles.containerDate}>
              <div className={styles.date}>
                <span> 20 </span>
                <span>Jan</span>
              </div>
              <h3>Live: Iniciando com Nuxt por Mateus Ávila Isidoro</h3>
            </div>
            <p>
              Maiores voluptas laboriosam non dolorum perferendis fuga repellat aut. Blanditiis quos in minus. Voluptatum quia quia voluptas voluptatem vero ex possimus. Iure et consectetur
            </p>
            <div className={styles.containerButton}>
              <button>Participar  <ArrowRight /> </button>
              <time> <Time /> 19:00 - 22:00  </time>
            </div>
          </SwiperSlide>

          <div className={styles.containerPagination}>
            <div
              class="swiper-pagination"
            />
          </div>

        </Swiper>

      </div >
    </>
  )
}