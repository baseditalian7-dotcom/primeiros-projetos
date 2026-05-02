# Stopwatch

Projeto simples de cronometro com start, pause e reset.

## Funcionalidades

- Iniciar cronometro
- Pausar cronometro
- Resetar cronometro
- Registrar voltas no navegador
- Mostrar voltas registradas
- Python no terminal usando o modulo `time`

## O que foi adicionado de novo

Comparado com os projetos anteriores, este adiciona:

- Frontend com visual de aparelho/cronometro circular
- Anel de progresso animado no JavaScript
- Lista de voltas no frontend
- Python usando o modulo `time`
- Python medindo tempo real com `time.time()`
- Python usando `enumerate()` para listar voltas

## Estrutura

```text
Stopwatch/
├── backend/
│   ├── app.py
│   └── stopwatch_logic.py
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

Rode:

```bash
python app.py
```
