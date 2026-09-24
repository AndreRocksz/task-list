# Task List

Aplicação de lista de tarefas desenvolvida com **Next.js 15**, **TypeScript** e **App Router**, como atividade prática sobre testes unitários, integração contínua e deploy automatizado.

O projeto permite visualizar tarefas, adicionar novas tarefas por meio de um formulário controlado e acompanhar a quantidade de tarefas utilizando um hook personalizado.

## Tecnologias utilizadas

- Next.js 15
- TypeScript
- React
- Jest
- Testing Library
- React Testing Library
- ESLint
- Prettier
- GitHub Actions
- Vercel

## Funcionalidades

- Listagem de tarefas
- Adição de novas tarefas
- Validação do formulário
- Contagem de tarefas com hook personalizado
- Testes unitários de componentes
- Testes unitários de hook
- Teste da renderização da página
- Cobertura de testes
- Integração contínua com GitHub Actions
- Deploy automático na Vercel

## Estrutura principal

```text
task-list/
├── app/
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── ContadorTarefas.tsx
│   ├── ListaTarefas.tsx
│   └── NovaTarefa.tsx
├── data/
│   └── tarefas.ts
├── hooks/
│   └── useContadorDeTarefas.ts
├── tests/
│   ├── components/
│   │   ├── ListaTarefas.test.tsx
│   │   └── NovaTarefa.test.tsx
│   ├── hooks/
│   │   └── useContadorDeTarefas.test.ts
│   └── page.test.tsx
├── .github/
│   └── workflows/
│       └── main.yml
├── jest.config.ts
├── jest.setup.ts
├── .prettierrc
├── .prettierignore
└── package.json
