import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import NovaTarefa from '@/components/NovaTarefa'

describe('NovaTarefa', () => {
  it('deve renderizar o campo de entrada e o botão', () => {
    render(<NovaTarefa onAdicionar={jest.fn()} />)

    expect(screen.getByLabelText('Nova tarefa')).toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: 'Adicionar' }),
    ).toBeInTheDocument()
  })

  it('deve mostrar uma mensagem de erro quando o campo estiver vazio', async () => {
    const user = userEvent.setup()

    render(<NovaTarefa onAdicionar={jest.fn()} />)

    await user.click(screen.getByRole('button', { name: 'Adicionar' }))

    expect(screen.getByText('Digite uma tarefa.')).toBeInTheDocument()
  })

  it('deve chamar onAdicionar com o título informado', async () => {
    const user = userEvent.setup()
    const onAdicionar = jest.fn()

    render(<NovaTarefa onAdicionar={onAdicionar} />)

    const input = screen.getByLabelText('Nova tarefa')

    await user.type(input, 'Estudar testes com Jest')
    await user.click(screen.getByRole('button', { name: 'Adicionar' }))

    expect(onAdicionar).toHaveBeenCalledWith('Estudar testes com Jest')
  })

  it('deve limpar o campo após adicionar uma tarefa', async () => {
    const user = userEvent.setup()

    render(<NovaTarefa onAdicionar={jest.fn()} />)

    const input = screen.getByLabelText('Nova tarefa')

    await user.type(input, 'Nova tarefa')
    await user.click(screen.getByRole('button', { name: 'Adicionar' }))

    expect(input).toHaveValue('')
  })
})