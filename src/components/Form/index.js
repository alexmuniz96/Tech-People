import { api } from '../../services/api'
import styles from './styles.module.scss'
import { ReactComponent as ArrowRight } from '../../svgs/arrow-right.svg'
import { useState } from 'react'


export default function Form() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: ''
  })

  const [errorStyle, setErrorStyle] = useState('')
  const [loading, setLoading] = useState(false)
  const [formSucess, setFormSucess] = useState(false)

  function validateCep(cep) {
    if (cep === 0) {
      setErrorStyle('inputError')
      return false
    } else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(cep)) {
      setErrorStyle('inputError')
      return false
    } else {
      setErrorStyle('')
      return true
    }
  }

  function handleBlur({ target }) {
    validateCep(target.value)
  }

  function handleChange({ target }) {
    const { id, value } = target
    setForm({ ...form, [id]: value })
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setLoading(true)
    await api.post('/form', form)
    setLoading(false)
    setFormSucess(true)
  }

  function handleCloseForm(e) {
    e.preventDefault()
    setFormSucess(false)
    setForm('')
  }

  return (
    <div className={styles.formContainer}>
      <div className={styles.formTitle}>
        <h2>Preparado para fazer parte da nossa iniciativa?</h2>
        <p>Preencha todos os campos para que possamos entrar em contato.</p>
      </div>

      {loading && <div className={styles.loadingContainer}>
        <div className={styles.loading}></div>
        <p>Carregando...</p>
      </div>}

      {!loading && !formSucess &&
        < form onSubmit={handleSubmit}>
          <input
            required
            type="text"
            id="name"
            value={form.name}
            placeholder="Nome Completo"
            onChange={handleChange}
          />
          <input
            required
            className={errorStyle}
            type="email"
            id="email"
            value={form.email}
            placeholder="Email"
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <input
            required
            type="phone"
            id="phone"
            value={form.phone}
            placeholder="(99) 99999 9999"
            onChange={handleChange}
          />
          <button> Cadastre-se <ArrowRight /></button>
        </form>
      }

      {
        !loading && formSucess &&
        <div className={styles.formSucessContainer}>
          <h3>Sucesso!</h3>
          <p>Logo iremos responder o seu contato.</p>
          <button onClick={handleCloseForm}>fechar</button>
        </div>
      }

    </div >
  )
}