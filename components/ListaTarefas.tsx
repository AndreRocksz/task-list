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
    <section className="task-panel">
      <ContadorTarefas tarefas={tarefas} />

      <NovaTarefa onAdicionar={adicionarTarefa} />

      <div className="task-list-container">
        <div className="task-list-header">
          <h2 className="task-list-title">Suas tarefas</h2>
        </div>

        <ul className="task-list">
          {tarefas.map((tarefa) => (
            <li className="task" key={tarefa.id}>
              <span className="task-check" aria-hidden="true" />

              <span>{tarefa.titulo}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}