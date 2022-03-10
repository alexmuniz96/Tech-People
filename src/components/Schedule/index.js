import { Pagination } from 'swiper'

import { Swiper, SwiperSlide } from 'swiper/react';
import styles from './styles.scss'
import 'swiper/scss';
import 'swiper/scss/pagination';

import { ReactComponent as ArrowRight } from '../../svgs/arrow-right.svg'
import { ReactComponent as Time } from '../../svgs/time.svg'

export default function Schedule() {
  return (
    <>
      <header>
        <h2>Anota ai na nossa agenda</h2>
        <p>
          Temos um monte de eventos que estamos criando no nosso servidor. Fique de olho que sempre <br /> tem coisa boa!
        </p>
      </header>

      <div className="containerSchedule">

        <Swiper
          modules={[Pagination]}
          pagination={{
            el: '.my-custom-pagination-div',
            clickable: true,
            renderBullet: (className) => {
              return '<span class="' + className + '">' + "</span>";
            },
          }}
          spaceBetween={50}
          slidesPerView={2}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>
            <div className="cardSchedule">
              <div>
                <div className='date'>
                  <span> 20 </span>
                  <span>Jan</span>
                </div>
                <h3>Live: Iniciando com Nuxt por Mateus Ávila Isidoro</h3>
              </div>
              <p>
                Maiores voluptas laboriosam non dolorum perferendis fuga repellat aut. Blanditiis quos in minus. Voluptatum quia quia voluptas voluptatem vero ex possimus. Iure et consectetur
              </p>
              <div className='containerButton'>
                <button>Participar  <ArrowRight /> </button>
                <time> <Time /> 19:00 - 22:00  </time>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="cardSchedule">
              <div>
                <div className='date'>
                  <span> 20 </span>
                  <span>Jan</span>
                </div>
                <h3>Live: Iniciando com Nuxt por Mateus Ávila Isidoro</h3>
              </div>
              <p>
                Maiores voluptas laboriosam non dolorum perferendis fuga repellat aut. Blanditiis quos in minus. Voluptatum quia quia voluptas voluptatem vero ex possimus. Iure et consectetur
              </p>
              <div className='containerButton'>
                <button>Participar  <ArrowRight /> </button>
                <time> <Time /> 19:00 - 22:00  </time>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="cardSchedule">
              <div>
                <div className='date'>
                  <span> 20 </span>
                  <span>Jan</span>
                </div>
                <h3>Live: Iniciando com Nuxt por Mateus Ávila Isidoro</h3>
              </div>
              <p>
                Maiores voluptas laboriosam non dolorum perferendis fuga repellat aut. Blanditiis quos in minus. Voluptatum quia quia voluptas voluptatem vero ex possimus. Iure et consectetur
              </p>
              <div className='containerButton'>
                <button>Participar  <ArrowRight /> </button>
                <time> <Time /> 19:00 - 22:00  </time>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="cardSchedule">
              <div>
                <div className='date'>
                  <span> 20 </span>
                  <span>Jan</span>
                </div>
                <h3>Live: Iniciando com Nuxt por Mateus Ávila Isidoro</h3>
              </div>
              <p>
                Maiores voluptas laboriosam non dolorum perferendis fuga repellat aut. Blanditiis quos in minus. Voluptatum quia quia voluptas voluptatem vero ex possimus. Iure et consectetur
              </p>
              <div className='containerButton'>
                <button>Participar  <ArrowRight /> </button>
                <time> <Time /> 19:00 - 22:00  </time>
              </div>
            </div>
          </SwiperSlide>
          <div class="my-custom-pagination-div" />
        </Swiper>




      </div>
    </>
  )
}