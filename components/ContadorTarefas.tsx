'use client'

import { useContadorDeTarefas } from '@/hooks/useContadorDeTarefas'
import type { Tarefa } from '@/data/tarefas'

interface ContadorTarefasProps {
  tarefas: Tarefa[]
}

export default function ContadorTarefas({
  tarefas,
}: ContadorTarefasProps) {
  const quantidade = useContadorDeTarefas(tarefas)

  return (
    <div className="counter">
      <div className="counter-info">
        <span className="counter-label">Tarefas cadastradas</span>
        <strong>{quantidade}</strong>
      </div>

      <div className="counter-badge">{quantidade}</div>

      <span className="counter-test-text">
        Total de tarefas: {quantidade}
      </span>
    </div>
  )
}