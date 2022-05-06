import styles from './styles.scss'

export default function DarkMode() {
  let clickedClass = 'clicked'
  const body = document.body
  const lightTheme = 'light'
  const darkTheme = 'dark'
  let theme

  if (localStorage) {
    theme = localStorage.getItem('theme')
  }

  if (theme == lightTheme || theme === darkTheme) {
    body.classList.add(theme)
  } else {
    body.classList.add(lightTheme)
  }

  function switchTheme(e) {
    if (theme === darkTheme) {
      body.classList.replace(darkTheme, lightTheme)
      e.target.classList.remove(clickedClass)
      localStorage.setItem('thme', 'light')
      theme = lightTheme
    } else {
      body.classList.replace(lightTheme, darkTheme)
      e.target.classList.add(clickedClass)
      localStorage.setItem('thme', 'dark')
      theme = darkTheme
    }
  }

  return (
    <button
      className={theme === 'dark' ? clickedClass : ''}
      id='darkMode'
      onClick={(e) => switchTheme(e)}
    >
    </button>
  )
}