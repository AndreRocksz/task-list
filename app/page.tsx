import ListaTarefas from '@/components/ListaTarefas'
import { buscarTarefas } from '@/data/tarefas'

export default async function Home() {
  const tarefas = await buscarTarefas()

  return (
    <main>
      <h1>Lista de Tarefas</h1>

      <ListaTarefas tarefasIniciais={tarefas} />
    </main>
  )
}