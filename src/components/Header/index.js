import './styles.scss'
import { ReactComponent as Logo } from '../../svgs/tech-people.svg'

export default function Header() {
  return (

    <header >
      <div>
        <Logo className='logo' width={232} height={75} />
        <nav>
          <ul>
            <li><a>Home</a> </li>
            <li><a>Compromisso</a> </li>
            <li><a>Notícias</a></li>
            <li><a>Agenda</a></li>
          </ul>
        </nav>
      </div>
    </header>

  )
}