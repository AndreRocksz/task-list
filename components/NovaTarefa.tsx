'use client'

import { FormEvent, useState } from 'react'

interface NovaTarefaProps {
  onAdicionar: (titulo: string) => void
}

export default function NovaTarefa({ onAdicionar }: NovaTarefaProps) {
  const [titulo, setTitulo] = useState('')
  const [erro, setErro] = useState('')

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const tituloFormatado = titulo.trim()

    if (!tituloFormatado) {
      setErro('Digite uma tarefa.')
      return
    }

    onAdicionar(tituloFormatado)
    setTitulo('')
    setErro('')
  }

  return (
    <section className="form-section">
      <h2 className="form-title">Adicionar nova tarefa</h2>

      <form className="form" onSubmit={handleSubmit}>
        <div className="input-wrapper">
          <label htmlFor="nova-tarefa" className="sr-only">
            Nova tarefa
          </label>

          <input
            className="input"
            id="nova-tarefa"
            type="text"
            value={titulo}
            onChange={(event) => setTitulo(event.target.value)}
            placeholder="Digite uma tarefa"
          />
        </div>

        <button className="button" type="submit">
          Adicionar
        </button>
      </form>

      {erro && <p className="error">{erro}</p>}
    </section>
  )
}