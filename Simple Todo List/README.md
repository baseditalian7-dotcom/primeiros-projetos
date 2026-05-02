# Simple Todo List

Projeto simples de lista de tarefas para praticar HTML, CSS, JavaScript e um mini backend em Python.

## Funcionalidades

- Adicionar tarefas
- Remover tarefas
- Marcar tarefas como concluidas
- Ver total de tarefas, concluidas e pendentes
- Salvar tarefas no navegador com LocalStorage
- Programa Python simples no terminal com menu, input e if/else

## Estrutura

```text
Simple Todo List/
├── backend/
│   ├── app.py
│   └── task_service.py
├── frontend/
│   ├── index.html
│   ├── css/
│   │   └── style.css
│   └── js/
│       └── app.js
├── .gitignore
└── README.md
```

## Como abrir o frontend

Abra este arquivo no navegador:

```text
frontend/index.html
```

## Como rodar o Python

Entre na pasta do backend:

```bash
cd backend
```

Rode o programa:

```bash
python app.py
```

O programa mostra um menu no terminal para listar, adicionar, marcar e remover tarefas.

## Observacao

O frontend usa LocalStorage para ser facil de abrir e testar. O Python existe para praticar logica basica com listas, menu, `input()`, `if`, `elif` e `else`.
