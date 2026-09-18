# Task List

Aplicação de lista de tarefas desenvolvida com **Next.js 15**, **TypeScript** e **App Router**, como atividade prática sobre **testes unitários em Next.js**.

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

## Funcionalidades

- Listagem de tarefas
- Adição de novas tarefas
- Validação do formulário
- Contagem de tarefas com hook personalizado
- Testes unitários de componentes
- Testes unitários de hook
- Teste da renderização da página
- Cobertura de testes

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
├── jest.config.ts
├── jest.setup.ts
├── .prettierrc
├── .prettierignore
└── package.json

```

Instalação

Clone o repositório:

git clone https://github.com/AndreRocksz/task-list.git

Entre na pasta do projeto:

cd task-list

Instale as dependências:

npm install
Executando o projeto

Inicie o servidor de desenvolvimento:

npm run dev

Depois, acesse:

http://localhost:3000
Executando os testes

Para executar os testes unitários:

npm test

O projeto possui testes para:

Componente NovaTarefa
Componente ListaTarefas
Hook useContadorDeTarefas
Renderização da página principal
Cobertura de testes

Os testes são executados com Jest e Testing Library.

A cobertura atual do projeto é de 100% em statements, branches, functions e lines.

Objetivo da atividade

Este projeto foi desenvolvido para praticar os seguintes conceitos:

Server Components
Client Components
Hooks personalizados
Formulários controlados
Jest
Testing Library
Testes unitários em aplicações Next.js
Organização de projetos com App Router