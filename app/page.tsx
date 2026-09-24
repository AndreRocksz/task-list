import ListaTarefas from '@/components/ListaTarefas'
import { buscarTarefas } from '@/data/tarefas'

export default async function Home() {
  const tarefas = await buscarTarefas()

  return (
    <main>
      <div className="container">
        <header className="header">
          <div className="header-label">Task Manager</div>

          <h1>Lista de Tarefas</h1>

          <p>
            Organize suas tarefas, acompanhe seu progresso e mantenha tudo sob
            controle.
          </p>
        </header>

        <ListaTarefas tarefasIniciais={tarefas} />

        <footer className="footer">
          Next.js 15 · TypeScript · Jest · Testing Library
        </footer>
      </div>
    </main>
  )
}