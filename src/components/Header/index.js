import './styles.scss'
import { ReactComponent as Logo } from '../../svgs/tech-people.svg'
import { useState } from 'react'

export default function Header() {

  const [headerChange, setHeaderChange] = useState(false)
  const [isNavVisible, setNavVisible] = useState(false)

  function handleNav() {
    setNavVisible(!isNavVisible)
  }

  function changeHeader() {
    if (window.scrollY >= 50) {
      setHeaderChange(true)
    } else {
      setHeaderChange(false)
    }
  };

  window.addEventListener('scroll', changeHeader);

  return (

    <header
      className={headerChange ? 'headerScrollActive' : ''}
    >
      <div>
        <div className='logoContainer'>
          <Logo className='logo' fill={headerChange ? 'white' : 'black'} />

          <button onClick={handleNav}>
            <span className='hamburguer'> Menu </span>
          </button>
        </div>

        <nav className={isNavVisible ? 'active' : ''} >
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