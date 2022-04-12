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
    if (window.scrollY >= 50 & window.innerWidth > 768) {
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

          <button className={isNavVisible ? 'active' : ''} onClick={handleNav}>
            <span className='hamburguer'> </span>
          </button>
        </div>

        <nav className={isNavVisible ? 'active' : ''} >
          <ul>
            <li><a href="#banner">Home</a> </li>
            <li><a href="#features">Compromisso</a> </li>
            <li><a href="#news">Notícias</a></li>
            <li><a href="#schedule">Agenda</a></li>
          </ul>
        </nav>

      </div>

    </header>

  )
}