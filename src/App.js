import Header from './components/Header'
import News from './components/News'
import Schedule from './components/Schedule'

import girlStudent from './images/garota-estudante-sorrindo.png'

import { ReactComponent as ArrowDown } from './svgs/arrow-down.svg'
import { ReactComponent as Star } from './svgs/star.svg'
import { ReactComponent as School } from './svgs/school.svg'
import { ReactComponent as PlaylistCheck } from './svgs/playlist_check.svg'
import { ReactComponent as Toys } from './svgs/toys.svg'
import { ReactComponent as TimerOff } from './svgs/timer_off.svg'
import { ReactComponent as Work } from './svgs/work.svg'
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

        <section className='features'>
          <div className='backgroundHeader'>
            <header>
              <h2> Nosso compromisso</h2>
              <p>Temos um compromisso de fazer desafios e gerar avaliações precisas para que você saiba o quanto está evoluíndo. Acreditamos que você merece uma avaliação justa e precisa do seu processo.</p>
            </header>
          </div>

          <div className='cardContainer'>
            <div className='card'>
              <span className='star'> <Star /> </span>
              <h3>Avaliar positivamente</h3>
              <p>Entendemos que você está aprendendo. A gente também passou por esta fase, e sabemos que as coisas mudam muito rápido.</p>
            </div>
            <div className='card'>
              <span className='playlistSchool'> <School /></span>
              <h3>Apoio pós-desafio</h3>
              <p>Você saberá como está evoluindo, e nós aprendemos a deixar o nosso processo avaliativo mais seguro e de confiança.</p>
            </div>
            <div className='card'>
              <span className='playlistCheck'> <PlaylistCheck /> </span>
              <h3>Avaliar o que faz sentido</h3>
              <p>Nada de algoritmo de número primo ou de árvore binária. Nossos desafios se basearam no que você irá realmente trabalhar no futuro.</p>
            </div>
            <div className='card'>
              <span className='toys'> <Toys /> </span>
              <h3>Avaliar positivamente</h3>
              <p>Entendemos que você está aprendendo. A gente também passou por esta fase, e sabemos que as coisas mudam muito rápido.</p>
            </div>
            <div className='card'>
              <span className='timerOff'> <TimerOff /></span>
              <h3>Apoio pós-desafio</h3>
              <p>Você saberá como está evoluindo, e nós aprendemos a deixar o nosso processo avaliativo mais seguro e de confiança.</p>
            </div>
            <div className='card'>
              <span className='work'> <Work /> </span>
              <h3>Avaliar o que faz sentido</h3>
              <p>Nada de algoritmo de número primo ou de árvore binária. Nossos desafios se basearam no que você irá realmente trabalhar no futuro.</p>
            </div>
          </div>
        </section>

        <section className='news'>
          <News />
        </section>

        <section className='schedule'>
          <Schedule />
        </section>

      </main>
    </>
  );
}

export default App;
