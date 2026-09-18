'use client'

import { useState } from 'react'
import type { Tarefa } from '@/data/tarefas'
import ContadorTarefas from '@/components/ContadorTarefas'
import NovaTarefa from '@/components/NovaTarefa'

interface ListaTarefasProps {
  tarefasIniciais: Tarefa[]
}

export default function ListaTarefas({
  tarefasIniciais,
}: ListaTarefasProps) {
  const [tarefas, setTarefas] = useState(tarefasIniciais)

  function adicionarTarefa(titulo: string) {
    const novaTarefa: Tarefa = {
      id: Date.now(),
      titulo,
    }

    setTarefas((tarefasAtuais) => [...tarefasAtuais, novaTarefa])
  }

  return (
    <>
      <ContadorTarefas tarefas={tarefas} />

      <NovaTarefa onAdicionar={adicionarTarefa} />

      <ul>
        {tarefas.map((tarefa) => (
          <li key={tarefa.id}>{tarefa.titulo}</li>
        ))}
      </ul>
    </>
  )
}