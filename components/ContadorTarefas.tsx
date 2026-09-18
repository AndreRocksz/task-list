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

  return <p>Total de tarefas: {quantidade}</p>
}