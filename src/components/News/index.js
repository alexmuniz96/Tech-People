import newsOne from '../../images/news-1.png'
import newsTwo from '../../images/news-2.png'
import newsThree from '../../images/news-3.png'
import { ReactComponent as Calendar } from '../../svgs/calendar.svg'

import styles from './styles.module.scss'

export default function News() {

  return (
    <div className={styles.newsContainer}>
      <div className={styles.newsTitle}>
        <h2>Noticías</h2>
        <p>Listamos abaixo algumas notícias de tecnologia que nos motivam a estar ativos  diariamente neste nosso projeto.</p>
      </div>

      <div className={styles.containerNews}>

        <div className={styles.cardNews}>
          <img src={newsOne} />
          <time> <Calendar /> 17 Abr 2020</time>
          <p>Participe da nossa Live sobre React e testes TDD</p>
        </div>

        <div className={styles.cardNews}>
          <img src={newsTwo} />
          <time> <Calendar /> 17 Abr 2020</time>
          <p>Participe da nossa live de Nuxt para a Turing</p>
        </div>

        <div className={styles.cardNews}>
          <img src={newsThree} />
          <time> <Calendar /> 17 Abr 2020</time>
          <p>Como apoiar uma desenvolvedora em início de carreira?</p>
        </div>
      </div>
    </div>
  )
}