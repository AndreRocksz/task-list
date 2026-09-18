import { renderHook } from '@testing-library/react'
import { useContadorDeTarefas } from '@/hooks/useContadorDeTarefas'

describe('useContadorDeTarefas', () => {
  it('deve retornar a quantidade de tarefas', () => {
    const tarefas = [
      { id: 1, titulo: 'Estudar Next.js' },
      { id: 2, titulo: 'Praticar Jest' },
      { id: 3, titulo: 'Criar testes' },
    ]

    const { result } = renderHook(() => useContadorDeTarefas(tarefas))

    expect(result.current).toBe(3)
  })

  it('deve retornar zero quando não houver tarefas', () => {
    const { result } = renderHook(() => useContadorDeTarefas([]))

    expect(result.current).toBe(0)
  })
})