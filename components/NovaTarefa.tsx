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
    <form onSubmit={handleSubmit}>
      <label htmlFor="nova-tarefa">Nova tarefa</label>

      <input
        id="nova-tarefa"
        type="text"
        value={titulo}
        onChange={(event) => setTitulo(event.target.value)}
        placeholder="Digite uma tarefa"
      />

      <button type="submit">Adicionar</button>

      {erro && <p>{erro}</p>}
    </form>
  )
}