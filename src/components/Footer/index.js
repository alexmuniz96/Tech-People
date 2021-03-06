import styles from './styles.module.scss'
import { ReactComponent as LogoReduzido } from '../../svgs/logo-reduzido.svg'
import { ReactComponent as Facebook } from '../../svgs/facebook.svg'
import { ReactComponent as Twitter } from '../../svgs/twitter.svg'
import { ReactComponent as Instagram } from '../../svgs/instagram.svg'

export default function Footer() {

  return (
    <div className={styles.footerContainer}>
      <div className={styles.contentFooter}>
        <LogoReduzido fill='white' />
        <p>Iniciativa Pessoas de Tech <br />
          Todos os direitos reservados</p>
      </div>
      <div className={styles.social}>
        <a target='blank' href='https://facebook.com' className={styles.socialFace}> <Facebook /> </a>
        <a target='blank' href='https://twitter.com' className={styles.socialTwitter}>  <Twitter /> </a>
        <a target='blank' href='https://instagram.com' className={styles.socialInsta}> <Instagram /> </a>
      </div>
    </div>
  )
}