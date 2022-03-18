import styles from './styles.module.scss'

export default function Form() {
  return (
    <div className={styles.formContainer}>
      <header>
        <h2>Preparado para fazer parte da nossa iniciativa?</h2>
        <p>Preencha todos os campos para que possamos entrar em contato.</p>
      </header>

      <form action="post">
        <input type="text" id="nome" placeholder="Nome Completo" />
        <input type="email" id="email" placeholder="Email" />
        <input type="phone" id="phone" placeholder="Telefone Celular" />
      </form>
    </div>
  )
}