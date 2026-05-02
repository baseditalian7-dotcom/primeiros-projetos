# Guess the Number

Projeto simples de jogo de adivinhar numero.

## Funcionalidades

- Gerar um numero secreto entre 1 e 100
- Fazer palpites no navegador
- Mostrar se o palpite foi alto ou baixo
- Mostrar tentativas
- Salvar melhor pontuacao no LocalStorage
- Mostrar historico de palpites
- Python no terminal com arquivo `.txt` para salvar recorde

## O que foi adicionado de novo

Comparado com os projetos anteriores, este adiciona:

- Frontend com estrutura de painel de missao e radar
- Indicador visual de proximidade do palpite
- Melhor pontuacao salva no navegador
- Python usando `try/except` para tratar erro de digitacao
- Python salvando melhor pontuacao em arquivo `best_score.txt`
- Python usando lista de palpites durante a partida

## Estrutura

```text
Guess the Number/
├── backend/
│   ├── app.py
│   └── game_logic.py
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

O Python salva o melhor resultado em `best_score.txt`. Esse arquivo e criado automaticamente quando existe um novo recorde.
