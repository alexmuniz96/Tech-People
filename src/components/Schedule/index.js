import styles from './styles.scss'

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

        <div className="cardSchedule">
          <div>
            <div>
              <span> 20 </span>
              <span>Jan</span>
            </div>
            <h3>Live: Iniciando com Nuxt por Mateus Ávila Isidoro</h3>
          </div>
          <p>
            Maiores voluptas laboriosam non dolorum perferendis fuga repellat aut. Blanditiis quos in minus. Voluptatum quia quia voluptas voluptatem vero ex possimus. Iure et consectetur
          </p>
          <div>
            <button>Participar - icon</button>
            <time> 19:00 - 22:00 </time>
          </div>
        </div>

        <div className="cardSchedule">
          <div>
            <span> 20 Jan</span>
            <h3>Live: Iniciando com Nuxt por Mateus Ávila Isidoro</h3>
          </div>
          <p>
            Maiores voluptas laboriosam non dolorum perferendis fuga repellat aut. Blanditiis quos in minus. Voluptatum quia quia voluptas voluptatem vero ex possimus. Iure et consectetur
          </p>
          <button>Participar - icon</button>
          <time> 19:00 - 22:00 </time>
        </div>

      </div>
    </>
  )
}