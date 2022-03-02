import Header from './components/Header'
import { ReactComponent as ArrowDown } from './svgs/arrow-down.svg'
import girlStudent from './images/garota-estudante-sorrindo.png'
import './style/global.scss'

function App() {
  return (
    <>
      <Header />
      <main>
        <section className='banner'>
          <div className='content'>
            <h1>Somos um servidor <span>focado em transição de </span> carreira</h1>
            <p>Temos desafios, lives, eventos, tiramos dúvidas e até achamos uma colocação para você. Quer fazer parte? Clique no botão abaixo:</p>
            <button>Participar <span> <ArrowDown fill='#37474F' />  </span></button>

          </div>
          <div className='imagesBanner'>
            <img src={girlStudent} alt='garota estudante sorrindo' />
            <div className='ball-purple'></div>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
