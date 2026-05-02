# Simple Todo List

Projeto simples de lista de tarefas para praticar HTML, CSS, JavaScript e um mini backend em Python.

## Funcionalidades

- Adicionar tarefas
- Remover tarefas
- Marcar tarefas como concluidas
- Ver total de tarefas, concluidas e pendentes
- Salvar tarefas no navegador com LocalStorage
- Backend Python simples para praticar rotas e organizacao

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

## Como rodar o backend

Entre na pasta do backend:

```bash
cd backend
```

Rode o servidor:

```bash
python app.py
```

O backend ficara disponivel em:

```text
http://localhost:8000
```

## Rotas do backend

```text
GET /tasks
POST /tasks
PATCH /tasks/{id}
DELETE /tasks/{id}
```

## Exemplo de cadastro

```json
{
  "title": "Estudar JavaScript"
}
```

## Observacao

O frontend usa LocalStorage para ser facil de abrir e testar. O backend Python existe para estudo e mostra como uma API simples poderia controlar as tarefas.
