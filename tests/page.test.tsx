import { render, screen } from '@testing-library/react'
import Home from '@/app/page'
import { buscarTarefas } from '@/data/tarefas'

jest.mock('@/data/tarefas', () => ({
  buscarTarefas: jest.fn(),
}))

describe('Home', () => {
  it('deve carregar as tarefas e renderizá-las', async () => {
    const tarefas = [
      {
        id: 1,
        titulo: 'Estudar Next.js',
      },
      {
        id: 2,
        titulo: 'Aprender Jest',
      },
    ]

    jest.mocked(buscarTarefas).mockResolvedValue(tarefas)

    render(await Home())

    expect(buscarTarefas).toHaveBeenCalledTimes(1)

    expect(
      screen.getByRole('heading', { name: 'Lista de Tarefas' }),
    ).toBeInTheDocument()

    expect(screen.getByText('Estudar Next.js')).toBeInTheDocument()
    expect(screen.getByText('Aprender Jest')).toBeInTheDocument()
    expect(screen.getByText('Total de tarefas: 2')).toBeInTheDocument()
  })
})