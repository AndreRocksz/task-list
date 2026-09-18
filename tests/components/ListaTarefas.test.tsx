import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import ListaTarefas from '@/components/ListaTarefas'

describe('ListaTarefas', () => {
  it('deve adicionar uma nova tarefa à lista', async () => {
    const user = userEvent.setup()

    const tarefasIniciais = [
      {
        id: 1,
        titulo: 'Estudar Next.js',
      },
      {
        id: 2,
        titulo: 'Praticar Jest',
      },
    ]

    render(<ListaTarefas tarefasIniciais={tarefasIniciais} />)

    expect(screen.getByText('Total de tarefas: 2')).toBeInTheDocument()

    const input = screen.getByLabelText('Nova tarefa')
    const botao = screen.getByRole('button', { name: 'Adicionar' })

    await user.type(input, 'Criar testes unitários')
    await user.click(botao)

    expect(
      screen.getByText('Criar testes unitários'),
    ).toBeInTheDocument()

    expect(screen.getByText('Total de tarefas: 3')).toBeInTheDocument()
  })
})